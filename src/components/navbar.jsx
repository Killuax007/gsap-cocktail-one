import React from "react";
import { navLinks } from "../../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function Navbar() {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });

  return (
    <nav>
      <div className="w-full max-w-6xl mx-auto">
        <a href="#" className="flex items-center gap-2">
          <img src="./images/logo.png" alt="" />
          <h2 className=" text-2xl font-semibold">Velvet Pour</h2>
        </a>
        <ul>
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              <li key={link.id} className=" mr-1">
                {link.title}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
}
