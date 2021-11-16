Whitelist discord for RedM by Nolosha for vorp

![image](https://user-images.githubusercontent.com/93606636/142051884-41164b7c-e451-4dfd-977f-0fc68ad0655d.png)

# Requirements

Nothing. 

# Installation 

- Download files
- Copy and paste vorp_whitelist folder to resources/
- Add ensure vorp_whitelist to your server.cfg file
- Import database.sql into your SQL database

# Configuration

Create an application on the [Discord Developer Panel](https://discord.com/developers/) and fill the config.js file. Your bot needs to have "Server Members Intent".

- clientId : "Your OAuth2 client id"
- clientSecret : "Your OAuth2 client secret"
- token : "Your bot token"

- guild : "Your discord server ID" ([how to find a discord ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-))
- roles : an array containing the roles ID allowed (ex: `["00000000000000", "11111111111111"]`)

- redirectUri : "http://[your server IP]:7790/discord"

- checkRole : set to `true` to check if the player has one of the whitelisted roles. Set to `false` to only check for the player presence on your Discord server.

# How it works

The resource will create an HTTP (listening by default on port 7790) that will listen for the auth token of a user.

When your player connects for the first time, a popup will redirect him to a discord login page. He'll then be redirected to the HTTP server created by the resource (your redirectURI) with an auth token.

This token will be used to get it's discord ID and associate it to it's steam ID. This will be stored in DB.
