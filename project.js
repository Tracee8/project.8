<script>
const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function caculateTotal(){
    const billValue =billInput.value;
    const tipValue =tipInput.value;
    const totalValue =billInput *(1 + tipValue/100);
    totalSpan.innerText=totalValue.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal);
  </script>