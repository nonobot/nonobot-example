var MessageRouter = require("nonobot-js/message_router.js");

var router = MessageRouter.create(vertx);
router.handler().respond("hello", function(message) {
  message.reply("hello sir, how are you doing today?");
}).create();