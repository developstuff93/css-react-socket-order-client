import React from "react";

import styles from "./PerPageSelector.module.scss";

const PER_PAGE_OPTIONS = [10, 25, 50, 100];

export default function PerPageSelector({
  curPage,
  perPage,
  updateCurPage,
  updatePerPage,
}) {
  const onSelectChange = (e) => {
    const newPerPage = e.target.value;
    updatePerPage(newPerPage);
    const targetPage = Math.floor((curPage * perPage) / newPerPage);
    updateCurPage(targetPage);
  };

  return (
    <div className={styles.Root}>
      <label htmlFor="per-page-selector">Orders Per Page: </label>
      <select
        id="per-page-selector"
        className={styles.Selector}
        value={perPage}
        onChange={onSelectChange}
      >
        {PER_PAGE_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
