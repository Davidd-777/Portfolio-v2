const formName = (<HTMLInputElement>document.getElementById("name"));

const formEmail = (<HTMLInputElement>document.getElementById("email"));

const formSubject = (<HTMLInputElement>document.getElementById("subject"));

const formMessage = (<HTMLInputElement>document.getElementById("message"));

const serviceID ='service_y688bf8';
const templateID='template_fbe1vtf';

function sendMail (params){
    let tempParams = {
        name: formName.value,

        email: formEmail.value,

        subject: formSubject.value,

        message: formMessage.value

    };


emailjs.send(serviceID,templateID,tempParams)
.then(res => {
    console.log("succes",res);
})
};

const sendBtn = (<HTMLInputElement>document.querySelector(".btn-submit"));
const thankYouMessage = (<HTMLInputElement>document.querySelector(".thankyou-message"));

const sendThankYou = function(e){
    thankYouMessage?.classList.add('send-display-text');
    e.preventDefault();
    formName.value = "";
    formEmail.value = "";
    formSubject.value = "";
    formMessage.value = "";

}

sendBtn?.addEventListener('click', sendThankYou);




const aboutMeTitle = (<HTMLInputElement>document.querySelector(".about-me__title"));

const aboutMeText = (<HTMLInputElement>document.querySelector(".about-me__text")); 

const contactTitle = (<HTMLInputElement>document.querySelector(".contact__title")); 

const contactText = (<HTMLInputElement>document.querySelector(".contact__text")); 

const paperPlane = (<HTMLInputElement>document.querySelector(".paper-plane")); 

const socials = (<HTMLInputElement>document.querySelector(".socials-section")); 

const observerLeft = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("left-slide")
        } else {
            entry.target.classList.remove("left-slide")
        }
    })
})

const observerRight = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("right-slide")
        } else {
            entry.target.classList.remove("right-slide")
        }
    })
})

const observerOpacity = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-plane")
        } else {
            entry.target.classList.remove("show-plane")
        }
    })
})



observerLeft.observe(aboutMeTitle);
observerLeft.observe(contactText);

observerRight.observe(aboutMeText);
observerRight.observe(contactTitle);

observerOpacity.observe(paperPlane);
observerOpacity.observe(socials);