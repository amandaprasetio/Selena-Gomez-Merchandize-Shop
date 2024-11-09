let fadeTarget = document.querySelector(".overlay");


function showLoading(){
    fadeTarget.style.display = "block";
}

function hideLoading() {
    let fadeEffect = setInterval(() => {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            fadeTarget.style.display = "none";
        }
    }, 100);
}
