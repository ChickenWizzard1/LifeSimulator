// Spielvariablen
let gameState = {
    money: 0,
    jobliste: [
        "Pizzabäcker", "Bibliotheksassistent", "Fitnesstrainer", "Barista", "Florist",
        "Friseur", "Verkäufer in einem Elektronikgeschäft", "Rezeptionist in einem Hotel",
        "Bademeister", "Postbote", "Verkäufer in einer Bäckerei", "Kinokartenverkäufer",
        "Tankstellenmitarbeiter", "Fahrradkurier", "Hundeausführer", "Zeitungszusteller",
        "Tierpfleger", "Regalauffüller im Supermarkt", "Callcenter-Agent",
        "Fahrer (Kurier, Taxi, etc.)", "Büroassistent", "Hausmeister", "Fotograf",
        "Lehrer für Erwachsene", "Freier Autor"
    ],
    hours: 0,
    age: 18,
    multiplier: 1,
    energy: 100,
    intelligence: 0,
    fitness: 0,
    happiness: 100,
    health: 0,
    food: 0,
    worked: 0
};

// Funktion zum Speichern des Spielstands
function saveGame() {
    const saveString = JSON.stringify(gameState);
    const blob = new Blob([saveString], {type: "application/json"});
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "spielstand.json";
    document.body.appendChild(a);  // Füge das Element temporär zum Dokument hinzu
    a.click();
    document.body.removeChild(a);  // Entferne das Element wieder
    URL.revokeObjectURL(url);

    console.log("Spielstand wurde gespeichert:", saveString);
}

// Funktion zum Laden des Spielstands
function loadGame() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    
    input.onchange = function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            try {
                const contents = e.target.result;
                const loadedState = JSON.parse(contents);
                
                // Überprüfen und Aktualisieren jeder Eigenschaft
                for (let key in gameState) {
                    if (loadedState.hasOwnProperty(key)) {
                        gameState[key] = loadedState[key];
                    }
                }
                
                console.log("Spielstand wurde erfolgreich geladen:", gameState);
                gameStateUpdate()
                updateUI();
            } catch (error) {
                console.error("Fehler beim Laden des Spielstands:", error);
            }
        };
        
        reader.readAsText(file);
    };
    
    input.click();
}

// Funktion zum Aktualisieren der Benutzeroberfläche
function updateUI() {
    console.log("UI aktualisiert mit den geladenen Daten:", gameState);
    // Hier würden Sie die Anzeige aller relevanten Spielinformationen aktualisieren
    // Beispiel:
    // document.getElementById('moneyDisplay').textContent = gameState.money;
    // document.getElementById('ageDisplay').textContent = gameState.age;
    // usw.
}

// Beispiel für einen Speicher-Button



// Beispiel für einen Lade-Button
const loadButton = document.createElement("button");
loadButton.textContent = "Spiel laden";
loadButton.onclick = loadGame; 




// Erstellen und Hinzufügen des Style-Elements
const styleElement = document.createElement('style');
styleElement.textContent = styles;
document.head.appendChild(styleElement);