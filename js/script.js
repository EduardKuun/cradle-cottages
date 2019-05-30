/* NAVBAR */
$(".navbar-nav>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

window.onscroll = function () {
  let scrolledFromTop = window.pageYOffset;
  if (scrolledFromTop >= 70) {
    document.querySelector('.navbar').style.cssText = "padding: 0 10px !important;";
    document.querySelector('.navbar-brand img').style.cssText = "padding: 5px 10px !important;";
    document.querySelectorAll('.nav-link').forEach(function(item){
      item.style.padding = "40px .5rem 40px .5rem";
    });
  } else {
    document.querySelector('.navbar').style.cssText = "padding: 15px 10px 0 10px !important;";
    document.querySelector('.navbar-brand img').style.cssText = "padding: 5px 5px !important;";
    document.querySelectorAll('.nav-link').forEach(function(item){
      item.style.padding = "40px .5rem 50px .5rem";
    });

  }
}

/*COPYRIGHT YEAR*/
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
document.getElementById('currentYear').textContent = currentYear;