import styles from './Book.module.css';
import { FaHeart } from "react-icons/fa";
import { useState } from 'react';
const Book = ({data : {author,title,image,pages,language,id},onAdd}) => {
   const [liked,setLiked]= useState('');
   const likeHandler =()=>{
      setLiked((liked)=>!liked);
      onAdd(id);
   }
    return ( 
        <div className={styles.bookContainer}>
           <img src={image}  />
           <div className={styles.info}>
              <h3>{title}</h3>
              <p>{author}</p>
              <div>
                 <span>{language}</span>
                 <span>{pages} pages</span>
              </div>
           </div>
           <span onClick={()=>likeHandler(id)} className={`${styles.like} ${liked ? styles.red : null} `} ><FaHeart/></span>
        </div>
        
     );
}
 
export default Book;