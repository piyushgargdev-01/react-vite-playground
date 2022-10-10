import React, { useState, useEffect } from "react";
import { store } from "./store";

export const useStore = (v) => {
  const [value, setValue] = useState(v);

  useEffect(() => {
    store.subscribe(setValue);
  }, []);

  return value;
};
