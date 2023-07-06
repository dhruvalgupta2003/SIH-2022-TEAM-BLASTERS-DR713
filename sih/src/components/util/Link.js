import React from "react";
import { useNavigate } from "react-router-dom";

export const Link = (props) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(props.href);
  };

  return <button onClick={clickHandler()}>{props.children}</button>;
};