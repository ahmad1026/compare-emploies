import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import Styles from "./Cards.module.css";
export default function Cards() {
  const userSlice = useSelector((state) => state.users);

  console.log(userSlice.users);

  const cards = userSlice.users.map((employ) => <Card data={employ} />);
  return (
    <div className={Styles.container}>
        {cards}
    </div>
  );
}
