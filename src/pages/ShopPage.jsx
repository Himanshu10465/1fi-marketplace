import React, { useState } from "react";
import Marketplace from "../components/Marketplace/Marketplace";

export default function ShopPage() {
  const [activeTab, setActiveTab] = useState("marketplace");

  return (
    <div>
      <nav>
        <button onClick={() => setActiveTab("brands")}>Top Brands</button>
        <button onClick={() => setActiveTab("stores")}>Nearby Stores</button>
        <button onClick={() => setActiveTab("marketplace")}>1Fi Marketplace</button>
      </nav>

      {activeTab === "brands" && <div>Coming Soon...</div>}
      {activeTab === "stores" && <div>Coming Soon...</div>}
      {activeTab === "marketplace" && <Marketplace />}
    </div>
  );
}
