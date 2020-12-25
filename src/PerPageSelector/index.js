import React from "react";

export default function PerPageSelector({
  curPage,
  perPage,
  updateCurPage,
  updatePerPage,
}) {
  const options = [...Array(10).keys()].map((num) => (num + 1) * 5);
  const onSelectChange = (e) => {
    const newPerPage = e.target.value;
    updatePerPage(newPerPage);
    const targetPage = Math.floor((curPage * perPage) / newPerPage);
    updateCurPage(targetPage);
  };

  return (
    <select value={perPage} onChange={onSelectChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
