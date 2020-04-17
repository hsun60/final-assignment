var display = {
  noShow: function() {
    var box = document.querySelectorAll('.box');
    for (var i = 0; i < box.length; i++) {
      box[i].style.display = 'none';
    }
  },
  show: function products(option) {
    switch (option) {
      case 'casual':
        var cshoe = document.querySelectorAll('#ca');

        for (let i = 0; i < cshoe.length; i++) {
          cshoe[i].style.display = 'block';
        }
        break;

      case 'boots':
        var bshoe = document.querySelectorAll('#bo');
        for (let i = 0; i < bshoe.length; i++) {
          bshoe[i].style.display = 'block';
        }
        break;

      case 'sneaker':
        var shoes = document.querySelectorAll('#sneaker3');
        for (let i = 0; i < shoes.length; i++) {
          shoes[i].style.display = 'block';
        }
        break;

      case 'running':
        var run = document.querySelectorAll('#yeezy');
        for (let i = 0; i < run.length; i++) {
          run[i].style.display = 'block';
        }
        break;

      case 'flat':
        var flatShoes = document.querySelectorAll('#flat_5');
        for (let i = 0; i < flatShoes.length; i++) {
          flatShoes[i].style.display = 'block';
        }
        break;
    }
  }
};

window.onload = function showProducts() {
  var casual = document.querySelector('#casual');
  var boots = document.querySelector('#boots');
  var sneaker = document.querySelector('#sneaker');
  var running = document.querySelector('#running');
  var flat = document.querySelector('#flat');
  casual.addEventListener('click', function() {
    display.noShow();
    display.show('casual');
  });
  boots.addEventListener('click', function() {
    display.noShow();
    display.show('boots');
  });
  sneaker.addEventListener('click', function() {
    display.noShow();
    display.show('sneaker');
  });
  running.addEventListener('click', function() {
    display.noShow();
    display.show('running');
  });
  flat.addEventListener('click', function() {
    display.noShow();
    display.show('flat');
  });
};
