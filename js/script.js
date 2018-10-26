$(".burger").on("click", function () {
       $(".burger .fas, nav").toggleClass("off");
})

// scroolowanie

   $('nav a').on('click', function () {
    let goToSection = "#" + $(this).attr('class');
    $('nav').toggleClass('off');
    $('.burger .fas').toggleClass('off');
    $('body, html').animate({
     scrollTop: $(goToSection).offset().top - 93
    }, 500)
   })
  

   
   $('.scrollContact').on('click', function () {
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
// rozwiniecie info - zrob
document.getElementsByClassName('.showMorePrivacy').addEventListener("click", function(){
    document.getElementsByClassName('.privacyInfo').classList.toggleClass('off');
})
