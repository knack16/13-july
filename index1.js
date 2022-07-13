const form = document.getElementById("form");
const fullName = document.getElementById("fullName");
const fname = document.getElementById("firstName");
const lname = document.getElementById("lastName");
const userId = document.getElementById("userId");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const url = document.getElementById("url");
const textbox = document.getElementById("inputFeild");

//display eror msg and class
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//display suucess and add success class
function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = "form-control success";
}

//check email
function checkEmail(input) {
  const re =
    /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(input, "Email is not valid");
    return false;
  }
}

//check userName
function checkUserName(input) {
  const re = /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/;
  if (re.test(input.value)) {
    showSuccess(input);
    return true;
  } else {
    showError(input, `${getFieldName(input)} is not valid`);
    return false;
  }
}

function checkUserId(input) {
  const re = /^[A-Z|0-9][a-z|0-9]+$/;
  if (re.test(input.value)) {
    showSuccess(input);
    return true;
  } else {
    showError(input, `${getFieldName(input)} is not valid`);
    return false;
  }
}

// function checkUrl(input) {
//   const re =
//     /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
//   if (re.test(input.value)) {
//     showSuccess(input);
//     return true;
//   } else {
//     showError(input, `${getFieldName(input)} is not valid`);
//     return false;
//   }
// }

//check phone number
function checkPhoneNumber(input) {
  const re = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(input, "Phone Number is not valid");
    return false;
  }
}

//check password
function checkPassword(input) {
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{2,15}$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(
      input,
      "invalid password use Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special characte"
    );
    return false;
  }
}

// check passwords match

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
    return false;
  } else if (input2.value == "") {
    showError(input2, "Passwords do not match");
    return false;
  } else {
    showSuccess(input2);
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
      return false;
    } else {
      // showSuccess(input);
      return true;
    }
  });
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function avoidSpace(event) {
  var k = event ? event.which : window.event.keyCode;
  if (k == 32) return false;
}

function imageValidation() {
  var fileInput = document.getElementById("imagefile");

  var filePath = fileInput.value;

  // Allowing file type
  var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

  if (!allowedExtensions.exec(filePath)) {
    alert("Invalid file type");
    fileInput.value = "";
    return false;
  } else {
    // Image preview
    if (fileInput.files && fileInput.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("imagePreview").innerHTML =
          '<img src="' + e.target.result + '"/>';
      };

      reader.readAsDataURL(fileInput.files[0]);
    }
  }
}

function fileValidation() {
  var fileInput = document.getElementById("docfile");

  var filePath = fileInput.value;

  // Allowing file type
  var allowedExtensions = /(\.pdf|\.xls|\.csv|\.doc)$/i;

  if (!allowedExtensions.exec(filePath)) {
    alert("Invalid file type");
    fileInput.value = "";
    return false;
  } else {
    // Image preview
    if (fileInput.files && fileInput.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("imagePreview").innerHTML =
          '<img src="' + e.target.result + '"/>';
      };

      reader.readAsDataURL(fileInput.files[0]);
    }
  }
}

// function checkProfession() {
//   var checkProfessions = document.getElementById("professions");
//   if(checkProfessions.value==""){
//     showError(checkProfessions,"please select any value");
//     return false;
//   }else{
//     return true;
//   }
// }

// function countWords(input) {

//   // Get the input text value
//   var text = document
//       .getElementById("inputField").value;

//   // Initialize the word counter
//   var numWords = 0;

//   // Loop through the text
//   // and count spaces in it
//   for (var i = 0; i < text.length; i++) {
//       var currentCharacter = text[i];

//       // Check if the character is a space
//       if (currentCharacter == " ") {
//           numWords += 1;
//       }
//   }

//   // Add 1 to make the count equal to
//   // the number of words
//   // (count of words = count of spaces + 1)
//   numWords += 1;

//   // Display it as output
//   if (numWords === ""){
//     showError(input,"Please enter more than 50 words");
//     return false;
//   }else if(numWords<50){
//     showError(input,"Please enter more than 50 words");
//     return false;
//   }else{
//     showSuccess(input);
//     return true;
//   }
// }

function validate() {
  checkUserName(fullName);
  checkUserName(fname);
  checkUserName(lname);
  checkUserId(userId);
  checkEmail(email);
  checkPhoneNumber(phone);
  checkPassword(password);
  checkPasswordsMatch(password, password2);
  // checkProfession();
  isGenderSelected();
  // checkUrl(url);
  // countWords(textbox);
  // fileValidation();
  // imageValidation();
  checkRequired([
    fullName,
    fname,
    lname,
    userId,
    email,
    phone,
    password,
    password2
  ]);
}

function isGenderSelected() {
  var genderMale = document.getElementById("radio1").checked;
  var genderFemale = document.getElementById("radio2").checked;
  var genderOther = document.getElementById("radio3").checked;
  if (genderFemale || genderMale || genderOther) {
    document.getElementById("showGenderError").innerHTML = "";
    return true;
  } else {
    document.getElementById("showGenderError").innerHTML =
      "Please select your gender!";
    document.getElementById("showGenderError").style.color = "tomato";
    return false;
  }
}

function addtostorage() {
  localStorage.setItem("First Name", fname.value);
  localStorage.setItem("last Name", lname.value);
  localStorage.setItem("Email", email.value);
  localStorage.setItem("Phone Number", phone.value);
  localStorage.setItem("Password", password.value);
}

function isFormValid() {
  const inputContainers = form.querySelectorAll(".form-control");
  let result = true;
  inputContainers.forEach((container) => {
    if (container.classList.contains("error")) {
      result = false;
    }
  });
  return result;
}

// Event listeners
form.addEventListener("submit", function (e) {
  validate();
  if (isFormValid() == true) {
    addtostorage();
    form.submit();
  } else {
    e.preventDefault();
  }
});
