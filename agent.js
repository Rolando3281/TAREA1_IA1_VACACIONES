// TAREA 1 , INTELIGENCIA ARTIFICIAL 1 - SEGUNDO SEMESTRE 2021
//ROLANDO GIOVANNI MARROQUIN GONZALEZ - 200312642

function reflex_agent(location, state){
    if (state=="DIRTY") return "CLEAN";
    else if (location=="A") return "GO TO B";
    else if (location=="B") return "GO TO A";
}

function test(states){
    statesCount(states); //se incrementan los contadores de estados
    printStates(); //se imprimen los estados en pantalla
       var location = states[0];		
       var state = states[0] == "A" ? states[1] : states[2];
       var action_result = reflex_agent(location, state);
       document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | State A: ").concat(states[1]).concat(" | State B: ").concat(states[2]).concat(" | Action: ")
                                                                .concat(action_result).concat("&emsp; &#8594; ").concat(getCurrentState(states));
       if (action_result == "CLEAN"){
         if (location == "A") states[1] = "CLEAN";
          else if (location == "B") states[2] = "CLEAN";
       }
       else if (action_result == "GO TO B") states[0] = "B";
       else if (action_result == "GO TO A") states[0] = "A";

    if(estado4>2 && estado5>2) dirtyAgain(states); //se ensucian nuevamente las habitaciones A o B

  var timer = setTimeout(function(){ test(states); }, 500);

  //Si los contadores de cada estado acumulan por lo menos 1 visita, se detiene la ejecucion del programa
  if(estado1>=1 && estado2>=1 && estado3>=1 && estado4>=1 && estado5>=1 && estado6>=1 && estado7>=1 && estado8>=1){
    clearTimeout(timer);
    document.getElementById("log").innerHTML+="<br><h3>FINALIZADO! Ya se visito al menos 1 vez cada estado...</h3> ";
    document.getElementById("logStates").innerHTML+="<br><h4>FINALIZADO! Ya se visito al menos 1 vez cada estado...</h4> ";
  } 
  
 
}

//Funcion para imprimir el valor del contador de cada estado del agente
function printStates(){
    document.getElementById("logStates").innerHTML="";
    document.getElementById("logStates").innerHTML+="<br><b>Estado  |   No.Visitas</b>";
    document.getElementById("logStates").innerHTML+="<br>Estado 1: &emsp;  <b>".concat(estado1).concat("</b>");
    document.getElementById("logStates").innerHTML+="<br>Estado 2: &emsp; <b>".concat(estado2).concat("</b>");
    document.getElementById("logStates").innerHTML+="<br>Estado 3: &emsp; <b>".concat(estado3).concat("</b>");
    document.getElementById("logStates").innerHTML+="<br>Estado 4: &emsp; <b>".concat(estado4).concat("</b>");
    document.getElementById("logStates").innerHTML+="<br>Estado 5: &emsp; <b>".concat(estado5).concat("</b>");
    document.getElementById("logStates").innerHTML+="<br>Estado 6: &emsp; <b>".concat(estado6).concat("</b>");
    document.getElementById("logStates").innerHTML+="<br>Estado 7: &emsp; <b>".concat(estado7).concat("</b>");
    document.getElementById("logStates").innerHTML+="<br>Estado 8: &emsp; <b>".concat(estado8).concat("</b>");
    //document.getElementById("logStates").innerHTML+="<br>ALEATORIO : ".concat(aleatorio);
}    

//Funcion para incrementar los contadores de cada estado del agente
function statesCount(states){
    if(states[0]=="A" && states[1]=="DIRTY" && states[2]=="DIRTY" ) estado1++;
    else if(states[0]=="A" && states[1]=="CLEAN" && states[2]=="DIRTY" ) estado2++;
    else if(states[0]=="B" && states[1]=="CLEAN" && states[2]=="DIRTY" ) estado3++;
    else if(states[0]=="B" && states[1]=="CLEAN" && states[2]=="CLEAN" ) estado4++;
    else if(states[0]=="A" && states[1]=="CLEAN" && states[2]=="CLEAN" ) estado5++;
    else if(states[0]=="A" && states[1]=="DIRTY" && states[2]=="CLEAN" ) estado6++;
    else if(states[0]=="B" && states[1]=="DIRTY" && states[2]=="CLEAN" ) estado7++;
    else if(states[0]=="B" && states[1]=="DIRTY" && states[2]=="DIRTY" ) estado8++;
}    

function getCurrentState(states){
    if(states[0]=="A" && states[1]=="DIRTY" && states[2]=="DIRTY" ) return "Estoy en Estado 1";
    else if(states[0]=="A" && states[1]=="CLEAN" && states[2]=="DIRTY" ) return "Estoy en Estado 2";
    else if(states[0]=="B" && states[1]=="CLEAN" && states[2]=="DIRTY" ) return "Estoy en Estado 3";
    else if(states[0]=="B" && states[1]=="CLEAN" && states[2]=="CLEAN" ) return "Estoy en Estado 4";
    else if(states[0]=="A" && states[1]=="CLEAN" && states[2]=="CLEAN" ) return "Estoy en Estado 5";
    else if(states[0]=="A" && states[1]=="DIRTY" && states[2]=="CLEAN" ) return "Estoy en Estado 6";
    else if(states[0]=="B" && states[1]=="DIRTY" && states[2]=="CLEAN" ) return "Estoy en Estado 7";
    else if(states[0]=="B" && states[1]=="DIRTY" && states[2]=="DIRTY" ) return "Estoy en Estado 8";
}

//Funcion para ensuciar aleatoriamente una habitacion (A, B)
function dirtyAgain(states){
    var max = 2;
    var min = 1;
     aleatorio = Math.floor(Math.random() * (max - min + 1)) + min; //numero aleatario entre 1 y 2
     //1 ensuciar A
    //2 ensuciar B
    //3 ensuciar A y B

     switch(aleatorio){
         case 1:states[1]="DIRTY";
             break;
         case 2: states[2]="DIRTY";
             break;
        /*case 3: states[1]="DIRTY"; states[2]="DIRTY";
            break;*/
     }

return aleatorio;
}

var estado1 =0;
var estado2 =0;
var estado3 =0;
var estado4 =0;
var estado5 =0;
var estado6 =0;
var estado7 =0;
var estado8 =0;
var aleatorio = 0;

var states = ["A","DIRTY","DIRTY"]; //VALOR DE ESTADO INICIAL , AMBAS HABITACIONES SUCIAS Y LA ASPIRADORA EN "A"
test(states);