import {useEffect, useState} from "react";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import {ReflectAdapter as app} from "next/dist/server/web/spec-extension/adapters/reflect";

export default function Zoo() {
    const id = 0;
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
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({species : newAnimal}),
        })
            .then((response) => response.json())
            .then((data) => {
                setAnimals([...animals,data]);
                setNewAnimal("");
            });
    };

    return (
        <div className={styles.container}>
            <Link href="/">
                <p className={styles.homeLink}>HOME</p>
            </Link>
            <h1 className={styles.title}>Welcome to The Zoo-Page</h1>
            <ul className={styles["animal-list"]}>
                {animals.map((animal) =>(
                    <li className={styles.animalitem} key={animal.id}>{animal.species}</li>
                ))}
            </ul>
            <input
                className={styles.inputfield}
                type="text"
                value={newAnimal}
                onChange={(e) => setNewAnimal(e.target.value)}
            />
            <button className={styles.addbutton} onClick={handleAnimals}>Add Animal to Zoo</button>
        </div>
    )
}