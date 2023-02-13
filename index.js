var formName = document.getElementById("name");
var formEmail = document.getElementById("email");
var formSubject = document.getElementById("subject");
var formMessage = document.getElementById("message");
var serviceID = 'service_y688bf8';
var templateID = 'template_fbe1vtf';
var aboutMeTitle = document.querySelector(".about-me__title");
var aboutMeText = document.querySelector(".about-me__text");
var contactTitle = document.querySelector(".contact__title");
var contactText = document.querySelector(".contact__text");
var paperPlane = document.querySelector(".paper-plane");
var socials = document.querySelector(".socials-section");
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
var observerSlides = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("slide");
        }
        else {
            entry.target.classList.remove("slide");
        }
    });
});
observerSlides.observe(aboutMeTitle);
observerSlides.observe(aboutMeText);
observerSlides.observe(contactTitle);
observerSlides.observe(contactText);
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
observerOpacity.observe(paperPlane);
observerOpacity.observe(socials);
var project1 = document.querySelector(".project__1");
var project2 = document.querySelector(".project__2");
var project3 = document.querySelector(".project__3");
var project4 = document.querySelector(".project__4");
var observerProjects = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("slide-delay");
        }
        else {
            entry.target.classList.remove("slide-delay");
        }
    });
});
observerSlides.observe(project2);
observerSlides.observe(project3);
observerProjects.observe(project1);
observerProjects.observe(project4);
