"use client"

import styles from './page.module.css';
import { useState } from 'react';
import Form from '../components/Form';
import Todo from '../components/Todo';

export default function Home() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <main className={styles.main}>
      <div className="App">
        <div className={styles.formContainer}>
          <p>Lista de compras</p>
          <Form addProduct={addProduct} />
        </div>
        <Todo products={products} deleteProduct={deleteProduct} />
      </div>
    </main>
  );
}
