DROP SCHEMA IF EXISTS music_store;
CREATE SCHEMA music_store;

USE music_store;

CREATE TABLE artists (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100)
) ENGINE=InnoDB;

CREATE TABLE songs (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(200)
) ENGINE=InnoDB;

CREATE TABLE categories (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50)
) ENGINE=InnoDB;

CREATE TABLE albuns (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(200) NOT NULL,
  category_id INT NOT NULL,
  song_id INT NOT NULL,
  artist_id INT NOT NULL,
  price DOUBLE,

  FOREIGN KEY (category_id) REFERENCES categories(id),
  FOREIGN KEY (song_id) REFERENCES categories(id),
  FOREIGN KEY (artist_id) REFERENCES artists(id)
) ENGINE=InnoDB;