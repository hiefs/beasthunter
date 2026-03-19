import { Geist, Geist_Mono, Passion_One } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const passionOne = Passion_One({
  variable: "--font-passion-one",
  weight: "400",
});
