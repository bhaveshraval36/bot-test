import bodyParser from 'body-parser';
import helmet from 'helmet';

const configureMiddleware = (app) => {
  app.use(helmet());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
};

export default configureMiddleware;
