import { useRef, useEffect } from "react";

export default function (func) {
  const isMountedRef = useRef(false);
  useEffect(() => {
    if (isMountedRef.current) {
      func();
    } else {
      isMountedRef.current = true;
    }
  });
}
