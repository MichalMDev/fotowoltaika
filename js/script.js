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
email.addEventListener('change', function () {
    const className = 'errorField';
    const mailReg = new RegExp('^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$', 'i');

    if (!mailReg.test(this.value)) {
        this.classList.add(className); //dodaję klasę do pola
    } else {
        this.classList.remove(className);
    }
});

// kalkulator - obliczenia

document.querySelector('.showcalculator').addEventListener('click', function () {
    let calc = document.querySelector('.calculatorResult');

    calc.style.height = "auto";
    calc.style.opacity = "1";

});
// rozwiniecie info - zrob


document.querySelector('.showMorePrivacy').addEventListener('click', function () {
    let privacInfo = document.querySelector('.privacyInfo');
    // document.querySelector('.privacyInfo').classList.toggle('hidden');
    if (privacInfo.style.height == 0) {
        privacInfo.style.height = "auto";
        privacInfo.style.opacity = "1";
    } else {

        privacInfo.style.height = null;
        privacInfo.style.opacity = null;
    }
});