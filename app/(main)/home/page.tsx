"use client";

import { useState } from "react";
import { HomeShell } from "@/components/HomeShell";
import { SearchBar } from "@/components/SearchBar";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <HomeShell>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div></div>
    </HomeShell>
  );
}