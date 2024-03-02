/* eslint-disable no-unused-vars */
import styles from './ItemDetail.module.scss';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../routing/context/cartContext';

const ItemDetail = ({ item }) => {
    console.log(item);
    const { title, price, description, category, image } = item;
    const { addItem } = useCartContext();
    
    const onAdd = (count) => {
        console.log(`Agregaste ${count} ${title} al carrito`);
        addItem(item, count);
    };

    return (
     
        <div className={styles.item}>
            <div className={styles.item__image}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.item__info}>
                <p className={styles.item__info__price}>${price}</p>
                <h2 className={styles.item__info__title}>{title}</h2>
                <p className={styles.item__info__description}>{description}</p>
                <p className={styles.item__info__description}>{category}</p>
            </div>
            <ItemCount onAdd={onAdd} />

        </div>
    );
};
export default ItemDetail;
