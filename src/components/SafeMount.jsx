import { useState, useEffect } from "react";

const SafeMount = ({ delay = 30, children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return mounted ? children : null;
};

export default SafeMount;
