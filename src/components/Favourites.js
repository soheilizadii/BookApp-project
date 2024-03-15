import styles from './Favourites.module.css'
const Favourites = ({favourites}) => {
    return ( 
        <div className={styles.container}>
            <h3>Favourites</h3>
            {favourites.map((item)=> {
                return <div className={styles.item} key={item.id}>
                       <img src={item.image} />
                       <p>{item.title}</p>
                </div>
            })}
        </div>
     );
}
 
export default Favourites;