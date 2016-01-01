
// Run the bot
vertx.deployVerticle("io.nonobot.core.BotVerticle");

// Deploy a custom handler
vertx.deployVerticle("simple_handler.js");
