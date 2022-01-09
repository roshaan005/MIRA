
import env, { config } from "dotenv"
env.config()
import axios from "axios";
import fetch from "node-fetch";
import {Client,Intents,Message} from "discord.js"


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const PREFIX = "MIRA"

client.on("ready",()=>{
    client.user.setStatus("idle");

})


client.on("messageCreate",(mess)=>{

    if(mess.content=="hey"){
        mess.reply("shut up idiot...")
    }

     if(mess.content==="u sux"){
        mess.reply("")
    }
    if(mess.content.startsWith(PREFIX)){
        const [CMD_NAME,...args] = mess.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);
        if(args[0]==="gif" || args[0]==="Gif"){
                fetch(`https://api.giphy.com/v1/gifs/translate?api_key=G3ZpF5VZi1J5VvMO7HBe51k4VsV6Ohkc&s=${args[1]}`, {mode: 'cors'})
                .then(function(response) {
                return response.json();
                })
                .then(function(response) {
                mess.reply(response.data.url);
               
                });
        }

        if(args[0]==="joke" || args[0]==="Joke"){
            axios.get("https://api.chucknorris.io/jokes/random")
            .then(res=>{mess.reply(res.data.value)})
        }
        if(args[0]==="roast" || args[0]==="Roast"){
            axios.get("https://evilinsult.com/generate_insult.php?lang=en&type=json").then(res=>{mess.reply(res.data.insult)})
        }

       
    }
  



})
client.login(process.env.MIRA_BOT_TOKEN)
