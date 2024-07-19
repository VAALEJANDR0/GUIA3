import React from 'react';
import styles from '../app/page.module.css';

const FinalizePurchase = ({ products }) => {
  const finalizePurchase = () => {
    const totalAmount = products.reduce((sum, product) => sum + (product.quantity * product.price), 0);
    const data = {
      products,
      totalAmount
    };
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Factura.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className={styles.finalizeButtonContainer}>
      <button
        onClick={finalizePurchase}
        className={styles.finalizeButton}
        disabled={products.length === 0}
      >
        Finalizar compra
      </button>
      {products.length === 0 && <div className={styles.error}>Debe agregar al menos un producto para finalizar la compra.</div>}
    </div>
  );
};

export default FinalizePurchase;
