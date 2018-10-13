$(".burger").on("click", function () {
       $(".burger .fas, nav").toggleClass("off");
})

// scroolowanie

//   $('#aboutUs').on('click', function () {
//    $('body, html').animate({
//     scrollTop: $('#aboutus').offset().top
//    }, 500)
//   })

  // $('.portfolio').on('click', function () {
  //  $('body, html').animate({
  //   scrollTop: $('.s2').offset().top
  //  }, 500)
  // })

  $('nav a').on('click', function () {
    const goToSection = "#" + $(this).attr('class');
    $('body, html').animate({
     scrollTop: $(goToSection).offset().top
    }, 500)
   })
  
// formularz


const input = document.querySelector('#email');
email.addEventListener('change', function() {
    const className = 'errorField';
    const mailReg = new RegExp('^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$', 'i');

    if (!mailReg.test(this.value)) {
        this.classList.add(className); //dodaję klasę do pola
    } else {
        this.classList.remove(className);
    }
});
