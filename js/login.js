document
  .getElementById("submitBtn")
  .addEventListener("click", function userInfo() {
    const userEmail = document.getElementById("userEmail").value;
    console.log(userEmail);
    console.log(typeof userEmail);
    const userPassword = document.getElementById("userPassword").value;
    console.log(userPassword);

    if (userEmail === "myBank@gmail.com" && userPassword === "123456") {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successfull",
        showConfirmButton: false,
        timer: 1900,
      });
      window.location.href = "bank.html";
    } else {
      //   alert("Please Enter Your Valid Email or Password");

      Swal.fire({
        icon: "error",
        title: "Login Failed !!",
        text: "Please Enter Your Valid Password & Email !",
      });
    }
  });
