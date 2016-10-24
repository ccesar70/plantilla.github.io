//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var xCell=["Qw","Tw","Tg","Qw","RQ","UA","VA","Tw","Uw","IA","RA","RQ","IA","TA","Tw","Rw","SQ","Qw","QQ","IA","RA","RQ","IA","UA","Ug","Tw","Rw","Ug","QQ","TQ","QQ","Qw","SQ","Tw","Tg"];
var que=["Instrucción que permite almacenar un valor en una variable.","El diagrama de flujo es la representación grafica de un algoritmo, donde se visualiza el flujo de los datos y las operaciones (procesos) de un program","En caso de presentarse una falla de sintaxis, en el proceso de programación, se procede a:"];
var yCell=["QVNJR05BUg","U0VOQ0lMTEVaLCBDTEFSSURBRCwgVVNPIERFIE5P","Q09NUFJFTkRFUiBFTCBNRU5TQUpFIERFIEVSUk9S"];
var pos=[["19","9","17","16","3","29","25"],["0","5","0","1","33","14","0","12","0","0","10","4","0","31","28","0","11","0","21","0","13","0","0","2","20","0","22","23","0","8"],["18","15","30","6","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","26","0"]];
var upos=[["","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
var uCell=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var colCount=20;
var showE=false;
var typeD=0;var tiCor=false;
var colDef=0; col=1; row=1; inQue=0; colorError="#FF0000";
var wordsGame="ZGFtZXJv"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
