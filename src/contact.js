var inbox = function(e) {
  const order = document.querySelector('#orderNumber>input');
  if (e.target.value === 'problem') {
    order.classList.remove('hidden');
  } else {
    order.classList.add('hidden');
  }
};

window.onload = function() {
  var message = document.querySelectorAll('#checkNum > input');
  this.Array.from(message).map(element => element.addEventListener('click', inbox));
};
