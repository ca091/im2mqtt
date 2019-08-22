var ConfigIm = {
  sdkAppID: '1400246598',
  key: '036ca964ac6127427db84587bdf4c013d25923de03c4d0ca3e3e40b3b85578cc'
}

// 区分从后台获取还是前端配置
var Config = {
  useIm: false,
  useMqtt: true,
  im: {

  },
  mqtt: {
    instanceId: 'XXXX',//实例 ID，购买后从控制台获取
    host: 'XXXX.mqtt.aliyuncs.com',// 设置当前用户的接入点域名，接入点获取方法请参考接入准备章节文档，先在控制台创建实例
    port: 80,//WebSocket 协议服务端口，如果是走 HTTPS，设置443端口
    topic: 'XXXX',//需要操作的 Topic,第一级父级 topic 需要在控制台申请
    useTLS: false,//是否走加密 HTTPS，如果走 HTTPS，设置为 true
    accessKey: 'XXXXX',//账号的 AccessKey，在阿里云控制台查看
    secretKey: 'XXXXX',//账号的的 SecretKey，在阿里云控制台查看
    cleansession: true,
    groupId: 'GID_XXXX',//MQTT GroupID,创建实例后从 MQTT 控制台创建
    clientId: groupId + '@@@00001',//GroupId@@@DeviceId，由控制台创建的 Group ID 和自己指定的 Device ID 组合构成
    username: 'Signature|' + accessKey + '|' + instanceId,//username和 Password 签名模式下的设置方法，参考文档 https://help.aliyun.com/document_detail/48271.html?spm=a2c4g.11186623.6.553.217831c3BSFry7
    password: CryptoJS.HmacSHA1(clientId, secretKey).toString(CryptoJS.enc.Base64),
    reconnectTimeout: 2000,
  }
}