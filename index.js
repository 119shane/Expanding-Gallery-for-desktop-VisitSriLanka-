const allPics = document.querySelectorAll(".panel")


allPics.forEach((pic)=> {
    pic.addEventListener('click', ()=>{
        closeActivePics()
        pic.classList.add("active")
    })
})

function closeActivePics() {
    allPics.forEach((pic)=>{
        pic.classList.remove("active") 
    })
}