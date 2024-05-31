"use client";

import ToggleText from "./components/ToggleText";
import WelcomeMessage from "./components/WelcomeMessage";

export default function Home() {
  return (
    <main>
      <WelcomeMessage message={"message"} />
      <ToggleText text={"text"} />
    </main>
  );
}
