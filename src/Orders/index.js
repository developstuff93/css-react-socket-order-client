import React from "react";
import OrdersTable from "../OrdersTable";

export default function Orders({ orders }) {
  return (
    <div>
      <OrdersTable orders={orders} />
    </div>
  );
}
