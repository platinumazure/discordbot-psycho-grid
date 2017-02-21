const Discord = require("discord.js");
const client = new Discord.Client();

/*** Load environment variables ***/
require("dotenv").config();

/*** Listen for Discord events ***/

client.on("ready", () => {
    console.log("I am ready!");
});

/*** Login to Discord ***/

client.login(process.env.DISCORD_TOKEN);
