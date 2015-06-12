var slackbot = require('./lib/bot');

var config = {
    bot_name: "GGServers",//Provide the name to post under
    token: 'xoxp-2601552165-2602210711-6050563841-6fe10b',
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
