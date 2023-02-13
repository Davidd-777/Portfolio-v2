const enBtn = document.querySelector(".en-btn");
const roBtn = document.querySelector(".ro-btn");
const enCV = document.querySelector(".en-cv");
const roCV = document.querySelector(".ro-cv");

enBtn?.addEventListener('click', function(){
enCV?.classList.add("show");
roCV?.classList.remove("show");

})

roBtn?.addEventListener('click', function(){
    enCV?.classList.remove("show");
    roCV?.classList.add("show");
    
    })