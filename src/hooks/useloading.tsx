import { useEffect, useState } from "react";

export default function useLoading(delay: number) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timeOut);
  }, []);

  return loading;
}
