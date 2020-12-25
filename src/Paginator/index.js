import React, { useCallback, useEffect, useMemo, useState } from "react";

export default function Paginator({ totalPage, curPage, updatePage }) {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);

  useEffect(() => {
    const newFrom = Math.min(Math.max(curPage - 2, 0), Math.max(curPage - 1, 0), curPage);
    const newTo = Math.min(newFrom + 5, totalPage)
    setFrom(newFrom);
    setTo(newTo);
  }, [curPage, totalPage])

  const isPrevButtonDisabled = useMemo(() => {
    return curPage < 1;
  }, [curPage]);

  const isNextButtonDisabled = useMemo(() => {
    return curPage > totalPage - 1;
  }, [curPage, totalPage]);

  const renderPageButtons = useCallback(() => {
    const visiblePages = [...Array(to - from).keys()].map(
      (num) => num + from
    );
    return (
      <>
        {visiblePages.map((page) => (
          <button key={page} onClick={() => updatePage(page)}>
            {page}
          </button>
        ))}
      </>
    );
  }, [from, to, updatePage]);

  return (
    <div>
      <button disabled={isPrevButtonDisabled} onClick={() => updatePage(0)}>
        {"<<"}
      </button>
      <button
        disabled={isPrevButtonDisabled}
        onClick={() => updatePage(curPage - 1)}
      >
        {"<"}
      </button>
      {from > 0 && (
        <button onClick={() => updatePage(curPage - 1)}>{"..."}</button>
      )}
      {renderPageButtons()}
      {to < totalPage && (
        <button onClick={() => updatePage(curPage + 1)}>{"..."}</button>
      )}
      <button
        disabled={isNextButtonDisabled}
        onClick={() => updatePage(curPage + 1)}
      >
        {">"}
      </button>
      <button
        disabled={isNextButtonDisabled}
        onClick={() => updatePage(totalPage - 1)}
      >
        {">>"}
      </button>
    </div>
  );
}
