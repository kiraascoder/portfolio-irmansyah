import Image from "next/image";
import me from "./../../public/img/me.jpg";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 min-h-[90vh] flex items-center">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full items-center">
          
          {/* Left Column - Text */}
          <div className="flex flex-col justify-center">
            <h1 className="font-[800] leading-[0.9] tracking-[-0.02em] 
                           text-black text-[14vw] md:text-[9vw] lg:text-[8vw] xl:text-[7vw]">
             We<br />Love<br />We<br />Serve
            </h1>
          </div>

          {/* Right Column - Image */}
          <div className="flex flex-col items-center md:items-end justify-center gap-6">
            <div className="relative">
  
              {/* Profile Image */}
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={me}
                  alt="Profile"
                  width={340}
                  height={420}
                  className="h-64 w-64 object-cover md:h-72 md:w-72 lg:h-80 lg:w-80"
                  priority
                />
              </div>
            </div>
            <p className="max-w-[18rem] text-center md:text-right text-xs leading-snug text-black/80">
              Hi, I'm Irmansyah Muslimin, a Software Engineer.
            </p>
          </div>

        </div>

      </section>
      
      {/* About Section - Outside the grid */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-20">
        <div className="">
          <div className=""></div>
          <div className=""></div>          
        </div>
      </section>
    </>
  );
}
