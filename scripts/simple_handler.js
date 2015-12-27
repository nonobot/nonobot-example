var MessageRouter = require("nonobot-js/message_router.js");

var router = MessageRouter.getShared(vertx);
router.respond("hello", function(message) {
  message.reply("hello sir, how are you doing today?");
});