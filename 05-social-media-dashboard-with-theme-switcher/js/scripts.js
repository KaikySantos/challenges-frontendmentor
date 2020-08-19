function darkMode() {
    var body = document.getElementById('body');
    var btn = document.getElementById('button-dark-mode');
    var circle = document.getElementById('circle');
    var titlePrincipal = document.getElementById('title-principal');
    var subtitlePrincipal = document.getElementById('subtitle-principal');
    var titleSecundary = document.getElementById('title-secundary');
    var titleButton = document.getElementById('right');
    if(btn.style.justifyContent == "flex-start" || btn.style.justifyContent == ""){
        btn.style.justifyContent = "flex-end";
        circle.style.backgroundColor = "#1e202a";
        titlePrincipal.style.color = "white";
        subtitlePrincipal.style.color = "white";
        titleSecundary.style.color = "white";
        titleButton.style.color = "white";
        body.style.backgroundColor = "#1e202a";
        document.getElementById('section-top').classList.add('section-top-black'); 
        document.getElementById('section-bottom1').classList.add('section-bottom1-black'); 
        document.getElementById('section-bottom2').classList.add('section-bottom2-black'); 
    }else{
        btn.style.justifyContent = "flex-start";
        circle.style.backgroundColor = "white";
        titlePrincipal.style.color = "black";
        subtitlePrincipal.style.color = "black";
        titleSecundary.style.color = "#5a5a5a";
        titleButton.style.color = "black";
        body.style.backgroundColor = "white";
        document.getElementById('section-top').classList.remove('section-top-black'); 
        document.getElementById('section-bottom1').classList.remove('section-bottom1-black'); 
        document.getElementById('section-bottom2').classList.remove('section-bottom2-black'); 
    }

}