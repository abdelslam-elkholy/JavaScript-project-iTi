const validation = function () {
  // e.perventDefault();
  const nameForamt = /^[a-zA-Z ]{3,30}$/;
  const mobileFormat = /^((010)|(012)|(011)|(015))[0-9]{8}/;
  const emailFormat = /\w+@[A-Za-z]+.com/;

  const name = document.querySelector(".name-input").value;
  const phone = document.querySelector(".phone-input").value;
  const email = document.querySelector(".email-input").value;

  const phonTest = mobileFormat.test(phone);
  const nameTest = nameForamt.test(name);
  const emailTest = emailFormat.test(email);

  if (name == "" || nameTest == false) {
    alert("Please Inter valid name");
    return false;
  } else if (phone == "" || phonTest == false) {
    alert("please Inter valid phone number");
    return false;
  } else if (email == "" || emailTest == false) {
    alert("Please Inter a valid Email");

    return false;
  }

  // return true;
};

// submitBtn.addEventListener("click", function () {
//   alert("im working");
// });
// validation();
