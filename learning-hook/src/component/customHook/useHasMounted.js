import { useState, useEffect } from "react";

export default function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);

  // # 확인용
  // useEffect(() => {
  //   setTimeout(() => {
  //     setHasMounted(true);
  //   }, 1000);
  // }, []);
  return hasMounted;
}
