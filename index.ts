const formName = (<HTMLInputElement>document.getElementById("name"));

const formEmail = (<HTMLInputElement>document.getElementById("email"));

const formSubject = (<HTMLInputElement>document.getElementById("subject"));

const formMessage = (<HTMLInputElement>document.getElementById("message"));

const serviceID ='service_y688bf8';
const templateID='template_fbe1vtf';

const aboutMeTitle = (<HTMLInputElement>document.querySelector(".about-me__title"));

const aboutMeText = (<HTMLInputElement>document.querySelector(".about-me__text")); 

const contactTitle = (<HTMLInputElement>document.querySelector(".contact__title")); 

const contactText = (<HTMLInputElement>document.querySelector(".contact__text")); 

const paperPlane = (<HTMLInputElement>document.querySelector(".paper-plane")); 

const socials = (<HTMLInputElement>document.querySelector(".socials-section")); 


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


const observerSlides = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("slide")
        } else {
            entry.target.classList.remove("slide")
        }
    })
})

observerSlides.observe(aboutMeTitle);
observerSlides.observe(aboutMeText);
observerSlides.observe(contactTitle);
observerSlides.observe(contactText);


const observerOpacity = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-plane")
        } else {
            entry.target.classList.remove("show-plane")
        }
    })
})

observerOpacity.observe(paperPlane);
observerOpacity.observe(socials);



const project1 = (<HTMLInputElement>document.querySelector(".project__1"));
const project2 = (<HTMLInputElement>document.querySelector(".project__2"));
const project3 = (<HTMLInputElement>document.querySelector(".project__3"));
const project4 = (<HTMLInputElement>document.querySelector(".project__4"));

const observerProjects = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("slide-delay")
        } else {
            entry.target.classList.remove("slide-delay")
        }
    })
})

observerSlides.observe(project2);
observerSlides.observe(project3);
observerProjects.observe(project1);
observerProjects.observe(project4);