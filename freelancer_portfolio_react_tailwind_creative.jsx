/*
Freelancer Portfolio - Creative Theme (Theme D)
Single-file React component (Tailwind CSS required)

How to use:
1. Create a React app (e.g. `create-react-app my-portfolio`).
2. Install Tailwind CSS following the official guide and include it in your project.
3. Replace App.jsx content with this component or import it.
4. Replace placeholder text, images and links with your real content.

Notes:
- This file uses placeholder images from Unsplash. Replace them with your own screenshots.
- Customization points are marked with the word "REPLACE" in comments.
*/

import React from "react";

export default function CreativeFreelancer() {
  const name = "Astha Dewangan"; // REPLACE: your name
  const title = "Creative Full‑Stack Developer & Designer"; // REPLACE: tagline
  const skills = ["React", "JavaScript", "Tailwind CSS", "UI/UX", "Python"];
  const services = [
    { title: "Web Development", desc: "Modern, responsive web apps with React." },
    { title: "UI/UX Design", desc: "Clean, user-centered interface design." },
    { title: "Branding & Graphics", desc: "Visual assets, logos, and marketing material." },
  ];
  const projects = [
    {
      title: "Project Nimbus",
      img: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=60",
      tech: "React, Tailwind",
      link: "#",
    },
    {
      title: "Workspace UI Kit",
      img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=60",
      tech: "Figma, CSS",
      link: "#",
    },
    {
      title: "DataViz Dashboard",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=60",
      tech: "D3, Python",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-black text-gray-100">
      {/* NAV */}
      <nav className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-yellow-400 rounded-2xl flex items-center justify-center shadow-2xl">
            <span className="font-bold text-black">{name.split(" ")[0][0]}</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold">{name}</h1>
            <p className="text-xs opacity-80">Creative Freelancer</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#projects" className="hover:underline">Portfolio</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black px-4 py-2 rounded-full font-semibold shadow-lg">Hire Me</a>
        </div>

        <div className="md:hidden">
          <button className="p-2 bg-white/10 rounded-md">☰</button>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            {title.split(" & ")[0]} <span className="text-pink-400">&</span>
            <br /> {title.split(" & ")[1] || "Designer"}
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-xl">
            I craft immersive digital experiences — from elegant product UI to performant web apps. I blend design thinking with code to build products users love.
          </p>

          <div className="mt-6 flex gap-4">
            <a href="#contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-semibold shadow-2xl">Hire Me</a>
            <a href="#projects" className="px-6 py-3 rounded-full border border-white/20">See Work</a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((s) => (
              <span key={s} className="px-3 py-2 bg-white/6 rounded-full text-sm">{s}</span>
            ))}
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60" alt="hero" className="w-full h-full object-cover" />
          </div>

          <div className="absolute -bottom-8 left-8 bg-gradient-to-r from-indigo-800/80 to-transparent p-4 rounded-2xl backdrop-blur-md border border-white/5 shadow-2xl">
            <p className="text-sm opacity-80">Available for freelance — open to 10–20 hr/week projects</p>
            <div className="mt-3 flex gap-3">
              <a href="#contact" className="text-sm px-3 py-2 bg-white/6 rounded-full">Contact</a>
              <a href="#" className="text-sm px-3 py-2 bg-white/6 rounded-full">Resume</a>
            </div>
          </div>
        </div>
      </header>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-6">Services I offer</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-2xl bg-white/5 border border-white/6 backdrop-blur-sm">
              <h4 className="font-semibold text-lg">{s.title}</h4>
              <p className="mt-3 text-sm text-gray-300">{s.desc}</p>
              <div className="mt-4">
                <a href="#contact" className="text-sm px-3 py-2 bg-pink-500/80 rounded-full">Get a quote</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-6">Selected Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group block rounded-2xl overflow-hidden shadow-2xl bg-white/3 border border-white/6">
              <div className="h-44 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transform group-hover:scale-105 transition" />
              </div>
              <div className="p-4">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-xs text-gray-300 mt-1">{p.tech}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-6">What clients say</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/5">
            <p className="text-sm text-gray-300">"Astha transformed our product with clear UX thinking and fast delivery — highly recommended."</p>
            <div className="mt-4 font-semibold">— Client Name</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5">
            <p className="text-sm text-gray-300">"Great communication and on-time delivery. The dashboard is exactly what we needed."</p>
            <div className="mt-4 font-semibold">— Client Name</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5">
            <p className="text-sm text-gray-300">"Creative and reliable — delivered more than expected."</p>
            <div className="mt-4 font-semibold">— Client Name</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">Let’s build something together</h3>
            <p className="mt-3 text-gray-300">Email me at <a href="mailto:dewanganastha82@gmail.com" className="underline">dewanganastha82@gmail.com</a> or use the form.</p>

            <div className="mt-6 flex gap-4">
              <a href="#" className="px-4 py-2 rounded-full bg-white/6">Behance</a>
              <a href="#" className="px-4 py-2 rounded-full bg-white/6">Dribbble</a>
              <a href="#" className="px-4 py-2 rounded-full bg-white/6">GitHub</a>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5">
            <form className="flex flex-col gap-4">
              <input className="p-3 rounded-md bg-transparent border border-white/10" placeholder="Your name" />
              <input className="p-3 rounded-md bg-transparent border border-white/10" placeholder="Email" />
              <textarea className="p-3 rounded-md bg-transparent border border-white/10" rows={4} placeholder="Tell me about your project"></textarea>
              <button className="px-4 py-3 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-semibold">Send message</button>
            </form>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} {name}. All rights reserved.</div>
      </footer>
    </div>
  );
}
