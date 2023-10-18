export default (req, res) => {
    if (req.method === "GET"){
        const animals = [{ id: 1, species: "Cat"}, {id:2 , species: "Dog"}]
        res.status(200).json(animals);
    } else if (req.method === "POST"){
        const newAnimal = { id: 3, name: "New Animal"}
        res.status(201).json(newAnimal);
    } else {
        res.status(405).end
    }
}