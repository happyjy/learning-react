import { useEffect, useRef } from "react";

//POINT1
export default function (value) {
  debugger; //step3
  console.log("### usePrevious: ");

  //POINT2
  const valueRef = useRef();
  //POINT3
  useEffect(() => {
    valueRef.current = value;
  }, [value]);
  //POINT4
  return valueRef.current || "";
}
