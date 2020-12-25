import React, { useCallback, useEffect, useMemo, useState } from "react";

import styles from './Paginator.module.scss';

export default function Paginator({ totalPage, curPage, updateCurPage }) {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);

  useEffect(() => {
    let newFrom, newTo;
    if (curPage < 3) {
      newFrom = 0;
      newTo = Math.min(newFrom + 5, totalPage);
    } else if (curPage > totalPage - 3) {
      newTo = totalPage;
      newFrom = Math.max(newTo - 5, 0);
    } else {
      newFrom = curPage - 2;
      newTo = newFrom + 5;
    }
    setFrom(newFrom);
    setTo(newTo);
  }, [curPage, totalPage]);

  const isPrevButtonDisabled = useMemo(() => {
    return from < 1;
  }, [from]);

  const isNextButtonDisabled = useMemo(() => {
    return to > totalPage - 1;
  }, [to, totalPage]);

  const renderPageButtons = useCallback(() => {
    const visiblePages = [...Array(to - from).keys()].map((num) => num + from);
    return (
      <>
        {visiblePages.map((page) => (
          <button
            className={page === curPage && styles.ButtonSelected}
            key={page}
            onClick={() => updateCurPage(page)}
          >
            {page + 1}
          </button>
        ))}
      </>
    );
  }, [from, to, curPage, updateCurPage]);

  if (totalPage === 0) {
    return <></>;
  }

  return (
    <div className={styles.Root}>
      <button
        disabled={isPrevButtonDisabled}
        onClick={() => updateCurPage(curPage - 1)}
      >
        {"<"}
      </button>
      {!isPrevButtonDisabled && (
        <button className={styles.ButtonMore} onClick={() => updateCurPage(curPage - 1)} />
      )}
      {renderPageButtons()}
      {!isNextButtonDisabled && (
        <button className={styles.ButtonMore} onClick={() => updateCurPage(curPage + 1)} />
      )}
      <button
        disabled={isNextButtonDisabled}
        onClick={() => updateCurPage(curPage + 1)}
      >
        {">"}
      </button>
    </div>
  );
}
