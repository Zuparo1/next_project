import {useEffect, useState} from "react";

function Zoo() {
    const [animals, setAnimals] = useState([]);
    const [newAnimal, setNewAnimal] = useState('')

    useEffect(() => {
        fetch('/api/items')
            .then((response) => response.json())
            .then((data) => setAnimals(data))
    }, []);

    const handleAnimals = () => {
        fetch('/api/items', {
            method: 'POST',
            body: JSON.stringify({name : newAnimal}),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setAnimals([...animals,data]);
                setNewAnimal('');
            });
    };

    return (
        <div>
            <h1>Welcome to The Zoo-Page</h1>
        </div>
    )

}