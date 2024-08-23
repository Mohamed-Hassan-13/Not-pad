


let textarea =document.getElementById("textarea")
let title =document.getElementById("title")
let close =document.getElementById("close")
let right =document.querySelector(".right")
let file =document.getElementById("file")
let sun =document.getElementById("sun")
let not =document.getElementById("not")
let image_right =document.getElementById("image_right")
let colors =document.querySelectorAll(".changecolor")
let ioncolor =document.querySelector(".color")


// function show iamge
file.addEventListener("change",()=>{
    let fr = new FileReader()
    fr.readAsDataURL(file.files[0]) 
    fr.onload = function (){
        image_right.src=fr.result
        image_right.style.display="flex"
}

    })

    // function color dor 
    function changecolor(){
        if(ioncolor.style.width=="100%" ){
            ioncolor.style.width="0"
        }else{
            ioncolor.style.width="100%"
        }
    }

// change color
    let cc ;
function change (id){
    if(id==="red"){
        cc="#ff2424"
    }
    if(id==="yellow"){
        cc=id
    }
    if(id==="black"){
        cc="#cf07f7"
    }
    if(id==="blue"){
        cc=id
    }
    if(id==="gray"){
        cc="#4797c2"
    }
    if(id==="pink"){
        cc=id
    }
right.style.backgroundColor=cc
textarea.style.color="white"
title.style.color="white"
}  



// open note
title.addEventListener("click",()=>{
    right.style.height="400px"
    close.style.marginRight="0"
right.style.boxShadow=("0 0 10px 750px #00000070")
    
})

// close note
close.addEventListener("click",()=>{
    right.style.height="50px"
    textarea.value=""
    title.value=""
    close.style.marginRight="-35px"
    right.style.backgroundColor=""
    title.style.color=""
    textarea.style.color=""
    image_right.style.display="none"
    right.style.boxShadow=("none")
    ioncolor.style.width="0"

})


let lock ;
if(localStorage.getItem("note") != null){
     lock =JSON.parse(localStorage.getItem("note"))
}else{
     lock =[]
}

// function save 
function fun(){
if(textarea.value){
    
 
    let obj ={
        tit:title.value,
        name:textarea.value,
        color:cc ,
        img:image_right.getAttribute("src")
    }
   
    
    lock.push(obj)
    localStorage.setItem("note",JSON.stringify(lock))
    window.location.reload()
    
}

}





let note2 =JSON.parse(localStorage.getItem("note"))


let div = document.createElement("div")
document.body.append(div)
div.classList.add("div")


note2.map((i) => {
let note3 =document.createElement("div")
note3.classList.add("note")
div.append(note3)
let top =document.createElement("div")
note3.append(top)
top.classList.add("del")
let title2 =document.createElement("h2")
top.append(title2)
title2.classList.add("title")
title2.innerHTML=i.tit
let bot =document.createElement("ion-icon")
bot.setAttribute("name","close-outline")
top.append(bot)
let imag =document.createElement("img")
note3.append(imag)
imag.setAttribute("src" , i.img)
imag.classList.add("img_note")
let p =document.createElement("p")
note3.append(p)
p.innerHTML =i.name


check_img(imag,i)

note3.style.backgroundColor=i.color
note3.style.cursor="pointer"



bot.addEventListener("click" , ()=>{
delete1(i , bot)
})
    p.addEventListener("click",()=>{
edit(i)
    })


})


// check_img
function check_img(check,i){
    if(i.img != null){
check.style.display="block"
    }else{
        check.style.display="none"

    }
}

// function edit note 

function edit(i){
    title.value=i.tit
    textarea.value=i.name
    image_right.src=i.img
    image_right.style.display="block"
    right.style.height="400px"
    close.style.marginRight="0"
color.value=i.color
check_img(image_right,i)
image_right.setAttribute("src",i.img)
right.style.boxShadow=("0 0 10px 750px #00000070")

}

// function delete
function delete1 (a , b){
    note2.splice(note2.indexOf(a),1)
    localStorage.setItem("note",JSON.stringify(note2))        
    b.parentElement.parentElement.remove()
    window.location.reload()
}


// dark mode
document.body.style.background=localStorage.getItem("theam")
sun.style.color=localStorage.getItem("sun")
not.style.color=localStorage.getItem("sun")
sun.addEventListener("click",()=>{
if(localStorage.getItem("theam")==="#1b1a1a"){
localStorage.setItem("theam" , "white")
localStorage.setItem("sun","black")
document.body.style.background=localStorage.getItem("theam")
sun.style.color=localStorage.getItem("sun")
not.style.color=localStorage.getItem("sun")
}else{
localStorage.setItem("theam" , "#1b1a1a")
localStorage.setItem("sun","white")
document.body.style.background=localStorage.getItem("theam")
sun.style.color=localStorage.getItem("sun")
not.style.color=localStorage.getItem("sun")
}
})


