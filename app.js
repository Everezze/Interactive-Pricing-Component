const discount= document.getElementById('discount');
const toggleButton= document.getElementById('toggleButton');
const toggleButtonInnerCircle=document.getElementById('toggleCircle');


window.addEventListener('resize', function(){

    if(window.innerWidth >= 782){
        discount.innerHTML = "-25% discount";
    }
    else{discount.innerHTML='-25%';}

    //There might be unnecessary use of this event as not everyone will resize its window.
    //Just putting the condition might be a better solution. 
});

window.addEventListener('load', function(){

    if(window.innerWidth >= 782){
        discount.innerHTML = "-25% discount";
    }
    else{discount.innerHTML='-25%';}
})

toggleButton.addEventListener('click', function(){
    toggleButton.classList.toggle('active');

    if(toggleButton.classList.contains('active')){
        console.log("entered condition")
        toggleButtonInnerCircle.style.marginLeft=`calc(100% - 15px)`;
    }
    else{toggleButtonInnerCircle.style.marginLeft='0';}
});