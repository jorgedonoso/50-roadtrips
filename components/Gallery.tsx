"use client";
import { Card, Deck } from "@ikefakis/react-polaroid-photo-deck";
import "@ikefakis/react-polaroid-photo-deck/style.css";

export function Gallery({ cards }: { cards: Card[] }) {
  return <Deck cards={cards} style={{ width: "100vw", height: "100vh" }} />;
}
