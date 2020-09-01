import React, { Fragment } from "react";
import { Button } from "./Button";
import { useDispatch } from "react-redux";
import { score } from "../redux/reducer";

export const ScoreButtons = () => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Button onClick={() => dispatch(score("blue"))}>Point Team Blue</Button>
      <Button onClick={() => dispatch(score("red"))}>Point Team Red</Button>
    </Fragment>
  );
};
