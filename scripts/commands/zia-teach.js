const axios = require("axios");

module.exports.config = {
    name: "teach",
    version: "1.0.0",
    permission: 0,
    credits: "AYAN",
    description: "Teach to zia",
    prefix: true, 
    category: "sim simi fun", 
    usages: "[Query] => [Reponse]",
    cooldowns: 5,
    dependencies: {}
};

module.exports.run = async function({ api, event, args }) {
    const { threadID, messageID } = event;
    const input = args.join(" ").split("=>");

    if (input.length < 2) {
        if (args.length === 0) {
            return api.sendMessage("Usage: teach [Query] - [Reponsen]", threadID);
        } else if (args.join(" ").includes("-")) {
            return api.sendMessage("Please provide both a question and an answer.", threadID);
        } else {
            return api.sendMessage("Please use '-' character to separate the question and answer.", threadID);
        }
    }

    const teachQuery = input[0].trim();
    const ansQuery = input[1].trim();

    try {
        const response = await axios.get(`http://nl2-4.deploy.sbs:2016/sim?teach=${encodeURIComponent(teachQuery)}&ans=${encodeURIComponent(ansQuery)}`);

        if (response.status >= 200 && response.status < 300) {
            api.sendMessage(`▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n╏ Query ↣ ${teachQuery}\n \n\n╏ Response ⇉ ${ansQuery}\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬`, threadID, messageID);
        } else {
            api.sendMessage("An error occurred while teaching.", threadID);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("An error occurred while fetching the data.", threadID);
    }
};
