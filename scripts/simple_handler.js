var Bot = require("nonobot-js/bot.js");

var router = Bot.getShared(vertx).chatRouter();
router.respond("hello", function(message) {
  message.reply("hello sir, how are you doing today?");
});