import { Creature } from "@/data/models";
import { coiny } from "@/lib/fonts";
import * as fs from "fs";

export default function Directory() {
  const bkData = fs.readFileSync("./src/data/beastkin.json", "utf8");
  const beastkin: Creature[] = JSON.parse(bkData);
  return (
    <div className="flex flex-col flex-1 items-center justify-start bg-[#188FA7]">
      <h1 className={`m-24 text-6xl ${coiny.className} text-[#D5D6AA]`}>
        Directory
      </h1>
      <div>
        <p>{beastkin[0].name}</p>
      </div>
    </div>
  );
}
