//创建群
function createBigGroup(groupId, loginInfo, successCB, errorCB) {
  console.log('createBigGroup', loginInfo)
  var options = {
    'GroupId': groupId,
    'Owner_Account': loginInfo.identifier,
    'Type': 'AVChatRoom', // 房间类型
    'Name': 'DemoGroup',
    'MemberList': [],
    "ApplyJoinOption": "FreeAccess"  // 申请加群处理方式（选填）
  };
  webim.createGroup(
      options,
      function (resp) {
        console.info( 'iii createBigGroup success' )
        successCB && successCB(resp);
      },
      function (err) {
        console.error(err.ErrorInfo);
        errorCB && errorCB(err);
      }
  );
}

//进入大群
function applyJoinBigGroup(groupId, successCB, errorCB) {
  var options = {
    'GroupId': groupId
  };
  webim.applyJoinBigGroup(
      options,
      function (resp) {
        if (resp.JoinedStatus && resp.JoinedStatus === 'JoinedSuccess') {
          webim.Log.info('iii进群成功');
          successCB && successCB(resp);
        } else {
          console.error('iii进群失败');
        }
      },
      function (err) {
        console.error(err.ErrorInfo);
        errorCB && errorCB(err);
      }
  );
}

//退出大群
function quitBigGroup(groupId) {
  var options = {
    'GroupId': groupId
  };
  webim.quitBigGroup(
      options,
      function (resp) {
        webim.Log.info('iii退群成功');
        //webim.Log.error('进入另一个大群:'+avChatRoomId2);
        //applyJoinBigGroup(avChatRoomId2);//加入大群
      },
      function (err) {
        console.error(err.ErrorInfo);
      }
  );
}