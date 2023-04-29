const ctx = document.getElementById("myChart");

var chart = new Chart(ctx, {
  type: "polarArea",
  data: {
    labels: ["Total Balance", "Deposit", "Withdraw"],
    datasets: [
      {
        label: "৳",
        data: [0, 0, 0],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const addDeposite = document.getElementById("deposite-Btn");
addDeposite.addEventListener("click", function () {
  const depositeAmount = parseFloat(
    document.getElementById("depositeValue").innerText
  );
  const totalBalance = parseFloat(
    document.getElementById("totalAmount").innerText
  );

  const data = chart.data.datasets[0].data;
  data[1] = depositeAmount;
  data[0] = totalBalance;
  chart.update();
  console.log(data);
});

const withdrawAmount = document.getElementById("withdraw-btn");
withdrawAmount.addEventListener("click", function () {
  const withdrawValue = parseFloat(
    document.getElementById("withdrawPrevious").innerText
  );
  const totalBalance = parseFloat(
    document.getElementById("totalAmount").innerText
  );
  const data = chart.data.datasets[0].data;
  data[2] = withdrawValue;
  data[0] = totalBalance;
  chart.update();
});
