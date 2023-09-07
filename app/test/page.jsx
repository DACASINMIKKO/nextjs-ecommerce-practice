"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { mutateState, returnState } from "@/redux/store/features/testSlice";

const page = () => {
  const dispatch = useDispatch();
  const { username, password, firstName, lastName, count } = useSelector(
    (state) => state.test
  );

  const handleDispatch = () => {
    const newState = {
      username: "mikko",
      password: "mikko",
      firstName: "mikko angelo",
      lastName: "dacasin",
      count: count + 1,
    };
    dispatch(returnState(newState));
  };

  const handleMutateDispatch = () => {
    const newState = {
      username: "sasuke",
      password: "sasuke",
      firstName: "sasuke",
      lastName: "uchija",
    };
    dispatch(mutateState(newState));
  };
  return (
    <div className="flex flex-col bg-[lightblue] items-center p-[100px]">
      <div className="text-4xl font-bold capitalize bg-gray-400 p-[10px] w-[300px] flex justify-center">
        test page
      </div>
      <div className="text-4xl font-bold capitalize">{username}</div>
      <div className="text-4xl font-bold capitalize">{password}</div>
      <div className="text-4xl font-bold capitalize">{firstName}</div>
      <div className="text-4xl font-bold capitalize">{lastName}</div>
      <div className="text-4xl font-bold capitalize">{count}</div>
      <button
        className="h-[100px] w-[300px] bg-white rounded-md mb-3"
        onClick={handleDispatch}
      >
        RETURN DISPATCH
      </button>
      <button
        className="h-[100px] w-[300px] bg-white rounded-md"
        onClick={handleMutateDispatch}
      >
        MUTATE DISPATCH
      </button>
    </div>
  );
};

export default page;
