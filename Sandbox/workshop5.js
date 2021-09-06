function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
      // SOLUTION GOES HERE
        let goodIds = goodUsers.map(x => x.id);
        let nonValid = submittedUsers.filter(x=> !goodIds.includes(x.id));
        return nonValid.length == 0;
    };
  }
  
  module.exports = checkUsersValid