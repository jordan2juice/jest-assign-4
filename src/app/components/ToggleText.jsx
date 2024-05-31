"use client";

import React, { useState } from "react";

export default function ToggleText({ text }) {
  const [isVisible, setVisible] = useState(false);

  return (
    <div>
      {isVisible && <h1>{text}</h1>}
      <button onClick={() => setVisible(!isVisible)}>Toggle</button>
    </div>
  );
}
