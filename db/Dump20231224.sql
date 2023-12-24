-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: service_db
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
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `id` binary(16) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `customer_id` binary(16) DEFAULT NULL,
  `provider_id` binary(16) DEFAULT NULL,
  `reset_password_token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_gex1lmaqpg0ir5g1f5eftyaa1` (`username`),
  UNIQUE KEY `UK_q6ux6is14rkik374noo9xwo5` (`customer_id`),
  UNIQUE KEY `UK_qcc7w4gg3xdhrgt1j3km2cepe` (`provider_id`),
  CONSTRAINT `FKavnmwi8ep5x0fwe8ln6c1qmov` FOREIGN KEY (`provider_id`) REFERENCES `provider` (`id`),
  CONSTRAINT `FKnnwpo0lfq4xai1rs6887sx02k` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (_binary '¬ ŒQŒQp\'\0','$2a$10$U753913vZqPBTV4vuYn9HuKo3/lAecOOwgJbKu2we4ip.eYfv9KK2','marketspiteful',_binary '¬ ŒQŒQp$\0\0',NULL,NULL),(_binary '¬ ŒQŒQp\0','$2a$10$Qbg9iATQINiZyEPMI/egGug2CTN2e6Hsf2Ftal5aiZeWchOrq.LE2','loyaltycoercive',_binary '¬ ŒQŒQp\0',NULL,NULL),(_binary '¬ ŒQŒQpŸ\0	','$2a$10$qMeCaIG.DMpw96FTfFE8buFFd5Y4TMGC8aItSie491AkwVDax6DhG','suitperemptory',_binary '¬ ŒQŒQpŸ\0',NULL,NULL),(_binary '¬ ŒQŒQpG\0\r','$2a$10$3.W7.ZPEwO3sIru1YMn0Ruh/5yvoONcHZ7LtJ89k4DOod9z0d3Ijy','cubeinfallible',_binary '¬ ŒQŒQpG\0',NULL,NULL),(_binary '¬ ŒQŒQp\Ü\0','$2a$10$xfkD5F3o7Ih3Z8qSKmwq.uiR0AOVZxJ/tW54XcIpiM8l5HebMg78K','physicistabsorbing',_binary '¬ ŒQŒQp\Ü\0',NULL,NULL),(_binary '¬ ŒQŒQp\ZI\0','$2a$10$h0JQCAqXHBwSKlFM/PoXTOTHrJ/2qcDOGCPST.21RqIrxLuzfMYWu','authorizationsuperhuman',_binary '¬ ŒQŒQp\ZI\0',NULL,NULL),(_binary '¬ ŒQŒQp\à\0','$2a$10$5SA/KP6Oom3mHz.jw/LdAuHO7rQm8Y7P.ooLPrvnolmNBfwp7ltqu','transmitterhigh-fiber',_binary '¬ ŒQŒQp\à\0',NULL,NULL),(_binary '¬ ŒQŒQp \0','$2a$10$/GEUggghay12ZhhwDeVUH.degLML6yfq5g2.aldy/.51ql4LRd8BG','dynastythrough',_binary '¬ ŒQŒQp \0',NULL,NULL),(_binary '¬ ŒQŒQp\"ö\0!','$2a$10$llzoKd1Wb7yENLNBiNn53ONeEfj8t3Z5PHqsfCbq0ermn/yGp5pH6','bedspeeding',_binary '¬ ŒQŒQp\"ö\0 ',NULL,NULL),(_binary '¬ ŒQŒQp%µ\0%','$2a$10$rUDbUvO4AI3Y6U.68tzHX.oshAQvk11VF9P347efCrC8cz9OVoAjq','magiccentrifugal',_binary '¬ ŒQŒQp%µ\0$',NULL,NULL),(_binary '¬ ŒQŒQp(#\0)','$2a$10$0alQ7jU6EsJl93nwfAqr5e0w/L.YxBSbjRrYKk1ezAIBuZ12JiLvG','stewardundefined',_binary '¬ ŒQŒQp(#\0(',NULL,NULL),(_binary '¬ ŒQŒQp*«\0-','$2a$10$gATJqOuoMhid65XH50T.w.ousydS4llX.NwDnIBGXxn3B8ORprhOG','hoseequestrian',_binary '¬ ŒQŒQp*«\0,',NULL,NULL),(_binary '¬ ŒQŒQp-e\01','$2a$10$RutFCEUDXBUfgD..os2qGOm8vWcF5d7UjTTBWQi/PkRcdIrp.waOq','shadeuntouchable',_binary '¬ ŒQŒQp-e\00',NULL,NULL),(_binary '¬ ŒQŒQp0\05','$2a$10$SBu46I/i5iwAdepgKqyrYeg9BCyi.zf171PdUYhLZrQG.kjXi3Z4W','conclusionshuddering',_binary '¬ ŒQŒQp0\04',NULL,NULL),(_binary '¬ ŒQŒQp2\09','$2a$10$zC7.DDHFm/498Asl4IKUA..dlTIpYh1lwKRY0QOy7XFfiOkK4H1sK','exchangeannounced',_binary '¬ ŒQŒQp2\08',NULL,NULL),(_binary '¬ ŒQŒQp5J\0=','$2a$10$rR1Q/BeJW8qGoCRfqI9IIOQ2lnP4apyULw9Ufbe7AIWqjxH3aNrmG','foliagelabored',_binary '¬ ŒQŒQp5J\0<',NULL,NULL),(_binary '¬ ŒQŒQp7ğ\0A','$2a$10$smBcCyK7KB/2hwyPtZG8YOrjOq5QKJvqvs8sm4ZnG6T6qzS6dwuYG','impositionconfined',_binary '¬ ŒQŒQp7ğ\0@',NULL,NULL),(_binary '¬ ŒQŒQp;N\0E','$2a$10$crbsaA5I79d/rNw3PjUnKuDc3nw9ihG0OslcxuFeuF4gqRBb5M4CO','mandateheartening',_binary '¬ ŒQŒQp;N\0D',NULL,NULL),(_binary '¬ ŒQŒQp>\0I','$2a$10$fHjjZjbz14ko7E/oFvDYxu/0DkWahxx8inpA2iOwNRBXvCN56HXjS','beastnamed',_binary '¬ ŒQŒQp>\0H',NULL,NULL),(_binary '¬ ŒQŒQp@”\0M','$2a$10$Y9eNpEvoe7msrDjeN.sT1.RydA9cpinIy2bPF.Z.FyDxNsn/T6GW6','rationalitymirrored',_binary '¬ ŒQŒQp@”\0L',NULL,NULL),(_binary '¬ ŒQøŒQr\Z\0','$2a$10$mcyX5Rb.J9bWKWTYPBnYVezWSaJ0Kcv9R5Nv8NT59/3svxqb2IU9a','justificationacquired',NULL,_binary '¬ ŒQøŒQr\0\0',NULL),(_binary '¬ ŒQøŒQr\0','$2a$10$o3wm6BQhPIfjoQFKpFQnLuFtJNC4OEsoDqFE6jVBOtt6dARD2dfci','breedself-satisfied',NULL,_binary '¬ ŒQøŒQr\0',NULL),(_binary '¬ ŒQøŒQr\ê\0	','$2a$10$dqmnBY/IOAgY9t.zIMYQsOcPo9twla5c2v0eGFDH7YAIlmE68vqTi','effortwrought-iron',NULL,_binary '¬ ŒQøŒQr\ê\0',NULL),(_binary '¬ ŒQøŒQr\n€\0\r','$2a$10$P8fva0ZuSoc8LKEQqB0fMOk4dvMxHHBrf4dYFygURFMClB6ZdaOfu','bitfatuous',NULL,_binary '¬ ŒQøŒQr\n€\0',NULL),(_binary '¬ ŒQøŒQr\r8\0','$2a$10$vDy0A9v6y11aVq90gGgb2.B6fuAkbIEma9A0R1uJdS1CFdpDLIe5u','sausagepitiless',NULL,_binary '¬ ŒQøŒQr\r8\0',NULL),(_binary '¬ ŒQøŒQr•\0','$2a$10$KJqMvk1PCvHELGQv3UdkueBilJrvIbKKPs1zV3qtHive/wIW2bmkO','descenttwo-year-old',NULL,_binary '¬ ŒQøŒQr•\0',NULL),(_binary '¬ ŒQøŒQr\r\0','$2a$10$88ts1KU4MeiXLhfXhAx0k.x.hs2ZJV9KF4LXEmXXHNL1MOzy4VazW','chambercaged',NULL,_binary '¬ ŒQøŒQr\r\0',NULL),(_binary '¬ ŒQøŒQr\Ã\0','$2a$10$q55Yujq3KouU5oSd2HNv6uajzoymMXtnUKFcACEoiBNtSFzAQ2H/K','kitchenbarred',NULL,_binary '¬ ŒQøŒQr\Ã\0',NULL),(_binary '¬ ŒQøŒQr<\0!','$2a$10$.j9F.bz7svkZnnxn0CS9m.KWO7f19cDmi1Y2dO6C2U4qRldvtAcpW','bankruptcyfreckled',NULL,_binary '¬ ŒQøŒQr<\0 ',NULL),(_binary '¬ ŒQøŒQr\È\0%','$2a$10$6oUpU1GoWhEpikSGKeQADe/QinBf3q/fVDyYTToZdePvsf61MhzRa','gravewell-organized',NULL,_binary '¬ ŒQøŒQr\È\0$',NULL),(_binary '¬ ŒQøŒQra\0)','$2a$10$OorsSajxkaDHRRSFmr8pa.ZcYcS.ZA3vRudjFTDLEm8Y5zvqstmeK','retreatyielding',NULL,_binary '¬ ŒQøŒQra\0(',NULL),(_binary '¬ ŒQøŒQr\ê\0-','$2a$10$0GUa/rPra1KTmJBYJSnBNO/H8oHwhqj4g9xBKN1DxdwXY./iXipEC','laceindelible',NULL,_binary '¬ ŒQøŒQr\ê\0,',NULL),(_binary '¬ ŒQøŒQr!”\01','$2a$10$pI3poQgOmTIf3MtwPrxF9eXZhhz4S2k5MPwouqPvbzF5AFZUN37rK','liquidmachine-gun',NULL,_binary '¬ ŒQøŒQr!”\00',NULL),(_binary '¬ ŒQøŒQr$-\05','$2a$10$ElEzadUU9K46z9ehUtxkBu8AUj06jrbtqQO1AYaM1B1qRu.p5mozS','acquisitionperfumed',NULL,_binary '¬ ŒQøŒQr$-\04',NULL),(_binary '¬ ŒQøŒQr&¬\09','$2a$10$0iFauoQZe/JkcqSvZsqCY.A6.8m3qVZ.wlSL9WiJdGwsZ0QQudaFm','migrationdefensible',NULL,_binary '¬ ŒQøŒQr&¬\08',NULL),(_binary '¬ ŒQøŒQr)j\0=','$2a$10$GMy.hbfK71ZSYNzRqllgbOFU5975QhABuXtvYzIWaY.SNyFQ4jnne','announcementlandless',NULL,_binary '¬ ŒQøŒQr)j\0<',NULL),(_binary '¬ ŒQøŒQr+\Ë\0A','$2a$10$FAtpfsyaVaB4XgqrXwfIN.m5cXua0ZtQEfWH7sujlZ9m4vo0PZ7cq','longingdarting',NULL,_binary '¬ ŒQøŒQr+\Ë\0@',NULL),(_binary '¬ ŒQøŒQr.b\0E','$2a$10$wz3E9rcnOoXBWLDQq0ciK.W4CpV6Ob/M9DkMM6ogYBh8Tf8xmGdp.','ingenuitycyclical',NULL,_binary '¬ ŒQøŒQr.b\0D',NULL),(_binary '¬ ŒQøŒQr1\0I','$2a$10$qufj02XbleDNmNv4J50Cse7JYWwNhagse3Cosms1pdmYZzzNDFQt2','openermarshy',NULL,_binary '¬ ŒQøŒQr1\0H',NULL),(_binary '¬ ŒQøŒQr3£\0M','$2a$10$JCwCOIyW3k7vdlgmty/sA.rIZCgLtmboD9T337J/r7tfjRbKkoDBO','townshipcancerous',NULL,_binary '¬ ŒQøŒQr3£\0L',NULL),(_binary '¬ ŒQŒŒQs\Ø\Ì\0','$2a$10$Waa6jlTQF6iQxrGYvp2SouivCgPSLQvdV0c14roLR/StZMtko9L5S','minhloc',NULL,_binary '¬ ŒQŒŒQs\Ø\Æ\0\0','66ce4c5e23804f6d961b53672336da2b'),(_binary '¬ ŒQÎŒQh\×P\0\0','$2a$10$wvjkJqh6JrIHPiQUyVpk8OZwu0aQQOz3yFWoC1R.MycE4SewQIQM.','admin',NULL,NULL,NULL),(_binary '¬ ŒRÛŒRœ²\ë\0','$2a$10$rSaSbv58VKHUJBGaXyJ5N.PQjh3PuHYvD/VRfPC7YOW/y88RDK52C','huutien120802',_binary '¬ ŒRÛŒRœ²\æ\0\0',NULL,'2554297d3f914f7f9062825ab9889ecc|2023-12-24T21:54:25.423304300'),(_binary 'À¨ŒkŒkI\Ê\0','$2a$10$6f5fM9lVdfyt5nWx4/nWUOog0WlKfChYZYtTj9VnPir4.Go2BqfSG','huutien',_binary 'À¨ŒkŒkI\É\0',NULL,NULL);
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_role`
--

DROP TABLE IF EXISTS `account_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_role` (
  `account_id` binary(16) NOT NULL,
  `role_id` binary(16) NOT NULL,
  PRIMARY KEY (`account_id`,`role_id`),
  KEY `FKrs2s3m3039h0xt8d5yhwbuyam` (`role_id`),
  CONSTRAINT `FK1f8y4iy71kb1arff79s71j0dh` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`),
  CONSTRAINT `FKrs2s3m3039h0xt8d5yhwbuyam` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_role`
--

LOCK TABLES `account_role` WRITE;
/*!40000 ALTER TABLE `account_role` DISABLE KEYS */;
INSERT INTO `account_role` VALUES (_binary '¬ ŒQÎŒQh\×P\0\0',_binary '¬ Œ3Œ3¥s\0\0'),(_binary '¬ ŒQŒQp\'\0',_binary '¬ Œ3Œ3¥˜\0'),(_binary '¬ ŒQŒQp\0',_binary '¬ Œ3Œ3¥˜\0'),(_binary '¬ ŒQŒQpŸ\0	',_binary '¬ Œ3Œ3¥˜\0'),(_binary '¬ ŒQŒQpG\0\r',_binary '¬ Œ3Œ3¥˜\0'),(_binary '¬ ŒQŒQp\Ü\0',_binary '¬ Œ3Œ3¥˜\0'),(_binary '¬ ŒQŒQp\ZI\0',_binary '¬ Œ3Œ3¥˜\0'),(_binary '¬ ŒQŒQp\à\0',_binary '¬ Œ3Œ3¥˜\0'),(_binary '¬ ŒQŒQp \0',_binary '¬ Œ3Œ3¥˜\0'),(_binary '¬ ŒQŒQp\"ö\0!',_binary '¬ Œ3Œ3¥˜\0'),(_binary '¬ ŒQŒQp%µ\0%',_binary '¬ Œ3Œ3¥˜\0'),(_binary '¬ ŒQŒQp(#\0)',_binary '¬ Œ3Œ3¥˜\0'),(_binary '¬ ŒQŒQp*«\0-',_binary '¬ Œ3Œ3¥˜\0'),(_binary '¬ ŒQŒQp-e\01',_binary '¬ Œ3Œ3¥˜\0'),(_binary '¬ ŒQŒQp0\05',_binary '¬ Œ3Œ3¥˜\0'),(_binary '¬ ŒQŒQp2\09',_binary '¬ Œ3Œ3¥˜\0'),(_binary '¬ ŒQŒQp5J\0=',_binary '¬ Œ3Œ3¥˜\0'),(_binary '¬ ŒQŒQp7ğ\0A',_binary '¬ Œ3Œ3¥˜\0'),(_binary '¬ ŒQŒQp;N\0E',_binary '¬ Œ3Œ3¥˜\0'),(_binary '¬ ŒQŒQp>\0I',_binary '¬ Œ3Œ3¥˜\0'),(_binary '¬ ŒQŒQp@”\0M',_binary '¬ Œ3Œ3¥˜\0'),(_binary '¬ ŒRÛŒRœ²\ë\0',_binary '¬ Œ3Œ3¥˜\0'),(_binary '¬ ŒQøŒQr\Z\0',_binary '¬ Œ3Œ3¥\0'),(_binary '¬ ŒQøŒQr\0',_binary '¬ Œ3Œ3¥\0'),(_binary '¬ ŒQøŒQr\ê\0	',_binary '¬ Œ3Œ3¥\0'),(_binary '¬ ŒQøŒQr\n€\0\r',_binary '¬ Œ3Œ3¥\0'),(_binary '¬ ŒQøŒQr\r8\0',_binary '¬ Œ3Œ3¥\0'),(_binary '¬ ŒQøŒQr•\0',_binary '¬ Œ3Œ3¥\0'),(_binary '¬ ŒQøŒQr\r\0',_binary '¬ Œ3Œ3¥\0'),(_binary '¬ ŒQøŒQr\Ã\0',_binary '¬ Œ3Œ3¥\0'),(_binary '¬ ŒQøŒQr<\0!',_binary '¬ Œ3Œ3¥\0'),(_binary '¬ ŒQøŒQr\È\0%',_binary '¬ Œ3Œ3¥\0'),(_binary '¬ ŒQøŒQra\0)',_binary '¬ Œ3Œ3¥\0'),(_binary '¬ ŒQøŒQr\ê\0-',_binary '¬ Œ3Œ3¥\0'),(_binary '¬ ŒQøŒQr!”\01',_binary '¬ Œ3Œ3¥\0'),(_binary '¬ ŒQøŒQr$-\05',_binary '¬ Œ3Œ3¥\0'),(_binary '¬ ŒQøŒQr&¬\09',_binary '¬ Œ3Œ3¥\0'),(_binary '¬ ŒQøŒQr)j\0=',_binary '¬ Œ3Œ3¥\0'),(_binary '¬ ŒQøŒQr+\Ë\0A',_binary '¬ Œ3Œ3¥\0'),(_binary '¬ ŒQøŒQr.b\0E',_binary '¬ Œ3Œ3¥\0'),(_binary '¬ ŒQøŒQr1\0I',_binary '¬ Œ3Œ3¥\0'),(_binary '¬ ŒQøŒQr3£\0M',_binary '¬ Œ3Œ3¥\0'),(_binary '¬ ŒQŒŒQs\Ø\Ì\0',_binary '¬ Œ3Œ3¥\0');
/*!40000 ALTER TABLE `account_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `id` binary(16) NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `ward` varchar(255) DEFAULT NULL,
  `customer_id` binary(16) DEFAULT NULL,
  `provider_id` binary(16) DEFAULT NULL,
  `coordinates_id` binary(16) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_t53ge4jlr6f4oykuqateowb3r` (`coordinates_id`),
  KEY `FK93c3js0e22ll1xlu21nvrhqgg` (`customer_id`),
  KEY `FKo8alsjm9icgon4em4us88p3nq` (`provider_id`),
  CONSTRAINT `FK6jk1v3eoi3wqwvcpsqlsie3uv` FOREIGN KEY (`coordinates_id`) REFERENCES `coordinates` (`id`),
  CONSTRAINT `FK93c3js0e22ll1xlu21nvrhqgg` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`),
  CONSTRAINT `FKo8alsjm9icgon4em4us88p3nq` FOREIGN KEY (`provider_id`) REFERENCES `provider` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (_binary '¬ ŒQŒQp«\0','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','TÃ¢n BÃ¬nh','859','Nháº¥t Chi Mai','PhÆ°á»ng 13',_binary '¬ ŒQŒQp$\0\0',NULL,_binary '¬ ŒQŒQp«\0'),(_binary '¬ ŒQŒQp+\0','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','TÃ¢n BÃ¬nh','86','LÃ½ ThÆ°á»ng Kiá»‡t','PhÆ°á»ng 6',_binary '¬ ŒQŒQp\0',NULL,_binary '¬ ŒQŒQp+\0'),(_binary '¬ ŒQŒQp\Í\0\n','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','Quáº­n 6','539','ÄÆ°á»ng Tráº§n VÄƒn Kiá»ƒu','PhÆ°á»ng 10',_binary '¬ ŒQŒQpŸ\0',NULL,_binary '¬ ŒQŒQp\Í\0'),(_binary '¬ ŒQŒQpb\0','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','BÃ¬nh TÃ¢n','872','Kinh Ä. VÆ°Æ¡ng','An Láº¡c',_binary '¬ ŒQŒQpG\0',NULL,_binary '¬ ŒQŒQpc\0'),(_binary '¬ ŒQŒQp\İ\0','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','Quáº­n 8','731','ÄÆ°á»ng Trá»‹nh Quang Nghá»‹','PhÆ°á»ng 7',_binary '¬ ŒQŒQp\Ü\0',NULL,_binary '¬ ŒQŒQp\İ\0'),(_binary '¬ ŒQŒQp^\0','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','TÃ¢n BÃ¬nh','112','Nháº¥t Chi Mai','PhÆ°á»ng 13',_binary '¬ ŒQŒQp\ZI\0',NULL,_binary '¬ ŒQŒQp^\0'),(_binary '¬ ŒQŒQp÷\0\Z','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','TÃ¢n BÃ¬nh','298','BÃ u CÃ¡t','PhÆ°á»ng 14',_binary '¬ ŒQŒQp\à\0',NULL,_binary '¬ ŒQŒQp÷\0'),(_binary '¬ ŒQŒQp\"”\0','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','BÃ¬nh TÃ¢n','172','Kinh Ä. VÆ°Æ¡ng','An Láº¡c',_binary '¬ ŒQŒQp \0',NULL,_binary '¬ ŒQŒQp\"”\0'),(_binary '¬ ŒQŒQp%-\0\"','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','Quáº­n 6','832','Ä. Gia PhÃº','PhÆ°á»ng 3',_binary '¬ ŒQŒQp\"ö\0 ',NULL,_binary '¬ ŒQŒQp%-\0#'),(_binary '¬ ŒQŒQp\'¢\0&','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','BÃ¬nh ChÃ¡nh','191','ÄÆ°á»ng XÆ°Æ¡ng CÃ¡ 1','2',_binary '¬ ŒQŒQp%µ\0$',NULL,_binary '¬ ŒQŒQp\'¢\0\''),(_binary '¬ ŒQŒQp*#\0*','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','BÃ¬nh TÃ¢n','4','Kinh Ä. VÆ°Æ¡ng','An Láº¡c',_binary '¬ ŒQŒQp(#\0(',NULL,_binary '¬ ŒQŒQp*#\0+'),(_binary '¬ ŒQŒQp,\æ\0.','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','TÃ¢n PhÃº','160','TÃ¢n Ká»³ TÃ¢n QuÃ½','SÆ¡n Ká»³',_binary '¬ ŒQŒQp*«\0,',NULL,_binary '¬ ŒQŒQp,\æ\0/'),(_binary '¬ ŒQŒQp/‹\02','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','Quáº­n 11','215','Minh Phá»¥ng','PhÆ°á»ng 9',_binary '¬ ŒQŒQp-e\00',NULL,_binary '¬ ŒQŒQp/‹\03'),(_binary '¬ ŒQŒQp2(\06','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','Quáº­n 11','136','Minh Phá»¥ng','PhÆ°á»ng 9',_binary '¬ ŒQŒQp0\04',NULL,_binary '¬ ŒQŒQp2(\07'),(_binary '¬ ŒQŒQp4¾\0:','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','Quáº­n 6','577','Ä. Gia PhÃº','PhÆ°á»ng 3',_binary '¬ ŒQŒQp2\08',NULL,_binary '¬ ŒQŒQp4¾\0;'),(_binary '¬ ŒQŒQp7h\0>','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','TÃ¢n PhÃº','89','TÃ¢n Ká»³ TÃ¢n QuÃ½','SÆ¡n Ká»³',_binary '¬ ŒQŒQp5J\0<',NULL,_binary '¬ ŒQŒQp7h\0?'),(_binary '¬ ŒQŒQp:\Å\0B','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','Quáº­n 10','89','Ä. SÆ° Váº¡n Háº¡nh','PhÆ°á»ng 10',_binary '¬ ŒQŒQp7ğ\0@',NULL,_binary '¬ ŒQŒQp:\Å\0C'),(_binary '¬ ŒQŒQp=\0F','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','Quáº­n 6','578','ÄÆ°á»ng Tráº§n VÄƒn Kiá»ƒu','PhÆ°á»ng 10',_binary '¬ ŒQŒQp;N\0D',NULL,_binary '¬ ŒQŒQp=\0G'),(_binary '¬ ŒQŒQp@\0J','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','Quáº­n 6','799','ÄÆ°á»ng Tráº§n VÄƒn Kiá»ƒu','PhÆ°á»ng 10',_binary '¬ ŒQŒQp>\0H',NULL,_binary '¬ ŒQŒQp@\0K'),(_binary '¬ ŒQŒQpB™\0N','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','TÃ¢n BÃ¬nh','166','Nháº¥t Chi Mai','PhÆ°á»ng 13',_binary '¬ ŒQŒQp@”\0L',NULL,_binary '¬ ŒQŒQpB™\0O'),(_binary '¬ ŒQøŒQr­\0','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','TÃ¢n BÃ¬nh','734','LÃ½ ThÆ°á»ng Kiá»‡t','PhÆ°á»ng 6',NULL,_binary '¬ ŒQøŒQr\0\0',_binary '¬ ŒQøŒQr­\0'),(_binary '¬ ŒQøŒQrm\0','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','BÃ¬nh ChÃ¡nh','981','CÃ¢y BÃ ng','TÃ¢n KiÃªn',NULL,_binary '¬ ŒQøŒQr\0',_binary '¬ ŒQøŒQrm\0'),(_binary '¬ ŒQøŒQr\n\0\n','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','BÃ¬nh Tháº¡nh','780','Chu VÄƒn An','PhÆ°á»ng 12',NULL,_binary '¬ ŒQøŒQr\ê\0',_binary '¬ ŒQøŒQr\n\0'),(_binary '¬ ŒQøŒQrÀ\0','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','BÃ¬nh Tháº¡nh','603','Chu VÄƒn An','PhÆ°á»ng 12',NULL,_binary '¬ ŒQøŒQr\n€\0',_binary '¬ ŒQøŒQrÁ\0'),(_binary '¬ ŒQøŒQr\0','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','BÃ¬nh TÃ¢n','275','Kinh Ä. VÆ°Æ¡ng','An Láº¡c',NULL,_binary '¬ ŒQøŒQr\r8\0',_binary '¬ ŒQøŒQr\0'),(_binary '¬ ŒQøŒQr\0','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','BÃ¬nh TÃ¢n','806','Kinh Ä. VÆ°Æ¡ng','An Láº¡c',NULL,_binary '¬ ŒQøŒQr•\0',_binary '¬ ŒQøŒQr\0'),(_binary '¬ ŒQøŒQr9\0\Z','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','TÃ¢n BÃ¬nh','269','LÃ½ ThÆ°á»ng Kiá»‡t','PhÆ°á»ng 6',NULL,_binary '¬ ŒQøŒQr\r\0',_binary '¬ ŒQøŒQr9\0'),(_binary '¬ ŒQøŒQr\Ä\0','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','TÃ¢n PhÃº','845','Hoa Báº±ng','TÃ¢n SÆ¡n NhÃ¬',NULL,_binary '¬ ŒQøŒQr\Ã\0',_binary '¬ ŒQøŒQr\Å\0'),(_binary '¬ ŒQøŒQrf\0\"','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','Quáº­n 8','4','ÄÆ°á»ng Trá»‹nh Quang Nghá»‹','PhÆ°á»ng 7',NULL,_binary '¬ ŒQøŒQr<\0 ',_binary '¬ ŒQøŒQrf\0#'),(_binary '¬ ŒQøŒQr\ç\0&','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','BÃ¬nh Tháº¡nh','300','Chu VÄƒn An','PhÆ°á»ng 12',NULL,_binary '¬ ŒQøŒQr\È\0$',_binary '¬ ŒQøŒQr\ç\0\''),(_binary '¬ ŒQøŒQrp\0*','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','Quáº­n 8','497','ÄÆ°á»ng Trá»‹nh Quang Nghá»‹','PhÆ°á»ng 7',NULL,_binary '¬ ŒQøŒQra\0(',_binary '¬ ŒQøŒQrp\0+'),(_binary '¬ ŒQøŒQr!%\0.','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','TÃ¢n PhÃº','140','TÃ¢n Ká»³ TÃ¢n QuÃ½','SÆ¡n Ká»³',NULL,_binary '¬ ŒQøŒQr\ê\0,',_binary '¬ ŒQøŒQr!%\0/'),(_binary '¬ ŒQøŒQr#ª\02','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','TÃ¢n PhÃº','806','Hoa Báº±ng','TÃ¢n SÆ¡n NhÃ¬',NULL,_binary '¬ ŒQøŒQr!”\00',_binary '¬ ŒQøŒQr#ª\03'),(_binary '¬ ŒQøŒQr&/\06','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','TÃ¢n PhÃº','42','Hoa Báº±ng','TÃ¢n SÆ¡n NhÃ¬',NULL,_binary '¬ ŒQøŒQr$-\04',_binary '¬ ŒQøŒQr&/\07'),(_binary '¬ ŒQøŒQr(\ï\0:','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','BÃ¬nh Tháº¡nh','669','Chu VÄƒn An','PhÆ°á»ng 12',NULL,_binary '¬ ŒQøŒQr&¬\08',_binary '¬ ŒQøŒQr(\ï\0;'),(_binary '¬ ŒQøŒQr+O\0>','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','BÃ¬nh TÃ¢n','955','Kinh Ä. VÆ°Æ¡ng','An Láº¡c',NULL,_binary '¬ ŒQøŒQr)j\0<',_binary '¬ ŒQøŒQr+O\0?'),(_binary '¬ ŒQøŒQr-\Ù\0B','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','Quáº­n 6','933','ÄÆ°á»ng Tráº§n VÄƒn Kiá»ƒu','PhÆ°á»ng 10',NULL,_binary '¬ ŒQøŒQr+\Ë\0@',_binary '¬ ŒQøŒQr-\Ù\0C'),(_binary '¬ ŒQøŒQr0˜\0F','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','TÃ¢n BÃ¬nh','654','LÃ½ ThÆ°á»ng Kiá»‡t','PhÆ°á»ng 6',NULL,_binary '¬ ŒQøŒQr.b\0D',_binary '¬ ŒQøŒQr0˜\0G'),(_binary '¬ ŒQøŒQr3)\0J','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','Quáº­n 11','441','Minh Phá»¥ng','PhÆ°á»ng 9',NULL,_binary '¬ ŒQøŒQr1\0H',_binary '¬ ŒQøŒQr3)\0K'),(_binary '¬ ŒQøŒQr5\Ò\0N','ThÃ nh phá»‘ Há»“ ChÃ­ Minh','Quáº­n 8','49','ÄÆ°á»ng Trá»‹nh Quang Nghá»‹','PhÆ°á»ng 7',NULL,_binary '¬ ŒQøŒQr3£\0L',_binary '¬ ŒQøŒQr5\Ò\0O'),(_binary '¬ ŒX·ŒXÀ\0','Ho Chi Minh','Thu Duc','2','Vo Van Ngan','Binh Tho',NULL,_binary '¬ ŒQŒŒQs\Ø\Æ\0\0',_binary '¬ ŒX·ŒXÁ\0'),(_binary 'À¨ŒêŒdW\0\0','Ho Chi Minh','Thu Duc','78/2A','Cay Keo','Tam Phu',_binary '¬ ŒRÛŒRœ²\æ\0\0',NULL,_binary 'À¨ŒêŒdY\0');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `id` binary(16) NOT NULL,
  `date` date DEFAULT NULL,
  `reason_cancel` varchar(255) DEFAULT NULL,
  `status` enum('ACCEPTED','BOOKED','CANCEL_BY_CUSTOMER','CANCEL_BY_PROVIDER','COMING','DOING','DONE') DEFAULT NULL,
  `time` time(6) DEFAULT NULL,
  `total_price` bigint NOT NULL,
  `customer_id` binary(16) DEFAULT NULL,
  `payment_id` binary(16) DEFAULT NULL,
  `provider_id` binary(16) DEFAULT NULL,
  `service_id` binary(16) DEFAULT NULL,
  `arrive_time` time(6) DEFAULT NULL,
  `moving_fee` bigint NOT NULL,
  `sub_total` bigint NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_xcv4bjb631pysj91ybp40vpo` (`payment_id`),
  KEY `FKlnnelfsha11xmo2ndjq66fvro` (`customer_id`),
  KEY `FKnijo6hobccis4ybsd6bfvv1tv` (`provider_id`),
  KEY `FKcebnlefwi9r13txu8btclnmsu` (`service_id`),
  CONSTRAINT `FK70t92vvx289ayx2hq2v4hdcjl` FOREIGN KEY (`payment_id`) REFERENCES `payment` (`id`),
  CONSTRAINT `FKcebnlefwi9r13txu8btclnmsu` FOREIGN KEY (`service_id`) REFERENCES `service` (`id`),
  CONSTRAINT `FKlnnelfsha11xmo2ndjq66fvro` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`),
  CONSTRAINT `FKnijo6hobccis4ybsd6bfvv1tv` FOREIGN KEY (`provider_id`) REFERENCES `provider` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (_binary '¬ ŒbŒbh­Š\0	','2023-12-14','busy','CANCEL_BY_CUSTOMER','07:50:34.000000',35000,_binary '¬ ŒRÛŒRœ²\æ\0\0',_binary '¬ ŒbŒbh­Š\0\n',_binary '¬ ŒQŒŒQs\Ø\Æ\0\0',_binary '¬ ŒbŒbfñ\0',NULL,0,0,NULL,NULL),(_binary '¬ Œ}ÅŒ}Lo‡\0\0','2023-12-18',NULL,'DONE','14:19:35.000000',10000,_binary '¬ ŒRÛŒRœ²\æ\0\0',_binary '¬ Œ}ÅŒ}Lo\0',_binary '¬ ŒQŒŒQs\Ø\Æ\0\0',_binary '¬ ŒbŒbfñ\0',NULL,0,0,NULL,NULL),(_binary '¬ ŒWŒûz\Z\0\0','2023-12-19',NULL,'DONE','09:50:36.406000',46000,_binary '¬ ŒRÛŒRœ²\æ\0\0',_binary '¬ ŒWŒûz\0',_binary '¬ ŒQøŒQr\ê\0',_binary '¬ Œ{\Z~Œ|\rx\é\0','10:01:17.164000',6000,0,NULL,NULL),(_binary 'À¨Œ—qŒ—Ÿ\0\0','2023-12-23',NULL,'BOOKED','21:09:36.641000',22000,_binary '¬ ŒRÛŒRœ²\æ\0\0',_binary 'À¨Œ—qŒ—¢\0',_binary '¬ ŒQŒŒQs\Ø\Æ\0\0',_binary '¬ ŒbŒbfñ\0',NULL,12000,10000,'78/2A, Cay Keo, Tam Phu, Thu Duc, Ho Chi Minh, Viá»‡t Nam',NULL),(_binary 'À¨Œ›ûŒ›Nˆ‹\0','2023-12-24',NULL,'BOOKED','17:11:29.372000',22000,_binary '¬ ŒRÛŒRœ²\æ\0\0',_binary 'À¨Œ›ûŒ›Nˆ‹\0',_binary '¬ ŒQŒŒQs\Ø\Æ\0\0',_binary '¬ ŒbŒbfñ\0',NULL,12000,10000,'78/2A Cay Keo, Tam Phu, Thu Duc, Ho Chi Minh','');
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking_item`
--

DROP TABLE IF EXISTS `booking_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking_item` (
  `id` binary(16) NOT NULL,
  `quantity` int NOT NULL,
  `booking_id` binary(16) DEFAULT NULL,
  `work_id` binary(16) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKtbqq9ms8palbasvo7ydxgrrpx` (`booking_id`),
  KEY `FK9npu12ix83x49q37t897l7kfh` (`work_id`),
  CONSTRAINT `FK9npu12ix83x49q37t897l7kfh` FOREIGN KEY (`work_id`) REFERENCES `work` (`id`),
  CONSTRAINT `FKtbqq9ms8palbasvo7ydxgrrpx` FOREIGN KEY (`booking_id`) REFERENCES `booking` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking_item`
--

LOCK TABLES `booking_item` WRITE;
/*!40000 ALTER TABLE `booking_item` DISABLE KEYS */;
INSERT INTO `booking_item` VALUES (_binary '¬ ŒbŒbh­‹\0',1,_binary '¬ ŒbŒbh­Š\0	',_binary '¬ ŒbŒbfò\0'),(_binary '¬ ŒbŒbh­‹\0',2,_binary '¬ ŒbŒbh­Š\0	',_binary '¬ ŒbŒbfò\0'),(_binary '¬ Œ}ÅŒ}Lo™\0',1,_binary '¬ Œ}ÅŒ}Lo‡\0\0',_binary '¬ ŒbŒbfò\0'),(_binary '¬ ŒWŒûz%\0',1,_binary '¬ ŒWŒûz\Z\0\0',_binary '¬ Œ{\Z~Œ|\rx\ê\0'),(_binary 'À¨Œ—qŒ—©\0',1,_binary 'À¨Œ—qŒ—Ÿ\0\0',_binary '¬ ŒbŒbfò\0'),(_binary 'À¨Œ›ûŒ›Nˆ\0',1,_binary 'À¨Œ›ûŒ›Nˆ‹\0',_binary '¬ ŒbŒbfò\0');
/*!40000 ALTER TABLE `booking_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` binary(16) NOT NULL,
  `category_name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_lroeo5fvfdeg4hpicn4lw7x9b` (`category_name`),
  UNIQUE KEY `UK_hqknmjh5423vchi4xkyhxlhg2` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (_binary '¬ Œ3Œ3/¥t\0\0','Clean','clean','https://res.cloudinary.com/dwwrlxcsi/image/upload/v1702716346/storage/bbwjvupczulpcr3k8wle.webp'),(_binary '¬ Œ3Œ3/¥”\0','Install, repair and maintain','install-repair-maintain','https://res.cloudinary.com/dwwrlxcsi/image/upload/v1702716637/storage/fdqywaqbj3jcdg3k54b1.webp'),(_binary '¬ Œ3Œ3/¥™\0','Human','human','https://res.cloudinary.com/dwwrlxcsi/image/upload/v1702716763/storage/p60oke6fl7ic4hpwlxvs.jpg'),(_binary '¬ Œ3Œ3/¥\0','Pet','pet','https://res.cloudinary.com/dwwrlxcsi/image/upload/v1702716923/storage/cad12vt2htn40hndp08b.jpg'),(_binary '¬ Œ3Œ3/¥¡\0','Others','others','https://res.cloudinary.com/dwwrlxcsi/image/upload/v1702717085/storage/rknghotggtw9k2ptcodq.jpg');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coordinates`
