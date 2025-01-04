const draw_btn = document.getElementById("btn");
const back_btn = document.getElementById("back_btn");
const result_pic = document.getElementById("result");

draw_btn.addEventListener("click",()=>{
    var result_list_ja = [
        "daikiti_ja.png",
        "tyuukiti_ja.png",
        "syoukiti_ja.png",
        "kiti_ja.png",
        "suekiti_ja.png",
        "kyou_ja.png"
    ]

    var rnd = Math.floor(Math.random() * result_list_ja.length);

    result_pic.src = result_list_ja[rnd];

    draw_btn.style.display = "none";
    back_btn.style.display = "flex";
},{once:true});

back_btn.addEventListener("click",()=>{
    window.location.href = "https://yamatoaita.github.io/hp.github.io/";
},{once:true})