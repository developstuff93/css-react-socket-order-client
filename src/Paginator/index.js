import React, { useMemo, useState } from "react";
import cx from "classnames";

import styles from "./Paginator.module.scss";

export default function Paginator({ totalPage, curPage, updateCurPage }) {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const sequenceArrayGenerator = (from, to) => {
    return [...Array(to - from).keys()].map((num) => num + from);
  };

  const buttonsStatus = useMemo(() => {
    const positions = [];
    if (totalPage < 8) {
      // < 1 2 3 4 5 6 7 >
      positions.push(...sequenceArrayGenerator(0, totalPage));
      setPrevBtnDisabled(true);
      setNextBtnDisabled(true);
    } else if (curPage < 4) {
      // < 1 2 3 4 5 ... 8 >
      positions.push(...sequenceArrayGenerator(0, 5), "more", totalPage - 1);
      setPrevBtnDisabled(true);
      setNextBtnDisabled(false);
    } else if (curPage >= totalPage - 4) {
      // < 1 ... 4 5 6 7 8 >
      positions.push(
        0,
        "more",
        ...sequenceArrayGenerator(totalPage - 5, totalPage)
      );
      setPrevBtnDisabled(false);
      setNextBtnDisabled(true);
    } else {
      // < 1 ... 4 5 6 ... 7 >
      positions.push(
        0,
        "more",
        ...sequenceArrayGenerator(curPage - 1, curPage + 2),
        "more",
        totalPage - 1
      );
      setPrevBtnDisabled(false);
      setNextBtnDisabled(false);
    }
    return positions;
  }, [curPage, totalPage]);

  const renderButton = (status, index) => {
    if (status === "more") {
      return <button key={index} className={cx(styles.Button, styles.More)} />;
    } else if (!isNaN(status)) {
      return (
        <button
          key={index}
          className={cx(styles.Button, {
            [styles.Selected]: curPage === status,
          })}
          onClick={() => updateCurPage(status)}
        >
          {status + 1}
        </button>
      );
    }
  };

  if (totalPage === 0) {
    return <></>;
  }

  return (
    <div className={styles.Root}>
      <button
        className={styles.Button}
        disabled={prevBtnDisabled}
        onClick={() => updateCurPage(curPage - 1)}
      >
        {"<"}
      </button>
      {buttonsStatus.map((status, index) => renderButton(status, index))}
      <button
        className={styles.Button}
        disabled={nextBtnDisabled}
        onClick={() => updateCurPage(curPage + 1)}
      >
        {">"}
      </button>
    </div>
  );
}
