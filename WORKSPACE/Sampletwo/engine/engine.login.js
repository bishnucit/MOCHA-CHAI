function LoginEngine() {

    function isValidUID(userList, user) {
      return userList.indexOf(user) >= 0;
    }

    return {
        isValidUID
    }

  }

  module.exports = LoginEngine();