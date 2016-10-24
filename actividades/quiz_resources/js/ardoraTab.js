//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeInterval; $(document).ready(function() {paintOk();randomSort();timeInterval=setInterval("paintTab()",1000);
var canWidth=$("#ardoraAct").css("width").replace("px","");var canHeight=$("#ardoraAct").css("height").replace("px","");$("#ardoraActCanvas").attr({"width": canWidth,"height": canHeight})
$("#ardoraActCanvasAnim").attr({"width": canWidth,"height": canHeight});
$("#buttonOk").mouseenter(function(){$(this).css("-webkit-box-shadow"," 0px 0px 0px rgba(50, 50, 50, 0.5)");
$(this).css("box-shadow" , "0px 0px 0px rgba(50, 50, 50, 0.75)");removeOk();
}).mouseleave(function() { $(this).css("-webkit-box-shadow"," 4px 4px 4px rgba(50, 50, 50, 0.5)"); $(this).css("-moz-box-shadow", "4px 4px 4px rgba(50, 50, 50, 0.5)");$(this).css("box-shadow" , "4px 4px 4px rgba(50,50,50,0.5)"); paintOk();}).mousedown(function(){if (typeGame!=99){isCorrect();}})
initAct();})
function paintOk(){ var canvas = document.getElementById("buttonOkCanvas"); var contexto = canvas.getContext("2d");
contexto.fillStyle =colorButton;contexto.fillRect(1,1,canvas.width-2,canvas.height-2);
var x=canvas.width-2; var grd = contexto.createRadialGradient(x/2, x/2,1, x/2, x/2, 30);grd.addColorStop(0,colorBack);
grd.addColorStop(1,colorSele);contexto.fillStyle = grd; contexto.fillRect(10, 10,canvas.width-20,canvas.height-20);
contexto.lineWidth = 1; contexto.strokeStyle =colorText;
contexto.fillStyle =colorText;contexto.beginPath();contexto.strokeRect(10, 10,canvas.width-20,canvas.height-20);
contexto.font="bold 36px Verdana"; contexto.textAlign = "left"; contexto.fillText("?",25,48); contexto.stroke();}
function removeOk(){ var canvas = document.getElementById("buttonOkCanvas"); var contexto = canvas.getContext("2d");
contexto.fillStyle =colorSele;contexto.fillRect(1,1,canvas.width-2,canvas.height-2);
var x=canvas.width-2; var grd = contexto.createRadialGradient(x/2, x/2,1, x/2, x/2, 30);grd.addColorStop(0,colorBack);
grd.addColorStop(1,colorButton);contexto.fillStyle = grd; contexto.fillRect(10, 10,canvas.width-20,canvas.height-20);
contexto.lineWidth = 1; contexto.strokeStyle =colorText;
contexto.fillStyle =colorText;contexto.beginPath();contexto.strokeRect(10, 10,canvas.width-20,canvas.height-20);
contexto.font="bold 36px Verdana"; contexto.textAlign = "left"; contexto.fillText("?",25,48); contexto.stroke();}
function paintTab(){if (document.getElementById("ardoraTabCanvas")!=null){var canvas = document.getElementById("ardoraTabCanvas");var contexto = canvas.getContext("2d");contexto.fillStyle =$(canvas).css("background-color");
contexto.clearRect(0,0,canvas.width,canvas.height); contexto.lineWidth = 1; contexto.strokeStyle = "black";contexto.fillStyle = "black";if (!isShowMessage){timeAct-=1;}contexto.font="8px Verdana";
var profundidade=1; var x = canvas.width / 2; var y = canvas.width / 2+19;
if (tiTime){profundidade=19;contexto.beginPath();contexto.lineWidth = 1;contexto.fillStyle =colorButton;contexto.fillRect(1,1,68,85);
contexto.fillStyle =colorBack;contexto.fillRect(3,3,64,18);contexto.strokeStyle =colorBack;contexto.strokeRect(3,3,64,18);
contexto.stroke();contexto.beginPath();contexto.textAlign = "left";contexto.fillStyle =colorText;
contexto.fillText("TIEMPO:",8,15);contexto.lineWidth = 5;contexto.stroke();var radius = 25;
var startAngle = ((2*timeAct/timeIni)+1.5) * Math.PI;var endAngle = 1.5*Math.PI;contexto.beginPath();grd = contexto.createRadialGradient(x, y,4, x, y, radius);
grd.addColorStop(0,colorBack);grd.addColorStop(1,colorButton);contexto.fillStyle = grd;contexto.arc(x,y,radius,0,2*Math.PI,false);contexto.fill();;
contexto.lineWidth = 5; if (timeAct>timeIni/4){contexto.strokeStyle =colorSele;}else{contexto.strokeStyle = "red";}
contexto.stroke();if (timeAct<timeIni){contexto.beginPath();contexto.arc(x,y,radius,startAngle,endAngle,false);
if(timeAct>timeIni/4){contexto.strokeStyle =colorButton;}else{contexto.strokeStyle =colorSele;}
contexto.lineWidth = 2;contexto.stroke();}contexto.beginPath();contexto.fillStyle =colorText;contexto.textAlign = "center";
contexto.fillText(timeAct,x,y+4);contexto.stroke();contexto.lineWidth = 1;profundidade=canvas.width+profundidade;if (timeAct==0){goTime();}}if (tiSuccesses){contexto.beginPath();
contexto.fillStyle =colorButton;contexto.fillRect(1,profundidade,68,45);contexto.fillStyle =colorBack;contexto.fillRect(3,profundidade+2,64,18);
contexto.strokeStyle =colorSele;contexto.strokeRect(3,profundidade+2,64,18);contexto.stroke();contexto.beginPath();contexto.fillStyle =colorText;
contexto.font="8px Verdana";contexto.textAlign = "left";contexto.fillText("ACIERTOS:",8,profundidade+14);contexto.lineWidth = 5;contexto.stroke();
contexto.beginPath();contexto.fillStyle =colorBack;contexto.font="bold 14px Verdana";contexto.textAlign = "center";
contexto.fillText(successes+"/"+successesMax,x,profundidade+40);contexto.lineWidth = 1;contexto.stroke();profundidade=profundidade+8+40;}if (tiAttempts){contexto.beginPath();
contexto.fillStyle =colorButton;contexto.fillRect(1,profundidade,68,45);contexto.fillStyle =colorBack;contexto.fillRect(3,profundidade+2,64,18);
contexto.strokeStyle =colorSele;contexto.strokeRect(3,profundidade+2,64,18);contexto.stroke();contexto.beginPath();
contexto.fillStyle =colorText;contexto.font="8px Verdana";contexto.textAlign = "left";
contexto.fillText("INTENTOS:",8,profundidade+14);contexto.lineWidth = 5;contexto.stroke();contexto.beginPath();contexto.font="bold 14px Verdana";
if (attemptsMax-attempts>1){contexto.fillStyle =colorBack;}else{contexto.fillStyle ="red";}contexto.textAlign = "center";contexto.fillText(attempts+"/"+attemptsMax,x,profundidade+40);
contexto.lineWidth = 1;contexto.stroke();profundidade=profundidade+8+40;}if (tiScore){contexto.beginPath();contexto.fillStyle =colorButton;
contexto.fillRect(1,profundidade,68,45);contexto.fillStyle =colorBack;contexto.fillRect(3,profundidade+2,64,18);contexto.strokeStyle =colorSele;
contexto.strokeRect(3,profundidade+2,64,18);contexto.stroke();contexto.beginPath();contexto.fillStyle =colorText;contexto.font="8px Verdana";contexto.textAlign = "left";
contexto.fillText("PUNTOS:",8,profundidade+14);contexto.lineWidth = 5;contexto.stroke();contexto.beginPath();contexto.fillStyle =colorBack;
contexto.font="bold 14px Verdana";contexto.textAlign = "center";contexto.strokeStyle =colorText;contexto.fillText(score+"/"+scoreMax,x,profundidade+40);contexto.stroke();}}}
