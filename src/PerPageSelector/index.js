import React from "react";

export default function PerPageSelector({
  curPage,
  perPage,
  updateCurPage,
  updatePerPage,
}) {
  const options = [10, 25, 50, 100];
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
