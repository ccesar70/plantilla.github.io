//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=2;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
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
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="cXVpeg"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["Las etapas que deben seguirse en la construcción de un programa son:","En caso de presentarse una falla de sintaxis, en el proceso de programación, se procede a:","Un compilador es:","El diagrama de flujo es la representación grafica de un algoritmo, donde se visualiza el flujo de los datos y las operaciones (procesos) de un programa. Se caracteriza por:","Instrucción que permite almacenar un valor en una variable."];
var answers1=["MUFu4Wxpc2lzLCBhbGdvcml0bW8sIGRpYWdyYW1hIGRlIGZsdWpvLCBzZXVkb2PzZGlnbywgcHJ1ZWJhIGRlIGVzY3JpdG9yaW8sIGltcGxlbWVudGFjafNuIChjb2RpZmljYXI","MEFu4Wxpc2lzLCBhbGdvcml0bW8sIGRpYWdyYW1hIGRlIGZsdWpvLCBzZXVkb2PzZGlnbw","MEFu4Wxpc2lzLCBzZXVkb2PzZGlnbywgcHJ1ZWJhIGRlIGVzY3JpdG9yaW8sIGltcGxlbWVudGFjafNuIChjb2RpZmljYXIgZW4gdW4gbGVuZ3VhamUgZGUgcHJvZ3JhbWFjafM","MEFu4Wxpc2lzLCBhbGdvcml0bW8sIHBydWViYSBkZSBlc2NyaXRvcmlvLCBpbXBsZW1lbnRhY2nzbiAoY29kaWZpY2FyIGVuIHVuIGxlbmd1YWplIGRlIHByb2dyYW1hY2nzbik"];
var answers2=["MUNvbXByZW5kZXIgZWwgbWVuc2FqZSBkZSBlcnJvciBxdWUgcmVwb3J0YSBlbCBhbWJpZW50ZSBkZSBwcm9ncmFtYWNp824sIGV4YW1pbmFyIGVsIGPzZGlnbyBkZWwgcHJvZ3I","MElnbm9yYXIgbG9zIGVycm9yZXMgeSBlamVjdXRhciBlbCBwcm9ncmFtYS4","MEV4YW1pbmFyIGVsIGPzZGlnbyBkZWwgcHJvZ3JhbWEgcGFyYSBpZGVudGlmaWNhciBlbiBjdeFsIGluc3RydWNjafNuIHNlIGVuY3VlbnRyYSBsYSBmYWxsYSwgQ29tcHJlbg","MEV4YW1pbmFyIGVsIGPzZGlnbyBkZWwgcHJvZ3JhbWEgcGFyYSBpZGVudGlmaWNhciBlbiBjdeFsIGluc3RydWNjafNuIHNlIGVuY3VlbnRyYSBsYSBmYWxsYSwgY29ycmVnaXI"];
var answers3=["MUVsIHF1ZSBwZXJtaXRlIHRyYWR1Y2lyIHVuIHByb2dyYW1hIGVzY3JpdG8gZW4gdW4gbGVuZ3VhamUgZGUgcHJvZ3JhbWFjafNuIGEgbGVuZ3VhamUgbeFxdWluYS4","MFVuIGxlbmd1YWplIGRlIGFsdG8gbml2ZWw","MFVuYSBpbnN0cnVjY2nzbg","MFVuYSBkaXJlY3RpdmEgZGUgcHJlIHByb2Nlc2FtaWVudG8"];
var answers4=["MVN1IHNlbmNpbGxleiwgY2xhcmlkYWQsIHVzbyBkZSBub3JtYXMgeSBz7W1ib2xvcywgZmxleGliaWxpZGFkLg","MFF1ZSBkZWJlIHNlciBjb25zdHJ1aWRvIHBvciBoZXJyYW1pZW50YXMgbXV5IHTpY25pY2Fz","MFV0aWxpemFyIGZvcm1hcyBnZW9t6XRyaWNhcyBlbGVtZW50YWxlcw","MFJlcXVlcmlyIHVuIGJ1ZW4gYW7hbGlzaXMgZGVsIHByb2JsZW1h"];
var answers5=["MUFzaWduYXI","MExlZXI","MEVzY3JpYmly","MFNp","MGVudG9uY2Vz"];
var ans=[answers1,answers2,answers3,answers4,answers5];
var err=["Tu respuesta es incorrecta","Tu respuesta es incorrecta","Tu respuesta es incorrecta","Tu respuesta es incorrecta","Tu respuesta es incorrecta"];
var ima=["","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="quiz_resources/media/";
