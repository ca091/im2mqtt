function send(mqtt, is_p2p) {
  var message
  if (is_p2p) {
    //发送 P2P 消息，topic 设置方式参考https://help.aliyun.com/document_detail/96176.html?spm=a2c4g.11186623.6.586.694f7cb4oookL7
    message = new Paho.MQTT.Message("Hello mqtt P2P Msg!!");//set body
    message.destinationName = Config.mqtt.topic + "/p2p/" + clientId;// set topic
  } else {
    message = new Paho.MQTT.Message("Hello mqtt!!");//set body
    message.destinationName = Config.mqtt.topic;// set topic
  }
  mqtt.send(message);
}