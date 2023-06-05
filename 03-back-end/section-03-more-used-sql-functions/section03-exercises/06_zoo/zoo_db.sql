DROP SCHEMA IF EXISTS zoo_db;
CREATE SCHEMA zoo_db;
USE zoo_db;

CREATE TABLE locations(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
) ENGINE=InnoDB;

CREATE TABLE managers(
  id INT PRIMARY KEY,
  name VARCHAR(150) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE animals(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  specie VARCHAR(100) NOT NULL,
  sex VARCHAR(10) NOT NULL,
  age INT NOT NULL,
  location_id INT NOT NULL,
  FOREIGN KEY (location_id) REFERENCES locations(id)
) ENGINE=InnoDB;

CREATE TABLE caregivers(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  manager_id INT NOT NULL,
  FOREIGN KEY (manager_id) REFERENCES managers(id)
) ENGINE=InnoDB;

CREATE TABLE caregiver_animal(
  animal_id INT,
  caregiver_id INT,
  PRIMARY KEY (animal_id, caregiver_id),
  FOREIGN KEY (animal_id) REFERENCES animals(id),
  FOREIGN KEY (caregiver_id) REFERENCES caregivers(id)
) ENGINE=InnoDB;