const canvas = document.getElementById("canvas")                  // Const is keyword for variable which cannot be reassigned
canvas.height = window.innerHeight                                   
canvas.width = window.innerWidth				    // Here we make height and width of the canvas equal to the window   PENDING ADD EVENT LISTENER OF RESIZE

let ctx = canvas.getContext("2d")                                //  ctx is the context of our canvas, we use ctx to draw on the canvas. Specifying linewidth
// ctx.lineWidth = 5

let prevX = null 						   // Keep track of previous mouse position and draw line from previous to current. Initially previous is NULL and draw var is also false
let prevY = null
let draw = false


let current=0

ctx.globalCompositeOperation = 'source-over' 




let button1= document.getElementsByClassName("clear")
button1[0].addEventListener("click", () => {
 ctx.clearRect(0, 0, canvas.width, canvas.height)
 
},false)

/*

IMPORTANT ERROR

Get elements returns html collection, therefore we need to do something about it. It is similar to getElementById
console.log(button1)
https://stackoverflow.com/questions/32027935/addeventlistener-is-not-a-function-why-does-this-error-occur

*/

/*
const {
  jsPDF
} = window.jsPDF;
const pdf = new jsPDF();
const pdf = new jsPDF();
*/

let button2= document.getElementsByClassName("save")
button2[0].addEventListener("click", () => {
 document.location.href= canvas.toDataURL("").replace("image/png","image/octet-stream")

//const file= canvas.toDataURL("image/jpeg",1.0)
//pdf.addImage(file,'JPEG',0,0)
//pdf.save("download.pdf")
})

let button3= document.getElementsByClassName("print")
button3[0].addEventListener("click", () => {
window.print()
})
/* console.log(button3) */




let buttons=document.getElementsByClassName("clr")

        buttons[1].addEventListener("click", () => {
          ctx.globalCompositeOperation = 'source-over' 
        ctx.strokeStyle = buttons[1].dataset.clr
        });
        
        buttons[0].addEventListener("click", () => {
          ctx.globalCompositeOperation = 'source-over' 
        ctx.strokeStyle = buttons[0].dataset.clr
        });
    
        buttons[2].addEventListener("click", () => {
          ctx.globalCompositeOperation = 'source-over' 
        ctx.strokeStyle = buttons[2].dataset.clr
        });
        
        buttons[3].addEventListener("click", () => {
          ctx.globalCompositeOperation = 'source-over' 
        ctx.strokeStyle = buttons[3].dataset.clr
        });
    
        buttons[4].addEventListener("click", () => {
          ctx.globalCompositeOperation = 'source-over' 
        ctx.strokeStyle = buttons[4].dataset.clr
        });
 
 
 
 
 let radius =0
 
 var slider= document.getElementById("myRange");
ctx.lineWidth = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  ctx.lineWidth = this.value;
} 

var slider2= document.getElementById("myRadius");
radius= slider2.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider2.oninput = function() {
  radius = this.value;
}


/*

STUPID ERROR, I was trying to save button but I have to save the canvas itself
https://stackoverflow.com/questions/8667458/todataurl-not-a-function
https://www.dynamsoft.com/codepool/how-to-use-javascript-to-save-canvas-data-in-chrome.html


ANOTHER ISSUE PENDING- SAVED IMAGE HAS BAD BACKGROUND/ TRY PDF 
TRY TO SAVE NAME ALSO
*/




// BUTTONS PENDING EVEN IN CSS AND HTML
// HTML DONE CSS DONE

 
 
 let s1=0
 let s2=0
 let e1=0
 let e2=0

window.addEventListener("mousedown", (e) => draw = true)      // To check if mouse is down or up 
window.addEventListener("mouseup", (e) => draw = false)



