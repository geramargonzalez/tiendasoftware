import styles from './ItemDetail.module.scss'
import ItemCount from '../ItemCount/ItemCount.js'

const ItemDetail = ({ item }) => {
  const { title, description, image, price } = item

  const onAdd = (count) => {
    console.log(`Agregaste ${count} ${title} al carrito`)
  }


  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.item__info}>
      <p className={styles.item__info__price}>${price}</p>
        <h2 className={styles.item__info__title}>{title}</h2>
        <p className={styles.item__info__description}>${description}</p>
        
      </div>
      <ItemCount  onAdd={onAdd} />
    </div>
  )
}
export default ItemDetail