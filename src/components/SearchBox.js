import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import styles from './SearchBox.module.css';
const SearchBox = ({onSearch}) => {
    const [input , setInput] = useState('');
    useEffect(()=>{
          onSearch(input)
    },[input]);
    const changeHandler =(e)=>{
          setInput(e.target.value);
    }
    return ( 
        <div className={styles.container}>
            <input type="text" placeholder="Search Title" value={input} onChange={changeHandler}  />
            <i><IoMdSearch/></i>
        </div>
     );
}
 
export default SearchBox;