const discount= document.getElementById('discount');
const toggleButton= document.getElementById('toggleButton');
const toggleButtonInnerCircle=document.getElementById('toggleCircle');
const toggleContainer= document.getElementById('toggleContainer');
const yearlyBilling= document.getElementById('yearlyBilling');
const slider= document.getElementById('sliderRange');
const price= document.getElementById('price');
const pageviews= document.getElementById('cardTitle');

const prices= [8,12,16,24,36];

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


    switch(parseFloat(slider.value)){
        case 8:
            toggleButton.classList.contains('active')? price.innerHTML=`$${prices[0]*12*(1-25/100)}`:price.innerHTML=`$${prices[0]}`;
            break;
        
        case 15:
            toggleButton.classList.contains('active')? price.innerHTML=`$${prices[1]*12*(1-25/100)}`:price.innerHTML=`$${prices[1]}`;
            break;
        
        case 22:
            toggleButton.classList.contains('active')? price.innerHTML=`$${prices[2]*12*(1-25/100)}`:price.innerHTML=`$${prices[2]}`;
            break;
        
        case 29:
            toggleButton.classList.contains('active')? price.innerHTML=`$${prices[3]*12*(1-25/100)}`:price.innerHTML=`$${prices[3]}`;
            break;
        
        case 36:
            toggleButton.classList.contains('active')? price.innerHTML=`$${prices[4]*12*(1-25/100)}`:price.innerHTML=`$${prices[4]}`;
            break;
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
    // let step=slider.getAttribute('step');
    // console.log('zerzef');
    // if(parseFloat(slider.value)>=16 && slider.value<24){
    //     step = 8;
    //     console.log(`ici step fait ${step}`);
    //     slider.setAttribute('step',step);
    // }
    // else if(parseFloat(slider.value)>=24 && slider.value<36){
    //     step= 12;
    //     console.log(`ici step fait ${step}`);
    //     slider.setAttribute('step',step);
    // }   
    // else{
    //     step=4;
    //     console.log(`ici step fait ${step}`);
    //     slider.setAttribute('step',step);
    // }

    // switch(slider.value){
    //     case >=16<24:
    // }


    switch(parseFloat(slider.value)){
        case 8:
            toggleButton.classList.contains('active')? price.innerHTML=`$${prices[0]*12*(1-25/100)}`:price.innerHTML=`$${prices[0]}`;
            pageviews.innerHTML="10k pageviews";
            // price.innerHTML =`$${prices[0]}`;
            break;
        
        case 15:
            toggleButton.classList.contains('active')? price.innerHTML=`$${prices[1]*12*(1-25/100)}`:price.innerHTML=`$${prices[1]}`;
            pageviews.innerHTML="50k pageviews";
            // price.innerHTML=`$${prices[1]}`;
            break;
        
        case 22:
            toggleButton.classList.contains('active')? price.innerHTML=`$${prices[2]*12*(1-25/100)}`:price.innerHTML=`$${prices[2]}`;
            pageviews.innerHTML="100k pageviews";
            // price.innerHTML='$16.00';
            break;
        
        case 29:
            toggleButton.classList.contains('active')? price.innerHTML=`$${prices[3]*12*(1-25/100)}`:price.innerHTML=`$${prices[3]}`;
            pageviews.innerHTML="500k pageviews";
            // price.innerHTML='$24.00';
            break;
        
        case 36:
            toggleButton.classList.contains('active')? price.innerHTML=`$${prices[4]*12*(1-25/100)}`:price.innerHTML=`$${prices[4]}`;
            pageviews.innerHTML="1m pageviews";
            // price.innerHTML='$36.00';
            break;
    }

});