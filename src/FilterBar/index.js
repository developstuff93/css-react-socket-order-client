import React from "react";

import styles from "./FilterBar.module.scss";

const KEY_CODE = {
  0: 48,
  9: 57,
};

export default function FilterBar({ updatePriceFilter, updateCurPage, price }) {
  const onKeyDown = (e) => {
    const keyCode = e.which ? e.which : e.keyCode;
    if (keyCode < KEY_CODE[0] || keyCode > KEY_CODE[9]) {
      e.preventDefault();
    }
  };

  const updateFilter = (newPrice) => {
    updatePriceFilter(newPrice);
    updateCurPage(0);
  };

  return (
    <div className={styles.Root}>
      <label htmlFor="price-filter">Search: </label>
      <input
        id="price-filter"
        type="number"
        onKeyPress={onKeyDown}
        onChange={(e) => updateFilter(e.target.value.slice(0, 15))}
        value={price}
      />
      {price && <button onClick={() => updateFilter("")}>&times;</button>}
    </div>
  );
}
