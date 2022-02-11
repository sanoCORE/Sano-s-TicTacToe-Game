var canvas = document.getElementById("canvas");
// links html

canvas.width = 900;
canvas.height = 900;

var ctx = canvas.getContext("2d");

w = canvas.width;
h = canvas.height;


/* //Verts
ctx.beginPath();                            //begin line
ctx.lineWidth = 3;                          //width of the line
ctx.strokeStyle = "#ffffff";                //colour
ctx.moveTo(h/3, 0);             //move the pointer to this point
ctx.lineTo(h/3, w);  //creates an imaginary line
ctx.stroke();                               //fills in the line */

ctx.beginPath();                            
ctx.lineWidth = 3;                          
ctx.strokeStyle = "#ffffff";                
ctx.moveTo(0, h/3);             
ctx.lineTo(w, h/3);  
ctx.stroke();        

ctx.beginPath();                            
ctx.lineWidth = 3;                          
ctx.strokeStyle = "#ffffff";                
ctx.moveTo(0, h/3*2);             
ctx.lineTo(w, h/3*2);  
ctx.stroke();   

//Horz
ctx.beginPath();                            
ctx.lineWidth = 3;                          
ctx.strokeStyle = "#ffffff";                
ctx.moveTo(w/3, 0);             
ctx.lineTo(w/3, h);  
ctx.stroke();                   

ctx.beginPath();                            
ctx.lineWidth = 3;                          
ctx.strokeStyle = "#ffffff";                
ctx.moveTo(w/3*2, 0);             
ctx.lineTo(w/3*2, h);  
ctx.stroke();           

// X    w/9, h/9


function drawsquare(x, y) {

    var a1 = 6

    ctx.beginPath();
    ctx.lineWidth = 3;                          
    ctx.strokeStyle = "#ffffff";    
    ctx.moveTo(x, y);             
    ctx.lineTo((w/6)+x, h/6+y);  
    ctx.stroke(); 
    
    ctx.beginPath();
    ctx.lineWidth = 3;                          
    ctx.strokeStyle = "#ffffff";    
    ctx.moveTo(x, h/6+y);             
    ctx.lineTo((w/6)+x, y);  
    ctx.stroke(); 

}

function drawcircle (x, y) {

    ctx.beginPath();
    ctx.arc(x, y, 75, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#FF0000';
    ctx.stroke();

}

var xturn = true;

canvas.addEventListener('click',(event) => {
    console.log(event.x);
    console.log(event.y);

    //a1
    if (event.x < w/3 && event.y < h/3) {
        if (xturn == true) {
            drawsquare(w/12, h/12);
        } else {
            drawcircle(w/6, h/6);
        }
        xturn = !xturn;
    }
    //b1
    if (event.x > w/3 && event.x < w/3*2 && event.y < h/3) {
        if (xturn == true) {
            drawsquare(w/12*5, h/12);
        } else {
            drawcircle(w/6*3, h/6);
        }
        xturn = !xturn;
    }
    //c1
    if (event.x > w/3*2 && event.y < h/3) {
        if (xturn == true) {
            drawsquare(w/12*9, h/12);
        } else {
            drawcircle(w/6*5, h/6);
        }
        xturn = !xturn;
    }
    //a2
    if (event.x < w/3 && event.y < h/3*2 && event.y > h/3) {
        if (xturn == true) {
            drawsquare(w/12, h/12*5);
        } else {
            drawcircle(w/6, h/6*3);
        }
        xturn = !xturn;
    }
    //b2
    if (event.x > w/3 && event.x < w/3*2 && event.y < h/3*2 && event.y > h/3) {
        if (xturn == true) {
            drawsquare(w/12*5, h/12*5);
        } else {
            drawcircle(w/6*3, h/6*3);
        }
        xturn = !xturn;
    }
    //c2
    if (event.x > w/3*2 && event.y < h/3*2 && event.y > h/3) {
        if (xturn == true) {
            drawsquare(w/12*9, h/12*5);
        } else {
            drawcircle(w/6*5, h/6*3);
        }
        xturn = !xturn;
    }
    //a3
    if (event.x < w/3 && event.y > h/3*2) {
        if (xturn == true) {
            drawsquare(w/12, h/12*9);
        } else {
            drawcircle(w/6, h/6*5);
        }
        xturn = !xturn;
    }
    //b3
    if (event.x > w/3 && event.x < w/3*2 && event.y > h/3*2) {
        if (xturn == true) {
            drawsquare(w/12*5, h/12*9);
        } else {
            drawcircle(w/6*3, h/6*5);
        }
        xturn = !xturn;
    }
    //c3
    if (event.x > w/3*2 && event.y > h/3*2) {
        if (xturn == true) {
            drawsquare(w/12*9, h/12*9);
        } else {
            drawcircle(w/6*5, h/6*5);
        }
        xturn = !xturn;
    }
});