function LoginEngine() {

    var userList

    function isValidUID(userList, user) {
      return userList.indexOf(user) >= 0;
    }

    function isValidUIDAsync(userList, user, callback) {
        setTimeout(function(){
          callback(userList.indexOf(user) >= 0)
        }, 1500);
      }

    function loadUserList(users){
        userList = users;
      }

    function isValidPromise(user){
        return new Promise(function(resolve){
            setTimeout(function(){resolve(userList.indexOf(user) >= 0)}, 10);
        });
      }


    return {
        isValidUID,
        isValidUIDAsync,
        isValidPromise,
        loadUserList
    }

  }




  module.exports = LoginEngine();