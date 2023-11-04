function monthSum(arr) {
  arr.forEach((item, index) => {
    if (index === 0) {
      item.textContent = "$0";
    } else if (index === 1) {
      item.textContent = "$25";
    } else if (index === 2) {
      item.textContent = "$100";
    }
  });
}

function yearSum(arr) {
  arr.forEach((item, index) => {
    if (index === 0) {
      item.textContent = "$0";
    } else if (index === 1) {
      item.textContent = "$225";
    } else if (index === 2) {
      item.textContent = "$960";
    }
  });
}

function monthDate(arr) {
  arr.forEach((item) => {
    item.textContent = "/ Month";
  });
}

function yearDate(arr) {
  arr.forEach((item) => {
    item.textContent = "/ Year";
  });
}

export { monthSum, yearSum, monthDate, yearDate };
