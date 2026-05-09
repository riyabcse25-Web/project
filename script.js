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
      addons.push(cb.nextSibling.textContent.trim());
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

document.querySelector("#contact form").addEventListener("submit", function(e) {

  e.preventDefault();

  let name = document.querySelector("input[type='text']").value;
  let mobile = document.querySelector("input[type='tel']").value;
  let email = document.querySelector("input[type='email']").value;

  if(name === "" || mobile === "" || email === "") {
    alert("Please fill all details!");
    return;
  }

  alert(
    "Thank You " + name + "!\n\n" +
    "Your coffee order has been placed successfully ☕"
  );

});

window.onload = updateOrder;

</script>
