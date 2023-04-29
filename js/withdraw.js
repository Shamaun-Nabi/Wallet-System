//Step 1 : Click handeler Button used for Witdraw
// step 2: Get value from the input field and Change The Type (String->Number)

document
  .getElementById("withdraw-btn")
  .addEventListener("click", function withdrawInfo() {
    // from the Input Filed
    const withdrawAmount = parseFloat(
      document.getElementById("withdrawValue").value
    );
    document.getElementById("withdrawValue").value = "";
    // From the ViewFiled
    const withdrawPrevious = parseFloat(
      document.getElementById("withdrawPrevious").innerText
    );
    const totalAmount = parseFloat(
      document.getElementById("totalAmount").innerText
    );

    if (isNaN(withdrawAmount)) {
      swal({
        title: "Please give an Amount First!",
        icon: "warning",
        button: "ok!",
      });
    } else {
      const withdrawSum = withdrawPrevious + withdrawAmount;
      if (withdrawAmount <= totalAmount) {
        document.getElementById("withdrawPrevious").innerText = withdrawSum;
      }

      if (withdrawAmount <= totalAmount) {
        const withdrawMoney = totalAmount - withdrawAmount;
        document.getElementById("totalAmount").innerText =
          withdrawMoney.toFixed(2);
        swal({
          title: "Withdraw Complete!",
          icon: "success",
          button: "ok!",
        });
      } else {
        swal({
          title: "Your Balance Is Low!",
          icon: "error",
          button: "ok!",
        });
      }
    }
  });
