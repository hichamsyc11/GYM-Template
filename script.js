const scroll= document.querySelector(".scroll");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100 ) {
        scroll.style.display= "block"
        console.log('done');
    }else{
       console.log('none')
    }
})
