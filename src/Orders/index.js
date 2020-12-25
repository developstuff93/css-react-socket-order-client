import React, { useMemo, useState } from "react";

import OrdersTable from "../OrdersTable";
import TableController from "../TableController";
import FilterBar from "../FilterBar";

export default function Orders({ orders }) {
  const [filterPrice, setFilterPrice] = useState("");
  const [curPage, setCurPage] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const filteredOrders = useMemo(() => {
    if (filterPrice) {
      const price = Number(filterPrice);
      return orders.filter((order) => order.price === price);
    }
    return orders;
  }, [orders, filterPrice]);

  const total = useMemo(() => {
    return filteredOrders.length;
  }, [filteredOrders]);

  const renderableOrders = useMemo(() => {
    const renderObjects = [];
    for (let i = 0; i < perPage; i++) {
      const idx = i + curPage * perPage;
      if (filteredOrders[idx]) {
        renderObjects.push(filteredOrders[idx]);
      }
    }
    return renderObjects;
  }, [curPage, perPage, filteredOrders]);

  return (
    <div>
      <FilterBar
        price={filterPrice}
        updateFilter={setFilterPrice}
        updateCurPage={setCurPage}
      />
      <OrdersTable orders={renderableOrders} />
      <TableController
        total={total}
        curPage={curPage}
        perPage={perPage}
        updateCurPage={setCurPage}
        updatePerPage={setPerPage}
      />
    </div>
  );
}
