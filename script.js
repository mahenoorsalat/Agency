// let valueDisplays = document.querySelectorAll('.num')
// let interval = 5000;

// valueDisplays.forEach((valueDisplays)=>{
//     let startValue = 0;
//     let endValue = parseInt(valueDisplays.getAttribute("data-val"));
//     let duration = setInterval(interval  / endValue);
//     let counter = setInterval(function(){
//         startValue += 1;
//         valueDisplays.textContent = startValue;
//         if(startValue == endValue){
//             clearInterval(counter)
//         }
        
//     },duration)
// })



let valueDisplays = document.querySelectorAll('.num');


let options = {
    root: null, 
    threshold: 0.5 
};


let observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startAnimation(entry.target); 
            observer.unobserve(entry.target); 
        }
    });
}, options);


valueDisplays.forEach(display => {
    observer.observe(display);
});

function startAnimation(element) {
    let startValue = 0;
    let endValue = parseInt(element.getAttribute("data-val"));
    let duration = 2000;
    let interval = duration / endValue; 

    let counter = setInterval(function() {
        startValue += 1;
        element.textContent = startValue;
        if (startValue === endValue) {
            clearInterval(counter);
        }
    }, interval);
}


document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav').classList.toggle('menu-active');
  });
  


