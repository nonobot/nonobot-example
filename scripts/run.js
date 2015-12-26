
// Run the bot
vertx.deployVerticle("io.nonobot.core.BotVerticle", {
  "config": {
    "console": true
  }
});

// Deploy a custom handler
vertx.deployVerticle("simple_handler.js");
