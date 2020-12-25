import React, { useMemo, useState } from "react";
import OrdersTable from "../OrdersTable";
import TableController from "../TableController";

export default function Orders({ orders }) {
  const [curPage, setCurPage] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const total = useMemo(() => {
    return orders.length;
  }, [orders]);

  const renderableOrders = useMemo(() => {
    const renderObjects = [];
    for (let i = 0; i < perPage; i++) {
      const idx = i + curPage * perPage;
      if (orders[idx]) {
        renderObjects.push(orders[idx])
      }
    }
    return renderObjects;
  }, [curPage, perPage, orders]);

  return (
    <div>
      <OrdersTable orders={renderableOrders} />
      <TableController
        total={total}
        curPage={curPage}
        perPage={perPage}
        updatePage={setCurPage}
        updatePerPage={setPerPage}
      />
    </div>
  );
}
