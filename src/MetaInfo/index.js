import React from "react";

import styles from "./MetaInfo.module.scss";

export default function MetaInfo({ price, totalLength, filteredLength }) {
  return (
    <div className={styles.Root}>
      <span>{price && `Matched Count: ${filteredLength} / `}</span>
      <span>{`Total Count: ${totalLength}`}</span>
    </div>
  );
}
