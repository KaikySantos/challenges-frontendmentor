function change() {
    var btn = document.getElementById('btn');
    var priceBasic = document.getElementById("price-basic");
    var priceProfessional = document.getElementById("price-professional");
    var priceMaster = document.getElementById("price-master");
    if(btn.style.justifyContent == 'flex-end' || btn.style.justifyContent == ""){
        btn.style.justifyContent = 'flex-start';
        priceBasic.innerHTML = "199.99";
        priceProfessional.innerHTML = "249.99";
        priceMaster.innerHTML = "399.99";
    }else{
        btn.style.justifyContent = 'flex-end';
        priceBasic.innerHTML = "19.99";
        priceProfessional.innerHTML = "24.99";
        priceMaster.innerHTML = "39.99";
    }   
}