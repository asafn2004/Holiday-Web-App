CREATE DATABASE  IF NOT EXISTS `holidayapp` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `holidayapp`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: holidayapp
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `followers`
--

DROP TABLE IF EXISTS `followers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `followers` (
  `holidayID` int NOT NULL,
  `userID` int NOT NULL,
  KEY `userID_idx` (`userID`),
  KEY `holidayID_idx` (`holidayID`),
  CONSTRAINT `holidayID` FOREIGN KEY (`holidayID`) REFERENCES `holidays` (`holidayID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `userID` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `followers`
--

LOCK TABLES `followers` WRITE;
/*!40000 ALTER TABLE `followers` DISABLE KEYS */;
INSERT INTO `followers` VALUES (8,2),(9,2),(7,2),(3,2),(2,2),(10,2),(11,2),(11,5),(10,5),(2,5),(11,4),(10,4),(11,3);
/*!40000 ALTER TABLE `followers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `holidays`
--

DROP TABLE IF EXISTS `holidays`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `holidays` (
  `holidayID` int NOT NULL AUTO_INCREMENT,
  `destination` varchar(45) NOT NULL,
  `description` varchar(255) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `price` decimal(7,2) NOT NULL,
  `img` varchar(45) NOT NULL,
  PRIMARY KEY (`holidayID`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `holidays`
--

LOCK TABLES `holidays` WRITE;
/*!40000 ALTER TABLE `holidays` DISABLE KEYS */;
INSERT INTO `holidays` VALUES (1,'London','Experience the vibrant city of London and explore its iconic landmarks and rich history.','2023-08-01','2023-08-07',600.00,'london.jpg'),(2,'Sydney','Discover the beauty of Sydney with its stunning harbor, famous Opera House, and breathtaking beaches.','2023-09-15','2023-09-22',900.00,'sydney.jpg'),(3,'Barcelona','Immerse yourself in the vibrant culture of Barcelona, from Gaudí’s architecture to the lively tapas scene.','2023-10-10','2023-10-18',800.00,'barcelona.jpg'),(4,'Santorini','Indulge in the charm of Santorini with its whitewashed buildings, breathtaking sunsets, and azure waters.','2023-11-20','2023-11-28',1100.00,'santorini.jpg'),(5,'Dubai','Experience the luxury and opulence of Dubai with its towering skyscrapers, extravagant shopping, and desert adventures.','2023-12-15','2023-12-22',1500.00,'dubai.jpg'),(6,'Amsterdam','Explore the picturesque canals, historic architecture, and world-class museums of Amsterdam.','2024-01-10','2024-01-17',700.00,'amsterdam.jpg'),(7,'Prague','Step into the fairy-tale charm of Prague with its medieval architecture, cobbled streets, and vibrant culture.','2023-07-17','2023-07-20',5400.00,'prague.jpg'),(8,'Rio de Janeiro','Experience the lively atmosphere of Rio de Janeiro with its stunning beaches, samba music, and Carnival festivities.','2023-07-19','2023-07-27',7500.00,'rio.jpg'),(9,'Venice','Fall in love with the romantic city of Venice, known for its beautiful canals, gondolas, and historic architecture.','2023-06-03','2023-06-09',6000.00,'venice.jpg'),(10,'Cairo','Uncover the ancient wonders of Cairo, from the majestic Pyramids of Giza to the fascinating Egyptian Museum.','2023-07-14','2023-07-19',3800.00,'cairo.jpg'),(11,'Hawaii','Escape to the tropical paradise of Hawaii and relax on its pristine beaches, enjoy water sports, and explore lush landscapes.','2023-07-16','2023-07-20',9900.00,'hawaii.jpg'),(12,'Vienna','Indulge in the classical music and imperial history of Vienna, known for its elegant architecture and rich cultural heritage.','2024-07-01','2024-07-07',5750.00,'vienna.jpg'),(13,'Istanbul','Immerse yourself in the unique blend of East and West in Istanbul, with its stunning mosques, bazaars, and rich history.','2024-08-15','2024-08-22',3500.00,'istanbul.jpg'),(14,'Cape Town','Discover the breathtaking beauty of Cape Town, nestled between mountains and the sea, with its vibrant culture and diverse wildlife.','2024-09-10','2024-09-17',6500.00,'capetown.jpg'),(15,'Machu Picchu','Embark on an unforgettable journey to Machu Picchu, the ancient Inca citadel nestled in the Andes mountains of Peru.','2024-10-20','2024-10-28',9800.00,'machupicchu.jpg'),(16,'Florence','Experience the Renaissance art and architecture of Florence, with its famous Duomo, Uffizi Gallery, and charming streets.','2024-11-15','2024-11-22',5200.00,'florence.jpg'),(17,'Seoul','Immerse yourself in the dynamic city of Seoul, with its futuristic technology, rich history, and vibrant street food scene.','2024-12-10','2024-12-18',8600.00,'seoul.jpg'),(18,'Auckland','Discover the natural beauty of Auckland, with its stunning landscapes, volcanic cones, and beautiful harbors.','2025-01-20','2025-01-28',9000.00,'auckland.jpg'),(19,'Berlin','Explore the vibrant city of Berlin, with its captivating history, modern architecture, and thriving arts and music scene.','2025-02-15','2025-02-22',4500.00,'berlin.jpg'),(20,'Zurich','Experience the elegance and charm of Zurich, with its pristine lake, historic old town, and world-class shopping.','2025-03-10','2025-03-18',4800.00,'zurich.jpg');
/*!40000 ALTER TABLE `holidays` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userID` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `role` varchar(45) NOT NULL DEFAULT 'user',
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Asaf','Nahmias','asafn2004@gmail.com','bbbb','admin'),(2,'Sapir','Segall','segall643@gmail.com','S12345678','user'),(3,'Bat-Hen','Biran','bathen123@gmail.com','44444444','user'),(4,'Hagay','Biran','hagaybiran@gmail.com','55555555','user'),(5,'Hadas','Nahmias','hadas@gmail.com','hhhh','user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-17 11:53:01
