import { useState, useEffect } from "react";
import styles from "../Recipe/Recipe.module.css";
import getData from "../Api";
import LoadingSpinner from "../LoadingSpinner/Spinner";
import Card from "../Card/Card";
import List from "../List/List";


function Recipe() {
  const [reciepes, setReciepes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      try {
        const data = await getData();
        setReciepes((prev) => [...data.recipes]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    setTimeout(() => {
      getRecipes();
    }, 2000);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
     
      <div className={styles.container}>
        <div className={styles.titleDiv}>
          <h1>World cuisine recipes</h1>
        </div>

        <div className={styles.cardContainer}>
          {reciepes.map(
            ({ id, name, cuisine, image, ingredients, instructions }) => {
              return (
                <Card
                  id={id}
                  name={name}
                  cuisine={cuisine}
                  image={image}
                  key={id}
                  instructions={instructions}
                  ingredients={ingredients}
                  setCards={setCards}
                  cards={cards}
                />
              );
            },
          )}
        </div>
      </div>

      <ul className={styles.reciepesList}>
        {cards.length > 0
          ? cards.map(({ id, name, image, instructions, ingredients}) => {
              return (
                <List
                  key={id}
                  id={id}
                  image={image}
                  name={name}
                  ingredients={ingredients}
                  instructions={instructions}
                  setCards={setCards}
                />
              );
            })
          : null}
      </ul>
    </>
  );
}
export default Recipe;
