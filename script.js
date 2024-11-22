confirm('Hey you are Vanni right?')

confirm('so ready to see something special ?')
let box=document.querySelector(".box")
let btn=document.querySelector(".button")
btn.addEventListener("click",()=>{
    box.style.background="none"
    box.style.color="black"
    box.innerHTML="<b> Hello vandya!<br> press next</b>"
    box.style.fontSize='30px'
    btn.innerHTML="PREVIOUS"
    
    box.style.height='max-content'
    box.style.width='70vw'
    document.body.style.background="linear-gradient(90deg, hsla(189, 86%, 64%, 1) 0%, hsla(277, 67%, 77%, 1) 50%, hsla(218, 88%, 59%, 1) 100%)"
   
    document.querySelector('.card').style.visibility="visible"
    document.querySelector('.btn1').style.visibility="visible"
    document.body.style.transition='all ease-out 1.5s'
    box.style.transition='all ease-in 0.7s'
    
})
let btn1=document.querySelector(".btn1")
btn1.addEventListener("click",()=>{
    setTimeout(() => {
        box.style.fontSize="1.5rem"
        box.style.backdropFilter="blur(50px)"
        box.innerHTML="Wish you many many happy returns of the day Vandya😘....<br>"
        document.body.style.background="linear-gradient(90deg, hsla(189, 86%, 64%, 1) 0%, hsla(277, 67%, 77%, 1) 50%, hsla(218, 88%, 59%, 1) 100%)"
        
        box.style.border="none"
        box.style.background="none"
        box.style.fontSize="2em"
        box.style.height="max-content"
    }, 1000)
    
    box.style.color="white"
    setTimeout(() => {
        box.insertAdjacentHTML("beforeend","I want to wish you from the <br>corner of my RAM storage🥰....<br>")
    }, 3000);
    setTimeout(() => {
        box.insertAdjacentHTML("beforeend","May god bless you with<BR>lots of happiness💕....<br>")
    }, 6000);
    setTimeout(() => {
        box.insertAdjacentHTML("beforeend","Have a great year ahead😌....<br>")
    }, 9000);
    setTimeout(() => {
        box.insertAdjacentHTML("beforeend","You are a very pleasant part of my life🤗...<br>")
    }, 12000);
    setTimeout(() => {
        box.insertAdjacentHTML("beforeend","By the way this is just a very basic thing I was able to do for you😊...<br>")
    }, 15000);
    setTimeout(() => {
        box.insertAdjacentHTML("beforeend","Hope you like it!! <br>")
    }, 18000);
    setTimeout(() => {
        box.insertAdjacentHTML("beforeend","Now click below button and check our memories... <br>")
    }, 21000);
    setTimeout(() => {
        const butn=document.querySelector('.btn2');
        butn.style.visibility="visible"
        box.insertAdjacentElement("beforeend",butn)
        
    }, 24000);
    
    document.body.style.transition='all ease-in 2s'
    })
    
    
