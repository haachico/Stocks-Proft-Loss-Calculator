const initialInput = document.querySelector("#initial-input");
const qtyInput = document.querySelector("#qty-input");
const currInput = document.querySelector("#curr-input");
const submitButton = document.querySelector(".submit-btn");
const output = document.querySelector(".output");

function calcProfitAndLoss(initialPrice, qtyOfStock, currPrice) {
  if (initialPrice > currPrice) {
    const loss = (initialPrice - currPrice) * qtyOfStock;
    const lossPercent = (loss / initialPrice) * 100;
    const message = `Hey you have made a loss of Rs ${loss} and your loss percentage is ${lossPercent}%`;

    return message;
  } else if (currPrice > initialPrice) {
    const profit = (currPrice - initialPrice) * qtyOfStock;
    const proftPercent = (profit / initialPrice) * 100;
    const message = `Yay! you have made a profit of Rs ${profit} and your profit percentage is ${proftPercent}%`;

    return message;
  } else {
    const message = `You have neither made a profit nor a loss 😐`;

    return message;
  }
}

function clickHandler() {
  //Retrieve values from the input box
  const initialPrice = Number(initialInput.value);
  const qtyOfStock = Number(qtyInput.value);
  const currPrice = Number(currInput.value);
  const result = calcProfitAndLoss(initialPrice, qtyOfStock, currPrice);

  output.innerText = result;
}

// calcProfitAndLoss(10, 10, 20);
submitButton.addEventListener("click", clickHandler);
// // do we need to pass arguments here?

function sumOfValues(a, b) {
  const sumVal = a + b;
  return sumVal;
}

function mulOfVal(a, b) {
  const val = a * b;
  return val;
}
