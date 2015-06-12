var slackbot = require('./lib/bot');

var config = {
    bot_name: "GGServers",//Provide the name to post under
    token: 'XXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXX',
    alias_maps: {
      "MGMT": ["ericl", "jacobe", "james", "justing"],
      "L2": ["david", "jadonm"],
    },

    helpName: "GGServers",
    verbose: true,
    emoji: ":slack:",
    link_separator: ", "// use \n if you want new lines
};

//DO NOT EDIT BELOW HERE
var slackbot = new slackbot.Bot(config);
slackbot.run();
