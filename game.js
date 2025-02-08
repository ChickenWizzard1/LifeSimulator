/*var money = 0;
var jobliste = [
    "Pizzabäcker",
    "Bibliotheksassistent",
    "Fitnesstrainer",
    "Barista",
    "Florist",
    "Friseur",
    "Verkäufer in einem Elektronikgeschäft",
    "Rezeptionist in einem Hotel",
    "Bademeister",
    "Postbote",
    "Verkäufer in einer Bäckerei",
    "Kinokartenverkäufer",
    "Tankstellenmitarbeiter",
    "Fahrradkurier",
    "Hundeausführer",
    "Zeitungszusteller",
    "Tierpfleger",
    "Regalauffüller im Supermarkt",
    "Callcenter-Agent",
    "Fahrer (Kurier, Taxi, etc.)",
    "Büroassistent",
    "Hausmeister",
    "Fotograf",
    "Lehrer für Erwachsene",
    "Freier Autor"
];
var hours = 0;
var age = 18;
var multiplier = 1;
var energy = 100;
var intelligence = 0;
// to do
var fitness = 0;
var happiness = 100;
var health;
var food;
var worked = 0;
*/


function gameStateUpdate(){
money = gameState.money;
jobliste = gameState.jobliste;
hours = gameState.hours;
age = gameState.age;
multiplier = gameState.multiplier;
energy = gameState.energy;
intelligence = gameState.intelligence;
fitness = gameState.fitness;
happiness = gameState.happiness;
health = gameState.health;
food = gameState.food;
worked = gameState.worked;
showValues(jobliste[multiplier-1], energy, hours, money, intelligence);
}


gameStateUpdate()


function checkJob(){
    age = 18 + hours / 8760;
    document.getElementById("not1").innerHTML = ``
    
       
    if (worked == multiplier * 50 || worked > multiplier * 50){
        if(intelligence > multiplier * 10){
            multiplier += 1;
            worked = 0;
        } else {
            document.getElementById("not1").innerHTML = `Für den nächsten job musst du intelligenter sein.`
        }
        
        }
}


function showValues(job, energyLevel, hoursLevel, moneyLevel, intelligenceLevel) {
    checkJob();

    // Aktualisiere die Werte
    document.getElementById("moneyValue").textContent = `${moneyLevel}$`;
    document.getElementById("energyValue").textContent = `${energyLevel}`;
    document.getElementById("intelligenceValue").textContent = `${intelligenceLevel}`;
    document.getElementById("ageValue").textContent = `${(age).toFixed(0)} Jahre alt`;
    document.getElementById("jobValue").textContent = `${job} (${multiplier}$)`;
    document.getElementById("hoursValue").textContent = `${hoursLevel}h`;
}



showValues(jobliste[multiplier-1], energy, hours, money, intelligence);

function moreEnergy(plus, time){
    if(energy < 100){
        hours += time;
        if(100 - energy > plus) {
            energy += plus;
        } else {
            energy += 100-energy;
        }
    } else{
        document.getElementById("not2").innerHTML = `Du hast schon volle Energie!`
    }
    showValues(jobliste[multiplier-1], energy, hours, money, intelligence);
}

function learn(){
    if(energy>0){
        hours += 1;
        intelligence += 1;
        energy -= 1 * multiplier;
        }
    showValues(jobliste[multiplier-1], energy, hours, money, intelligence);
}


function orderFood(type){
    if(type == 1){
        if(money-10 > -1){
            moreEnergy(10,2);
            money -= 10;
        }
        
    }
    if(type == 2){
        if(money-20 > -1){
            moreEnergy(20,2);
            money -= 20;
        }
    }
    if(type == 3){
        if(money-30 > -1){
            moreEnergy(30,2);
            money -= 30;
        }
    }
    showValues(jobliste[multiplier-1], energy, hours, money, intelligence);
}



function toggleDropdown(type) {
    if(type == 'food'){
        var content = document.getElementById("dropdownFood");
        if (content.style.display === "none") {
          content.style.display = "block";
        } else {
          content.style.display = "none";
        }
    }
    
  }
  











function update() {
    document.getElementById("not2").innerHTML = ``
    if(energy>0){
    money += multiplier;
    hours += 1;
    worked += 1;
    energy -= multiplier;
    }
    showValues(jobliste[multiplier-1], energy, hours, money, intelligence);
}






