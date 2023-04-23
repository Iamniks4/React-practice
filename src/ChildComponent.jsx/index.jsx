import React, { useContext } from "react";
import { AppContext } from "../App";

const ChildComponent = () => {
  const { count, setCount } = useContext(AppContext);

  return <button onClick={() => setCount(count + 1)}>Click Me!!</button>;
};

export default ChildComponent;
