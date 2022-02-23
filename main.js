let show = document.querySelector("p");
let show1 = document.querySelector("h2");

let basla = document.querySelector(".start");
let durdur = document.querySelector(".stop");
let reset = document.querySelector(".restart");

let i = 0;
let deneme;
let saatg=0;
let dakika=0;
let saniye=0;
function saat1() {
  deneme = setInterval(saat, 1000);

  function saat() {
    i++;
    saniye = i;
    if (saniye >59){
        i = 0;
        saniye = 0;
        dakika ++; 
        if (dakika>59){
          dakika=0;
          saatg++;
        }
    }
    
    show.textContent = saatg + " : " + dakika + " : " + saniye;
  }
}

basla.onclick = function() {
  saat1();
};

durdur.onclick = function() {
  clearInterval(deneme);
};

reset.onclick = function (){
clearInterval(deneme);
saatg=0;
dakika=0;
saniye=0;
i=0;
show.textContent = saatg + " : " + dakika + " : " + saniye;
};
