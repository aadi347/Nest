import { useState, useEffect } from "react";

const Demo = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`p-6 ${isMobile ? "bg-red-500" : "bg-green-500"} text-white`}>
      {isMobile ? "Mobile View" : "Desktop View"}
    </div>
  );
};

export default Demo;
