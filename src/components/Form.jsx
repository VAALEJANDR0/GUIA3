"use client"
import React, { useState } from 'react';
import styles from "../app/page.module.css";


function Form({ addProduct }) {
  const [product, setProduct] = useState({ name: '', brand: '', quantity: '', price: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = product.name ? "" : "El nombre del producto es requerido.";
    tempErrors.brand = product.brand ? "" : "La marca es requerida.";
    tempErrors.quantity = product.quantity ? "" : "La cantidad es requerida.";
    tempErrors.price = product.price ? "" : "El precio es requerido.";
    tempErrors.quantity = Number(product.quantity) > 0 ? "" : "La cantidad debe ser mayor que 0.";
    tempErrors.price = Number(product.price) > 0 ? "" : "El precio debe ser mayor que 0.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addProduct(product);
      setProduct({ name: '', brand: '', quantity: '', price: '' });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Nombre del producto"
          className={styles.form_input}
        />
        {errors.name && <div className={styles.error}>{errors.name}</div>}
      </div>
      <div className={styles.formGroup}>
        <input
          type="text"
          name="brand"
          value={product.brand}
          onChange={handleChange}
          placeholder="Marca"
          className={styles.form_input}
        />
        {errors.brand && <div className={styles.error}>{errors.brand}</div>}
      </div>
      <div className={styles.formGroup}>
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          placeholder="Cantidad"
          className={styles.form_input}
        />
        {errors.quantity && <div className={styles.error}>{errors.quantity}</div>}
      </div>
      <div className={styles.formGroup}>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Precio"
          className={styles.form_input}
        />
        {errors.price && <div className={styles.error}>{errors.price}</div>}
      </div>
      <button type="submit" className={styles.form_button}>
        Agregar
      </button>
    </form>
  );
}

export default Form;