--

DROP TABLE IF EXISTS `coordinates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coordinates` (
  `id` binary(16) NOT NULL,
  `lat` double NOT NULL,
  `lng` double NOT NULL,
  `address_id` binary(16) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_8uk1tegbwdngr7bkpoi38wf8p` (`address_id`),
  CONSTRAINT `FKcp4yla9hp8jl5l1lp3wuumg2d` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coordinates`
--

LOCK TABLES `coordinates` WRITE;
/*!40000 ALTER TABLE `coordinates` DISABLE KEYS */;
INSERT INTO `coordinates` VALUES (_binary '¬ ŒQŒQp«\0',10.8033909,106.6397685,_binary '¬ ŒQŒQp«\0'),(_binary '¬ ŒQŒQp+\0',10.760618,106.660945,_binary '¬ ŒQŒQp+\0'),(_binary '¬ ŒQŒQp\Í\0',10.743594,106.62813,_binary '¬ ŒQŒQp\Í\0\n'),(_binary '¬ ŒQŒQpc\0',10.7279633,106.60676575,_binary '¬ ŒQŒQpb\0'),(_binary '¬ ŒQŒQp\İ\0',10.704547,106.629767,_binary '¬ ŒQŒQp\İ\0'),(_binary '¬ ŒQŒQp^\0',10.8066797,106.6393336,_binary '¬ ŒQŒQp^\0'),(_binary '¬ ŒQŒQp÷\0',10.78813,106.6435518,_binary '¬ ŒQŒQp÷\0\Z'),(_binary '¬ ŒQŒQp\"”\0',10.729239,106.60896545,_binary '¬ ŒQŒQp\"”\0'),(_binary '¬ ŒQŒQp%-\0#',10.7443743,106.6481783,_binary '¬ ŒQŒQp%-\0\"'),(_binary '¬ ŒQŒQp\'¢\0\'',10.6833714,106.66021345,_binary '¬ ŒQŒQp\'¢\0&'),(_binary '¬ ŒQŒQp*#\0+',10.7282813,106.6113473,_binary '¬ ŒQŒQp*#\0*'),(_binary '¬ ŒQŒQp,\æ\0/',10.803271,106.631126,_binary '¬ ŒQŒQp,\æ\0.'),(_binary '¬ ŒQŒQp/‹\03',10.7538414,106.6429502,_binary '¬ ŒQŒQp/‹\02'),(_binary '¬ ŒQŒQp2(\07',10.750799,106.642545,_binary '¬ ŒQŒQp2(\06'),(_binary '¬ ŒQŒQp4¾\0;',10.7443743,106.6481783,_binary '¬ ŒQŒQp4¾\0:'),(_binary '¬ ŒQŒQp7h\0?',10.80120859,106.62398699,_binary '¬ ŒQŒQp7h\0>'),(_binary '¬ ŒQŒQp:\Å\0C',10.757797,106.673843,_binary '¬ ŒQŒQp:\Å\0B'),(_binary '¬ ŒQŒQp=\0G',10.743594,106.62813,_binary '¬ ŒQŒQp=\0F'),(_binary '¬ ŒQŒQp@\0K',10.743594,106.62813,_binary '¬ ŒQŒQp@\0J'),(_binary '¬ ŒQŒQpB™\0O',10.8033909,106.6397685,_binary '¬ ŒQŒQpB™\0N'),(_binary '¬ ŒQøŒQr­\0',10.7824996,106.65478275,_binary '¬ ŒQøŒQr­\0'),(_binary '¬ ŒQøŒQrm\0',10.71465397,106.58481598,_binary '¬ ŒQøŒQrm\0'),(_binary '¬ ŒQøŒQr\n\0',10.81107695,106.7034993,_binary '¬ ŒQøŒQr\n\0\n'),(_binary '¬ ŒQøŒQrÁ\0',10.81107695,106.7034993,_binary '¬ ŒQøŒQrÀ\0'),(_binary '¬ ŒQøŒQr\0',10.744563,106.622773,_binary '¬ ŒQøŒQr\0'),(_binary '¬ ŒQøŒQr\0',10.7279633,106.60676575,_binary '¬ ŒQøŒQr\0'),(_binary '¬ ŒQøŒQr9\0',10.78010615,106.6554681,_binary '¬ ŒQøŒQr9\0\Z'),(_binary '¬ ŒQøŒQr\Å\0',10.79818882,106.62844029,_binary '¬ ŒQøŒQr\Ä\0'),(_binary '¬ ŒQøŒQrf\0#',10.7045,106.629867,_binary '¬ ŒQøŒQrf\0\"'),(_binary '¬ ŒQøŒQr\ç\0\'',10.8111127,106.7031843,_binary '¬ ŒQøŒQr\ç\0&'),(_binary '¬ ŒQøŒQrp\0+',10.704547,106.629767,_binary '¬ ŒQøŒQrp\0*'),(_binary '¬ ŒQøŒQr!%\0/',10.80336,106.631725,_binary '¬ ŒQøŒQr!%\0.'),(_binary '¬ ŒQøŒQr#ª\03',10.79818882,106.62844029,_binary '¬ ŒQøŒQr#ª\02'),(_binary '¬ ŒQøŒQr&/\07',10.79818882,106.62844029,_binary '¬ ŒQøŒQr&/\06'),(_binary '¬ ŒQøŒQr(\ï\0;',10.81107695,106.7034993,_binary '¬ ŒQøŒQr(\ï\0:'),(_binary '¬ ŒQøŒQr+O\0?',10.74258475,106.62017025,_binary '¬ ŒQøŒQr+O\0>'),(_binary '¬ ŒQøŒQr-\Ù\0C',10.743594,106.62813,_binary '¬ ŒQøŒQr-\Ù\0B'),(_binary '¬ ŒQøŒQr0˜\0G',10.7902118,106.6523129,_binary '¬ ŒQøŒQr0˜\0F'),(_binary '¬ ŒQøŒQr3)\0K',10.760963,106.6441724,_binary '¬ ŒQøŒQr3)\0J'),(_binary '¬ ŒQøŒQr5\Ò\0O',10.7045049,106.6279686,_binary '¬ ŒQøŒQr5\Ò\0N'),(_binary '¬ ŒX·ŒXÁ\0',10.851131,106.755336,_binary '¬ ŒX·ŒXÀ\0'),(_binary 'À¨ŒêŒdY\0',10.862103,106.741397,_binary 'À¨ŒêŒdW\0\0');
/*!40000 ALTER TABLE `coordinates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id` binary(16) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `account_id` binary(16) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_dwk6cx0afu8bs9o4t536v1j5v` (`email`),
  UNIQUE KEY `UK_jwt2qo9oj3wd7ribjkymryp8s` (`account_id`),
  CONSTRAINT `FKn9x2k8svpxj3r328iy1rpur83` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (_binary '¬ ŒQŒQp$\0\0',NULL,'fgherarducci0@virginia.edu','Fonz','Gherarducci','0987351478',_binary '¬ ŒQŒQp\'\0'),(_binary '¬ ŒQŒQp\0',NULL,'ekristoffersen1@buzzfeed.com','Erskine','Kristoffersen','0530713827',_binary '¬ ŒQŒQp\0'),(_binary '¬ ŒQŒQpŸ\0',NULL,'gpacey2@cpanel.net','Graham','Pacey','0667325077',_binary '¬ ŒQŒQpŸ\0	'),(_binary '¬ ŒQŒQpG\0',NULL,'czanazzi3@angelfire.com','Cross','Zanazzi','0813155819',_binary '¬ ŒQŒQpG\0\r'),(_binary '¬ ŒQŒQp\Ü\0',NULL,'dpilpovic4@narod.ru','Darlleen','Pilpovic','0522147634',_binary '¬ ŒQŒQp\Ü\0'),(_binary '¬ ŒQŒQp\ZI\0',NULL,'sallebone5@sohu.com','Steffane','Allebone','0116137582',_binary '¬ ŒQŒQp\ZI\0'),(_binary '¬ ŒQŒQp\à\0',NULL,'snorris6@dagondesign.com','Sam','Norris','0235157820',_binary '¬ ŒQŒQp\à\0'),(_binary '¬ ŒQŒQp \0',NULL,'sbarthropp7@addthis.com','Stacia','Barthropp','0392056393',_binary '¬ ŒQŒQp \0'),(_binary '¬ ŒQŒQp\"ö\0 ',NULL,'ljurries8@etsy.com','Lanny','Jurries','0440664694',_binary '¬ ŒQŒQp\"ö\0!'),(_binary '¬ ŒQŒQp%µ\0$',NULL,'fchomicz9@typepad.com','Florencia','Chomicz','0587597030',_binary '¬ ŒQŒQp%µ\0%'),(_binary '¬ ŒQŒQp(#\0(',NULL,'dvaudina@blogtalkradio.com','Deane','Vaudin','0115599095',_binary '¬ ŒQŒQp(#\0)'),(_binary '¬ ŒQŒQp*«\0,',NULL,'ddelveb@altervista.org','Dalli','Delve','0797962489',_binary '¬ ŒQŒQp*«\0-'),(_binary '¬ ŒQŒQp-e\00',NULL,'mkittemanc@utexas.edu','Maurine','Kitteman','0368992677',_binary '¬ ŒQŒQp-e\01'),(_binary '¬ ŒQŒQp0\04',NULL,'cvenusd@sphinn.com','Christina','Venus','0777151678',_binary '¬ ŒQŒQp0\05'),(_binary '¬ ŒQŒQp2\08',NULL,'kchalcrafte@omniture.com','Kipper','Chalcraft','0873063235',_binary '¬ ŒQŒQp2\09'),(_binary '¬ ŒQŒQp5J\0<',NULL,'mjahnerf@youku.com','Mel','Jahner','0855827701',_binary '¬ ŒQŒQp5J\0='),(_binary '¬ ŒQŒQp7ğ\0@',NULL,'vwankg@utexas.edu','Vic','Wank','0271296165',_binary '¬ ŒQŒQp7ğ\0A'),(_binary '¬ ŒQŒQp;N\0D',NULL,'brenehanh@usa.gov','Benedicta','Renehan','0467237990',_binary '¬ ŒQŒQp;N\0E'),(_binary '¬ ŒQŒQp>\0H',NULL,'kdunniomi@mail.ru','Kipp','Dunniom','0297210002',_binary '¬ ŒQŒQp>\0I'),(_binary '¬ ŒQŒQp@”\0L',NULL,'rcathrallj@archive.org','Rayshell','Cathrall','0325218165',_binary '¬ ŒQŒQp@”\0M'),(_binary '¬ ŒRÛŒRœ²\æ\0\0','https://res.cloudinary.com/dwwrlxcsi/image/upload/v1703250777/storage/rrsyg7cfef00x1swuaqr.jpg','dhtien120802@gmail.com','Huu Tien','Dang','0373792298',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary 'À¨ŒkŒkI\É\0','https://res.cloudinary.com/dwwrlxcsi/image/upload/v1702607001/storage/rifucfdof9brr8f5vjit.jpg','huutien@gmail.com','Huu Tien','Dang','0373792298',_binary 'À¨ŒkŒkI\Ê\0');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `id` binary(16) NOT NULL,
  `amount` bigint NOT NULL,
  `method` enum('CASH','VNPAY') DEFAULT NULL,
  `payment_date` datetime(6) DEFAULT NULL,
  `payment_status` enum('PAID','UNPAID') DEFAULT NULL,
  `booking_id` binary(16) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ku02qy6369hn9uhy3n7jk9v6e` (`booking_id`),
  CONSTRAINT `FKqewrl4xrv9eiad6eab3aoja65` FOREIGN KEY (`booking_id`) REFERENCES `booking` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (_binary '¬ ŒbŒbh­Š\0\n',35000,'VNPAY','2023-12-13 16:02:18.000000','PAID',_binary '¬ ŒbŒbh­Š\0	'),(_binary '¬ Œ}ÅŒ}Lo\0',10000,'VNPAY','2023-12-18 21:21:09.000000','PAID',_binary '¬ Œ}ÅŒ}Lo‡\0\0'),(_binary '¬ ŒWŒûz\0',46000,'VNPAY','2023-12-19 09:52:14.000000','PAID',_binary '¬ ŒWŒûz\Z\0\0'),(_binary 'À¨Œ—qŒ—¢\0',22000,'VNPAY',NULL,'UNPAID',_binary 'À¨Œ—qŒ—Ÿ\0\0'),(_binary 'À¨Œ›ûŒ›Nˆ‹\0',22000,'VNPAY','2023-12-24 17:11:58.765000','PAID',_binary 'À¨Œ›ûŒ›Nˆ‹\0');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provider`
--

DROP TABLE IF EXISTS `provider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `provider` (
  `id` binary(16) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `account_id` binary(16) DEFAULT NULL,
  `avg_rating` double NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_d7b840ao003qsurqwhabnfnej` (`account_id`),
  CONSTRAINT `FK8be3d83t3xvq96iv7abwpwtd0` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provider`
--

LOCK TABLES `provider` WRITE;
/*!40000 ALTER TABLE `provider` DISABLE KEYS */;
INSERT INTO `provider` VALUES (_binary '¬ ŒQøŒQr\0\0',NULL,'gcheethamk@who.int','Gard','Cheetham','0786762303',_binary '¬ ŒQøŒQr\Z\0',0),(_binary '¬ ŒQøŒQr\0',NULL,'npethickl@bbb.org','Norman','Pethick','0387686438',_binary '¬ ŒQøŒQr\0',0),(_binary '¬ ŒQøŒQr\ê\0',NULL,'dkreberm@accuweather.com','Dwight','Kreber','0961011842',_binary '¬ ŒQøŒQr\ê\0	',0),(_binary '¬ ŒQøŒQr\n€\0',NULL,'rcakebreadn@yellowpages.com','Raviv','Cakebread','0548954385',_binary '¬ ŒQøŒQr\n€\0\r',0),(_binary '¬ ŒQøŒQr\r8\0',NULL,'agroucocko@usatoday.com','Adrien','Groucock','0582781145',_binary '¬ ŒQøŒQr\r8\0',0),(_binary '¬ ŒQøŒQr•\0',NULL,'wolunneyp@sbwire.com','Willamina','O\'Lunney','0438816326',_binary '¬ ŒQøŒQr•\0',0),(_binary '¬ ŒQøŒQr\r\0',NULL,'whenworthq@skyrock.com','Wainwright','Henworth','0536337921',_binary '¬ ŒQøŒQr\r\0',0),(_binary '¬ ŒQøŒQr\Ã\0',NULL,'dholder@phoca.cz','Desi','Holde','0111588663',_binary '¬ ŒQøŒQr\Ã\0',0),(_binary '¬ ŒQøŒQr<\0 ',NULL,'brosbergs@tripod.com','Bear','Rosberg','0567602399',_binary '¬ ŒQøŒQr<\0!',0),(_binary '¬ ŒQøŒQr\È\0$',NULL,'rnovict@godaddy.com','Rhoda','Novic','0130447415',_binary '¬ ŒQøŒQr\È\0%',0),(_binary '¬ ŒQøŒQra\0(',NULL,'llatanu@wikipedia.org','Lorelei','Latan','0574968120',_binary '¬ ŒQøŒQra\0)',0),(_binary '¬ ŒQøŒQr\ê\0,',NULL,'khonatschv@craigslist.org','Konstantine','Honatsch','0578515852',_binary '¬ ŒQøŒQr\ê\0-',0),(_binary '¬ ŒQøŒQr!”\00',NULL,'preidshaww@storify.com','Padraig','Reidshaw','0189450241',_binary '¬ ŒQøŒQr!”\01',0),(_binary '¬ ŒQøŒQr$-\04',NULL,'vpettendrichx@godaddy.com','Vania','Pettendrich','0504616539',_binary '¬ ŒQøŒQr$-\05',0),(_binary '¬ ŒQøŒQr&¬\08',NULL,'mhealeyy@mail.ru','Micheline','Healey','0649100053',_binary '¬ ŒQøŒQr&¬\09',0),(_binary '¬ ŒQøŒQr)j\0<',NULL,'abecarisz@ebay.co.uk','Averil','Becaris','0528255047',_binary '¬ ŒQøŒQr)j\0=',0),(_binary '¬ ŒQøŒQr+\Ë\0@',NULL,'mvines10@china.com.cn','Mathilda','Vines','0510132525',_binary '¬ ŒQøŒQr+\Ë\0A',0),(_binary '¬ ŒQøŒQr.b\0D',NULL,'dsmail11@bbb.org','Dina','Smail','0447003544',_binary '¬ ŒQøŒQr.b\0E',0),(_binary '¬ ŒQøŒQr1\0H',NULL,'lmoulds12@sina.com.cn','Lainey','Moulds','0853595251',_binary '¬ ŒQøŒQr1\0I',0),(_binary '¬ ŒQøŒQr3£\0L',NULL,'lsinisbury13@springer.com','Luisa','Sinisbury','0347343062',_binary '¬ ŒQøŒQr3£\0M',0),(_binary '¬ ŒQŒŒQs\Ø\Æ\0\0','https://res.cloudinary.com/dwwrlxcsi/image/upload/v1702283652/storage/rlrchctmskl4ltycfigd.jpg','minhloc@gmail.com','Le Minh Loc','Phan','0123456789',_binary '¬ ŒQŒŒQs\Ø\Ì\0',0);
/*!40000 ALTER TABLE `provider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `id` binary(16) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `date` datetime(6) NOT NULL,
  `rating` int NOT NULL,
  `customer_id` binary(16) DEFAULT NULL,
  `service_id` binary(16) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKgce54o0p6uugoc2tev4awewly` (`customer_id`),
  KEY `FKgwdirtrjebp7388pfmhblp1k1` (`service_id`),
  CONSTRAINT `FKgce54o0p6uugoc2tev4awewly` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`),
  CONSTRAINT `FKgwdirtrjebp7388pfmhblp1k1` FOREIGN KEY (`service_id`) REFERENCES `service` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` binary(16) NOT NULL,
  `role_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_iubw515ff0ugtm28p8g3myt0h` (`role_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (_binary '¬ Œ3Œ3¥s\0\0','ROLE_ADMIN'),(_binary '¬ Œ3Œ3¥˜\0','ROLE_CUSTOMER'),(_binary '¬ Œ3Œ3¥\0','ROLE_PROVIDER');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service` (
  `id` binary(16) NOT NULL,
  `avg_rating` double DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `status` enum('APPROVED','APPROVING','DELETE','DISABLE','UNAPPROVED') NOT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `category_id` binary(16) DEFAULT NULL,
  `provider_id` binary(16) DEFAULT NULL,
  `close_time` time(6) DEFAULT NULL,
  `open_time` time(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK34cq08yegp653556yhfv601rc` (`category_id`),
  KEY `FKehke8cumaxaf41p47f9ppx129` (`provider_id`),
  CONSTRAINT `FK34cq08yegp653556yhfv601rc` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `FKehke8cumaxaf41p47f9ppx129` FOREIGN KEY (`provider_id`) REFERENCES `provider` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
INSERT INTO `service` VALUES (_binary '¬ ŒbŒbfñ\0',0,'Kitchen cleaning','APPROVED','https://res.cloudinary.com/dwwrlxcsi/image/upload/v1702457931/storage/restiezdgxzazdixma3d.png',_binary '¬ Œ3Œ3/¥t\0\0',_binary '¬ ŒQŒŒQs\Ø\Æ\0\0','19:00:00.000000','08:00:00.000000'),(_binary '¬ Œ{\Z~Œ{øO\'\0',0,'Bathroom cleaning','APPROVED','https://res.cloudinary.com/dwwrlxcsi/image/upload/v1702886918/storage/e1sdidga1clyiunjkklo.jpg',_binary '¬ Œ3Œ3/¥t\0\0',_binary '¬ ŒQøŒQr\0\0','19:00:00.000000','08:00:00.000000'),(_binary '¬ Œ{\Z~Œ|p\0\n',0,'Carpet cleaning','APPROVED','https://res.cloudinary.com/dwwrlxcsi/image/upload/v1702887648/storage/d9gi3hgycfu42ps35f61.jpg',_binary '¬ Œ3Œ3/¥t\0\0',_binary '¬ ŒQøŒQr\0','19:00:00.000000','08:00:00.000000'),(_binary '¬ Œ{\Z~Œ|\rx\é\0',0,'Upholstery cleaning','APPROVED','https://res.cloudinary.com/dwwrlxcsi/image/upload/v1702888305/storage/ghvasjg3zbscohgyudh2.jpg',_binary '¬ Œ3Œ3/¥t\0\0',_binary '¬ ŒQøŒQr\ê\0','19:00:00.000000','08:00:00.000000'),(_binary '¬ Œ{\Z~Œ|q\ã\0',0,'Electrical services','APPROVED','https://res.cloudinary.com/dwwrlxcsi/image/upload/v1702889024/storage/ctzosqbu5aen6vtrhvob.jpg',_binary '¬ Œ3Œ3/¥”\0',_binary '¬ ŒQøŒQr\n€\0','19:00:00.000000','08:00:00.000000'),(_binary '¬ Œ{\Z~Œ| ×Ÿ\0!',0,'Plumbing services','APPROVED','https://res.cloudinary.com/dwwrlxcsi/image/upload/v1702889575/storage/wevrvk0dls8ymhnuhytm.jpg',_binary '¬ Œ3Œ3/¥”\0',_binary '¬ ŒQøŒQr\r8\0','19:00:00.000000','08:00:00.000000'),(_binary '¬ Œ{\Z~Œ|8B¨\0+',0,'Air conditioning services','APPROVED','https://res.cloudinary.com/dwwrlxcsi/image/upload/v1702891109/storage/f6hv45a9vvxwkdogmbey.jpg',_binary '¬ Œ3Œ3/¥”\0',_binary '¬ ŒQøŒQr•\0','19:00:00.000000','08:00:00.000000'),(_binary '¬ Œ|Œ|üW8\0',0,'Nail services','APPROVED','https://res.cloudinary.com/dwwrlxcsi/image/upload/v1702903960/storage/plrvlkhbzttvddttsvnk.jpg',_binary '¬ Œ3Œ3/¥™\0',_binary '¬ ŒQøŒQr\r\0','19:00:00.000000','08:00:00.000000'),(_binary '¬ Œ|Œ}€\Ì\0',0,'Hair services','APPROVED','https://res.cloudinary.com/dwwrlxcsi/image/upload/v1702904429/storage/usg3prdhnshugolsxiwb.jpg',_binary '¬ Œ3Œ3/¥™\0',_binary '¬ ŒQøŒQr\Ã\0','19:00:00.000000','08:00:00.000000'),(_binary '¬ Œ|Œ}j‹\0',0,'Dog services','APPROVED','https://res.cloudinary.com/dwwrlxcsi/image/upload/v1702905144/storage/bw9mysxrkatybyu5ekyb.png',_binary '¬ Œ3Œ3/¥\0',_binary '¬ ŒQøŒQr<\0 ','19:00:00.000000','08:00:00.000000'),(_binary '¬ Œ|Œ}j]\0',0,'Cat services','APPROVED','https://res.cloudinary.com/dwwrlxcsi/image/upload/v1702905341/storage/ikyugwgpah3kkkvmv9i8.jpg',_binary '¬ Œ3Œ3/¥\0',_binary '¬ ŒQøŒQr\È\0$','19:00:00.000000','08:00:00.000000'),(_binary '¬ Œ|Œ}Àñ\0',0,'Pest Control','APPROVED','https://res.cloudinary.com/dwwrlxcsi/image/upload/v1702906280/storage/bag29m7liovsnb8ov2nt.png',_binary '¬ Œ3Œ3/¥¡\0',_binary '¬ ŒQøŒQra\0(','19:00:00.000000','08:00:00.000000');
/*!40000 ALTER TABLE `service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token`
--

DROP TABLE IF EXISTS `token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `token` (
  `id` binary(16) NOT NULL,
  `expired` bit(1) NOT NULL,
  `revoked` bit(1) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `token_type` varchar(255) DEFAULT NULL,
  `account_id` binary(16) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_pddrhgwxnms2aceeku9s2ewy5` (`token`),
  KEY `FKftkstvcfb74ogw02bo5261kno` (`account_id`),
  CONSTRAINT `FKftkstvcfb74ogw02bo5261kno` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token`
--

LOCK TABLES `token` WRITE;
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
INSERT INTO `token` VALUES (_binary '¬ ŒQŒŒQs\Øù\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaW5obG9jIiwiaWF0IjoxNzAyMTczNTk1LCJleHAiOjE3MDIyNTk5OTV9.8bXCKYNXn3ERjmVpHtHEdZ_RkvlKe1PPAenKkIu--Is','BEARER',_binary '¬ ŒQŒŒQs\Ø\Ì\0'),(_binary '¬ ŒRşŒR‰#$\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaW5obG9jIiwiaWF0IjoxNzAyMTkxNzY4LCJleHAiOjE3MDIyNzgxNjh9.G6bofIgdC8JjkaxXmYPekyQE_7R_oxztalDIxlOYk8k','BEARER',_binary '¬ ŒQŒŒQs\Ø\Ì\0'),(_binary '¬ ŒRÛŒRœ³\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXV0aWVuMTIwODAyIiwiaWF0IjoxNzAyMTkzMDUwLCJleHAiOjE3MDIyNzk0NTB9.eDn19-dxLrF4qUZpRPRFRg65Uu3EZLxZzgt7K_Pfhuc','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary '¬ ŒSvŒS®\â\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXV0aWVuMTIwODAyIiwiaWF0IjoxNzAyMjEwOTYzLCJleHAiOjE3MDIyOTczNjN9.Y3-DD7ZvERoxUOmIYn2hnUTZ1dHXNCZKi8FM85RKFFs','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary '¬ ŒX·ŒX–)\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaW5obG9jIiwiaWF0IjoxNzAyMjgzNTQ4LCJleHAiOjE3MDIzNjk5NDh9._wnlbIXWkFj6AbNAV2f07bkPmlnO6fYKMfBufA_Bfpc','BEARER',_binary '¬ ŒQŒŒQs\Ø\Ì\0'),(_binary '¬ ŒX·ŒX\ÂÀ\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaW5obG9jIiwiaWF0IjoxNzAyMjgzNjI1LCJleHAiOjE3MDIzNzAwMjV9.4GIo7EESUr9QCWuo-UTAuM7nfvSE6nC985uq_843Kyo','BEARER',_binary '¬ ŒQŒŒQs\Ø\Ì\0'),(_binary '¬ Œ[\\Œ[§\Ûñ\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXV0aWVuMTIwODAyIiwiaWF0IjoxNzAyMzQ0Nzc2LCJleHAiOjE3MDI0MzExNzZ9.OlzbvuWukioc6jMioyvmQmHjTnXkn0cqKcIqsJ7rXgY','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary '¬ Œ[\\Œ[ªvH\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaW5obG9jIiwiaWF0IjoxNzAyMzQ0OTQ3LCJleHAiOjE3MDI0MzEzNDd9.8Bf24xHkVICvcm-IDaqXn38nB6GEqUr-66GEsNoYBhs','BEARER',_binary '¬ ŒQŒŒQs\Ø\Ì\0'),(_binary '¬ Œ[Œ[n1\Ò\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXV0aWVuMTIwODAyIiwiaWF0IjoxNzAyMzQwOTk3LCJleHAiOjE3MDI0MjczOTd9.1Bcq6E-tiq1udPqKaTgKuBCXQqNXqeT2uWYHBPHaofQ','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary '¬ Œ\\(Œ\\¸º*\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaW5obG9jIiwiaWF0IjoxNzAyMzYyNjU5LCJleHAiOjE3MDI0NDkwNTl9.QmZZVsKYHpzhITImEqtIUC8IfmN7bMMr1zcrOP-HGw4','BEARER',_binary '¬ ŒQŒŒQs\Ø\Ì\0'),(_binary '¬ Œ^vŒ^96\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXV0aWVuMTIwODAyIiwiaWF0IjoxNzAyMzg0NTE1LCJleHAiOjE3MDI0NzA5MTV9.aschuP9snM6Lo9LCa6JaAUpHDfzCYxhlKsazR2O9fBg','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary '¬ Œ^vŒ^\ßc\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXV0aWVuMTIwODAyIiwiaWF0IjoxNzAyMzg0NTU3LCJleHAiOjE3MDI0NzA5NTd9.GuBh6MXnKkI6zlg1_2kVDc7_iHjxQJg2eEaBqqNsLTI','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary '¬ Œb%ŒbUş…\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXV0aWVuMTIwODAyIiwiaWF0IjoxNzAyNDU2ODUyLCJleHAiOjE3MDI1NDMyNTJ9.eF30gsc0jJUJqZwybwms4sFkLhBdJAZpJpWbHafe5wQ','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary '¬ ŒbŒbe¡\Â\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaW5obG9jIiwiaWF0IjoxNzAyNDU3ODc2LCJleHAiOjE3MDI1NDQyNzZ9.UruMrCXs3O9ljJu0U2ssXegKjgN4D9001k1m0i0WRWM','BEARER',_binary '¬ ŒQŒŒQs\Ø\Ì\0'),(_binary '¬ ŒbŒbfÅ£\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXV0aWVuMTIwODAyIiwiaWF0IjoxNzAyNDU3OTUxLCJleHAiOjE3MDI1NDQzNTF9.cqb_XzpHfXIaMp9Kzm4i97tjd-d5YmsoE1SMi5LOQTs','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary '¬ ŒbIŒb%\Ä\Ä\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXV0aWVuMTIwODAyIiwiaWF0IjoxNzAyNDUzNjkxLCJleHAiOjE3MDI1NDAwOTF9.h9DwAFq3jXoyy4X13UEcNMsodth5DtqTt2FWQulF6qQ','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary '¬ ŒfŒf\'€\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcwMjUyMDkxMywiZXhwIjoxNzAyNjA3MzEzfQ.timfXo3nwj8IMAgDXMz2eB6Yl_DK4FqJTIZgdWrTJt0','BEARER',_binary '¬ ŒQÎŒQh\×P\0\0'),(_binary '¬ ŒsşŒsˆÿ\ç\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaW5obG9jIiwiaWF0IjoxNzAyNzQ1NDA3LCJleHAiOjE3MDI4MzE4MDd9.tGRgkdIhhOL2-0eBYyAT6bHQpJNWh4svp5oVl70fijo','BEARER',_binary '¬ ŒQŒŒQs\Ø\Ì\0'),(_binary '¬ Œs\"Œsy˜\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXV0aWVuMTIwODAyIiwiaWF0IjoxNzAyNzQ0MzY2LCJleHAiOjE3MDI4MzA3NjZ9.B91VfnzskaOQdlaO0sB12RSzFX302C7YE3gWvwxiAs8','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary '¬ Œ{\Z~Œ{\ëBb\0\0',_binary '\0',_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqdXN0aWZpY2F0aW9uYWNxdWlyZWQiLCJpYXQiOjE3MDI4ODYwNjQsImV4cCI6MTcwMjk3MjQ2NH0.MVtqWugUlBVO5QVKCWU_q_7AVRImvVOqa7mUIo79nHY','BEARER',_binary '¬ ŒQøŒQr\Z\0'),(_binary '¬ Œ{\Z~Œ{şŒ\0	',_binary '\0',_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJicmVlZHNlbGYtc2F0aXNmaWVkIiwiaWF0IjoxNzAyODg3MzI4LCJleHAiOjE3MDI5NzM3Mjh9.yPbuSEwYuFgAeQHYJI1by9niqaQGtn9wBZADVOPreYw','BEARER',_binary '¬ ŒQøŒQr\0'),(_binary '¬ Œ{\Z~Œ|\r\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlZmZvcnR3cm91Z2h0LWlyb24iLCJpYXQiOjE3MDI4ODc2OTEsImV4cCI6MTcwMjk3NDA5MX0.XClFDzf2ojYqSKO8AANyXHaz-aXfv_syE2Pkqek0MQM','BEARER',_binary '¬ ŒQøŒQr\ê\0	'),(_binary '¬ Œ{\Z~Œ|Y‚\0',_binary '\0',_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiaXRmYXR1b3VzIiwiaWF0IjoxNzAyODg4OTU0LCJleHAiOjE3MDI5NzUzNTR9.MU_X5lAWDpcIo-P7ntPgvMzSWPnHg6b3CtE-2hNmRZw','BEARER',_binary '¬ ŒQøŒQr\n€\0\r'),(_binary '¬ Œ{\Z~Œ| \\+\0 ',_binary '\0',_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYXVzYWdlcGl0aWxlc3MiLCJpYXQiOjE3MDI4ODk1NDQsImV4cCI6MTcwMjk3NTk0NH0.FajVfR7wuXIL4RblLxAiWBlxB_z9Q7F8ZsYDPWkz20Y','BEARER',_binary '¬ ŒQøŒQr\r8\0'),(_binary '¬ Œ{\Z~Œ|73\0*',_binary '\0',_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZXNjZW50dHdvLXllYXItb2xkIiwiaWF0IjoxNzAyODkxMDMxLCJleHAiOjE3MDI5Nzc0MzF9.yuDpzA-bQphLXgMjLY4byfcwteIIoAmyC-EBdfSIfz4','BEARER',_binary '¬ ŒQøŒQr•\0'),(_binary '¬ Œ|Œ|óü\ä\0\0',_binary '\0',_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaGFtYmVyY2FnZWQiLCJpYXQiOjE3MDI5MDM0MTMsImV4cCI6MTcwMjk4OTgxM30.3NaY8LKJhfPzUVGSZPBldeXl2yGUSDTsy7cIOW7-KrU','BEARER',_binary '¬ ŒQøŒQr\r\0'),(_binary '¬ Œ|Œ}S\0\0',_binary '\0',_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraXRjaGVuYmFycmVkIiwiaWF0IjoxNzAyOTA0MzUzLCJleHAiOjE3MDI5OTA3NTN9.TUaaKd7sYotDSB-mvJZjikLSlCM3voaKEa1J6gpAPd4','BEARER',_binary '¬ ŒQøŒQr\Ã\0'),(_binary '¬ Œ|Œ}\rlO\0\r',_binary '\0',_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiYW5rcnVwdGN5ZnJlY2tsZWQiLCJpYXQiOjE3MDI5MDUwODAsImV4cCI6MTcwMjk5MTQ4MH0.mR5lcyQrLQbBC2pNh5YWPHx10gz96MA35IkpNP5igg4','BEARER',_binary '¬ ŒQøŒQr<\0!'),(_binary '¬ Œ|Œ}¡š\0',_binary '\0',_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJncmF2ZXdlbGwtb3JnYW5pemVkIiwiaWF0IjoxNzAyOTA1MjkxLCJleHAiOjE3MDI5OTE2OTF9.47oyWfnkDLk-Z3NhDoMgqdS3SeqCuDTm3NuHpFKLaek','BEARER',_binary '¬ ŒQøŒQr\È\0%'),(_binary '¬ Œ|Œ}^6\0\Z',_binary '\0',_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZXRyZWF0eWllbGRpbmciLCJpYXQiOjE3MDI5MDYxOTEsImV4cCI6MTcwMjk5MjU5MX0.6PkyvHwRYRkBfGS5bYsJn3LQIJElcYinbNIYrfVrC2Y','BEARER',_binary '¬ ŒQøŒQra\0)'),(_binary '¬ Œ}şŒ}$¢\Í\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcwMjkwNjYwMiwiZXhwIjoxNzAyOTkzMDAyfQ.Pzt8_qBj7DkPSE5tJ9mPbrKVGPfO1Ib2b-tUI95HVi8','BEARER',_binary '¬ ŒQÎŒQh\×P\0\0'),(_binary '¬ Œ}\ZŒ}.ü	\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXV0aWVuMTIwODAyIiwiaWF0IjoxNzAyOTA3MjgwLCJleHAiOjE3MDI5OTM2ODB9.VxVRqAjRVSbeBux3JA8BnOtmMYvWzKX_VYrbqyf9Lhk','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary '¬ ŒØŒ\í@ñ\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXV0aWVuMTIwODAyIiwiaWF0IjoxNzAyOTUzMzA0LCJleHAiOjE3MDMwMzk3MDR9.hxpZIgIPZRWXDqERC1CSHkxCidYTuVme1P5E1zxXKtY','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary '¬ Œ¼Œ€E&\0\0',_binary '\0',_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlZmZvcnR3cm91Z2h0LWlyb24iLCJpYXQiOjE3MDI5NTQ2MTYsImV4cCI6MTcwMzA0MTAxNn0.2m_1liPjsmgjwD_GnzHsl4NktobpCBVfgHFiBjvhVgw','BEARER',_binary '¬ ŒQøŒQr\ê\0	'),(_binary '¬ Œ€¥Œ€1R\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXV0aWVuMTIwODAyIiwiaWF0IjoxNzAyOTU3NzQ4LCJleHAiOjE3MDMwNDQxNDh9.bkm-_JyDOxyKLCq37yQEI6AMEvtf8g4nV4Ecsao9Msg','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary '¬ Œ‚ßŒ‚”@^\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsInN1YiI6ImFkbWluIiwiaWF0IjoxNzAyOTk3ODAzLCJleHAiOjE3MDMwODQyMDN9.-4qmM0i4r2r3zgpdtArvLwwyuXK5F2E1v_R4A1-30AI','BEARER',_binary '¬ ŒQÎŒQh\×P\0\0'),(_binary '¬ Œ‚\Z×Œ‚:\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9DVVNUT01FUiIsInN1YiI6Imh1dXRpZW4xMjA4MDIiLCJpYXQiOjE3MDI5ODk4NzEsImV4cCI6MTcwMzA3NjI3MX0.G0ev3FmhFw-3FGanIJEQKYlG3CydbkhH_j7tc6zLc7A','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary '¬ Œ‚\Z×Œ‚\à‰\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9DVVNUT01FUiIsInN1YiI6Imh1dXRpZW4xMjA4MDIiLCJpYXQiOjE3MDI5ODk5MTQsImV4cCI6MTcwMzA3NjMxNH0.n_D-TDHxF8MOJZGgr-ne4DWOC9nNIRxOIZEaKJ8qPbY','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary '¬ Œ‘»Œ‘_\á¨\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9DVVNUT01FUiIsInN1YiI6Imh1dXRpZW4xMjA4MDIiLCJpYXQiOjE3MDMyNDYwMjksImV4cCI6MTcwMzMzMjQyOX0.PaFFvKwU_NxmkT389_-0QVoYhx8ahbdcdAvoh_IvuPs','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary '¬ Œ‘»Œ‘|&\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9DVVNUT01FUiIsInN1YiI6Imh1dXRpZW4xMjA4MDIiLCJpYXQiOjE3MDMyNDc4ODEsImV4cCI6MTcwMzMzNDI4MX0.Qj22nwKOrY6jeUFt5gcsm05hJVV9-2Yf3YzUBIeb5Zw','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary '¬ Œ’šŒ’% a\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsInN1YiI6ImFkbWluIiwiaWF0IjoxNzAzMjU4OTg4LCJleHAiOjE3MDMzNDUzODh9.X71Npnm0S5PkcEEAFgi39nZ1a0QcYB3KZFooZM-vPRE','BEARER',_binary '¬ ŒQÎŒQh\×P\0\0'),(_binary '¬ Œ”ÓŒ”£&\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9DVVNUT01FUiIsInN1YiI6Imh1dXRpZW4xMjA4MDIiLCJpYXQiOjE3MDMzMDA3NjUsImV4cCI6MTcwMzM4NzE2NX0.8IlR6_Hig5roVJHwuu989epCJeNPsA22xzawxL_x6OE','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary '¬ Œ–®Œ– 0»\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9DVVNUT01FUiIsInN1YiI6Imh1dXRpZW4xMjA4MDIiLCJpYXQiOjE3MDMzMjU3NDEsImV4cCI6MTcwMzQxMjE0MX0.6bKkkORZie4sLtwmznGHoLaaX9TTqum_X01Luo7PZtI','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary 'À¨ŒŠCŒŠni\Ï\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9DVVNUT01FUiIsInN1YiI6Imh1dXRpZW4xMjA4MDIiLCJpYXQiOjE3MDMxMjk1NDEsImV4cCI6MTcwMzIxNTk0MX0.O5Tv2Pp1yIte6Qj_MVI8nU4ihFoRdBcBo9d5imqDkHU','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary 'À¨Œ„ùŒ„\í–u\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsInN1YiI6ImFkbWluIiwiaWF0IjoxNzAzMDM3MjEyLCJleHAiOjE3MDMxMjM2MTJ9.d65tfVgRQvL-Gfim2oooasqwuxYZ7Qiap9yi5LGpfkQ','BEARER',_binary '¬ ŒQÎŒQh\×P\0\0'),(_binary 'À¨Œ…ßŒ…*)A\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsInN1YiI6ImFkbWluIiwiaWF0IjoxNzAzMDQxMTgxLCJleHAiOjE3MDMxMjc1ODF9.n1QgO1QwsSZX5ojaIsCPijPwH_QdMZvUtu7y8NTFg5I','BEARER',_binary '¬ ŒQÎŒQh\×P\0\0'),(_binary 'À¨Œ†!Œ†\è‘\Ô\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9DVVNUT01FUiIsInN1YiI6Imh1dXRpZW4xMjA4MDIiLCJpYXQiOjE3MDMwNzA0MzcsImV4cCI6MTcwMzE1NjgzN30.nPum6_ybZ7HARWwbkN2cqCvdGwEg5nQIl9RsNUbka7A','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary 'À¨Œ‹Œ‹²0b\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsInN1YiI6ImFkbWluIiwiaWF0IjoxNzAzMTUwNzYwLCJleHAiOjE3MDMyMzcxNjB9.p5SFy9FQKQaA8z2sUg6ajAwW0ORCNAtMaEa8ymD6BMQ','BEARER',_binary '¬ ŒQÎŒQh\×P\0\0'),(_binary 'À¨Œ‹±Œ‹¹\à]\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsInN1YiI6ImFkbWluIiwiaWF0IjoxNzAzMTUxMjYzLCJleHAiOjE3MDMyMzc2NjN9.0YLvRAoAGh_MS9Oz3cCFRMBnPoXNipDPzR2iTybhKxo','BEARER',_binary '¬ ŒQÎŒQh\×P\0\0'),(_binary 'À¨Œ‹±Œ‹½‹ó\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9DVVNUT01FUiIsInN1YiI6Imh1dXRpZW4xMjA4MDIiLCJpYXQiOjE3MDMxNTE1MDQsImV4cCI6MTcwMzIzNzkwNH0.UiGPITqeVZvTdUv6DPVJMbaO33jtLC9ojMHJfE7SYn8','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary 'À¨Œ\Z»Œ[ a\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9DVVNUT01FUiIsInN1YiI6Imh1dXRpZW4xMjA4MDIiLCJpYXQiOjE3MDMyMTIxNjMsImV4cCI6MTcwMzI5ODU2M30.BXxWtogCK6lAmquKtraQtUv_0i5bKPS3stSlFptldvU','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary 'À¨Œ—pŒ—\0\Ä&\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9DVVNUT01FUiIsInN1YiI6Imh1dXRpZW4xMjA4MDIiLCJpYXQiOjE3MDMzNDA0NTksImV4cCI6MTcwMzQyNjg1OX0.unOV6haXJ_bp0hFrPNLHJh9erbAR7Gxiq13nLHr___M','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary 'À¨Œ™Œ™º¬\n\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9DVVNUT01FUiIsInN1YiI6Imh1dXRpZW4xMjA4MDIiLCJpYXQiOjE3MDMzODYxOTYsImV4cCI6MTcwMzQ3MjU5Nn0.caAuPaBMqPBdwh6AuTyB3qWBNFKlhOKOuFt5H9d9WFc','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary 'À¨Œ™­Œ™«y\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsInN1YiI6ImFkbWluIiwiaWF0IjoxNzAzMzg1MTcxLCJleHAiOjE3MDM0NzE1NzF9.XmvjH9OBA2la3qtQFCmD-RjsClgr9uAd-UNxSR9c7QY','BEARER',_binary '¬ ŒQÎŒQh\×P\0\0'),(_binary 'À¨Œ™Œ™\âş¨\0\0',_binary '\0',_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsInN1YiI6ImFkbWluIiwiaWF0IjoxNzAzMzg4ODM5LCJleHAiOjE3MDM0NzUyMzl9.4h3Ad0Sv6yCsBYZ40myNsPE7usv1dR0282YBbXU8Hbg','BEARER',_binary '¬ ŒQÎŒQh\×P\0\0'),(_binary 'À¨Œ›ûŒ›Ndq\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9DVVNUT01FUiIsInN1YiI6Imh1dXRpZW4xMjA4MDIiLCJpYXQiOjE3MDM0MTI2NTUsImV4cCI6MTcwMzQ5OTA1NX0.uF421mPjWAg87OwCwcW0HrVgG3wt6ked9yOgQDzlrj8','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary 'À¨ŒœTŒœC?\0\0',_binary '\0',_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9DVVNUT01FUiIsInN1YiI6Imh1dXRpZW4xMjA4MDIiLCJpYXQiOjE3MDM0Mjg2ODksImV4cCI6MTcwMzUxNTA4OX0.5fKxyvGka0_o1_v_nfnSO8o1bu_GQE5MHqMik6SBgOg','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary 'À¨ŒœTŒœD*À\0',_binary '\0',_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9QUk9WSURFUiIsInN1YiI6Im1pbmhsb2MiLCJpYXQiOjE3MDM0Mjg3NjIsImV4cCI6MTcwMzUxNTE2Mn0.n5BEzg0C-eukDhKRCGYOB7SBEdlFUbMfANXAHoLA3vo','BEARER',_binary '¬ ŒQŒŒQs\Ø\Ì\0'),(_binary 'À¨Œk¶ŒkH\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcwMjYwMzI2MCwiZXhwIjoxNzAyNjg5NjYwfQ.ZdRHfCNsoJWCXYtN-xN9a_tP-mmP9Kx3r1VZIxw6cc0','BEARER',_binary '¬ ŒQÎŒQh\×P\0\0'),(_binary 'À¨ŒqŒq\È)N\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcwMjcxNTk5MiwiZXhwIjoxNzAyODAyMzkyfQ.fOyUvM3S9QLo9a9PE40KChST22s_9p5CSIxtG313qHI','BEARER',_binary '¬ ŒQÎŒQh\×P\0\0'),(_binary 'À¨ŒqŒqŞ¬>\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXV0aWVuMTIwODAyIiwiaWF0IjoxNzAyNzE3NDY3LCJleHAiOjE3MDI4MDM4Njd9.-nZEtkpFDzh8eA2wb97cJEjcWXxcbRir1DjPicqhuAs','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary 'À¨ŒqŒq\ã×¶\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXV0aWVuMTIwODAyIiwiaWF0IjoxNzAyNzE3ODA2LCJleHAiOjE3MDI4MDQyMDZ9.iV-UyYgg3AJ0ZdOGNEkYPs4fb4E_tpATD5SPoq5bfgg','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary 'À¨ŒqŒq\æG\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXV0aWVuMTIwODAyIiwiaWF0IjoxNzAyNzE3OTQ4LCJleHAiOjE3MDI4MDQzNDh9.aJKRfp4Aeb_rIstEiD9dPosdc5Hh8rtVAV62uZn1CcE','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary 'À¨Œq×Œqó¯\Ò\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXV0aWVuMTIwODAyIiwiaWF0IjoxNzAyNzE4ODQ0LCJleHAiOjE3MDI4MDUyNDR9.7Dy2BuIq26MpfcW34bKLxMOjgmpE8oCqV22Z4C-qp1c','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary 'À¨Œr[Œr9u\×\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXV0aWVuMTIwODAyIiwiaWF0IjoxNzAyNzIzNDE3LCJleHAiOjE3MDI4MDk4MTd9.J6VPLIgem_qXclme8K0dbX1o_tkMw0uak7l5ANZ6qAU','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0'),(_binary 'À¨Œr\ZœŒr;.\r\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXV0aWVuMTIwODAyIiwiaWF0IjoxNzAyNzIzNTMwLCJleHAiOjE3MDI4MDk5MzB9.6Zkj0gKLZGkKdDLXCTSgd9x6-ac0LMhxp63smkLZ2K8','BEARER',_binary '¬ ŒRÛŒRœ²\ë\0');
/*!40000 ALTER TABLE `token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work`
--

DROP TABLE IF EXISTS `work`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `work` (
  `id` binary(16) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price_per_unit` int NOT NULL,
  `unit` varchar(255) NOT NULL,
  `service_id` binary(16) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK3fg781i8f1wspso60e5qqcx2l` (`service_id`),
  CONSTRAINT `FK3fg781i8f1wspso60e5qqcx2l` FOREIGN KEY (`service_id`) REFERENCES `service` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work`
--

LOCK TABLES `work` WRITE;
/*!40000 ALTER TABLE `work` DISABLE KEYS */;
INSERT INTO `work` VALUES (_binary '¬ ŒbŒbfò\0','Dishwasher cleaning',10000,'sink',_binary '¬ ŒbŒbfñ\0'),(_binary '¬ ŒbŒbfò\0','Sink cleaning',10000,'one',_binary '¬ ŒbŒbfñ\0'),(_binary '¬ ŒbŒbfò\0','Appliance cleaning',20000,'one',_binary '¬ ŒbŒbfñ\0'),(_binary '¬ ŒbŒbfò\0','Floor cleaning',15000,'floor',_binary '¬ ŒbŒbfñ\0'),(_binary '¬ ŒbŒbfò\0','Trash can cleaning',4000,'can',_binary '¬ ŒbŒbfñ\0'),(_binary '¬ ŒbŒbfò\0','Surface cleaning',15000,'surface',_binary '¬ ŒbŒbfñ\0'),(_binary '¬ Œ{\Z~Œ{øO(\0','Cleaning surfaces, wiping countertops, mirrors, and cleaning the toilet',100000,'bathroom',_binary '¬ Œ{\Z~Œ{øO\'\0'),(_binary '¬ Œ{\Z~Œ{øO(\0','Toilet cleaning',30000,'one',_binary '¬ Œ{\Z~Œ{øO\'\0'),(_binary '¬ Œ{\Z~Œ{øO(\0','Shower and tub cleaning',40000,'bathroom',_binary '¬ Œ{\Z~Œ{øO\'\0'),(_binary '¬ Œ{\Z~Œ{øO(\0','Tile and grout cleaning',40000,'bathroom',_binary '¬ Œ{\Z~Œ{øO\'\0'),(_binary '¬ Œ{\Z~Œ{øO(\0','Floor cleaning',40000,'bathroom',_binary '¬ Œ{\Z~Œ{øO\'\0'),(_binary '¬ Œ{\Z~Œ{øO(\0','Cleaning of all surfaces, including scrubbing tiles, grout, and deep cleaning fixtures',150000,'bathroom',_binary '¬ Œ{\Z~Œ{øO\'\0'),(_binary '¬ Œ{\Z~Œ{øO(\0','Mirror cleaning',15000,'one',_binary '¬ Œ{\Z~Œ{øO\'\0'),(_binary '¬ Œ{\Z~Œ|p\0','Carpet stain removal',50000,'one',_binary '¬ Œ{\Z~Œ|p\0\n'),(_binary '¬ Œ{\Z~Œ|p\0','Shampooing',30000,'one',_binary '¬ Œ{\Z~Œ|p\0\n'),(_binary '¬ Œ{\Z~Œ|p\0\r','Steam cleaning (Hot water extraction)',100000,'one',_binary '¬ Œ{\Z~Œ|p\0\n'),(_binary '¬ Œ{\Z~Œ|p\0','Dry cleaning',120000,'one',_binary '¬ Œ{\Z~Œ|p\0\n'),(_binary '¬ Œ{\Z~Œ|\rx\é\0','Armchair cleaning',50000,'armchair',_binary '¬ Œ{\Z~Œ|\rx\é\0'),(_binary '¬ Œ{\Z~Œ|\rx\é\0','Dining chair cleaning',30000,'chair',_binary '¬ Œ{\Z~Œ|\rx\é\0'),(_binary '¬ Œ{\Z~Œ|\rx\ê\0','Recliner cleaning',40000,'recliner',_binary '¬ Œ{\Z~Œ|\rx\é\0'),(_binary '¬ Œ{\Z~Œ|\rx\ê\0','Leather upholstery cleaning',150000,'piece',_binary '¬ Œ{\Z~Œ|\rx\é\0'),(_binary '¬ Œ{\Z~Œ|\rx\ê\0','Sofa or couch cleaning',150000,'sofa',_binary '¬ Œ{\Z~Œ|\rx\é\0'),(_binary '¬ Œ{\Z~Œ|\rx\ê\0','Pillow Cleaning',30000,'pillow',_binary '¬ Œ{\Z~Œ|\rx\é\0'),(_binary '¬ Œ{\Z~Œ|q\ã\0','Ceiling fan installation',200000,'fan',_binary '¬ Œ{\Z~Œ|q\ã\0'),(_binary '¬ Œ{\Z~Œ|q\ä\0\Z','Outdoor lighting installation',800000,'house',_binary '¬ Œ{\Z~Œ|q\ã\0'),(_binary '¬ Œ{\Z~Œ|q\ä\0','Rewiring a house',4000000,'house',_binary '¬ Œ{\Z~Œ|q\ã\0'),(_binary '¬ Œ{\Z~Œ|q\ä\0','Electrical outlet installation',100000,'outlet',_binary '¬ Œ{\Z~Œ|q\ã\0'),(_binary '¬ Œ{\Z~Œ|q\ä\0','Circuit breaker panel upgrade',1500000,'house',_binary '¬ Œ{\Z~Œ|q\ã\0'),(_binary '¬ Œ{\Z~Œ|q\ä\0','Switch installation or replacement',80000,'switch',_binary '¬ Œ{\Z~Œ|q\ã\0'),(_binary '¬ Œ{\Z~Œ|q\å\0','Light fixture installation',200000,'fixture',_binary '¬ Œ{\Z~Œ|q\ã\0'),(_binary '¬ Œ{\Z~Œ| ×Ÿ\0\"','Toilet installation',550000,'one',_binary '¬ Œ{\Z~Œ| ×Ÿ\0!'),(_binary '¬ Œ{\Z~Œ| × \0#','Shower installation',200000,'one',_binary '¬ Œ{\Z~Œ| ×Ÿ\0!'),(_binary '¬ Œ{\Z~Œ| × \0$','Leak repair',300000,'time',_binary '¬ Œ{\Z~Œ| ×Ÿ\0!'),(_binary '¬ Œ{\Z~Œ| ×¡\0%','Pipe repair',400000,'time',_binary '¬ Œ{\Z~Œ| ×Ÿ\0!'),(_binary '¬ Œ{\Z~Œ| ×¡\0&','Toilet repair',350000,'one',_binary '¬ Œ{\Z~Œ| ×Ÿ\0!'),(_binary '¬ Œ{\Z~Œ| ×¡\0\'','Faucet repair or replacement',150000,'faucet',_binary '¬ Œ{\Z~Œ| ×Ÿ\0!'),(_binary '¬ Œ{\Z~Œ| ×¡\0(','Water heater repair',400000,'one',_binary '¬ Œ{\Z~Œ| ×Ÿ\0!'),(_binary '¬ Œ{\Z~Œ| ×¡\0)','Clogged drain cleaning',200000,'time',_binary '¬ Œ{\Z~Œ| ×Ÿ\0!'),(_binary '¬ Œ{\Z~Œ|8B¨\0,','Air conditioning repair',200000,'one',_binary '¬ Œ{\Z~Œ|8B¨\0+'),(_binary '¬ Œ{\Z~Œ|8B©\0-','Compressor replacement',800000,'one',_binary '¬ Œ{\Z~Œ|8B¨\0+'),(_binary '¬ Œ{\Z~Œ|8B©\0.','Duct cleaning',150000,'one',_binary '¬ Œ{\Z~Œ|8B¨\0+'),(_binary '¬ Œ{\Z~Œ|8B©\0/','Air conditioning maintenance (Annual checkup)',150000,'one',_binary '¬ Œ{\Z~Œ|8B¨\0+'),(_binary '¬ Œ{\Z~Œ|8B©\00','Thermostat replacement',250000,'one',_binary '¬ Œ{\Z~Œ|8B¨\0+'),(_binary '¬ Œ{\Z~Œ|8B©\01','Air conditioning installation (Nagakawa Inverter 1 HP NIS-C09R2H10)',6500000,'one',_binary '¬ Œ{\Z~Œ|8B¨\0+'),(_binary '¬ Œ{\Z~Œ|8B©\02','Refrigerant recharge',500000,'one',_binary '¬ Œ{\Z~Œ|8B¨\0+'),(_binary '¬ Œ{\Z~Œ|8B©\03','Air filter replacement',170000,'one',_binary '¬ Œ{\Z~Œ|8B¨\0+'),(_binary '¬ Œ|Œ|üW9\0','Gel manicure',50000,'2 hands',_binary '¬ Œ|Œ|üW8\0'),(_binary '¬ Œ|Œ|üW9\0','Gel pedicure',50000,'2 hands',_binary '¬ Œ|Œ|üW8\0'),(_binary '¬ Œ|Œ|üW9\0','Nail art',10000,'nail',_binary '¬ Œ|Œ|üW8\0'),(_binary '¬ Œ|Œ|üW9\0','Basic manicure (Nail trimming, nail shaping, cuticle care, and polish application)',40000,'2 hands',_binary '¬ Œ|Œ|üW8\0'),(_binary '¬ Œ|Œ|üW9\0','Basic pedicure (Nail trimming, cuticle care, exfoliation, massage, and polish application)',60000,'2 hands',_binary '¬ Œ|Œ|üW8\0'),(_binary '¬ Œ|Œ}€\Í\0	','Shampoo',50000,'person',_binary '¬ Œ|Œ}€\Ì\0'),(_binary '¬ Œ|Œ}€\Í\0\n','Hair dying',20000,'person',_binary '¬ Œ|Œ}€\Ì\0'),(_binary '¬ Œ|Œ}€\Î\0','Earwax taking',30000,'person',_binary '¬ Œ|Œ}€\Ì\0'),(_binary '¬ Œ|Œ}€\Î\0','Haircut',50000,'person',_binary '¬ Œ|Œ}€\Ì\0'),(_binary '¬ Œ|Œ}j‹\0','Hair trimming',50000,'one',_binary '¬ Œ|Œ}j‹\0'),(_binary '¬ Œ|Œ}j‹\0','Dog walking',20000,'hour',_binary '¬ Œ|Œ}j‹\0'),(_binary '¬ Œ|Œ}j‹\0','Take care of dog',80000,'day',_binary '¬ Œ|Œ}j‹\0'),(_binary '¬ Œ|Œ}j‹\0','Grooming',50000,'one',_binary '¬ Œ|Œ}j‹\0'),(_binary '¬ Œ|Œ}jŒ\0','Hair trimming',50000,'one',_binary '¬ Œ|Œ}j‹\0'),(_binary '¬ Œ|Œ}j]\0','Grooming',50000,'one',_binary '¬ Œ|Œ}j]\0'),(_binary '¬ Œ|Œ}j]\0','Hair trimming',50000,'one',_binary '¬ Œ|Œ}j]\0'),(_binary '¬ Œ|Œ}j]\0','Cat photography',300000,'album',_binary '¬ Œ|Œ}j]\0'),(_binary '¬ Œ|Œ}j^\0','Take care of cat',80000,'day',_binary '¬ Œ|Œ}j]\0'),(_binary '¬ Œ|Œ}Àò\0','Termite treatment (Liquid barrier or bait stations)',500000,'time',_binary '¬ Œ|Œ}Àñ\0'),(_binary '¬ Œ|Œ}Àò\0','Bed bug extermination',200000,'time',_binary '¬ Œ|Œ}Àñ\0'),(_binary '¬ Œ|Œ}Àò\0','Cockroach extermination',250000,'time',_binary '¬ Œ|Œ}Àñ\0'),(_binary '¬ Œ|Œ}Àò\0','Mosquito control',150000,'time',_binary '¬ Œ|Œ}Àñ\0'),(_binary '¬ Œ|Œ}Àò\0 ','Rodent control',250000,'time',_binary '¬ Œ|Œ}Àñ\0'),(_binary '¬ Œ|Œ}Àó\0!','Flea control',200000,'time',_binary '¬ Œ|Œ}Àñ\0'),(_binary '¬ Œ|Œ}Àó\0\"','Ant control',150000,'time',_binary '¬ Œ|Œ}Àñ\0'),(_binary '¬ Œ|Œ}Àó\0#','Mice extermination',250000,'time',_binary '¬ Œ|Œ}Àñ\0'),(_binary '¬ Œ|Œ}Àó\0$','Termite inspection',80000,'time',_binary '¬ Œ|Œ}Àñ\0');
/*!40000 ALTER TABLE `work` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-24 22:55:53
