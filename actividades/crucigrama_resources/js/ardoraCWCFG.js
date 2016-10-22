//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Haz completado el crucigrama"; messageTime=""; messageError="Sigue intentando"; messageErrorG="Sigue intentando"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Y3J1Y2lncmFtYQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Vg","QQ","Ug","SQ","QQ","Qg","TA","RQ","Uw","","",""],["","VQ","","","Uw","","","","","","","TQ"],["","RA","","","SQ","","","","","","","QQ"],["","SQ","","","Rw","","","","","","","UQ"],["","VA","","","Tg","","","","","","","VQ"],["Qw","Tw","TA","QQ","QQ","","","","","","","SQ"],["UA","Ug","Tw","Rw","Ug","QQ","TQ","QQ","Qw","SQ","Tw","Tg"],["","SQ","","","","","","","","","","QQ"],["","QQ","TA","Rw","Tw","Ug","SQ","VA","TQ","Tw","",""]];
var x1=[1,1,1,2,2,5,12,1,3,4];
var y1=[1,6,7,9,1,1,2,6,6,6];
var x2=[9,5,12,10,2,5,12,1,3,4];
var y2=[1,6,7,9,9,7,8,7,7,7];
var imaCW=["","","","","","","","","",""];
var audioCW=["","","","","","","","","",""];
var defCW=["Int, char, float, string y boolean se identifican como:","Una estructura de datos en la que las inserciones se realizan por un extremo y las extracciones por el otro extremo se conoce como:","El proceso de diseñar, codificar, depurar y mantener el código fuente se conoce como:","El diagrama de flujo es la representación gráfica de un:","El proceso que verifica que que las necesidas de la empresa esten claramente identificadas al momento de programar se conoce como:","Se conoce como ____ a la instrucción que permite almacenar un valor en una variable","El lenguaje ensamblador, tambien es conocido como lenguaje de:","","",""];
var colNum=12;
var rowNum=9;
