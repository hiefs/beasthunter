import { Widget } from "@/components/custom/widget";
import { Creature } from "@/data/models";
import { coiny } from "@/lib/fonts";
import * as fs from "fs";
import Link from "next/link";

export default function Directory() {
  const bkData = fs.readFileSync("./src/data/beastkin.json", "utf8");
  const beastkin: Creature[] = JSON.parse(bkData);
  return (
    <div className="flex flex-col flex-1 items-center justify-start bg-[#188FA7]">
      <div className={"flex flex-col  m-24 items-center"}>
        <h1 className={`text-6xl ${coiny.className} text-[#D5D6AA]`}>
          Directory
        </h1>
        <Link className={"text-[#D5D6AA]"} href="/">
          Home
        </Link>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center">
        <Widget data={beastkin[0]} />
        <Widget data={beastkin[0]} />
        <Widget data={beastkin[0]} />
        <Widget data={beastkin[0]} />
        <Widget data={beastkin[0]} />
        <Widget data={beastkin[0]} />
      </div>
    </div>
  );
}
