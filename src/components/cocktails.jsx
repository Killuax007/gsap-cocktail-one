import React from "react";
import { cocktailLists, mockTailLists } from "../../utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Cocktails() {
  useGSAP(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const parallaxTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".list",
        start: "top 65%",
        end: "bottom 80%",
        scrub: true,
      },
    });
    textTl.fromTo(
      ".popular li",
      {
        yPercent: 0,
        opacity: 0,
      },
      {
        yPercent: 50,
        opacity: 1,
        duration: 1,
        stagger: 0.7,
        ease: "power1.inOut",
      }
    );
    textTl.fromTo(
      ".loved li",
      {
        yPercent: 0,
        opacity: 0,
      },
      {
        yPercent: 50,
        opacity: 1,
        duration: 1,
        stagger: 0.7,
        ease: "power1.inOut",
      },
      isMobile ? ">0" : 0
    );
    parallaxTl
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#c-right-leaf", {
        x: 100,
        y: 100,
      });
  });
  return (
    <section id="cocktails" className="noisy ">
      <img
        src="./images/cocktail-left-leaf.png"
        id="c-left-leaf"
        alt="c-left"
        srcset=""
      />
      <img
        src="./images/cocktail-right-leaf.png"
        id="c-right-leaf"
        alt="c-right"
        srcset=""
      />
      <div className="list">
        <div className="popular">
          <h2>Most Popular Cocktails :</h2>
          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => {
              return (
                <li className="cocktail" key={name}>
                  <div className="md:me-28">
                    <h3 className="text-gray">{name}</h3>
                    <p className="font-normal">
                      {country} | {detail}
                    </p>
                  </div>
                  <span>-{price}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="loved">
          <h2>Most loved Mocktails :</h2>
          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => {
              return (
                <li key={name}>
                  <div className="md:me-28">
                    <h3 className="text-gray">{name}</h3>
                    <p className="font-normal">
                      {country} | {detail}
                    </p>
                  </div>
                  <span> -{price}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
