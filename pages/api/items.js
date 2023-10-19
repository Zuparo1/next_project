import * as json from "postcss";

export default (req, res) => {

    if (req.method === "GET"){
        const animals = [
            { id: crypto.randomUUID(), species: "Cat" },
            { id: crypto.randomUUID() , species: "Dog" },
            { id: crypto.randomUUID(), species: "Lion" },
            { id: crypto.randomUUID() , species: "Tiger" },
            { id: crypto.randomUUID(), species: "Elephant" },
            { id: crypto.randomUUID(), species: "Giraffe" },
            { id: crypto.randomUUID(), species: "Zebra" },
            { id: crypto.randomUUID(), species: "Kangaroo" },
            { id: crypto.randomUUID(), species: "Hippo" },
            { id: crypto.randomUUID(), species: "Rhino" },
            { id: crypto.randomUUID(), species: "Rhino" },
            { id: crypto.randomUUID(), species: "Panda" },
            { id: crypto.randomUUID(), species: "Koala" },
            { id: crypto.randomUUID(), species: "Gorilla" },
            { id: crypto.randomUUID(), species: "Peacock" },
            { id: crypto.randomUUID(), species: "Sloth" },
            { id: crypto.randomUUID(), species: "Chameleon" },
            { id: crypto.randomUUID(), species: "Toucan" },
            { id: crypto.randomUUID(), species: "Komodo Dragon" },
            { id: crypto.randomUUID(), species: "Snow Leopard" },
    ]
        res.status(200).json(animals);
    } else if (req.method === "POST"){
        try {
            const requestBody = req.body.species;
            if (!requestBody) {
                    return res.status(400).json({ error: "Species is required" });
                }
            const newAnimal = { id: crypto.randomUUID(), species: requestBody};
            console.log("New Animal to the Zoo:")
            console.log(newAnimal);
            res.status(201).json(newAnimal);
        } catch (error){
            console.error("Error in POST", error);
            res.status(500).json({ error: 'Internal ' });
        }

    }
    //FORSØK PÅ EKSTRAOPPGAVE - START
    else if (req.method === "GET" && req.query.id) {

        const animalId = req.query.id;
        const animal = animals.find((animal) => animal.id === animalId);

        if (animal) {
            res.status(200).json(animal);
        } else {
            res.status(404).json({ error: "Element not found" });
        }
    }
    //FORSØK PÅ EKSTRAOPPGAVE - SLUTT
    else {
        res.status(405).end
    }
}