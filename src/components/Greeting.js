import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { takeGreeting } from '../greeting/greetingSlice';

function Greeting() {
  const greeting = useSelector((store) => store.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(takeGreeting());
  }, [dispatch]);

  if (greeting.isLoading) {
    return <p>Greetings are Loading....</p>;
  }

  return (
    <div>
      <h1>Pick Random Greetings</h1>
      <p>{greeting.greeting.greeting}</p>
    </div>
  );
}

export default Greeting;
