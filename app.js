const discount= document.getElementById('discount');
const toggleButton= document.getElementById('toggleButton');
const toggleButtonInnerCircle=document.getElementById('toggleCircle');
const toggleContainer= document.getElementById('toggleContainer');
const yearlyBilling= document.getElementById('yearlyBilling');
const slider= document.getElementById('sliderRange');
const price= document.getElementById('price');


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

        discount.style.display='inline';
        toggleContainer.style.padding='0';
    }
    else{
        toggleButtonInnerCircle.style.marginLeft='0';
        discount.style.display='none';
        toggleContainer.style.padding='0 1rem';
    }

    if(toggleButton.classList.contains('active') && window.innerWidth >=782 || window.innerWidth<782){
        console.log("aa");
        yearlyBilling.style.marginRight="0";
    }
    else if(!toggleButton.classList.contains('active') && window.innerWidth >=782){
        yearlyBilling.style.marginRight='205px';
    }
});

slider.addEventListener('change', function(){
    let step=slider.getAttribute('step');
    console.log('zerzef');
    if(parseFloat(slider.value)>=16 && slider.value<24){
        step = 8;
        console.log(`ici step fait ${step}`);
        slider.setAttribute('step',step);
    }
    else if(parseFloat(slider.value)>=24 && slider.value<36){
        step= 12;
        console.log(`ici step fait ${step}`);
        slider.setAttribute('step',step);
    }   
    else{
        step=4;
        console.log(`ici step fait ${step}`);
        slider.setAttribute('step',step);
    }

    // switch(slider.value){
    //     case >=16<24:
    // }
    price.innerHTML=slider.value;
});