document.addEventListener("DOMContentLoaded", async function () {
	header_button = document.getElementById("header-button");
    hided = false
    header_button.addEventListener("click",  function () {
        header= document.getElementById("header")
        if (hided){
            header_animation_show(header)
        }else{
            header_animation_hide(header);
        }
    })
});


function header_animation_show(header){
    header.classList.add("header-animated-left")
    header.disabled = true
    header.addEventListener("animationend", () => {
        header.style.transform = "translateX(0)";
        setTimeout(function() {
            header_button.disabled = false
            hided = false
            header.classList.remove("header-animated-left")
        }, 300);
    });
}

function header_animation_hide(header){
    header.classList.add("header-animated-right")
    header.disabled = true
    header.addEventListener("animationend", () => {
        header.style.transform = "translateX(200px)"; 
        setTimeout(function() {
            header_button.disabled = false
            hided = true
            header.classList.remove("header-animated-right")
        }, 300);
    });
}