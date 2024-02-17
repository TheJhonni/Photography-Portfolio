"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const TestComponent = ({ data }) => {

  useEffect(() => {
    console.log(data)
  }, []);

  return (
    <>
      <h1>ciao</h1>
    </>
  )
}

export default TestComponent;
