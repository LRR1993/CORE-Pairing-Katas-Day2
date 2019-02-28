/*
  The function checkUsernames should take an array of usernames and return true if they are all valid and false if any are not valid.

  A valid username:

  - is at least 5 characters long //done
  - may only contain lowercase letters, numbers and underscores
  - is no longer than 20 characters //done
*/

function checkUsernames(user) {
  console.log(/^[_a-z0-9]{5,20}$/g.test(user));
  return /^[_a-z0-9]{5,20}$/g.test(user);
}

module.exports = checkUsernames;
