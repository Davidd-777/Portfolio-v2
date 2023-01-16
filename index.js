var formName = document.getElementById("name");
var formEmail = document.getElementById("email");
var formSubject = document.getElementById("subject");
var formMessage = document.getElementById("message");
var serviceID = 'service_y688bf8';
var templateID = 'template_fbe1vtf';
function sendMail(params) {
    var tempParams = {
        name: formName.value,
        email: formEmail.value,
        subject: formSubject.value,
        message: formMessage.value
    };
    emailjs.send(serviceID, templateID, tempParams)
        .then(function (res) {
        console.log("succes", res);
    });
}
;
var sendBtn = document.querySelector(".btn-submit");
var thankYouMessage = document.querySelector(".thankyou-message");
var sendThankYou = function (e) {
    thankYouMessage === null || thankYouMessage === void 0 ? void 0 : thankYouMessage.classList.add('send-display-text');
    e.preventDefault();
    formName.value = "";
    formEmail.value = "";
    formSubject.value = "";
    formMessage.value = "";
};
sendBtn === null || sendBtn === void 0 ? void 0 : sendBtn.addEventListener('click', sendThankYou);
var aboutMeTitle = document.querySelector(".about-me__title");
var aboutMeText = document.querySelector(".about-me__text");
var contactTitle = document.querySelector(".contact__title");
var contactText = document.querySelector(".contact__text");
var paperPlane = document.querySelector(".paper-plane");
var socials = document.querySelector(".socials-section");
var observerLeft = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("left-slide");
        }
        else {
            entry.target.classList.remove("left-slide");
        }
    });
});
var observerRight = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("right-slide");
        }
        else {
            entry.target.classList.remove("right-slide");
        }
    });
});
var observerOpacity = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-plane");
        }
        else {
            entry.target.classList.remove("show-plane");
        }
    });
});
observerLeft.observe(aboutMeTitle);
observerLeft.observe(contactText);
observerRight.observe(aboutMeText);
observerRight.observe(contactTitle);
observerOpacity.observe(paperPlane);
observerOpacity.observe(socials);
