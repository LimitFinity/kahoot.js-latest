const LiveBaseMessage = require("./LiveBaseMessage.js");

module.exports = class LiveNameratorPacket extends LiveBaseMessage{
  constructor(client, usingNamerator){
    super(client, "/service/controller", {
      id: 16,
      type: "message",
      gameid: client.gameid,
      host: "kahoot.it",
      content: JSON.stringify({
        usingNamerator: !!usingNamerator
      })
    });
  }
};
