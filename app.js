// This template was made by FusionTerror.
const DiscordRPC = require('discord-rpc'); // Requiring the discord-rpc package.
const client = new DiscordRPC.Client({ transport: 'ipc' }); // Creating a client variable with is our rpc client.
require('dotenv').config(); // Requiring the content of our .env file.

(async () => {
    client.on('ready', async () => { // Calling the ready event.
        await client.setActivity({ // Setting the Rich Presence Activity based on what is passed in here.
            buttons: [{ label: "FACEBOOK", url: "https://www.facebook.com/longngungok/" }, { label: "FIVEM ROLEPLAY GTAV", url: "https://www.discord.com/invite/420rp" }],
            
            details: "9AM - 10PM (UTC +7)",
            largeImageKey: "icon",
            largeImageText: "CONTACT FOR ADD UPTIME BOT.",
            smallImageKey: "itzy",
            smallImageText: "I'm sleeping."
        }).catch(err => console.log(err));

        console.log("Discord Rich Presence has been enabled.");
    });

    await client.login({ clientId: process.env.applicationID }).catch(console.error); // Logging into our application.
})();