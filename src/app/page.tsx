import Image from "next/image";
import me from "./../../public/img/me.jpg";

export default function Home() {
  return (
    <>

      <section className="mx-auto max-w-7xl px-4 min-h-[90vh] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full items-center">
          
     
          <div className="flex flex-col justify-center">
            <h1
              className="font-[800] leading-[0.9] tracking-[-0.02em] 
              text-black text-[14vw] md:text-[9vw] lg:text-[8vw] xl:text-[7vw]"
            >
              We<br />Love<br />We<br />Serve
            </h1>
          </div>

          <div className="flex flex-col items-center md:items-end justify-center gap-6">
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

            <p className="max-w-[18rem] text-center md:text-right text-xs leading-snug text-black/80">
              Hi, I'm Irmansyah Muslimin, a Software Engineer.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-24 border-t">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
   
          <h2 className="text-4xl md:text-5xl font-bold">
            About Me
          </h2>

          <div className="space-y-4 text-black/80 leading-relaxed">
            <p>
              I'm Irmansyah Muslimin, a Software Engineer who focuses on
              building web and mobile applications. I love crafting clean UI,
              scalable backend systems, and meaningful digital experiences.
            </p>

            <p>
              My stack includes JavaScript, TypeScript, Laravel, Next.js,
              and IoT integrations. I enjoy solving real-world problems
              through technology and continuously learning new tools.
            </p>

            <p>
              Outside coding, I explore UI design, system architecture,
              and emerging tech like AR/VR & IoT.
            </p>
          </div>
        </div>
      </section>

    
      <section id="projects" className="mx-auto max-w-7xl px-4 py-24 border-t">
        
    
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Projects
          </h2>
        </div>

  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
    
          <div className="border rounded-2xl p-6 hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">
              E-Surat System
            </h3>
            <p className="text-sm text-black/70 mb-4">
              Web-based letter submission system with multi-role access
              (Warga, Kelurahan, Kecamatan).
            </p>
            <span className="text-xs border px-2 py-1 rounded">
              Laravel • MySQL
            </span>
          </div>

          <div className="border rounded-2xl p-6 hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">
              UKM Campus Platform
            </h3>
            <p className="text-sm text-black/70 mb-4">
              University organization management website with admin
              approval workflow.
            </p>
            <span className="text-xs border px-2 py-1 rounded">
              Next.js • Tailwind
            </span>
          </div>

          <div className="border rounded-2xl p-6 hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">
              IoT Monitoring
            </h3>
            <p className="text-sm text-black/70 mb-4">
              ESP8266-based monitoring system integrated with Telegram
              notifications.
            </p>
            <span className="text-xs border px-2 py-1 rounded">
              IoT • Firebase
            </span>
          </div>

        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-24 border-t">
        

        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold">
            Contact
          </h2>
        </div>

  
        <div className="grid md:grid-cols-2 gap-12">
  
          <div className="space-y-4 text-black/80">
            <p>
              Interested in working together or have a project in mind?
              Feel free to reach out.
            </p>

            <div className="space-y-2 text-sm">
              <p>Email : irmansyah@email.com</p>
              <p>WhatsApp : +62 xxx xxxx xxxx</p>
              <p>Location : Indonesia</p>
            </div>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-2 text-sm"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg px-4 py-2 text-sm"
            />

            <textarea
              placeholder="Message"
              rows={4}
              className="w-full border rounded-lg px-4 py-2 text-sm"
            />

            <button
              type="submit"
              className="border px-6 py-2 rounded-lg text-sm hover:bg-black hover:text-white transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