window.addEventListener("mousemove", function(e){    

       console.log(current)
    if(prevX == null || prevY == null || !draw){       	// If null, set position to current position of mouse.
        prevX = e.clientX 					// OR ELSE if draw is 0, that is mouse if up, we need to continuously update position because drawing can start at anytime
        prevY = e.clientY
        return
    }

if(current==0){
    let mouseX = e.clientX                                   // If draw becomes 1, then while mouse moves we check the CURRENT mouse position
    let mouseY = e.clientY
    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(mouseX, mouseY) 
    ctx.lineCap="round"           // Very important to avoid breaking of thicker lines
                                  // DRAW PATH FROM PREVIOUS TO CURRENT and then update current, this is continuous process till 1) Mousemove stops 2) draw=0- LIKE INTEGRAL 
    ctx.stroke()
    
    prevX = e.clientX
    prevY = e.clientY
    }
else if(current==1){

 window.addEventListener("click", function(e) { 
     if(current==1){
 s1=e.clientX, s2=e.clientY
 if(s2>50){
  ctx.beginPath()
 ctx.arc(s1,s2,radius/2,0,Math.PI*2,false)
if(isfill%2==0){
  ctx.fillStyle = ctx.strokeStyle;
ctx.fill();

}
 ctx.stroke()
 }
}
})

}

else if(current==2){

    window.addEventListener("click", function(e) { 
        if(current==2){
    s1=e.clientX, s2=e.clientY
    if(s2>50){
     ctx.beginPath()

    ctx.moveTo(s1- radius/2,s2+radius/2)
    ctx.lineTo(s1+radius/2,s2+radius/2)
    ctx.lineTo(s1+radius/2,s2-radius/2)
    ctx.lineTo(s1-radius/2,s2-radius/2)
    ctx.lineTo(s1-radius/2,s2+radius/2)
if(isfill%2==0){
  ctx.fillStyle = ctx.strokeStyle;
ctx.fill();

}
    ctx.stroke()
    }
   }
   })
   
   }

   else if(current==3){

    window.addEventListener("click", function(e) { 
        if(current==3){
    s1=e.clientX, s2=e.clientY
    if(s2>50){
     ctx.beginPath()
    ctx.moveTo(s1,s2-radius/Math.sqrt(3))
    ctx.lineTo(s1-radius/2,s2+radius/(2*Math.sqrt(3)))
    ctx.lineTo(s1+radius/2,s2+radius/(2*Math.sqrt(3)))
    ctx.lineTo(s1,s2-radius/Math.sqrt(3))
    if(isfill%2==0){
      ctx.fillStyle = ctx.strokeStyle;
    ctx.fill();
    
    }
    ctx.stroke()
    }
   }
   })
   
   }
   else if(current==4){

    
    window.addEventListener("click", function(e) { 
      if(current==4){
        let mouseX = e.clientX                                   // If draw becomes 1, then while mouse moves we check the CURRENT mouse position
        let mouseY = e.clientY
        
        ctx.beginPath()
        ctx.moveTo(prevX, prevY)
        ctx.lineTo(mouseX, mouseY) 
        // context.lineTo(mouseX + Math.random() * 20 - 10, 
        // mouseY + Math.random() * 20 - 10);
        ctx.lineCap="round"           // Very important to avoid breaking of thicker lines
                                      // DRAW PATH FROM PREVIOUS TO CURRENT and then update current, this is continuous process till 1) Mousemove stops 2) draw=0- LIKE INTEGRAL 
        if(isfill%2==0){
      ctx.fillStyle = ctx.strokeStyle;
    ctx.fill();
    
    }
                                      ctx.stroke()
        
        prevX = e.clientX
        prevY = e.clientY
 }
 })

   }


  
})

/*
window.addEventListener("mousemove", (e) => {              // We use mousemove event to get position of mouse when user is moving mouse. Console.log is for printing
    console.log("Mouse X: " + e.clientX)		     // The clientX read-only property of the MouseEvent interface provides the horizontal coordinate within the application's viewport at which 
    console.log("Mouse Y: " + e.clientY)                   // the event occurred. Here the event is mousemove
})
*/

let pencils=document.getElementsByClassName("pencil")
pencils[0].addEventListener("click", () => {

current=0
// document.body.style.cursor = "wait"
})

let line=document.getElementsByClassName("line")
line[0].addEventListener("click", () => {

current=4
})
//ctx.globalCompositeOperation = 'destination-out'
let eraser=document.getElementsByClassName("eraser")
eraser[0].addEventListener("click", () => {
current=0
})
const erase = () => ctx.globalCompositeOperation = 'destination-out'



let shape1= document.getElementsByClassName("circle")
shape1[0].addEventListener("click", () => {
current=1
})
let shape2= document.getElementsByClassName("square")
shape2[0].addEventListener("click", () => {
current=2
})
let shape3= document.getElementsByClassName("tri")
shape3[0].addEventListener("click", () => {
current=3
})
let count=1
let nightmode=document.getElementsByClassName("switch")
nightmode[0].addEventListener("click",()=>{
count=count+1;
if(count%2==0){document.body.style.backgroundColor = "black";
}
else{document.body.style.backgroundColor = "white";
}
})
let isfill =1;
let fill=document.getElementById("fill")
fill.addEventListener("click",() =>{
isfill=isfill+1
if(isfill%2==0){document.getElementById("fill").style.backgroundColor = "green"}
else{document.getElementById("fill").style.backgroundColor = "red"}


})



var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
} 

var slider2 = document.getElementById("myRadius");
var output2 = document.getElementById("demo");
output.innerHTML = slider2.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider2.oninput = function() {
  output.innerHTML = this.value;
}




