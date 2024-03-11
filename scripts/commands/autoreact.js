module.exports.config = {
  name: "aotoreact",
  version: "2.0.0",
  permission: 0,
  credits: "Nayan",
  description: "..",
  prefix: false,
  category: "...",
  usages: "",
  cooldowns: 5,
};

exports.run = function ({ api, event }) {
  const emojis = ["😘", "🐸", "🙂", "😹", "🥳", "💗", "💔", "🥀", "💐", "🌹","💋"];

  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * emojis.length);
      const randomEmoji = emojis[randomIndex];
      api.setMessageReaction(randomEmoji, event.messageReply.messageID, (err) => {}, true);
    }, i * 1000);
  }
};
