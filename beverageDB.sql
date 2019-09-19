-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Creato il: Set 19, 2019 alle 15:47
-- Versione del server: 5.7.27-0ubuntu0.18.04.1
-- Versione PHP: 7.2.19-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `beverageDB`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `beverage`
--

CREATE TABLE `beverage` (
  `id` mediumint(9) NOT NULL,
  `name` varchar(30) NOT NULL,
  `brand` varchar(40) NOT NULL,
  `price` decimal(4,2) DEFAULT NULL,
  `expiring_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `beverage`
--

INSERT INTO `beverage` (`id`, `name`, `brand`, `price`, `expiring_date`) VALUES
(1, 'Coca Cola Zero', 'Coca Cola', '1.65', '2020-05-01'),
(2, 'Fanta Original', 'Fanta', '1.80', '2020-06-01'),
(3, 'Fanta Lemon', 'Fanta', '1.85', '2019-12-01'),
(4, 'Chinò', 'San Pellegrino', '1.60', '2020-03-01'),
(5, 'Beltè Limone 0,3L', 'San Benedetto', '2.39', '2021-06-01'),
(6, '7UP', 'Dr.Pepper', '2.10', '2020-03-01');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `beverage`
--
ALTER TABLE `beverage`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `beverage`
--
ALTER TABLE `beverage`
  MODIFY `id` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
