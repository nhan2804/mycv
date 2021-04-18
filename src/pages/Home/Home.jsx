import React from "react";
import Exp from "./Exp";
import Info from "./Info";

export default function Home() {
  return (
    <div className="app">
      <div className="container grid lg:grid-cols-4 ">
        <Info />
        <Exp />
      </div>
    </div>
  );
}
