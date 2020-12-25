import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import Orders from "./Orders";

import styles from "./App.module.scss";

function App() {
  const [newEvents, setNewEvents] = useState([]);
  const [orders, setOrders] = useState([]);
  const ENDPOINT = "http://localhost:4000/";

  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.on("connect", () => {
      console.log("Connected with socket server");
    });
    socket.on("order_event", (data) => {
      setNewEvents(data);
    });
    socket.on("disconnect", () => {
      console.log("Disconnect");
    });
  }, []);

  useEffect(() => {
    const updatedOrders = [...orders];
    newEvents.forEach((event) => {
      const idx = updatedOrders.findIndex((order) => order.id === event.id);
      if (idx === -1) {
        updatedOrders.push(event);
      } else {
        updatedOrders[idx] = event;
      }
    });
    setOrders(updatedOrders);
    /* eslint-disable  react-hooks/exhaustive-deps */
  }, [newEvents]);

  return (
    <div className={styles.Root}>
      <div className={styles.Main}>
        <Orders orders={orders} />
      </div>
    </div>
  );
}

export default App;
