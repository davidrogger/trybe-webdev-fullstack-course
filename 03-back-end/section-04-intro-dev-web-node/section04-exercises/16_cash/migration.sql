USE cash_db;

CREATE TABLE people(
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  email VARCHAR(60) NOT NULL,
  phone VARCHAR(20),
  UNIQUE(email)
);

CREATE TABLE transactions(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(60) NOT NULL,
  description VARCHAR(100),
  price DECIMAL(10,2) NOT NULL,
  type INT NOT NULL,
  person_id INT NOT NULL,
  CONSTRAINT fk_transaction_person_id FOREIGN KEY (person_id)
  REFERENCES people(id)
);

CREATE TABLE logs(
  id INT AUTO_INCREMENT PRIMARY KEY,
  event VARCHAR(100) NOT NULL,
  timestamp BIGINT NOT NULL,
  person_id INT NOT NULL,
  CONSTRAINT fk_logs_person_id FOREIGN KEY (person_id)
  REFERENCES people(id)
);
