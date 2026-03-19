import {
  Coiny,
  Geist,
  Geist_Mono,
  Gravitas_One,
  Passion_One,
} from "next/font/google";

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

export const gravitasOne = Gravitas_One({
  weight: "400",
});

export const coiny = Coiny({
  weight: "400",
});
