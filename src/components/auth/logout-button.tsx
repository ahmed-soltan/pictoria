"use client"

import { logout } from "@/app/actions/auth-actions";
import React from "react";

export const LogoutButton = () => {
  const handleLogout = async () => {
    await logout();
  };
  return <span onClick={handleLogout} className="w-full inline-block cursor-pointer text-destructive">LogoutButton</span>;
};
