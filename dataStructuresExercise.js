// 1a
const jedi = [];
console.log([]);

//1b
jedi [jedi.length] = "Luke";
console.log(jedi);

// 1c
jedi.push("Obi-Wan Kenobi");
console.log(jedi);

// 1d
jedi.unshift("Yoda");
console.log(jedi);

// 1e
console.log(jedi[1]);

// 1f
jedi.pop();
// jedi.splice(2, 1);
console.log(jedi);

// 1g
jedi.shift();
// jedi.splice(0, 1);
console.log(jedi);

// 2a

const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"]
console.log(sithLords);

// 2b
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"]
console.log(imperialOfficers);

// 2c
const allstarWarsVillains = sithLords.concat(imperialOfficers);
console.log(allstarWarsVillains);

// 2d
console.log(allstarWarsVillains.slice(0,2));

// 3a
const droids = {
    astromech: "R2-D2",
    protocol: "C-3PO",
    assassin: "IG-88"
}

// 3b
console.log(droids["astromech"]);

// 3c
console.log(droids.protocol);

// 3d
droids["assassin"] = "IG-11";
// droids.assassin = "IG-11";
console.log(droids);

// 4
console.log(allstarWarsVillains[0][6]);

// 5
console.log(sithLords.slice(-2, -1));


// 6a
const starWarsMovies = [
    {
        episodeOne: "The Phantom Menace", 
        episodeTwo: "Attack of the Clones", 
        episodeThree: "Revenge of the Sith"
    },
    {
        episodeFour: "A New Hope", 
        episodeFive: "The Empire Strikes Back", 
        episodeSix: "Return of the Jedi"
    },
    {
        episodeSeven: "The Force Awakens", 
        episodeEight: "The Last Jedi", 
        episodeNine: "The Rise of Skywalker"
    }
];

// 6b
starWarsMovies.splice(1, 0, "Solo", "Rouge One");
console.log(starWarsMovies);
