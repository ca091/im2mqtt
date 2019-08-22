var btnLogin = document.querySelector('.btn-login')
var btnLogout = document.querySelector('.btn-logout')
var btnCreate = document.querySelector('.btn-create')
var btnJoin = document.querySelector('.btn-join')
var btnQuit = document.querySelector('.btn-quit')
var btnSend = document.querySelector('.btn-send')
if (Config.useIm) {
  var userId = 'user' + Math.floor(Math.random() * 10000)
  var groupId = 'group001'
  var signInfo = genTestUserSig(userId)
  //当前用户身份
  var loginInfo = {
    'sdkAppID': signInfo.sdkAppID, //用户所属应用id,必填
    // 'accountType': accountType, //用户所属应用帐号类型, 已废弃
    'identifier': userId, //当前用户ID,必须是否字符串类型，必填
    'userSig': signInfo.userSig, //当前用户身份凭证，必须是字符串类型，必填
    'identifierNick': null, //当前用户昵称，不用填写，登录接口会返回用户的昵称，如果没有设置，则返回用户的id
    // 'headurl': 'img/me.jpg' //当前用户默认头像，选填，如果设置过头像，则可以通过拉取个人资料接口来得到头像信息
  };
  var options = {
    'isAccessFormalEnv': false, //是否访问正式环境，默认访问正式，选填
    'isLogOn': true //是否开启控制台打印日志,默认开启，选填
  }
  // 登录
  btnLogin.addEventListener('click', () => {
    webimLogin(loginInfo, listeners_im, options)
  })
  // 登出
  btnLogout.addEventListener('click', () => {
    webimLogout()
  })
  // 建群 - 可能不在前端创建
  btnCreate.addEventListener('click', () => {
    createBigGroup(groupId, loginInfo)
  })
  // 加群
  btnJoin.addEventListener('click', () => {
    applyJoinBigGroup(groupId)
  })
  // 退群
  btnQuit.addEventListener('click', () => {
    quitBigGroup(groupId)
  })
  // 发消息
  btnSend.addEventListener('click', () => {
    var msg = setMsg(groupId, loginInfo)
    setElem(msg, 'a text message')
    webim.sendMsg(msg, function(resp) {
      console.log('iii sendMsg success')
    }, function(err) {
      console.error('iii sendMsg fail')
    });
  })
}