document
  .getElementById("deposite-Btn")
  .addEventListener("click", function depositeAmount() {
    const depositeMoney = parseFloat(
      document.getElementById("userAmount").value
    );
    // console.log(depositeMoney);
    document.getElementById("userAmount").value = "";
    // console.log(typeof depositeMoney);
    const previousDeposite = parseFloat(
      document.getElementById("depositeValue").innerText
    );
    if (isNaN(depositeMoney)) {
      swal({
        title: "Please give an Amount First!",
        icon: "warning",
        button: "ok!",
      });
    } else {
      const depositeSum = depositeMoney + previousDeposite;

      document.getElementById("depositeValue").innerText = depositeSum;
      // console.log(depositeMoney, previousDeposite);
      // console.log(depositeSum);

      // Total Amount
      const previousTotal = parseFloat(
        document.getElementById("totalAmount").innerText
      );
      const totalBalance = previousTotal + depositeMoney;
      // console.log(totalBalance);

      document.getElementById("totalAmount").innerText = totalBalance;

      swal({
        title: "Depsoit Successfull!",
        icon: "success",
        button: "ok!",
      });
    }
  });
