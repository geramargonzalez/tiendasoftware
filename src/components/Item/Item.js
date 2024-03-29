import styles from './Item.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Item = ({ id, title, price, image }) => {
    return (
        <div className={styles.item}>
            <div className={styles.item__image}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.item__info}>
                <h2 className={styles.item__info__title}>{title}</h2>
                <p className={styles.item__info__price}>${price}</p>
                <Link to={`/product/${id}`} className={styles.item__info__button}>
                Ver más
                </Link>
            </div>
        </div>
    );
};

Item.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string
};

export default Item;
