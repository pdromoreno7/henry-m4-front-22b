"use client";
import useUserDataStore from "@/store";
import React from "react";

function Page() {
  const { userData } = useUserDataStore();

  
  return (
    <div>
      <h1>Dashboard</h1>
      <p>{userData?.user?.name}</p>
      <p>{userData?.user?.email}</p>
      <p>{userData?.user?.address}</p>
      <p>{userData?.user?.phone}</p>
    </div>
  );
}

export default Page;
