import { useState } from 'react';
import styles from '../List/List.module.css';
import Modal from '../Modal/Modal';

function List({image,name,setCards,id,ingredients,instructions})
{
    const[show,setShow]=useState(false)    
    const[content,setContent]=useState([]) 
      
    function remove()
    {
   
        setCards((prev)=>prev.filter((x)=>{
            return  x.id!==id
        }))

    }

    function showIngredients(value)
    {
        setShow(true)
        setContent(value)
    }

    if(show)
    {
      return <Modal show={show} setShow={setShow} name={name} content={content} />
    }

    return(
        <>
            <li className={styles.listItem}>
                <div className={styles.listDiv}>
                    <img src={image} alt={name} className={styles.listImg}/>
                    <p>{name}</p>
                </div>
                <div className={styles.btnDiv}>
                    <button onClick={()=>showIngredients(ingredients)}>Ingredients</button>
                    <button onClick={()=>showIngredients(instructions)}>Instructions</button>
                    <button onClick={remove}>Remove</button>
                </div>
            </li>
        </>
    )
}
export default List;