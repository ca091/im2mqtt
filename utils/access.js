function webimLogin(loginInfo, listeners, options, successCB, errorCB) {
  webim.login(
      loginInfo, listeners, options,
      function(resp) {
        console.log('iii webimLogin success')
        successCB && successCB(resp);
        loginInfo.identifierNick = resp.identifierNick; //设置当前用户昵称
        loginInfo.headurl = resp.headurl; //设置当前用户头像
      },
      function(err) {
        console.warn('iii webimLogin fail')
        errorCB && errorCB(err);
      }
  );
}

function webimLogout(successCB, errorCB) {
  webim.logout(
      function(resp) {
        console.log('iii webimLogout success')
        successCB && successCB(resp);
      },
      function(err) {
        console.warn('iii webimLogout fail')
        errorCB && errorCB(err);
      });
}