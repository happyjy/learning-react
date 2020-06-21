import React, { useState, useRef } from "react";
/*
  # 코드 5-33_1 useOnFirstRender 커스텀 훅
  * useOnFirstRender 구현부

 */

export default function useOnFirstRender(func) {
  console.log("### this is custom hook; useOnFirstRender");
  const isFirstRef = useRef(true);
  if (isFirstRef.current) {
    isFirstRef.current = false;
    func && func();
  }
}
