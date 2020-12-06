function LoginEngine() {

    function isValidUID(userList, user) {
      return userList.indexOf(user) >= 0;
    }

    function isValidUIDAsync(userList, user, callback) {
        setTimeout(function(){
          callback(userList.indexOf(user) >= 0)
        }, 1);
      }


    return {
        isValidUID,
        isValidUIDAsync
    }

  }




  module.exports = LoginEngine();