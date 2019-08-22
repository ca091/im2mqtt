//sdk登录
function webimLogin(loginInfo, listeners, options, successCB, errorCB) {
  webim.login(
      loginInfo, listeners, options,
      function(resp) {
        successCB && successCB(resp);
        loginInfo.identifierNick = resp.identifierNick; //设置当前用户昵称
        loginInfo.headurl = resp.headurl; //设置当前用户头像
      },
      function(err) {
        errorCB && errorCB(err);
      }
  );
}