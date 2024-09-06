"use client";
import React from "react";
import { HeroParallax } from "./ui/HeroParallax";
import DaunkuPng from "../public/Daunku.png"
import CarRentalPng from "../public/CarRental.png"
import NikeStorePng from "../public/nikeStore.png"
import App1 from "../public/app1.png"
import App2 from "../public/app2.png"
import App3 from "../public/app3.png"
import App4 from "../public/app4.png"
import App5 from "../public/app5.png"
import App6 from "../public/app6.png"

export function MyProjects() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Car Rental",
    link: "https://car-next-silk.vercel.app/",
    thumbnail: CarRentalPng,
  },
  {
    title: "Nike Store",
    link: "https://nike-store-dusky.vercel.app/",
    thumbnail: NikeStorePng,
  },
  {
    title: "Daunku",
    link: "https://interior-plants.vercel.app/",
    thumbnail: DaunkuPng,
  },

  {
    title: "Car Rental",
    link: "https://car-next-silk.vercel.app/",
    thumbnail: CarRentalPng,
  },
  {
    title: "Nike Store",
    link: "https://nike-store-dusky.vercel.app/",
    thumbnail: NikeStorePng,
  },
  {
    title: "Daunku",
    link: "https://interior-plants.vercel.app/",
    thumbnail: DaunkuPng,
  },


  {
    title: "Car Rental",
    link: "https://car-next-silk.vercel.app/",
    thumbnail: CarRentalPng,
  },
  {
    title: "Nike Store",
    link: "https://nike-store-dusky.vercel.app/",
    thumbnail: NikeStorePng,
  },
  {
    title: "Daunku",
    link: "https://interior-plants.vercel.app/",
    thumbnail: DaunkuPng,
  },


  {
    title: "Uber app",
    link: "/",
    thumbnail: App1,
  },


  {
    title: "Uber app",
    link: "/",
    thumbnail: App2,
  },
  {
    title: "Uber app",
    link: "/",
    thumbnail: App3,
  },

  {
    title: "Uber app",
    link: "/",
    thumbnail: App4,
  },
  {
    title: "Uber app",
    link: "/",
    thumbnail: App5,
  },
  {
    title: "Uber app",
    link: "/",
    thumbnail: App6,
  },




];
