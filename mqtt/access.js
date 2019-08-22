function MQTTconnect() {
  var mqtt = new Paho.MQTT.Client(
      Config.mqtt.host,//MQTT 域名
      Config.mqtt.port,//WebSocket 端口，如果使用 HTTPS 加密则配置为443,否则配置80
      Config.mqtt.clientId//客户端 ClientId
  );
  var options = {
    timeout: 3,
    mqttVersion: 4,
    onSuccess: () => {
      console.log('mmm connect success')
      // Connection succeeded; subscribe to our topic
      mqtt.subscribe(Config.mqtt.topic, {qos: 0});
    },
    onFailure: function (message) {
      console.warn('mmm connect failure')
      setTimeout(MQTTconnect, Config.mqtt.reconnectTimeout);
    }
  };
  mqtt.onConnectionLost = onConnectionLost;
  mqtt.onMessageArrived = onMessageArrived;
  if (Config.mqtt.username !== null) {
    options.userName = Config.mqtt.username;
    options.password = Config.mqtt.password;
    options.useSSL = Config.mqtt.useTLS;//如果使用 HTTPS 加密则配置为 true
  }
  mqtt.connect(options);
}

function onConnectionLost(response) {
  console.log('mmm connectionLost')
  setTimeout(MQTTconnect, Config.mqtt.reconnectTimeout);
}

function onMessageArrived(message) {
  var topic = message.destinationName;
  var payload = message.payloadString;
  console.log("recv msg : " + topic + "   " + payload);
}