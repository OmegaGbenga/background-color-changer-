let container=document.querySelector(".container")
let colorPallete=document.querySelector(".color-pallete")
let colorsBtn=document.querySelectorAll(".color")
let btnContainer=document.querySelectorAll(".btn-container")
let switchBtn=document.querySelector("button")




colorsBtn.forEach(button=>{
       button.addEventListener("click", ()=>{
         let buttonColor= button.id

        container.style.backgroundColor=buttonColor
       })

      
})

switchBtn.addEventListener("click", ()=>{

    container.style.backgroundColor='';
    switchBtn.classList.toggle("active")

    container.classList.toggle("active")
  
    
    
})


