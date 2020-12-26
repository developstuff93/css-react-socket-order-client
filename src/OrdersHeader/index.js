import React from "react";

import FilterBar from "../FilterBar";
import MetaInfo from "../MetaInfo";

import styles from "./OrdersHeader.module.scss";

export default function OrdersHeader({
  totalLength,
  filteredLength,
  price,
  updatePriceFilter,
  updateCurPage,
}) {
  return (
    <div className={styles.Root}>
      <FilterBar
        price={price}
        updateCurPage={updateCurPage}
        updatePriceFilter={updatePriceFilter}
      />
      <MetaInfo
        price={price}
        totalLength={totalLength}
        filteredLength={filteredLength}
      />
    </div>
  );
}
