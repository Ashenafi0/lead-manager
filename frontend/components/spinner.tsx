"use client"
import { Spinner as Loading } from "@nextui-org/react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loading color="primary" size="lg">
        Loading...
      </Loading>
    </div>
  );
};

export default Spinner;