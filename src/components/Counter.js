import { useState } from "react";
import Counter2 from "./Counter2";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/counterSlice";
import { useGetAllPostsQuery, useGetPostbtIdQuery } from "../redux/postSlice";

export default function Counter() {

    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

    const {data, isLoading, isError} = useGetPostbtIdQuery(5)

  return (
    <div>
        {JSON.stringify(data)}
      <h1>
        Count is {count}
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(20))}>Increment by Amount</button>
      </h1>
      <Counter2 />
    </div>
  );
}
