var banner = document.querySelector('.banner-destaque img');
var banners = ['img/destaque1.png', 'img/destaque2.png'];

var bannerAtual = 0;

function trocaBanner(){
    bannerAtual++;
    if(bannerAtual == banners.length){
        bannerAtual = 0;
    }
    banner.src = banners[bannerAtual];
}

//executa uma função a cada x milisegundos
setInterval(trocaBanner, 4000);






