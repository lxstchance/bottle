window.onload = function () {

    var click = document.querySelector('.navbar-toggler');
    var navbar = document.querySelector('.navbar');
    var topInner = document.querySelector('.top__inner');

    click.onclick = function() {
      navbar.classList.toggle("change__navbar");
      topInner.classList.toggle("top__inner-change");
    }
}
