import { db } from './config'
import { collection, addDoc } from 'firebase/firestore'
// import { products } from '../utils/MockData.js'

export const importProducts = async () => {
  fetch(`https://fakestoreapi.com/products/`)
    .then((res) => res.json())
    .then((data) => {
      const productsCollection = collection(db, 'products')
      console.log(data)
      data.forEach((elem) => {
        addDoc(productsCollection, {
          name: elem.title,
          description: elem.description,
          price: elem.price,
          image: elem.image,
          category: elem.category,
        }).then((docRef) => {
          console.log(docRef)
          console.log(docRef.id)
        })
      })
    })

}
