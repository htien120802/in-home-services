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
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_gex1lmaqpg0ir5g1f5eftyaa1` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (_binary '� ��������\0','$2a$10$MWsLHLZi3efARXGWD3BrtOy.Lb4pCwmJAmXBVRbj1OWu0/gbt6.cq','admin'),(_binary '� ��������\0\0','$2a$10$nFg0CRJqdZw5ihg0M0ioc.c1eMmYJW2WLBBhzAZZtg3l/NiV5cSY6','marketspiteful'),(_binary '� ��������\0','$2a$10$LFokaydUUTMaBkcHq.8cse6PFzQvm/cIMbG0LgPzuyAHxhXdcbZJy','loyaltycoercive'),(_binary '� �������N\0','$2a$10$AHSSggV96/i5eDqic5K6gOAc4wUIO4/HuiHt1frUPLhSDTjckH.Tu','suitperemptory'),(_binary '� ������\�(\0	','$2a$10$ebyyxka9eZFaTfemgVfnq.6iNOg6FBirNVJIie7m4HkDqh6TjZduq','cubeinfallible'),(_binary '� ������\�\�\0','$2a$10$qEQauEe5bk6Cx0RNVXyEVeth9.vLXN7ORPzz4etlSWHCQ9S1b.JV2','physicistabsorbing'),(_binary '� ������\�\�\0','$2a$10$UO4W6EhQo2CeCyStO6QNi.Tf2JlznNJnkeVfI04DZIJNvfPITnWxO','authorizationsuperhuman'),(_binary '� ������\�\�\0','$2a$10$3H/eDHWZxEDUDU9kQivKsupYPVcwL2vs5yzY1Ach1mLO6nXJrPrqi','transmitterhigh-fiber'),(_binary '� ������ŗ\0','$2a$10$S9n5IRmKwYcFSW9i1KGccOLtrfjH4JtxzA4bwZ3BCAMqwyP9DKm5a','dynastythrough'),(_binary '� ������\�\�\0','$2a$10$QsSws/nJPNXEe1mznsUvnuTJ1c/df8PvPJ0XXfgHEBL0PdLkmQJKK','bedspeeding'),(_binary '� ������\�\�\0','$2a$10$d2H1gbOG1tGXpNa8Ar7xr.yI4asNBXUE6UH6EJ12UuZJZkDWe5Wme','magiccentrifugal'),(_binary '� ������\��\0','$2a$10$/hxQMIfnqhTwcXWUpMr.e.Nq9O5YYMkka4GG9Qed4G67WTAPw5SqC','stewardundefined'),(_binary '� ������\��\0!','$2a$10$yO7fS6nf8MKNFK0E11eWyO./otqxsEtcxbdCZdtzG4LnB53Pjd/L.','hoseequestrian'),(_binary '� ������\�q\0$','$2a$10$do7lv80iNvuD5HNSetv/l.T6IuMQ6eEH6YFyDZwJSpEcrjkDThHpS','shadeuntouchable'),(_binary '� ������\�;\0\'','$2a$10$AYoI6tJ4k6wxvWl1PPrHOOPwaIAeLAdw8rlAyLEospRD7TbwhO7pq','conclusionshuddering'),(_binary '� ������\�H\0*','$2a$10$1.Wq8wuosfP5bSoBYkaL5eLJTXtmClvL.db7mRzKbtfDhtZfPkW/K','exchangeannounced'),(_binary '� ������\�)\0-','$2a$10$q4KuccNnMkdRJbg4w467AuMiX5xecOM9OkHDm0u3mkbM3352meajC','foliagelabored'),(_binary '� ������\�\00','$2a$10$JvD.imEuwu8bjDyyMun/SOZM6Mm23f.AXttK/ZBG0itNTrw6LQ2ya','impositionconfined'),(_binary '� ������\�\03','$2a$10$K2e24Rz4JFKg8k9rE.8G.ewgLJXf1/By.M6fnE2T5H7kxv1csfCEa','mandateheartening'),(_binary '� ������\��\06','$2a$10$70NK7n2WeQ.g1nX4jjUqwuae5LezMvbK1tUKEe4g/Zd.rzttD2W0.','beastnamed'),(_binary '� ������\�	\09','$2a$10$Q1oDbYdjNxom/RvfbxWXUeAcnvWwHz7sWeGnz4ftgr2RCxr/1YH0m','rationalitymirrored'),(_binary '� ������\��\0<','$2a$10$m7jNmL2tNxVErc2ApZf8pu9oFS/0JswkWJutTNdUM/sFhBe.yhQS.','justificationacquired'),(_binary '� ������Җ\0?','$2a$10$vMr9hTuXnrDuIuE4YfAa/uY8h1spvyvchY6lYn/45ifWz.cIKz.e.','breedself-satisfied'),(_binary '� ������\�3\0B','$2a$10$DbxZqAZf3/LYxfdkgIztguRr6tww84dO3vPnIjmBoDRBOGf9h6pYG','effortwrought-iron'),(_binary '� ������\�\�\0E','$2a$10$IqDfP/hLG0LF1XzM6A.A/eUlUFYJuXot/jkp4sdJ8NwErKxUfrecO','bitfatuous'),(_binary '� ������Բ\0H','$2a$10$ERfEcnUEByIOODqf99mlme1y5knDvKvbE3OzEEkh9v/VkwGNLPpxG','sausagepitiless'),(_binary '� ������ն\0K','$2a$10$sE5FGSpR7H0blP555QJXYOny.f.vkTztaOQieln5sMW3bZlwXqoaC','descenttwo-year-old'),(_binary '� ������\�L\0N','$2a$10$VXEmuriJ.akbx/FfsA7mkuDktC1nOzo7Xq9M3dlN/QB.pictv3sty','chambercaged'),(_binary '� ������\�\Z\0Q','$2a$10$yx5EiIgkERZjEtldD8/tbeg48hcOYzy5XRHFXiepUWhIaMamDo5/K','kitchenbarred'),(_binary '� ������\��\0T','$2a$10$XqICsVUmRIa/CVGoIYOFJ.h66ONyTk31LWMcMDg4Aa1z0rOMpJq3e','bankruptcyfreckled'),(_binary '� ������\�\�\0W','$2a$10$bBQkh2BNTQHYy2eH1stjlucN3eQbS.0BkTTbPBultfkwwJyjYdm7i','gravewell-organized'),(_binary '� ������\�|\0Z','$2a$10$8RVrYwrXSLsYDQrw7mbkqeeCUY3QIAvr1gxrUKKiyNxewmdh4IcmK','retreatyielding'),(_binary '� ������\�5\0]','$2a$10$9rU/gd7Rmr52S2iRBGmSVOefxnGZ8kERyHkcOJqCYYvJp9fGGCGue','laceindelible'),(_binary '� ������\��\0`','$2a$10$tAuoR39az04Pk2WFhIHKKOBZ2J9weGuhq15P4UUNsZGjSyfhEeYpm','liquidmachine-gun'),(_binary '� ������\�\�\0c','$2a$10$cRbLGAzP0YUngQJoVFJgWeMnwCRS4fHf.mI.CMnCKh9OMrSQyvk12','acquisitionperfumed'),(_binary '� ������\�w\0f','$2a$10$IfW..r4FJyGjLHasV657Eegdj1VJxHUHachgOkj9lY8HYYD5H5pCS','migrationdefensible'),(_binary '� ������\�\0i','$2a$10$UHh1an4qN6tDhfInvjRr4.Y0zST/IIyp1mP5qa5/7SSpSCAAKNnZO','announcementlandless'),(_binary '� ������\�\�\0l','$2a$10$vbv7nsgaMWqzX51kZgcs/e1JeK9PxbqRkFhNAvUfFK0/7CP50PNva','longingdarting'),(_binary '� ������ތ\0o','$2a$10$Xv8pHVeRGggqSHFqPYDQeu.K.TygXN5YE9zDKQPiO/zh6ua9kjCf.','ingenuitycyclical'),(_binary '� ������\�`\0r','$2a$10$yJ.WNKWdn6P2rhCfgb9o9.2KO4UQ0P6aNrTcPOMChy8PWfYXvL/cC','openermarshy'),(_binary '� ������\�<\0u','$2a$10$840yl.G1294T.2aBZcR71.hZXwqPFkSkKxDhDW6O.3oMBHP8E9ERK','townshipcancerous'),(_binary '� ��c���\�\�\0\0','$2a$10$hJkylQHCKGbSavWDhFWGTuGt2zdy4VqfyF0KvPnxNVZVOOsggfo4G','huutien120802'),(_binary '� �Z��`w�\0\0','$2a$10$FZodIGZhXT4aErCqAQ7Yq.cLnisw3g8x525i1hNk5SoFjCLug5fTq','minhloc');
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
INSERT INTO `account_role` VALUES (_binary '� ��������\0',_binary '���z���z��K\0\0'),(_binary '� ������\��\0<',_binary '���z။z�\�\0\0'),(_binary '� ������Җ\0?',_binary '���z။z�\�\0\0'),(_binary '� ������\�3\0B',_binary '���z။z�\�\0\0'),(_binary '� ������\�\�\0E',_binary '���z။z�\�\0\0'),(_binary '� ������Բ\0H',_binary '���z။z�\�\0\0'),(_binary '� ������ն\0K',_binary '���z။z�\�\0\0'),(_binary '� ������\�L\0N',_binary '���z။z�\�\0\0'),(_binary '� ������\�\Z\0Q',_binary '���z။z�\�\0\0'),(_binary '� ������\��\0T',_binary '���z။z�\�\0\0'),(_binary '� ������\�\�\0W',_binary '���z။z�\�\0\0'),(_binary '� ������\�|\0Z',_binary '���z။z�\�\0\0'),(_binary '� ������\�5\0]',_binary '���z။z�\�\0\0'),(_binary '� ������\��\0`',_binary '���z။z�\�\0\0'),(_binary '� ������\�\�\0c',_binary '���z။z�\�\0\0'),(_binary '� ������\�w\0f',_binary '���z။z�\�\0\0'),(_binary '� ������\�\0i',_binary '���z။z�\�\0\0'),(_binary '� ������\�\�\0l',_binary '���z။z�\�\0\0'),(_binary '� ������ތ\0o',_binary '���z။z�\�\0\0'),(_binary '� ������\�`\0r',_binary '���z။z�\�\0\0'),(_binary '� ������\�<\0u',_binary '���z။z�\�\0\0'),(_binary '� �Z��`w�\0\0',_binary '���z။z�\�\0\0'),(_binary '� ��������\0\0',_binary '���z7��z�?�\0\0'),(_binary '� ��������\0',_binary '���z7��z�?�\0\0'),(_binary '� �������N\0',_binary '���z7��z�?�\0\0'),(_binary '� ������\�(\0	',_binary '���z7��z�?�\0\0'),(_binary '� ������\�\�\0',_binary '���z7��z�?�\0\0'),(_binary '� ������\�\�\0',_binary '���z7��z�?�\0\0'),(_binary '� ������\�\�\0',_binary '���z7��z�?�\0\0'),(_binary '� ������ŗ\0',_binary '���z7��z�?�\0\0'),(_binary '� ������\�\�\0',_binary '���z7��z�?�\0\0'),(_binary '� ������\�\�\0',_binary '���z7��z�?�\0\0'),(_binary '� ������\��\0',_binary '���z7��z�?�\0\0'),(_binary '� ������\��\0!',_binary '���z7��z�?�\0\0'),(_binary '� ������\�q\0$',_binary '���z7��z�?�\0\0'),(_binary '� ������\�;\0\'',_binary '���z7��z�?�\0\0'),(_binary '� ������\�H\0*',_binary '���z7��z�?�\0\0'),(_binary '� ������\�)\0-',_binary '���z7��z�?�\0\0'),(_binary '� ������\�\00',_binary '���z7��z�?�\0\0'),(_binary '� ������\�\03',_binary '���z7��z�?�\0\0'),(_binary '� ������\��\06',_binary '���z7��z�?�\0\0'),(_binary '� ������\�	\09',_binary '���z7��z�?�\0\0'),(_binary '� ��c���\�\�\0\0',_binary '���z7��z�?�\0\0');
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
  PRIMARY KEY (`id`),
  KEY `FK93c3js0e22ll1xlu21nvrhqgg` (`customer_id`),
  KEY `FKo8alsjm9icgon4em4us88p3nq` (`provider_id`),
  CONSTRAINT `FK93c3js0e22ll1xlu21nvrhqgg` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`),
  CONSTRAINT `FKo8alsjm9icgon4em4us88p3nq` FOREIGN KEY (`provider_id`) REFERENCES `provider` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (_binary '� �������\�\0','Thành phố Hồ Chí Minh','Tân Bình','859','Nhất Chi Mai','Phường 13',_binary '� �������\�\0',NULL),(_binary '� �������\�\0','Thành phố Hồ Chí Minh','Tân Bình','86','Lý Thường Kiệt','Phường 6',_binary '� ��������\0',NULL),(_binary '� �������Y\0','Thành phố Hồ Chí Minh','Quận 6','539','Đường Trần Văn Kiểu','Phường 10',_binary '� �������S\0',NULL),(_binary '� ������\�:\0','Thành phố Hồ Chí Minh','Bình Tân','872','Kinh Đ. Vương','An Lạc',_binary '� ������\�2\0\n',NULL),(_binary '� ������\�\�\0','Thành phố Hồ Chí Minh','Quận 8','731','Đường Trịnh Quang Nghị','Phường 7',_binary '� ������\�\�\0\r',NULL),(_binary '� ������\�\�\0','Thành phố Hồ Chí Minh','Tân Bình','112','Nhất Chi Mai','Phường 13',_binary '� ������\�\�\0',NULL),(_binary '� ������\�\�\0','Thành phố Hồ Chí Minh','Tân Bình','298','Bàu Cát','Phường 14',_binary '� ������\�\�\0',NULL),(_binary '� ������Ŭ\0','Thành phố Hồ Chí Minh','Bình Tân','172','Kinh Đ. Vương','An Lạc',_binary '� ������ţ\0',NULL),(_binary '� ������\�\�\0\Z','Thành phố Hồ Chí Minh','Quận 6','832','Đ. Gia Phú','Phường 3',_binary '� ������\�\�\0',NULL),(_binary '� ������\�\0','Thành phố Hồ Chí Minh','Bình Chánh','191','Đường Xương Cá 1','2',_binary '� ������\��\0',NULL),(_binary '� ������\�\0 ','Thành phố Hồ Chí Minh','Bình Tân','4','Kinh Đ. Vương','An Lạc',_binary '� ������\��\0',NULL),(_binary '� ������\�\�\0#','Thành phố Hồ Chí Minh','Tân Phú','160','Tân Kỳ Tân Quý','Sơn Kỳ',_binary '� ������\�\�\0\"',NULL),(_binary '� ������\�~\0&','Thành phố Hồ Chí Minh','Quận 11','215','Minh Phụng','Phường 9',_binary '� ������\�x\0%',NULL),(_binary '� ������\�L\0)','Thành phố Hồ Chí Minh','Quận 11','136','Minh Phụng','Phường 9',_binary '� ������\�D\0(',NULL),(_binary '� ������\�X\0,','Thành phố Hồ Chí Minh','Quận 6','577','Đ. Gia Phú','Phường 3',_binary '� ������\�Q\0+',NULL),(_binary '� ������\�7\0/','Thành phố Hồ Chí Minh','Tân Phú','89','Tân Kỳ Tân Quý','Sơn Kỳ',_binary '� ������\�1\0.',NULL),(_binary '� ������\�\02','Thành phố Hồ Chí Minh','Quận 10','89','Đ. Sư Vạn Hạnh','Phường 10',_binary '� ������\�\r\01',NULL),(_binary '� ������\�\05','Thành phố Hồ Chí Minh','Quận 6','578','Đường Trần Văn Kiểu','Phường 10',_binary '� ������\�\n\04',NULL),(_binary '� ������\�\0\08','Thành phố Hồ Chí Minh','Quận 6','799','Đường Trần Văn Kiểu','Phường 10',_binary '� ������\��\07',NULL),(_binary '� ������\�\0;','Thành phố Hồ Chí Minh','Tân Bình','166','Nhất Chi Mai','Phường 13',_binary '� ������\�\0:',NULL),(_binary '� ������\�\0\0>','Thành phố Hồ Chí Minh','Tân Bình','734','Lý Thường Kiệt','Phường 6',NULL,_binary '� ������\��\0='),(_binary '� ������Ң\0A','Thành phố Hồ Chí Minh','Bình Chánh','981','Cây Bàng','Tân Kiên',NULL,_binary '� ������ҝ\0@'),(_binary '� ������\�@\0D','Thành phố Hồ Chí Minh','Bình Thạnh','780','Chu Văn An','Phường 12',NULL,_binary '� ������\�:\0C'),(_binary '� ������\�\�\0G','Thành phố Hồ Chí Minh','Bình Thạnh','603','Chu Văn An','Phường 12',NULL,_binary '� ������\�\�\0F'),(_binary '� ������\�\�\0J','Thành phố Hồ Chí Minh','Bình Tân','275','Kinh Đ. Vương','An Lạc',NULL,_binary '� ������Լ\0I'),(_binary '� ������\�\�\0M','Thành phố Hồ Chí Minh','Bình Tân','806','Kinh Đ. Vương','An Lạc',NULL,_binary '� ������ս\0L'),(_binary '� ������\�X\0P','Thành phố Hồ Chí Minh','Tân Bình','269','Lý Thường Kiệt','Phường 6',NULL,_binary '� ������\�R\0O'),(_binary '� ������\�&\0S','Thành phố Hồ Chí Minh','Tân Phú','845','Hoa Bằng','Tân Sơn Nhì',NULL,_binary '� ������\�!\0R'),(_binary '� ������\��\0V','Thành phố Hồ Chí Minh','Quận 8','4','Đường Trịnh Quang Nghị','Phường 7',NULL,_binary '� ������\��\0U'),(_binary '� ������\�\�\0Y','Thành phố Hồ Chí Minh','Bình Thạnh','300','Chu Văn An','Phường 12',NULL,_binary '� ������\�\�\0X'),(_binary '� ������ه\0\\','Thành phố Hồ Chí Minh','Quận 8','497','Đường Trịnh Quang Nghị','Phường 7',NULL,_binary '� ������ق\0['),(_binary '� ������\�A\0_','Thành phố Hồ Chí Minh','Tân Phú','140','Tân Kỳ Tân Quý','Sơn Kỳ',NULL,_binary '� ������\�;\0^'),(_binary '� ������\�\r\0b','Thành phố Hồ Chí Minh','Tân Phú','806','Hoa Bằng','Tân Sơn Nhì',NULL,_binary '� ������\�\0a'),(_binary '� ������\�\�\0e','Thành phố Hồ Chí Minh','Tân Phú','42','Hoa Bằng','Tân Sơn Nhì',NULL,_binary '� ������\�\�\0d'),(_binary '� ������܂\0h','Thành phố Hồ Chí Minh','Bình Thạnh','669','Chu Văn An','Phường 12',NULL,_binary '� ������\�}\0g'),(_binary '� ������\�)\0k','Thành phố Hồ Chí Minh','Bình Tân','955','Kinh Đ. Vương','An Lạc',NULL,_binary '� ������\�$\0j'),(_binary '� ������\��\0n','Thành phố Hồ Chí Minh','Quận 6','933','Đường Trần Văn Kiểu','Phường 10',NULL,_binary '� ������\�\�\0m'),(_binary '� ������ޗ\0q','Thành phố Hồ Chí Minh','Tân Bình','654','Lý Thường Kiệt','Phường 6',NULL,_binary '� ������ޒ\0p'),(_binary '� ������\�l\0t','Thành phố Hồ Chí Minh','Quận 11','441','Minh Phụng','Phường 9',NULL,_binary '� ������\�g\0s'),(_binary '� ������\�J\0w','Thành phố Hồ Chí Minh','Quận 8','49','Đường Trịnh Quang Nghị','Phường 7',NULL,_binary '� ������\�D\0v');
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
  `time` time(6) DEFAULT NULL,
  `customer_id` binary(16) DEFAULT NULL,
  `total_price` int DEFAULT NULL,
  `provider_id` binary(16) DEFAULT NULL,
  `status` enum('BOOKED','COMING','DOING','DONE') DEFAULT NULL,
  `service_id` binary(16) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKlnnelfsha11xmo2ndjq66fvro` (`customer_id`),
  KEY `FKnijo6hobccis4ybsd6bfvv1tv` (`provider_id`),
  KEY `FKcebnlefwi9r13txu8btclnmsu` (`service_id`),
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
INSERT INTO `booking` VALUES (_binary '� �\"f��\"���\0\0','2023-12-01','08:00:00.000000',_binary '� ��c���\�\�7\0',50000,_binary '� �Z��`x\0','DONE',_binary '� �;���d�\0\0');
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking_work`
--

DROP TABLE IF EXISTS `booking_work`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking_work` (
  `booking_id` binary(16) NOT NULL,
  `work_id` binary(16) NOT NULL,
  PRIMARY KEY (`booking_id`,`work_id`),
  KEY `FK92wi9ulm35lykrxnnp3v3qpcs` (`work_id`),
  CONSTRAINT `FK92wi9ulm35lykrxnnp3v3qpcs` FOREIGN KEY (`work_id`) REFERENCES `work` (`id`),
  CONSTRAINT `FKg0py0fxw7qblw9i1bl1r6p6kd` FOREIGN KEY (`booking_id`) REFERENCES `booking` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking_work`
--

LOCK TABLES `booking_work` WRITE;
/*!40000 ALTER TABLE `booking_work` DISABLE KEYS */;
INSERT INTO `booking_work` VALUES (_binary '� �\"f��\"���\0\0',_binary '� �;���d�\0'),(_binary '� �\"f��\"���\0\0',_binary '� �;���d�\0');
/*!40000 ALTER TABLE `booking_work` ENABLE KEYS */;
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
  `thumbnail` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
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
INSERT INTO `category` VALUES (_binary '���zf��z�m�\0\0','Clean',NULL,'clean'),(_binary '���zf��z�m\�\0','Install, repair and maintain',NULL,'install-repair-maintain'),(_binary '���zf��z�m\�\0','Human',NULL,'human'),(_binary '���zf��z�m\�\0','Pet',NULL,'pet'),(_binary '���zf��z�m\�\0','Others',NULL,'others');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
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
INSERT INTO `customer` VALUES (_binary '� �������\�\0',NULL,'fgherarducci0@virginia.edu','Fonz','Gherarducci','+84 28 3154 7108',_binary '� ��������\0\0'),(_binary '� ��������\0',NULL,'ekristoffersen1@buzzfeed.com','Erskine','Kristoffersen','+84 28 3592 1811',_binary '� ��������\0'),(_binary '� �������S\0',NULL,'gpacey2@cpanel.net','Graham','Pacey','+84 28 3588 6289',_binary '� �������N\0'),(_binary '� ������\�2\0\n',NULL,'czanazzi3@angelfire.com','Cross','Zanazzi','+84 28 3791 4204',_binary '� ������\�(\0	'),(_binary '� ������\�\�\0\r',NULL,'dpilpovic4@narod.ru','Darlleen','Pilpovic','+84 28 3853 1196',_binary '� ������\�\�\0'),(_binary '� ������\�\�\0',NULL,'sallebone5@sohu.com','Steffane','Allebone','+84 28 3176 8930',_binary '� ������\�\�\0'),(_binary '� ������\�\�\0',NULL,'snorris6@dagondesign.com','Sam','Norris','+84 28 3673 8077',_binary '� ������\�\�\0'),(_binary '� ������ţ\0',NULL,'sbarthropp7@addthis.com','Stacia','Barthropp','+84 28 3741 2878',_binary '� ������ŗ\0'),(_binary '� ������\�\�\0',NULL,'ljurries8@etsy.com','Lanny','Jurries','+84 28 3838 8287',_binary '� ������\�\�\0'),(_binary '� ������\��\0',NULL,'fchomicz9@typepad.com','Florencia','Chomicz','+84 28 3713 9464',_binary '� ������\�\�\0'),(_binary '� ������\��\0',NULL,'dvaudina@blogtalkradio.com','Deane','Vaudin','+84 28 3141 9951',_binary '� ������\��\0'),(_binary '� ������\�\�\0\"',NULL,'ddelveb@altervista.org','Dalli','Delve','+84 28 3119 3385',_binary '� ������\��\0!'),(_binary '� ������\�x\0%',NULL,'mkittemanc@utexas.edu','Maurine','Kitteman','+84 28 3470 9212',_binary '� ������\�q\0$'),(_binary '� ������\�D\0(',NULL,'cvenusd@sphinn.com','Christina','Venus','+84 28 3569 3433',_binary '� ������\�;\0\''),(_binary '� ������\�Q\0+',NULL,'kchalcrafte@omniture.com','Kipper','Chalcraft','+84 28 3711 3286',_binary '� ������\�H\0*'),(_binary '� ������\�1\0.',NULL,'mjahnerf@youku.com','Mel','Jahner','+84 28 3361 8165',_binary '� ������\�)\0-'),(_binary '� ������\�\r\01',NULL,'vwankg@utexas.edu','Vic','Wank','+84 28 3371 2612',_binary '� ������\�\00'),(_binary '� ������\�\n\04',NULL,'brenehanh@usa.gov','Benedicta','Renehan','+84 28 3166 2156',_binary '� ������\�\03'),(_binary '� ������\��\07',NULL,'kdunniomi@mail.ru','Kipp','Dunniom','+84 28 3176 3771',_binary '� ������\��\06'),(_binary '� ������\�\0:',NULL,'rcathrallj@archive.org','Rayshell','Cathrall','+84 28 3609 4799',_binary '� ������\�	\09'),(_binary '� ��c���\�\�7\0','https://res.cloudinary.com/dwwrlxcsi/image/upload/v1701268427/storage/x1ifzs1xtqe8fowetqqn.jpg','dhtien120802@gmail.com','Tien','Dang',NULL,_binary '� ��c���\�\�\0\0');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flyway_schema_history`
--

DROP TABLE IF EXISTS `flyway_schema_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flyway_schema_history` (
  `installed_rank` int NOT NULL,
  `version` varchar(50) DEFAULT NULL,
  `description` varchar(200) NOT NULL,
  `type` varchar(20) NOT NULL,
  `script` varchar(1000) NOT NULL,
  `checksum` int DEFAULT NULL,
  `installed_by` varchar(100) NOT NULL,
  `installed_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `execution_time` int NOT NULL,
  `success` tinyint(1) NOT NULL,
  PRIMARY KEY (`installed_rank`),
  KEY `flyway_schema_history_s_idx` (`success`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flyway_schema_history`
--

LOCK TABLES `flyway_schema_history` WRITE;
/*!40000 ALTER TABLE `flyway_schema_history` DISABLE KEYS */;
INSERT INTO `flyway_schema_history` VALUES (1,'2','init','SQL','V2__init.sql',-780402074,'root','2023-12-01 02:30:22',68,0);
/*!40000 ALTER TABLE `flyway_schema_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `id` binary(16) NOT NULL,
  `amount` int DEFAULT NULL,
  `payment_date` date DEFAULT NULL,
  `booking_id` binary(16) DEFAULT NULL,
  `method` enum('CASH','VNPAY') DEFAULT NULL,
  `payment_status` enum('PAID','UNPAID') DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKqewrl4xrv9eiad6eab3aoja65` (`booking_id`),
  CONSTRAINT `FKqewrl4xrv9eiad6eab3aoja65` FOREIGN KEY (`booking_id`) REFERENCES `booking` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (_binary '� �\"f��\"��\�\0',50000,NULL,_binary '� �\"f��\"���\0\0','CASH','PAID');
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
  `rating` double NOT NULL,
  `account_id` binary(16) DEFAULT NULL,
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
INSERT INTO `provider` VALUES (_binary '� ������\��\0=',NULL,'gcheethamk@who.int','Gard','Cheetham','+84 28 3259 2475',0,_binary '� ������\��\0<'),(_binary '� ������ҝ\0@',NULL,'npethickl@bbb.org','Norman','Pethick','+84 28 3625 2047',0,_binary '� ������Җ\0?'),(_binary '� ������\�:\0C',NULL,'dkreberm@accuweather.com','Dwight','Kreber','+84 28 3705 1178',0,_binary '� ������\�3\0B'),(_binary '� ������\�\�\0F',NULL,'rcakebreadn@yellowpages.com','Raviv','Cakebread','+84 28 3645 2930',0,_binary '� ������\�\�\0E'),(_binary '� ������Լ\0I',NULL,'agroucocko@usatoday.com','Adrien','Groucock','+84 28 3933 9392',0,_binary '� ������Բ\0H'),(_binary '� ������ս\0L',NULL,'wolunneyp@sbwire.com','Willamina','O\'Lunney','+84 28 3959 6588',0,_binary '� ������ն\0K'),(_binary '� ������\�R\0O',NULL,'whenworthq@skyrock.com','Wainwright','Henworth','+84 28 3671 9259',0,_binary '� ������\�L\0N'),(_binary '� ������\�!\0R',NULL,'dholder@phoca.cz','Desi','Holde','+84 28 3408 7137',0,_binary '� ������\�\Z\0Q'),(_binary '� ������\��\0U',NULL,'brosbergs@tripod.com','Bear','Rosberg','+84 28 3767 6839',0,_binary '� ������\��\0T'),(_binary '� ������\�\�\0X',NULL,'rnovict@godaddy.com','Rhoda','Novic','+84 28 3401 2454',0,_binary '� ������\�\�\0W'),(_binary '� ������ق\0[',NULL,'llatanu@wikipedia.org','Lorelei','Latan','+84 28 3907 2981',0,_binary '� ������\�|\0Z'),(_binary '� ������\�;\0^',NULL,'khonatschv@craigslist.org','Konstantine','Honatsch','+84 28 3236 7848',0,_binary '� ������\�5\0]'),(_binary '� ������\�\0a',NULL,'preidshaww@storify.com','Padraig','Reidshaw','+84 28 3981 9900',0,_binary '� ������\��\0`'),(_binary '� ������\�\�\0d',NULL,'vpettendrichx@godaddy.com','Vania','Pettendrich','+84 28 3367 6118',0,_binary '� ������\�\�\0c'),(_binary '� ������\�}\0g',NULL,'mhealeyy@mail.ru','Micheline','Healey','+84 28 3370 3273',0,_binary '� ������\�w\0f'),(_binary '� ������\�$\0j',NULL,'abecarisz@ebay.co.uk','Averil','Becaris','+84 28 3331 4966',0,_binary '� ������\�\0i'),(_binary '� ������\�\�\0m',NULL,'mvines10@china.com.cn','Mathilda','Vines','+84 28 3702 1550',0,_binary '� ������\�\�\0l'),(_binary '� ������ޒ\0p',NULL,'dsmail11@bbb.org','Dina','Smail','+84 28 3833 3071',0,_binary '� ������ތ\0o'),(_binary '� ������\�g\0s',NULL,'lmoulds12@sina.com.cn','Lainey','Moulds','+84 28 3873 4522',0,_binary '� ������\�`\0r'),(_binary '� ������\�D\0v',NULL,'lsinisbury13@springer.com','Luisa','Sinisbury','+84 28 3854 1386',0,_binary '� ������\�<\0u'),(_binary '� �Z��`x\0',NULL,'minhloc@gmail.com','Le Minh Loc','Phan',NULL,0,_binary '� �Z��`w�\0\0');
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
  `comment` varchar(255) DEFAULT NULL,
  `date` date NOT NULL,
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
INSERT INTO `review` VALUES (_binary '� �\"K��\"\�x\�\0\0','Good','2023-12-01',4,_binary '� ��c���\�\�7\0',_binary '� �;���d�\0\0');
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
INSERT INTO `role` VALUES (_binary '���z���z��K\0\0','ROLE_ADMIN'),(_binary '���z7��z�?�\0\0','ROLE_CUSTOMER'),(_binary '���z။z�\�\0\0','ROLE_PROVIDER');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schedule` (
  `id` binary(16) NOT NULL,
  `day` varchar(255) DEFAULT NULL,
  `end_time` time(6) DEFAULT NULL,
  `start_time` time(6) DEFAULT NULL,
  `service_id` binary(16) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKqudwisx64k5wua2md2fdffu7h` (`service_id`),
  CONSTRAINT `FKqudwisx64k5wua2md2fdffu7h` FOREIGN KEY (`service_id`) REFERENCES `service` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule`
--

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service` (
  `id` binary(16) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `category_id` binary(16) DEFAULT NULL,
  `provider_id` binary(16) DEFAULT NULL,
  `status` enum('APPROVED','APPROVING','DELETE','DISABLE','UNAPPROVED') NOT NULL,
  `avg_rating` double DEFAULT NULL,
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
INSERT INTO `service` VALUES (_binary '� �;���d�\0\0','Kitchen cleaning','https://res.cloudinary.com/dwwrlxcsi/image/upload/v1700903280/storage/zlhy19rkpq040rp6dbsn.png',_binary '���zf��z�m�\0\0',_binary '� �Z��`x\0','APPROVED',4);
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
INSERT INTO `token` VALUES (_binary '� �\Z���ݭ\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaW5obG9jIiwiaWF0IjoxNzAwOTAzMTgxLCJleHAiOjE3MDA5ODk1ODF9.1ZWpoNMqNyW48UJ451Et2bG6fPpDiBYWt7nJsVx0Cf8','BEARER',_binary '� �Z��`w�\0\0'),(_binary '� �;�����\0',_binary '\0',_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcwMDkwMzM4NSwiZXhwIjoxNzAwOTg5Nzg1fQ.iMmyjhLS2fXITmVw_Ejx8BNP7Ox8Kur80eJV6uvp298','BEARER',_binary '� ��������\0'),(_binary '� ����fI�\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaW5obG9jIiwiaWF0IjoxNzAwOTE0NDE1LCJleHAiOjE3MDEwMDA4MTV9.CyGwLMSR9yXlclv6JTZBYGyNjHq8c_Rt9YLJS8t2LxY','BEARER',_binary '� �Z��`w�\0\0'),(_binary '� �l��hMn\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXV0aWVuMTIwODAyIiwiaWF0IjoxNzAwOTE0NTQ4LCJleHAiOjE3MDEwMDA5NDh9.W-_vrvuiDEykRG6Y54y6eYY40schpvOnnHm6mty9Nzc','BEARER',_binary '� ��c���\�\�\0\0'),(_binary '� ����lI\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXV0aWVuMTIwODAyIiwiaWF0IjoxNzAwOTE0ODA4LCJleHAiOjE3MDEwMDEyMDh9.2U-0s2zZHWK8IXHuHHa53hSobwW9dMtVosjgDFsgMl4','BEARER',_binary '� ��c���\�\�\0\0'),(_binary '� ����ѳ\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXV0aWVuMTIwODAyIiwiaWF0IjoxNzAwOTIxNDU1LCJleHAiOjE3MDEwMDc4NTV9.XgFHvAdVhn8Ipbu37XvV4I7TASdUhDIR5onQLHexRE4','BEARER',_binary '� ��c���\�\�\0\0'),(_binary '� ����\�a\0\0',_binary '\0',_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaW5obG9jIiwiaWF0IjoxNzAwOTU2NTczLCJleHAiOjE3MDEwNDI5NzN9.-CeFG-md63B_5uaajP54ANMvyYk2nJIWfwnmVNYphiw','BEARER',_binary '� �Z��`w�\0\0'),(_binary '� �Ɂ�iC\0\0',_binary '',_binary '','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXV0aWVuMTIwODAyIiwiaWF0IjoxNzAxMjY4MzgzLCJleHAiOjE3MDEzNTQ3ODN9.K39I9nKA3MsVThlIfrhSAtr3ZDTXNC2lAgF-e3l1ifQ','BEARER',_binary '� ��c���\�\�\0\0'),(_binary '� �\"���\"�^�\0\0',_binary '\0',_binary '\0','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXV0aWVuMTIwODAyIiwiaWF0IjoxNzAxMzg4MzEyLCJleHAiOjE3MDE0NzQ3MTJ9.0zfmr3HBTyLcn9F_OmRpzdKTfEJ7US1Cq16coNiaa-s','BEARER',_binary '� ��c���\�\�\0\0');
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
  `description` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
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
INSERT INTO `work` VALUES (_binary '� �;���d�\0','Surface cleaning',15000,_binary '� �;���d�\0\0'),(_binary '� �;���d�\0','Trash can cleaning',15000,_binary '� �;���d�\0\0'),(_binary '� �;���d�\0','Dishwasher cleaning',25000,_binary '� �;���d�\0\0'),(_binary '� �;���d�\0','Sink cleaning',10000,_binary '� �;���d�\0\0'),(_binary '� �;���d�\0','Appliance cleaning',25000,_binary '� �;���d�\0\0'),(_binary '� �;���d�\0','Floor cleaning',25000,_binary '� �;���d�\0\0');
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

-- Dump completed on 2023-12-01  9:37:54
