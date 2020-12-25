import React, { useCallback, useEffect, useMemo, useState } from "react";

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
            className={page === curPage && "selected"}
            key={page}
            onClick={() => updateCurPage(page)}
          >
            {page}
          </button>
        ))}
      </>
    );
  }, [from, to, curPage, updateCurPage]);

  return (
    <div>
      <button disabled={isPrevButtonDisabled} onClick={() => updateCurPage(0)}>
        {"<<"}
      </button>
      <button
        disabled={isPrevButtonDisabled}
        onClick={() => updateCurPage(curPage - 1)}
      >
        {"<"}
      </button>
      {!isPrevButtonDisabled && (
        <button onClick={() => updateCurPage(from)}>{"..."}</button>
      )}
      {renderPageButtons()}
      {!isNextButtonDisabled && (
        <button onClick={() => updateCurPage(to - 1)}>{"..."}</button>
      )}
      <button
        disabled={isNextButtonDisabled}
        onClick={() => updateCurPage(curPage + 1)}
      >
        {">"}
      </button>
      <button
        disabled={isNextButtonDisabled}
        onClick={() => updateCurPage(totalPage - 1)}
      >
        {">>"}
      </button>
    </div>
  );
}
