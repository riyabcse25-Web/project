<script>
function updateOrder() {
  let coffee = document.getElementById("coffee");
  let coffeePrice = parseInt(coffee.value);
  let coffeeName = coffee.options[coffee.selectedIndex].text;

  let checkboxes = document.querySelectorAll("input[type='checkbox']");
  let addons = [];
  let addonTotal = 0;

  checkboxes.forEach(cb => {
    if (cb.checked) {
      addons.push(cb.parentElement.textContent.trim());
      addonTotal += parseInt(cb.value);
    }
  });

  let qty = parseInt(document.getElementById("qty").value);

  let total = (coffeePrice + addonTotal) * qty;

  document.getElementById("summaryText").innerHTML =
    "Coffee: " + coffeeName + "<br>" +
    "Add-ons: " + (addons.length ? addons.join(", ") : "None") + "<br>" +
    "Quantity: " + qty;

  document.getElementById("total").innerText = total;
}
</script>
