const clients = []

const { Client } = require('discord.js-selfbot-v13')

try{

  const express = require("express");

  const app = express();

  app.listen(() => console.log("Server started"));

  app.get('/', (req, res) => {

    res.send('Hama Is Here')

  })

  const fs = require('fs');

  // Replace "example.txt" with the name of your file

  const filename = './token.txt';

  // Read the file

  fs.readFile(filename, 'utf8', async (err, data) => {

    if (err) {

      console.error(err);

      return;

    }

    // Split the data by lines

    const lines = data.split('\n');

    // Read each line

    for (const line of lines) {

      const client = new Client({

        checkUpdate: false,

      });

      ///
    client.on('ready', async () => {

        console.log(`${client.user.tag} is Ready!`);

        

        const channel = await client.channels.cache.get("1234133893515448395");

        let chats = [`نیتف/لیکس بەرد/ەستە 

نیت/فلیکس ١ مانگی 800k <:Netflix:1234499528762200204> 

نێت/فلیکس ٣ مانگی  2m <:Netflix:1234499528762200204> 

نیتف/لیکس ١ سالی  4m <:Netflix:1234499528762200204> 

لە/سەر زە/مان /و لە/سەر ئم/یلی خ/ۆت

<@&1234133891120631851>`,

                    `ب/وت بەردەس/تە

<@&1234133891120631851>`,

                    `**__نی/ترۆ گەی/مینگ گی/فت بەرد/ەستە__**

**__ <@&1234133891120631851> __**`,

                    `تی/مپڵە$یت بەر-دەستە!-

<@&1234133891120631851>`,

                    `ســــێ/رڤــەر ڪــۆ/پــی دەڪـ/ـــەم بــ/ــێ ڕ/ۆڵ

<#1234133893515448392> 

<@&1234133891120631851>`,

                    `ەکا/ونتی/دیس/

                  <@&1234133891120631851>  کۆرد/ بەردەستە`,

                    `وسی/بەردەستە/فاست/ <@&1234133891120631851> بەی/فاب`,

                    `نیتف/لیکس بەرد/ەستە 

نیت/فلیکس ١ مانگی 800k <:Netflix:1234499528762200204> 

نێت/فلیکس ٣ مانگی  2m <:Netflix:1234499528762200204> 

نیتف/لیکس ١ سالی  4m <:Netflix:1234499528762200204> 

لە/سەر زە/مان /و لە/سەر ئم/یلی خ/ۆت

<@&1234133891120631851>` ];
          setInterval(() => {

const msg = chats[Math.floor(Math.random()*chats.length)]

setTimeout(() => {

channel.send(msg)

}, 1200000)
}, 1200000)

})

  client.login('').catch(() => {

  console.log(`token Xalata hay kere hamu Dwnyat ba qunt`)

})

}

  

})

} catch (err) {

  if(err.message.startsWith('401: Unauthorized')) {

  process.exit()

}

if(err.message.startsWith('The operation was aborted.')) {

    process.exit()

}

}
