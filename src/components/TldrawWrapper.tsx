import React, { useEffect, useRef } from "react";

const TldrawWrapper: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Placeholder for tldraw initialization
      console.log("Initializing tldraw with container:", containerRef.current);

      return () => {
        // Placeholder for tldraw cleanup
        console.log("Cleaning up tldraw");
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      id="tldraw-container"
    ></div>
  );
};

export default TldrawWrapper;
