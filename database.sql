CREATE TABLE `steam_discord` (
  `steam_id` varchar(50) NOT NULL,
  `discord_id` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
);

ALTER TABLE `steam_discord`
  ADD PRIMARY KEY (`steam_id`,`discord_id`),
  ADD UNIQUE KEY `steam_discord_unique_steam_id` (`steam_id`),
  ADD UNIQUE KEY `steam_discord_unique_discord_id` (`discord_id`);
COMMIT;
