import React from "react";
import "./App.css";
import { useList } from "./hooks/useList";

export default function App() {
  const url = "http://localhost:5000/api/players";
  const [listData] = useList(url);
  return (
    <div className="App">
      <h1>Women's World Cup Players:</h1>
      <h2>Name | Country</h2>
      {listData.map((item, index) => {
        return (
          <div key={index}>
            {item.name} | {item.country}
          </div>
        );
      })}
    </div>
  );
}
