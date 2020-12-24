import React from "react";

export default function OrdersTable({ orders }) {
  return (
    <table>
      <thead>
        <tr>
          <th>customer</th>
          <th>destination</th>
          <th>event_name</th>
          <th>id</th>
          <th>item</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <th>{order.customer}</th>
            <th>{order.destination}</th>
            <th>{order.event_name}</th>
            <th>{order.id}</th>
            <th>{order.item}</th>
            <th>{order.price}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
