import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessage } from "../redux/greetingsReducer";

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.greeting);

  async function fetchMessage() {
    try {
      const response = await fetch(
        "http://localhost:3000/api/random_greeting.json"
      );
      const greetings = await response.json();
      console.log(greetings);
      dispatch(getMessage(greetings));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "3rem" }}>{message}</h1>
      <button onClick={() => fetchMessage()}>Generate greeting1</button>
    </div>
  );
};

export default Greeting;
