//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
var first = false;while (!first) {if ($("#C" + col.toString() + "_" + row.toString()).length){first = true;
$("#C" + col.toString() + "_" + row.toString()).focus();$("#C" + col.toString() + "_" + row.toString()).css("backgroundColor", colorSele);} else {
col++;if (col > 15) {col=0;row++;if (row > 15) {first = true}}}}
for (i=0;i<15;i++){for (j=0;j<15;j++){if ($("#C" + i.toString() + "_" + j.toString()).length) {$("#C" + i.toString() + "_" + j.toString()).val("");}}}
var wi =$("#buttonDir").width();var he = $("#buttonDir").height()-1;$("#ardoraButtonDirCanvas").height(he);$("#ardoraButtonDirCanvas").width(wi);
$(".cell").hover(function (e) {$(this).css("backgroundColor", colorButton);});
$(".cell").mouseout(function (e) {$(this).css("backgroundColor", colorBack);});
$(".cell").click(function (e) {var idCell = $(this).attr("id").substring(1);var pos = idCell.indexOf("_");
row = parseInt(idCell.substring(pos + 1));col = parseInt(idCell.substr(0, pos));silenceAll();writeDef();});
$(".cell").focus(function (e) {$(this).css("backgroundColor", colorSele);});$(".cell").focusout(function (e) {$(this).css("backgroundColor", colorBack);});
$(".cell").keydown(function (e) {er = "|^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]*$|";if (e.keyCode != 37 && e.keyCode != 38 && e.keyCode != 39 && e.keyCode != 40) {$(this).val(String.fromCharCode(e.keyCode).match(er));}});
$(".cell").keyup(function (e) {if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {goCell(e.keyCode);} else {this.value=this.value.toUpperCase();nextCell();}});
$("#buttonDir").mouseenter(function(){paintButDirIn();});$("#buttonDir").mouseleave(function(){paintButDir();});
$("#buttonDir").click(function(){if (writeDir==0) {writeDir=1;paintButDirIn()}else{writeDir=0;paintButDir()}writeDef();doFocus();});
paintButDir();
}
function doFocus(){$("#C" + col.toString() + "_" + row.toString()).focus();}
function writeDef(){var newDef="";var newIma="";var newAudio=-1;$("#defIma").css("visibility","hidden");
for (i=0;i<x1.length;i++){if (y1[i]==y2[i] && y1[i]==row+1 && x1[i]<=col+1 && x2[i]>=col+1 && writeDir==0){
newDef="<div class='titleDef'>Horizontales:<br></div>"+defCW[i];if (imaCW[i].localeCompare("")!=0 ){
newIma='<img class="imaLeft" src="'+imaCW[i]+'" align="left"><div style="clear:both;"><div>';}if (audioCW[i].localeCompare("")!=0 ){newAudio=i;}}
if (x1[i]==x2[i] && x1[i]==col+1 && y1[i]<=row+1 && y2[i]>=row+1 && writeDir==1){
newDef="<div class='titleDef'>Verticales:<br></div>"+defCW[i];
if (imaCW[i].localeCompare("")!=0){newIma='<img class="imaLeft" src="'+imaCW[i]+'" align="left"><div style="clear:both;"><div>';
} if (audioCW[i].localeCompare("")!=0 ){newAudio=i;}}}if (newDef.localeCompare("")==0 && newIma.localeCompare("")==0){$("#defIma").css("visibility","hidden");}
else{$("#defIma").css("visibility","visible");}$("#defIma").css("backgroundColor",colorBack);
$("#defIma").html(newIma+"<div style='clear:both;'><div>"+newDef);$(".titleDef").css("color",colorButton);
if (newAudio>-1){$("#audio"+newAudio.toString())[0].play();tiAudio=true;}}
function paintButDir() {var canvas=document.getElementById("ardoraButtonDirCanvas");var contexto = canvas.getContext("2d");contexto.fillStyle = colorButton;
contexto.fillRect(1, 1, canvas.width-2, canvas.height);var x = canvas.width;var grd = contexto.createRadialGradient(x/2, x/2, 1, x/2, x/2, 15);
grd.addColorStop(0, colorBack);grd.addColorStop(1, colorSele);contexto.fillStyle = grd;contexto.fillRect(5, 5, canvas.width - 10, canvas.height - 10);contexto.lineWidth = 1;
contexto.strokeStyle = colorText;contexto.fillStyle = colorText;contexto.beginPath();contexto.strokeRect(5, 5, canvas.width - 10, canvas.height - 10);
contexto.font = "bold 12px Verdana";contexto.textAlign = "left";if (writeDir==0){contexto.fillText("ab",12,24);}
else{contexto.fillText("a",16,16);contexto.fillText("b",16,30);}contexto.stroke();$("#buttonDir").css("boxShadow","3px 3px 3px rgba(50, 50, 50, 0.5)");}
function paintButDirIn() {var canvas = document.getElementById("ardoraButtonDirCanvas");var contexto = canvas.getContext("2d");
contexto.fillStyle = colorSele;contexto.fillRect(1, 1, canvas.width-2, canvas.height-2);var x = canvas.width-2;var grd = contexto.createRadialGradient(x/2, x/2, 1, x/2, x/2, 15);
grd.addColorStop(0, colorBack);grd.addColorStop(1, colorButton);contexto.fillStyle = grd;contexto.fillRect(5, 5, canvas.width-10, canvas.height-10);contexto.lineWidth = 1;
contexto.strokeStyle = colorText;contexto.fillStyle = colorText;contexto.beginPath();contexto.strokeRect(5, 5, canvas.width-10, canvas.height-10);
contexto.font = "bold 12px Verdana";contexto.textAlign = "left";if (writeDir==0){contexto.fillText("ab",12,24);}else{contexto.fillText("a",16,16);contexto.fillText("b",16,30);}
contexto.stroke();$("#buttonDir").css("boxShadow","0px 0px 0px rgba(50, 50, 50, 0.5)");}
function silenceAll(){if (tiAudio){$("audio").each(function(ind, e) {$(e)[0].pause();$(e)[0].currentTime=0;});tiAudio=false;}}
function goCell(toDir){var newCol=col; var newRow=row;if (toDir==37){newCol--;}if (toDir==38){newRow--;}
if (toDir==39){newCol++;}if (toDir==40){newRow++;}if ($("#C"+newCol.toString()+"_"+newRow.toString()).length){
col=newCol; row=newRow;$("#C"+col.toString()+"_"+row.toString()).focus();}writeDef();}
function nextCell(){if (writeDir==0){if ($("#C"+(col+1).toString()+"_"+row.toString()).length){col++;$("#C"+col.toString()+"_"+row.toString()).focus();}}
else{if ($("#C"+col.toString()+"_"+(row+1).toString()).length){row++;$("#C"+col.toString()+"_"+row.toString()).focus();}}}
function randomSort(){
}
function isCorrect(){
var correct=true; for (i = 0; i < rowNum; i++) {for (j = 0; j < colNum; j++) {if (cw[i][j].localeCompare("")!=0 && CWWords(cw[i][j]).substring(0,1).localeCompare(":")!=0){
var letter=$("#C"+j.toString()+"_"+i.toString()).val();if (CWWords(cw[i][j]).substring(0,1).localeCompare(letter)!=0){correct=false;}}}}
if (correct){score = score + scoreInc;timeAct = timeAct + timeBon;successes++;showMessage("Ok");}
else{attempts++;score=score-scoreDec;if (tiAttempts) {if (attempts > attemptsMax) {showMessage("Attempts");} else {showMessage("Error");}} else {showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
for (i = 0; i < rowNum; i++) {for (j = 0; j < colNum; j++) {if (cw[i][j].localeCompare("")!=0 && CWWords(cw[i][j]).localeCompare(":")!=0){
$("#C"+j.toString()+"_"+i.toString()).val(CWWords(cw[i][j]));}}}
}
function paintBack(){}
function CWWords(input) {var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = "";var i = 0;
var btest = /[^A-Za-z0-9\+\/\=]/g; if (btest.exec(input)) { alert("Invalid characters");} input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
do { enc1 = wordsStr.indexOf(input.charAt(i++)); enc2 = wordsStr.indexOf(input.charAt(i++)); enc3 = wordsStr.indexOf(input.charAt(i++)); enc4 = wordsStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);chr3 = ((enc3 & 3) << 6) | enc4;
output = output + String.fromCharCode(chr1);if (enc3 != 64) {output = output + String.fromCharCode(chr2);} if (enc4 != 64) {output = output + String.fromCharCode(chr3);}
chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = "";} while (i < input.length);return unescape(output);}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
