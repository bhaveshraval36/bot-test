CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `google_id` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_user_id` int DEFAULT NULL,
  `updated_user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `created_user_id` (`created_user_id`),
  KEY `updated_user_id` (`updated_user_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`created_user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `users_ibfk_2` FOREIGN KEY (`updated_user_id`) REFERENCES `users` (`id`)
) 



CREATE TABLE `sessions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_user_id` int DEFAULT NULL,
  `updated_user_id` int DEFAULT NULL,
  `session_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `created_user_id` (`created_user_id`),
  KEY `updated_user_id` (`updated_user_id`),
  CONSTRAINT `sessions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `sessions_ibfk_2` FOREIGN KEY (`created_user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `sessions_ibfk_3` FOREIGN KEY (`updated_user_id`) REFERENCES `users` (`id`)
) 


CREATE TABLE `reasons_master` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reason` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_user_id` int DEFAULT NULL,
  `updated_user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `created_user_id` (`created_user_id`),
  KEY `updated_user_id` (`updated_user_id`),
  CONSTRAINT `reasons_master_ibfk_1` FOREIGN KEY (`created_user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `reasons_master_ibfk_2` FOREIGN KEY (`updated_user_id`) REFERENCES `users` (`id`)
) 



CREATE TABLE `questions_master` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_user_id` int DEFAULT NULL,
  `updated_user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `created_user_id` (`created_user_id`),
  KEY `updated_user_id` (`updated_user_id`),
  CONSTRAINT `questions_master_ibfk_1` FOREIGN KEY (`created_user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `questions_master_ibfk_2` FOREIGN KEY (`updated_user_id`) REFERENCES `users` (`id`)
) 




CREATE TABLE `questions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_user_id` int DEFAULT NULL,
  `updated_user_id` int DEFAULT NULL,
  `session_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `created_user_id` (`created_user_id`),
  KEY `updated_user_id` (`updated_user_id`),
  KEY `fk_questions_sessions` (`session_id`),
  CONSTRAINT `fk_questions_sessions` FOREIGN KEY (`session_id`) REFERENCES `sessions` (`id`),
  CONSTRAINT `questions_ibfk_2` FOREIGN KEY (`created_user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `questions_ibfk_3` FOREIGN KEY (`updated_user_id`) REFERENCES `users` (`id`)
) 



CREATE TABLE `answers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question_id` int DEFAULT NULL,
  `answer` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_user_id` int DEFAULT NULL,
  `updated_user_id` int DEFAULT NULL,
  `metadata` text,
  `session_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `question_id` (`question_id`),
  KEY `created_user_id` (`created_user_id`),
  KEY `updated_user_id` (`updated_user_id`),
  KEY `fk_answers_sessions` (`session_id`),
  CONSTRAINT `answers_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `answers_ibfk_3` FOREIGN KEY (`updated_user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_answers_sessions` FOREIGN KEY (`session_id`) REFERENCES `sessions` (`id`)
)


CREATE TABLE `feedback` (
  `id` int NOT NULL AUTO_INCREMENT,
  `answer_id` int DEFAULT NULL,
  `is_helpful` tinyint(1) DEFAULT NULL,
  `reason_id` int DEFAULT NULL,
  `custom_reason` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_user_id` int DEFAULT NULL,
  `updated_user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `answer_id` (`answer_id`),
  KEY `reason_id` (`reason_id`),
  KEY `created_user_id` (`created_user_id`),
  KEY `updated_user_id` (`updated_user_id`),
  CONSTRAINT `feedback_ibfk_1` FOREIGN KEY (`answer_id`) REFERENCES `answers` (`id`),
  CONSTRAINT `feedback_ibfk_2` FOREIGN KEY (`reason_id`) REFERENCES `reasons_master` (`id`),
  CONSTRAINT `feedback_ibfk_3` FOREIGN KEY (`created_user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `feedback_ibfk_4` FOREIGN KEY (`updated_user_id`) REFERENCES `users` (`id`)
)

ALTER TABLE users ADD picture varchar(255) NULL;


ALTER TABLE users ADD provider varchar(255) NULL;


INSERT INTO questions_master (question)
	VALUES ('company terms and conditions');

--  Auto-generated SQL script 
INSERT INTO reasons_master (reason)
	VALUES ('bad response ');




CREATE TABLE `overall_feedbacks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `feedback` text,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_user_id` int(11) DEFAULT NULL,
  `updated_user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `created_user_id` (`created_user_id`),
  KEY `updated_user_id` (`updated_user_id`),
  CONSTRAINT `overall_feedbacks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `overall_feedbacks_ibfk_2` FOREIGN KEY (`created_user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `overall_feedbacks_ibfk_3` FOREIGN KEY (`updated_user_id`) REFERENCES `users` (`id`)
) 

ALTER TABLE questions ADD source TEXT NULL;
