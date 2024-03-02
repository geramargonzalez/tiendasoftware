/* eslint-disable no-unused-vars */
import styles from './Navbar.module.scss';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCartContext } from '../../routing/context/cartContext';

const Navbar = () => {
    const [categories, setCategories] = useState([]);
    const { itemsTotal } = useCartContext();
    useEffect(() => {
        setCategories(['Mens clothing', 'Electronic', 'Jewelery', 'Electric']);
    }, []);
    return (
        <div className={styles.navbar}>
            <Link to='/'>
                <Logo />
            </Link>
            <div className={styles.links}>
                <Link to='/products'>All products</Link>
                {categories.map((category, index) => (
                    <Link
                        to={`/products/${category}`}
                        key={index}
                        className={styles.link}
                    >
                        {category}
                    </Link>
                ))}
            </div>
            <div className={styles.cart}>
                <p>Cantidad de Items en Carrito {itemsTotal}</p>
            </div>
        </div>
    );
};

export default Navbar;
