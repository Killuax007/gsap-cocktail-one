import React from "react";
import { featureLists, goodLists } from "../../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

export default function Art() {
  const isMob = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const start = isMob ? "top 20%" : "top -5%";
    const maskTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });
    maskTl
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.3,
        ease: "circ.inOut",
      })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut",
      })
      .fromTo(
        "#masked-content",
        { opacity: 0, y: 0 },
        {
          opacity: 1,
          y: 20,
          duration: 1,
          delay: 0.5,
          ease: "power1.inOut",
        }
      );
  });
  return (
    <section id="art">
      <div className="container mx-auto h-full p-20">
        <h2 className="will-fade ">The ART</h2>
        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((feature, idx) => (
              <li className="flex items-center gap-2" key={idx}>
                <img src="/images/check.png" alt="check " srcset="" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              alt="cocktail"
              className=" abs-center  masked-img size-full object-contain"
            />
          </div>
          <ul className="space-y-4 will-fade">
            {featureLists.map((feature, idx) => (
              <li className="flex items-center gap-2" key={idx}>
                <img src="/images/check.png" alt="check " srcset="" />
                <p className="md:w-fit w-60  ">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3>Made wih craft, Poured with Passion</h3>
            <p>
              This isn't a drink , It's a carefully crafted moment made just for
              you
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
