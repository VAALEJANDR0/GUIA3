import React from 'react';
import styles from '../app/page.module.css';
import FinalizePurchase from './FinalizePurchase';

function Todo({ products, deleteProduct }) {
  const totalAmount = products.reduce((sum, product) => sum + (product.quantity * product.price), 0);

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Marca</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td data-label="Producto">{product.name}</td>
              <td data-label="Marca">{product.brand}</td>
              <td data-label="Cantidad">{product.quantity}</td>
              <td data-label="Precio">${product.price}</td>
              <td data-label="Total">${product.quantity * product.price}</td>
              <td data-label="Acciones">
                <button onClick={() => deleteProduct(index)} className={styles.btn_delete}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="4" className={styles.totalLabel} data-label="Total a pagar">Total a pagar</td>
            <td data-label="Total">${totalAmount}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <FinalizePurchase products={products} />
    </div>
  );
}

export default Todo;
