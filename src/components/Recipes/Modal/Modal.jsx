import { useState } from "react";
import styles from "./modal.module.css";

function Modal({ show,setShow,name,content}) {
  
  if (!show) return null;

  return (
    <div className={styles.overlay} >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>{name}</h2>

          <button className={styles.closeIcon} onClick={()=>setShow(false)}>
            ×
          </button>
        </div>

        <div className={styles.body}>
            {
             content.map((item,index)=>{
                return <p key={index}>{item}</p>
             })
                
            }
        </div>

        <div className={styles.footer}>
          <button className={styles.closeButton} onClick={()=>setShow(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
