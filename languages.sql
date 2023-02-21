-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: student-databases.cvode4s4cwrc.us-west-2.rds.amazonaws.com
-- Generation Time: Feb 21, 2023 at 06:32 AM
-- Server version: 8.0.28
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `HEATHMAY`
--

-- --------------------------------------------------------

--
-- Table structure for table `ProgrammingPolyglot`
--

CREATE TABLE `ProgrammingPolyglot` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `abstraction_level` varchar(255) NOT NULL,
  `type_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `interpreted_compiled` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `paradigms` varchar(255) NOT NULL,
  `year` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `ProgrammingPolyglot`
--

INSERT INTO `ProgrammingPolyglot` (`id`, `name`, `abstraction_level`, `type_id`, `interpreted_compiled`, `paradigms`, `year`) VALUES
(1, 'Python', 'High', 'Dynamic', 'Interpreted', 'Multi', 1991),
(2, 'Ruby', 'High', 'Dynamic', 'Interpreted', 'Multi', 1996),
(3, 'C++', 'High', 'Static', 'Compiled', 'Multi', 1985),
(4, 'COBOL', 'High', 'Static', 'Compiled', 'Procedural, OOP', 1959),
(5, 'Java', 'High', 'Static', 'Compiled', 'Multi', 1996),
(6, 'Fortran', 'High', 'Static', 'Compiled', 'Multi', 1957),
(7, 'Assembly', 'Low', 'Unstructured', 'N/A', 'Unstructured', 1949),
(8, 'JavaScript', 'High', 'Dynamic', 'Compiled', 'Multi', 1997),
(9, 'Prolog', 'High', 'Unstructured', 'Both', 'Logic', 1972),
(10, 'C#', 'High', 'Static', 'Compiled', 'Multi', 2002);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ProgrammingPolyglot`
--
ALTER TABLE `ProgrammingPolyglot`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ProgrammingPolyglot`
--
ALTER TABLE `ProgrammingPolyglot`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
