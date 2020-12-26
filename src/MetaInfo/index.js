import React from "react";

import styles from "./MetaInfo.module.scss";

export default function MetaInfo({ price, totalLength, filteredLength }) {
  return (
    <div className={styles.Root}>
      {price && (
        <span>
          Matched: <strong>{filteredLength}</strong> |{" "}
        </span>
      )}
      <span>
        Total: <strong>{totalLength}</strong>
      </span>
    </div>
  );
}
