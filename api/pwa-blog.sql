-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : dim. 12 mai 2024 à 14:24
-- Version du serveur : 5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `pwa-blog`
--

-- --------------------------------------------------------

--
-- Structure de la table `authors`
--

CREATE TABLE `authors` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `authors`
--

INSERT INTO `authors` (`id`, `firstname`, `lastname`, `picture`, `linkedin`, `instagram`, `facebook`, `createdAt`, `updatedAt`) VALUES
(1, 'Alice', 'Martin', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsfGVufDB8fDB8fHww', '#', '#', '#', '2024-04-27 16:39:10', '2024-04-27 16:39:10'),
(2, 'Bob', 'Smith', 'https://www.portraitprofessionnel.fr/wp-content/uploads/2020/02/portrait-professionnel-corporate-4.jpg', '#', '#', '#', '2024-04-27 16:45:49', '2024-04-27 16:45:49'),
(3, 'Carol', 'Taylor', 'https://img.freepik.com/photos-gratuite/plan-profil-fille-aristocratique-chemisier-volants-dame-fleurs-dans-ses-cheveux-posant-fierement-contre-mur-bleu_197531-14304.jpg', '#', '#', '#', '2024-04-27 16:46:16', '2024-04-27 16:46:16'),
(4, 'David', 'Lee', 'https://www.missnumerique.com/blog/wp-content/uploads/photo-de-profil-pour-les-reseaux-sociaux-joseph-gonzalez.jpg', '#', '#', '#', '2024-04-27 16:48:04', '2024-04-27 16:48:04'),
(5, 'Emma', 'Brown', 'https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp', '#', '#', '#', '2024-04-27 16:48:33', '2024-04-27 16:48:33');

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(2, 'DIY', '2024-04-27 16:55:23', '2024-04-27 16:55:23'),
(3, 'Current Event', '2024-04-27 16:59:22', '2024-04-27 16:59:22'),
(4, 'Books', '2024-04-27 16:59:35', '2024-04-27 16:59:35'),
(5, 'Business', '2024-04-27 16:59:42', '2024-04-27 16:59:42'),
(6, 'Sports', '2024-04-27 16:59:50', '2024-04-27 16:59:50'),
(7, 'Mom', '2024-04-27 16:59:56', '2024-04-27 16:59:56'),
(8, 'Lifestyle', '2024-04-27 17:00:04', '2024-04-27 17:00:04'),
(9, 'Movies', '2024-04-27 17:00:09', '2024-04-27 17:00:09'),
(10, 'Fashion', '2024-04-27 17:00:17', '2024-04-27 17:00:17');

-- --------------------------------------------------------

--
-- Structure de la table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `id_author` int(11) NOT NULL,
  `id_category` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `excerpt` text NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `time_read` varchar(255) NOT NULL,
  `is_popular` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `posts`
--

INSERT INTO `posts` (`id`, `id_author`, `id_category`, `title`, `excerpt`, `thumbnail`, `time_read`, `is_popular`, `createdAt`, `updatedAt`) VALUES
(1, 3, 3, 'How does writing influence your personal brand?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.', 'https://images.squarespace-cdn.com/content/v1/5e1faf831e0b0b52a7c997b4/1603307748935-P5YU2P75JDDGMLTN65RH/Jennifer+Estacio+Flipp+Family', '5', 1, '2024-04-27 17:35:39', '2024-04-27 17:35:39'),
(2, 2, 2, 'Travelling as a way of self-discovery and progress', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.', 'https://pixelgrade.com/wp-content/uploads/2020/02/Creating-true-fluid-web-typography-to-improve-our-processes.jpg', '5', 1, '2024-04-27 17:39:23', '2024-04-27 17:39:23'),
(3, 4, 4, 'Helping a local business reinvent itself', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.', 'https://starter.pixelgrade.com/julialt/wp-content/uploads/sites/6/2021/11/julia_about_photo_2.png', '5', 1, '2024-04-27 17:40:30', '2024-04-27 17:40:30'),
(4, 5, 6, 'How to design your site footer like we did', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.', 'https://pixelgrade.com/wp-content/uploads/2020/05/Bistro-La-Noi-Website.jpg', '5', 1, '2024-04-27 17:41:25', '2024-04-27 17:41:25'),
(79, 4, 8, 'Start a blog to reach your creative peak', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.', 'https://starter.pixelgrade.com/julia-lt/wp-content/uploads/sites/6/2022/04/26197193421_c89aefafb5_o.jpg', '5', 1, '2024-05-03 12:23:27', '2024-05-03 12:23:27'),
(80, 3, 10, 'How to choose the right colors when creating a website?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.', 'https://starter.pixelgrade.com/julia-lt/wp-content/uploads/sites/6/2022/04/26170990602_781f7fcea0_o.jpg', '5', 1, '2024-05-03 12:25:17', '2024-05-03 12:25:17'),
(95, 3, 10, 'How to choose the right colors when creating a website?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.', 'https://www.buchmesse.de/files/styles/crop_image/public/media/image/MHillmer-JKlaus_%C2%A9Gregor-Thorand_catchingsmiles-net_2000.jpg?itok=Ev3OYV4x', '5', 0, '2024-05-12 14:17:35', '2024-05-12 14:17:35');

-- --------------------------------------------------------

--
-- Structure de la table `subscriptions`
--

CREATE TABLE `subscriptions` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `subscription_json` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `subscriptions`
--

INSERT INTO `subscriptions` (`id`, `createdAt`, `updatedAt`, `subscription_json`) VALUES
(34, '2024-05-12 14:14:45', '2024-05-12 14:14:45', '{\"subscription_json\":\"{\\\"endpoint\\\":\\\"https://fcm.googleapis.com/fcm/send/cCJkIZyk1Gg:APA91bG17yi_d4djeBJ2f6nvtkO4TrWL5MdyIQnFgBTXh3E4Ml1eeFcADUBO6liQbuZKgDu3gstRCDuDJNNslPOZucrv7Y-cVh9GEhkotskiqU8HlwSRQspfvsoCFA7G9MzFPGdDZjK0\\\",\\\"expirationTime\\\":null,\\\"keys\\\":{\\\"p256dh\\\":\\\"BNV_-HUkrOUDzwQG_q5aJJg469vk6Z4tkGZCy3uacwm9DAnuwWTN7wkxF1PKbC7LYKHH85u5KVyi_SoEVpPblxA\\\",\\\"auth\\\":\\\"exkKrxg0kJ4QxypgmfPgOg\\\"}}\"}');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT pour la table `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
