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
const textfeild = document.getElementById("inputFeild");
const phoneInputField = document.getElementById("inMob");
const phoneInput = window.intlTelInput(phoneInputField, {
        preferredCountries: ["in"],
        geoIpLookup: "in",
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

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

function checkEmail(input) {
  // const re =
  //   /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(input, "Email is not valid");
    return false;
  }
}

//check userName
function checkFirstName(input) {
  const re = /^(?!.*([A-Za-z0-9])\1{2})[A-Za-z0-9][A-Za-z0-9]{3,15}$/;
  if (re.test(input.value)) {
    showSuccess(input);
    return true;
  } else {
    showError(input, `${getFieldName(input)} is not valid`);
    return false;
  }
}

function checkLastName(input) {
  const re = /^(?!.*([A-Za-z\.])\1{2})[A-Z|.][A-Za-z]{0,15}$/;
  if (re.test(input.value)) {
    showSuccess(input);
    return true;
  } else {
    showError(input, `${getFieldName(input)} is not valid`);
    return false;
  }
}

function checkFullName(input) {
  // const re = /(?=^.{0,20}$)^\S+[a-zA-Z-]+\s[a-zA-Z-]+\S+$/;
  const re = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,3}$/;;
  var texts =input.value.trim().split();
  console.log(texts);
  if (re.test(input.value)) {
    showSuccess(input);
    return true;
  } else {
    showError(input, `${getFieldName(input)} is not valid`);
    return false;
  }
}

function checkUserId(input) {
  // const re = /^(?!.*([A-Za-z0-9])\1{2})[A-Za-z0-9][A-Za-z0-9\.@_#-]{3,15}$/;
  const re =
    /^(?!.*([A-Za-z0-9\.@_#-])\1{2})[A-Za-z0-9\.@#-][A-Za-z0-9\.@_#-]{3,15}$/;
  if (re.test(input.value)) {
    showSuccess(input);
    return true;
  } else {
    showError(input, `${getFieldName(input)} is not valid`);
    return false;
  }
}

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

function checkurl(input) {
  const re =
    /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(input, "url is not valid");
    return false;
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
  var allowedExtensions = /(\.pdf|\.xlsx|\.csv|\.doc)$/i;

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

function validate() {
  checkRequired([
    fullName,
    fname,
    lname,
    userId,
    email,
    phone,
    password,
    password2,
    url,
  ]);
  checkFirstName(fname);
  checkLastName(lname);
  checkFullName(fullName);
  checkUserId(userId);
  checkEmail(email);
  checkPhoneNumber(phone);
  checkPassword(password);
  checkPasswordsMatch(password, password2);
  isGenderSelected();
  checkurl(url);
  // countWords(textfeild);
  fileValidation();
  imageValidation();
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
    form.submit();
  } else {
    e.preventDefault();
  }
});


