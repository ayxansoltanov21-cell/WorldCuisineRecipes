import styles from "./Card.module.css";
import Notification from "../Toast/Notification";
import { useState } from "react";

function Card({
  id,
  name,
  cuisine,
  image,
  setCards,
  ingredients,
  instructions,
  cards
}) {
  const [message, setMessage] = useState("");

    const isAdded=cards.some((x)=>x.id===id)

  function addReciepe() {
    
    setCards((prev) => {
      const exists = prev.some((item) => item.id === id);

      if (exists) {
        setMessage("This recipe is already added!");
        return prev;
      }

      setMessage("Recipe added successfully!");

      return [
        ...prev,
        {
          id,
          name,
          cuisine,
          image,
          ingredients,
          instructions,
        },
      ];
    });
  }

  return (
    <>
      <Notification message={message} setMessage={setMessage} />

      <div className={styles.card}>
        <img src={image} alt={name} className={styles.cardImg} />
        <p>{name}</p>
        <p>Cuisine: {cuisine}</p>
        <button onClick={addReciepe}>{isAdded?'Added':'Get Receipe'}</button>
      </div>
    </>
  );
}

export default Card;
