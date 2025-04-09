"use client";
import useCanvasCursor from "../hooks/useCanvasCursor";
import React from "react";

const CanvasCursor = () => {
  useCanvasCursor();
  return <canvas className="pointer-events-none fixed inset-0" id="canvas" />;
};
export default CanvasCursor;
