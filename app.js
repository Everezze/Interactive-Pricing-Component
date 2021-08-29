const discount= document.getElementById('discount');


window.addEventListener('resize', function(){

    if(window.innerWidth >= 782){
        discount.innerHTML = "-25% discount";
    }
    else{discount.innerHTML='-25%';}

})


