import Image from "next/image";
import me from "./../../public/img/me.jpg";

export default function Home() {
  return (
    <>
      <section className="h-screen w-full grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 md:px-16">
          <h1
            className="font-[800] leading-[0.9] tracking-[-0.02em] 
                         text-black text-[14vw] md:text-[7vw]"
          >
            We
            <br />
            Love
            <br />
            We
            <br />
            Serve
          </h1>
          <p>It&apos;s Irmansyah Muslimin</p>

          <div className="">
            <p>Scroll Down</p>
          </div>
        </div>

        {/* RIGHT - FULL IMAGE */}
        <div className="relative h-[60vh] md:h-screen w-full">
          <Image
            src={me}
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-20">
        <div></div>
      </section>
    </>
  );
}
