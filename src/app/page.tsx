import { Input } from "@/components/ui/input";
import { passionOne } from "../lib/fonts";
import { Field, FieldLabel } from "@/components/ui/field";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#FFDA22]">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 sm:items-center">
        <h1 className={`text-6xl ${passionOne.className} text-[#28502E]`}>
          Beast Hunter
        </h1>
        <Field>
          <FieldLabel htmlFor="input-button-group">Search</FieldLabel>
          <ButtonGroup>
            <Input
              id="input-button-group"
              placeholder="What are you looking for?"
            />
            <Button variant="outline">Search</Button>
          </ButtonGroup>
        </Field>
      </main>
    </div>
  );
}
