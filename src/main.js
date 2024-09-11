import passport from "passport";
import cookieParser from "cookie-parser";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import session from "express-session";
import express from "express";
import dotenv from "dotenv";
import AppModule from "./app.module.js";
import logger from "../src/core/common/utils/logger.js";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import { appPort, frontendBaseUrl } from "./core/common/constants/env.constants.js";

dotenv.config();

const bootstrap = async () => {
  const app = express();

  // Use cookie parser middleware
  app.use(cookieParser());

  app.use(express.json());

  // Configure session
  app.use(
    session({
      secret: "your_secret_key",
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
      },
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  // Configure CORS
  const corsOptions = {
    origin: frontendBaseUrl || "http://localhost:3000",
    credentials: true,
  };
  app.use(cors(corsOptions));

  // Middleware
  app.use(helmet());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  const port = appPort || 3001;

  const appModule = new AppModule();
  await appModule.configure(app);

  const server = app.listen(port, () => {
    logger.info(`Server is running on port ${port}`);
  });

  // Handle uncaught exceptions
  process.on("uncaughtException", (err) => {
    logger.error(`Uncaught Exception: ${err.message}`);
    process.exit(1);
  });

  // Handle unhandled promise rejections
  process.on("unhandledRejection", (reason, promise) => {
    logger.error(`Unhandled Rejection at: ${promise} reason: ${reason}`);
    process.exit(1);
  });

  // Handle SIGINT signal
  process.on("SIGINT", async () => {
    logger.info("SIGINT received. Gracefully shutting down...");
    server.close(() => {
      logger.info("HTTP server closed.");
      process.exit(0);
    });

    // Close other connections like database, redis, etc. if needed
    await shutdownConnections();
  });
};

/**
 * Shutdown connections gracefully
 */
const shutdownConnections = async () => {
  try {
    // Close database connection
    await AppDataSource.destroy();
    logger.info("Database connection closed.");

    // // Close Redis connection
    // await redisClient.quit();
    // logger.info("Redis connection closed.");

    // Close RabbitMQ connection if exists
    // if (appModule.rabbitMQConnection) {
    //   // await appModule.rabbitMQConnection.close();
    //   // logger.info("RabbitMQ connection closed.");
    // }
  } catch (error) {
    logger.error("Error during shutdown", error);
  }
};

bootstrap();
