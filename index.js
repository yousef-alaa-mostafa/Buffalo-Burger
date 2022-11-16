cart = [];

let sandwich1_data = { name: "RASTAFARI CHICKEN", price: "70" };
let sandwich2_data = { name: "QUARTER BACK", price: "80" };
let sandwich3_data = { name: "OLD SCHOOL", price: "60" };

let sandwich1_quantity = 0;
let sandwich2_quantity = 0;
let sandwich3_quantity = 0;

let total_amount = 30;

function sand1() {
  sandwich1_quantity++;
  console.log(sandwich1_quantity);
  alert("Item add successfuly");
}

function sand2() {
  sandwich2_quantity++;
  console.log(sandwich2_quantity);
  alert("Item add successfuly");
}

function sand3() {
  sandwich3_quantity++;
  console.log(sandwich3_quantity);
  alert("Item add successfuly");
}

function printCheque() {
  document.getElementById("cheque").style.display = "block";

  if (
    sandwich1_quantity === 0 &&
    sandwich2_quantity === 0 &&
    sandwich3_quantity === 0
  ) {
    alert("no item was selecetd");
  } else {
    if (sandwich1_quantity === 0) {
      document.getElementById("s1").style.display = "none";
    } else {
      document.getElementById("s1").style.display = "flex";
      document.getElementById("sand_1_qty").innerHTML = sandwich1_quantity;
    }

    if (sandwich2_quantity === 0) {
      document.getElementById("s2").style.display = "none";
    } else {
      document.getElementById("s2").style.display = "flex";
      document.getElementById("sand_2_qty").innerHTML = sandwich2_quantity;
    }

    if (sandwich3_quantity === 0) {
      document.getElementById("s3").style.display = "none";
    } else {
      document.getElementById("s3").style.display = "flex";
      document.getElementById("sand_3_qty").innerHTML = sandwich3_quantity;
    }
    total_amount =
      sandwich1_quantity * 70 +
      sandwich2_quantity * 80 +
      sandwich3_quantity * 60;
    document.getElementById("total_amount").innerHTML = total_amount;
  }
}

function confirmHandler() {
  document.getElementById("cheque").style.display = "none";
  sandwich1_quantity = 0;
  sandwich2_quantity = 0;
  sandwich3_quantity = 0;
  alert("order confirmed");
}
