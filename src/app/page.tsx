import { passionOne } from "./utils/fonts";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#F6EFA6]">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 sm:items-center">
        <h1 className={`text-6xl ${passionOne.className} text-[#8EB19D]`}>
          Beast Hunter
        </h1>
      </main>
    </div>
  );
}
