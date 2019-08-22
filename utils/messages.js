// 限定为群聊
function setMsg(groupId, loginInfo){
  let selType = webim.SESSION_TYPE.GROUP
  let selToID = groupId
  let selSess = new webim.Session(selType, selToID, selToID, Math.round(new Date().getTime() / 1000));
  let isSend = true;//是否为自己发送
  let seq = -1;//消息序列，-1 表示 SDK 自动生成，用于去重
  let random = Math.round(Math.random() * 4294967296);//消息随机数，用于去重
  let msgTime = Math.round(new Date().getTime() / 1000);//消息时间戳
  return new webim.Msg(selSess, isSend, seq, random, msgTime, loginInfo.identifier, webim.GROUP_MSG_SUB_TYPE);
}

// 设置消息体
function setElem(msg, data){
  if(typeof data === 'string'){
    msg.addText(new webim.Msg.Elem.Text(data))
  }else{
    msg.addCustom(new webim.Msg.Elem.Custom(undefined, data.desc, data.ext));
  }
  return msg
}