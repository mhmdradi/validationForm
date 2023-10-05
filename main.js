function validationForm() {
  let UserName = document.getElementById("UserName").value;
  let email = document.getElementById("E-mail").value;

  let phone = document.getElementById("Phone").value;

  let error = document.getElementById("error");
  let text = "";

  if (UserName.length < 1) {
    text = "Please Enter A Valid Username";
    error.innerHTML = text;
    return false;
  } else if (email.indexOf("@") == -1) {
    text = "Please Enter A Valid Email";
    error.innerHTML = text;
    return false;
  } else if (isNaN(phone) < 11) {
    text = "Please Enter A Valid Phone";
    error.innerHTML = text;
    return false;
  } else {
    alert("Done");
    return true;
  }
}
