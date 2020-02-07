$(document).ready(function() {
  $("#btnReg").on("click", validateForm);
});
var registeredUsers = []; // this array stores valid usernames until the next pageload
var userPass = []; // new array for saving potential login info that array could be available for user to recover password

function validateForm(e) {
  e.preventDefault(); // stop the submit button from refreshing the page
  console.log("validating ....");

  console.log("user name: " + validateUsername());
  console.log("email: " + validateEmail());
  console.log("password: " + validatePassword());

  if (
    validateUsername() &&
    validateEmail() &&
    validatePassword() &&
    validatePhoneNumber() &&
    validateFirstName() &&
    validateLastName()
  ) {
    var _newUser = getUserDataObj();
    var userLogin = getUserLoginInfo(); // new logininfo to get pass and passconfirmation
    registeredUsers.push(_newUser);
    userPass.push(userLogin);
    renderRegisteredUsers();
    document.registration.reset(); // reset form input fields
  }
}

function getUserLoginInfo() {
  return {
    userName: get("username"),
    password: getPassword(),
    confirmPassword: get("confirmpassword")
  };
}

function getUserDataObj() {
  return {
    userName: get("username"),
    firstName: get("firstname"),
    lastName: get("lastname"),
    email: get("email"),
    phoneNumber: get("phonenumber")
  };
}

function renderRegisteredUsers() {
  document.getElementById("registered-users").innerHTML = "";

  registeredUsers.forEach(function(registeredUser) {
    var _newUser = document.createElement("li");
    _newUser.innerHTML = JSON.stringify(registeredUser);
    document.getElementById("registered-users").appendChild(_newUser);
  });
}

/**
 * this function supposely validates submitted username
 * @returns [Boolean] true when valid, false otherwise
 */
function validateUsername() {
  var _userName = get("username");

  return !checkSpace(_userName);
}

/**
 * this function supposely validates submitted username
 * @returns [Boolean] true when valid, false otherwise
 */
function validateFirstName() {
  var _firstName = get("firstname");

  return _firstName !== "";
}

/**
 * this function supposely validates submitted username
 * @returns [Boolean] true when valid, false otherwise
 */
function validateLastName() {
  var _lastName = getLastName();

  return _lastName !== "";
}

/**
 * this function supposely validates submitted username
 * @returns [Boolean] true when valid, false otherwise
 */
function validatePhoneNumber() {
  var _phoneNumber = get("phonenumber");

  return !isNaN(_phoneNumber);
}

/**
 * this function supposely validates submitted email
 * @returns [Boolean] true when valid, false otherwise
 */
function validateEmail() {
  var _email = get("email");

  if (checkSpace(_email) === true) {
    return false;
  }

  // check for @
  var atSymbol = _email.indexOf("@");
  if (atSymbol < 1) {
    return false;
  }

  // check if there is a dot located less than 2 symbols away from the @ sign
  var dot = _email.indexOf(".");
  if (dot <= atSymbol + 2) {
    return false;
  }

  // check that the dot is not at the end
  if (dot === _email.length - 1) {
    return false;
  }

  return true;
}

/**
 * this function supposely validates submitted password
 * if password and confirmPassword do not match, return false
 *
 * @returns [Boolean] true when valid, false otherwise
 */
function validatePassword() {
  var _password = getPassword();
  var _confirmPassword = get("confirmpassword");

  if (_password !== _confirmPassword) {
    return false;
  }

  if (_password.length < 8) {
    return false;
  }

  return true;
}

/**
 * this function supposely checks whether the sample is an empty string
 * or there is space within it
 * @param [String] sample text to be evaluated
 * @returns [Boolean] true when valid, false otherwise
 */
function checkSpace(sample) {
  return sample === "" || sample.indexOf(" ") > -1;
}

/**
 * this function looks under the form with name "registration"
 * look under the "username" input field and returns the value of it
 * returns nothing if no value is found
 *
 * @returns [Boolean] true when valid, false otherwise
 */

function get(abc) {
  if (typeof document.registration.email.value === "undefined") {
    return "";
  } else {
    return document.registration.email.value;
  }
}
