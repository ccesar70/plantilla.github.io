//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
 function printJustify(context, text, x, y, lineHeight, fitWidth) { fitWidth = fitWidth || 0; lineHeight = lineHeight || 20; var outLines=[]; var currentLine = 0;
var lines = text.split(/\r\n|\r|\n/); for (var line = 0; line < lines.length; line++) { if (fitWidth <= 0) { context.fillText(lines[line], x, y + (lineHeight * currentLine));
} else { var words = lines[line].split(" "); var idx = 1; while (words.length > 0 && idx <= words.length) { var str = words.slice(0, idx).join(" ");
var w = context.measureText(str).width; if (w > fitWidth) { if (idx == 1) { idx = 2;} outLines.push(words.slice(0, idx - 1).join(" "));
currentLine++; words = words.splice(idx - 1); idx = 1;} else { idx++; }} if (idx > 0){ outLines.push(words.join(" "));}} currentLine++;}
var maxW=0; for (i=0; i<outLines.length; i++){ if (context.measureText(outLines[i]).width>maxW){maxW=context.measureText(outLines[i]).width}}
for (i=0; i<outLines.length-1; i++){ var wordsLine = outLines[i].split(" "); var indexB=1; var space="  "; while (context.measureText(outLines[i]).width<maxW){ var newLine=""; for (j=0; j<wordsLine.length; j++){ if (j<indexB){
newLine=newLine+wordsLine[j]+space;} else{ newLine=newLine+wordsLine[j]+" ";}} outLines[i]=$.trim(newLine);indexB+=1;if (indexB>wordsLine.length){
indexB=1; space=space+" "}}} return outLines;}
function roundedRect(ctx,x,y,width,height,radius,color){ ctx.beginPath(); ctx.moveTo(x,y+radius); ctx.lineTo(x,y+height-radius); ctx.quadraticCurveTo(x,y+height,x+radius,y+height);ctx.lineTo(x+width-radius,y+height);
ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius); ctx.lineTo(x+width,y+radius); ctx.quadraticCurveTo(x+width,y,x+width-radius,y); ctx.lineTo(x+radius,y); ctx.quadraticCurveTo(x,y,x,y+radius);ctx.closePath();ctx.stroke();
if (color!=""){ if (color.substr(0,9)=="gradient_"){ var my_gradient=ctx.createLinearGradient(x+width/2,y,x+width/2,y+height); my_gradient.addColorStop(0,color.substr(9,20)); my_gradient.addColorStop(1,"white");
ctx.fillStyle=my_gradient; ctx.fill();} else{ ctx.fillStyle=color; ctx.fill();}}}
function paintLoader(canvasDiv){var canvas = document.getElementById(canvasDiv);var context = canvas.getContext("2d");context.font = "14px "+fActi;
var wC = canvas.width/2;var hC = canvas.height/2;var started = new Date();var rotationsSinceStarted = (new Date() - started) / 1000;var rotationInTwelfths = parseInt(rotationsSinceStarted * 12) / 12;
context.save();context.clearRect(0, 0, context.canvas.width, context.canvas.height);context.translate(wC, hC);context.rotate(Math.PI * 2 * rotationInTwelfths);
for (var i = 0; i < 16; i++) {context.rotate(Math.PI * 2 / 12);context.beginPath();if (i==iL){context.lineWidth = 8;context.strokeStyle = "rgba(145,150,47," + i / 12 + ")";}
else{context.lineWidth = 3;context.strokeStyle = "rgba(50,50,50," + i / 12 + ")";}
context.moveTo(20, 0);context.lineTo(28, 0);context.stroke();}context.restore();iL++;if (iL>15){iL=0;}}
function selRectH(ctx,sx,sy,ex,ey,color) {var r=sizeCell/2;ctx.beginPath();ex=ex+sizeCell;sy=sy+2;ey=ey+2;
ctx.fillStyle = "rgba("+hexToRgb(color).r+","+hexToRgb(color).g+","+hexToRgb(color).b+",0.3)";
ctx.moveTo(sx+r,sy);ctx.quadraticCurveTo(sx+sizeCell+r,sy+r,sx+r,sy+sizeCell);ctx.lineTo(ex-r,ey+sizeCell);ctx.quadraticCurveTo(ex-sizeCell-r,ey+r,ex-r,ey);ctx.lineTo(sx+r,sy)
ctx.closePath();ctx.stroke();ctx.fill();}
function selRectV(ctx, sx, sy, ex, ey,color){var r = sizeCell / 2;ctx.beginPath();ey = ey + sizeCell;sy = sy + 2;ey = ey + 2;
ctx.fillStyle = "rgba("+hexToRgb(color).r+","+hexToRgb(color).g+","+hexToRgb(color).b+",0.3)";
ctx.moveTo(sx, sy + r);ctx.quadraticCurveTo(sx + r, sy + r + sizeCell, sx + sizeCell, sy + r);ctx.lineTo(ex + sizeCell, ey - r);
ctx.quadraticCurveTo(ex + r, ey - r - sizeCell, ex, ey - r);ctx.lineTo(sx, sy + r);ctx.closePath();ctx.stroke();ctx.fill();}
function selRectD1(ctx, sx, sy, ex, ey, color) {var r = sizeCell / 2;ex = ex + sizeCell;ey = ey + sizeCell;sy = sy + 2;ey = ey + 2;ctx.beginPath();
ctx.fillStyle = "rgba("+hexToRgb(color).r+","+hexToRgb(color).g+","+hexToRgb(color).b+",0.3)";
ctx.moveTo(sx + r, sy);ctx.quadraticCurveTo(sx, sy, sx, sy + r);ctx.lineTo(ex - r, ey);
ctx.quadraticCurveTo(ex, ey, ex, ey - r);ctx.lineTo(sx + r, sy);ctx.closePath();ctx.stroke();ctx.fill();}
function selRectD2(ctx, sx, sy, ex, ey,color) {var r = sizeCell / 2;sx = sx + sizeCell;ey = ey + sizeCell;sy = sy + 2;ey = ey + 2;ctx.beginPath();
ctx.fillStyle = "rgba("+hexToRgb(color).r+","+hexToRgb(color).g+","+hexToRgb(color).b+",0.3)";
ctx.moveTo(sx - r, sy);ctx.quadraticCurveTo(sx, sy, sx, sy + r);ctx.lineTo(ex + r, ey);
ctx.quadraticCurveTo(ex, ey, ex, ey - r);ctx.lineTo(sx - r, sy);ctx.closePath();ctx.stroke();ctx.fill();}
function paintCheckOk(ctx,x,y,w){ctx.save();ctx.beginPath();ctx.moveTo(x,y-w/2);
ctx.fillStyle = "rgba(0,128,0,1)";ctx.quadraticCurveTo(x+w/3,y-w/3, x+w/2,y);
ctx.quadraticCurveTo(x+7*w/10,y-w/2,x+w,y-w);ctx.quadraticCurveTo(x+7*w/10,y-7*w/10,x+w/2,y-w/3);ctx.quadraticCurveTo(x+w/3,y-w/2,x,y-w/2);
ctx.closePath();ctx.stroke();ctx.fill();ctx.restore();}
function hexToRgb(hex) {var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;hex = hex.replace(shorthandRegex, function(m, r, g, b) {
return r + r + g + g + b + b;});var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
return result ? {r: parseInt(result[1], 16),g: parseInt(result[2], 16),b: parseInt(result[3], 16)} : null;}
