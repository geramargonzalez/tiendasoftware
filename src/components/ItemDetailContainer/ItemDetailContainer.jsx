/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';
import { db } from '../../firebase/config';
import { collection, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState();
    const { productId } = useParams();
  
    useEffect(() => {
        const fetchItem = async () => {
            const productsCollection = collection(db, 'products');
            const refDoc = doc(productsCollection, productId);
            try {
                const docSnapshot = await getDoc(refDoc);
                if (docSnapshot.exists()) {
                    setItem({ ...docSnapshot.data() });
                    setLoading(false);
                } else {
                    console.log('Document not found');
                }
            } catch (error) {
                console.log('Error getting document:', error);
            }
        };
      
        fetchItem();
    }, [productId]);

    if (loading) return <Spinner />;
    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
