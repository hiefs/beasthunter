import { Input } from "@/components/ui/input";
import { coiny } from "../lib/fonts";
import { Field, FieldLabel } from "@/components/ui/field";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#188FA7]">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 sm:items-center">
        <h1 className={`text-6xl ${coiny.className} text-[#D5D6AA]`}>
          Beast Hunter
        </h1>
        <Field>
          <FieldLabel className={`text-[#D5D6AA]`} htmlFor="input-button-group">
            Search
          </FieldLabel>
          <ButtonGroup>
            <Input
              id="input-button-group"
              placeholder="What are you looking for?"
            />
            <Button className={"text-[#188FA7]"} variant="outline">
              Search
            </Button>
          </ButtonGroup>
        </Field>
        <Link className={"text-[#D5D6AA] mt-8"} href="/directory">
          See All
        </Link>
      </main>
    </div>
  );
}
