"use client";

import dynamic from "next/dynamic";

const GiftBox = dynamic(() => import("@/components/GiftBox"), { ssr: false });

const GiftBoxPage = () => {
  return <GiftBox />;
};

export default GiftBoxPage;
