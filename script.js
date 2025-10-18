document.getElementById("contactForm").onsubmit = function(event) {
  event.preventDefault();
  alert("Your inquiry has been submitted!");
};

document.getElementsByTagName("tr")[1].onclick = function() {
  alert("Cupcake sold out");
};
