const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Notice how module.exports is just exposing the config object 
// so the Expo CLI can read it when you start the server.
module.exports = withNativeWind(config, { input: "./global.css" });