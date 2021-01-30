require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({
    partials: ["MESSAGE"],
});

const BOT_PREFIX = "!";
const COMMAND_MOD_ME = "modme";
const MODERATOR_ID = "805066549748432906";

client.on("ready", () => {
    console.log(`Bot ready to Rock!!`);
});

client.on("messageDelete", (msg) => {
    msg.channel.send("Stop deleting messaging! Not Cool");
});

client.on("message", (msg) => {
    if (msg.content.toLowerCase().includes("aidan")) {
        msg.react("💖");
    }

    if (msg.content === "ping") {
        msg.channel.send("Pong!");
    }

    if (msg.content === `${BOT_PREFIX}${COMMAND_MOD_ME}`) {
        modUser(msg.member);
    }
});

const modUser = (member) => {
    member.roles.add(MODERATOR_ID);
    console.log(`Added Moderator Role to ${member.displayName}!`);
};

client.login(process.env.BOT_TOKEN);