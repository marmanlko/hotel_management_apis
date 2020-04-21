-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 21, 2020 at 06:47 AM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `arman`
--

-- --------------------------------------------------------

--
-- Table structure for table `hotel_management`
--

CREATE TABLE `hotel_management` (
  `ID` int(1) DEFAULT NULL,
  `firstName` varchar(7) DEFAULT NULL,
  `lastName` varchar(5) DEFAULT NULL,
  `email` varchar(14) DEFAULT NULL,
  `contact` bigint(10) DEFAULT NULL,
  `address` varchar(6) DEFAULT NULL,
  `noOfMembers` int(1) DEFAULT NULL,
  `daysOfStay` int(1) DEFAULT NULL,
  `dateOfCheckin` varchar(8) DEFAULT NULL,
  `dateOfCheckout` varchar(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hotel_management`
--

INSERT INTO `hotel_management` (`ID`, `firstName`, `lastName`, `email`, `contact`, `address`, `noOfMembers`, `daysOfStay`, `dateOfCheckin`, `dateOfCheckout`) VALUES
(1, 'Ekansh', 'Bari', 'abc@lpu.com', 7777777777, 'asdf', 2, 2, '19-04-20', '21-04-20'),
(2, 'Asim', 'Ahmad', 'xyz@lpu.com', 0, 'qwerty', 3, 2, '19-04-20', '21-04-20'),
(3, 'Sumit', 'Kumar', 'qwerty@lpu.com', 1234567890, 'zxcvb', 4, 2, '19-04-20', '21-04-20'),
(4, 'Sumit', 'Kumar', 'a@lpu.com', 1234567890, 'zxcvb', 4, 2, '19-04-20', '21-04-20'),
(5, 'Shubham', 'Singh', 's@lpu.com', 7894561117, 'zxcvb', 4, 2, '19-04-20', '21-04-20'),
(NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
