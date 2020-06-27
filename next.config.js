const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    skipWaiting: false,
    register: false,
    disable: process.env.NODE_ENV !== "production",
  },
});
