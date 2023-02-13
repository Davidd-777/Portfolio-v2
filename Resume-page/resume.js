var enBtn = document.querySelector(".en-btn");
var roBtn = document.querySelector(".ro-btn");
var enCV = document.querySelector(".en-cv");
var roCV = document.querySelector(".ro-cv");
enBtn === null || enBtn === void 0 ? void 0 : enBtn.addEventListener('click', function () {
    enCV === null || enCV === void 0 ? void 0 : enCV.classList.add("show");
    roCV === null || roCV === void 0 ? void 0 : roCV.classList.remove("show");
});
roBtn === null || roBtn === void 0 ? void 0 : roBtn.addEventListener('click', function () {
    enCV === null || enCV === void 0 ? void 0 : enCV.classList.remove("show");
    roCV === null || roCV === void 0 ? void 0 : roCV.classList.add("show");
});
