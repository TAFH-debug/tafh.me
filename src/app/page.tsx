import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Talim Aushakhman",
  description: "Amateur programmer, physicist"
};

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col min-h-screen">
      <div className="md:w-2/5">
      <section id="title" className="flex items-center">
        <h1 className="text-4xl font-bold mr-8">Hello, my name is Talim!</h1>
        <Image className="rounded-full ml-8" alt="alt" src="/ava.jpg" width={150} height={150} />
      </section>
      <section id="about" className="text-xl my-2">
        <h2 className="text-3xl">About</h2>
        <p className="my-1">
        I am software developer from Astana, Kazakhstan. Currently, studying in National School of Physics and Maths.
        </p>
      </section>
      <section id="projects" className="my-2">

      </section>
      <section id="socials" className="my-2">

      </section>
      </div>
    </main>
  );
}
