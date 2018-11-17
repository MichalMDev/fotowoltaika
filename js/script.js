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

$('.scrollResult').on('click', function () {
    const goToSection = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top-93
    }, 500)
})

// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
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

document.querySelector('.scrollResult').addEventListener('click', function () {
    let calc = document.querySelector('.calculatorResult');

    calc.style.height = "auto";
    calc.style.opacity = "1";

    let cost = document.getElementById('monthlyCost').value;
    let yearlyCost = cost*12;
    document.getElementsByClassName('yearlyCost')[0].innerHTML = yearlyCost + " zł";

    let yearlyCost25 = (cost*12)*25;
    document.getElementsByClassName('25yearsCost')[0].innerHTML = yearlyCost25 + " zł";

    let solarsCost = []; //uzupelnic ceny paneli

    // let calcProfit = (cost*12)*25 - ;
    document.getElementsByClassName('calcProfit')[0].innerHTML = calcProfit + " zł";
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