import React from "react";

import styles from "./OrdersTable.module.scss";

export default function OrdersTable({ orders }) {
  return (
    <div className={styles.Root}>
      <table className={styles.Table}>
        <colgroup>
          <col span="1" style={{ width: "10%" }} />
          <col span="1" style={{ width: "10%" }} />
          <col span="1" style={{ width: "8%" }} />
          <col span="1" style={{ width: "20%" }} />
          <col span="1" style={{ width: "12%" }} />
          <col span="1" style={{ width: "40%" }} />
        </colgroup>
        <thead>
          <tr>
            <th>id</th>
            <th>event_name</th>
            <th>price</th>
            <th>item</th>
            <th>customer</th>
            <th>destination</th>
          </tr>
        </thead>
        <tbody>
          {!orders.length ? (
            <tr>
              <td colSpan={6}>No Orders</td>
            </tr>
          ) : (
            orders.length &&
            orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.event_name}</td>
                <td>{order.price}</td>
                <td>{order.item}</td>
                <td>{order.customer}</td>
                <td style={{ textAlign: "left", paddingLeft: "40px" }}>
                  {order.destination}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
