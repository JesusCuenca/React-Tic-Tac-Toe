import React from "react";
import { X, O } from '../config';

function Square(props) {
  let cs = "square";
  if (props.value === X) cs = `${cs} x-value`;
  if (props.value === O) cs = `${cs} o-value`;
  return <button className={cs} onClick={props.onClick} />;
}

export default Square;
