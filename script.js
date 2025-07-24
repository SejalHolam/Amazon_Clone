const imgs = document.querySelectorAll(".carousal-img");
const prev_btn = document.querySelector(".control_prev");
const next_btn = document.querySelector(".control_next");

let n = 0;

function changeCarousal() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}
changeCarousal();

prev_btn.addEventListener('click', (e)=>{
    if(n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeCarousal();
})

next_btn.addEventListener('click', (e)=>{
    if(n < imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    changeCarousal();
})