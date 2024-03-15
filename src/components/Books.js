import styles from "./Books.module.css";
import { useState } from 'react';
import {books as booksData} from '../constants/mockData'
import Book from './Book';
import Favourites from './Favourites';
import SearchBox from "./SearchBox";
const Books = () => {
    const [books,setBooks] = useState(booksData);
    const [favourites,setFavourites] = useState([]);
    const addFavourite =(id) =>{
        const isFavourite = favourites.some(book => book.id === id);
        if (isFavourite) {
            setFavourites(favourites.filter(book => book.id !== id));
        } else {
            const bookToAdd = books.find(book => book.id === id);
            setFavourites([...favourites, bookToAdd]);
        }
    }
    const searchHandler = (input)=>{
        if(input)
        {
            const SearchedBook=booksData.filter((book)=>{
               return book.title.toLocaleLowerCase().includes(input);
            });
             setBooks(SearchedBook);
        }
        else{
            setBooks(booksData);
        }
    } 
    return ( 
        <div>
            <SearchBox onSearch={searchHandler}/>
            {!books.length ? <p className={styles.alert}>There is no Books available </p> :(
            <div className={styles.container} >
                <div className={styles.container2}>
                    {books.map((book)=>{
                        return <Book key={book.id} data={book} onAdd={addFavourite} />
                    })}
                </div>
                {favourites.length ? <Favourites favourites={favourites}/> : null}
            </div>
            )}

        </div>
     );
}
 
export default Books;