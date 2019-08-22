//监听连接状态回调变化事件
var onConnNotify = function (resp) {
  var info;
  switch (resp.ErrorCode) {
    case webim.CONNECTION_STATUS.ON:
      webim.Log.warn('建立连接成功: ' + resp.ErrorInfo);
      break;
    case webim.CONNECTION_STATUS.OFF:
      info = '连接已断开，无法收到新消息，请检查下你的网络是否正常: ' + resp.ErrorInfo;
      webim.Log.warn(info);
      break;
    case webim.CONNECTION_STATUS.RECONNECT:
      info = '连接状态恢复正常: ' + resp.ErrorInfo;
      webim.Log.warn(info);
      break;
    default:
      webim.Log.error('未知连接状态: =' + resp.ErrorInfo);
      break;
  }
};

//监听直播聊天室新消息事件
//newMsgList 为新消息数组，结构为[Msg]
//监听大群新消息（普通，点赞，提示，红包）
function onBigGroupMsgNotify(newMsgList) {
  var newMsg;
  for (var i = newMsgList.length - 1; i >= 0; i--) { //遍历消息，按照时间从后往前
    newMsg = newMsgList[i];
    webim.Log.warn('receive a new group(AVChatRoom) msg: ' + newMsg.getFromAccountNick());
  }
}

//监听事件
var listeners_im = {
  "onConnNotify": onConnNotify //监听连接状态回调变化事件,必填
  ,
  "jsonpCallback": () => {} //IE9(含)以下浏览器用到的jsonp回调函数，
  ,
  "onBigGroupMsgNotify": onBigGroupMsgNotify //监听新消息(直播聊天室)事件，直播场景下必填
};