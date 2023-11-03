export function switchRate(parent, monthSum, yearSum, monthDate, yearDate) {
  const switchInput = document.querySelector("#check");
  const rateSum = parent.querySelectorAll(".price-sum");
  const rateDate = parent.querySelectorAll(".price-date");

  switchInput.addEventListener("change", (event) => {
    if (switchInput.checked) {
      yearSum(rateSum);
      yearDate(rateDate);
    } else {
      monthSum(rateSum);
      monthDate(rateDate);
    }
  });
}
