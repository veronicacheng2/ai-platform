"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("6296ef05-0e45-4949-b2db-78948adbf143");
  });
  return null;
};
