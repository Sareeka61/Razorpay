import React from "react";
import { Section } from "./Section";
import curve from "../assets/hero/curve.png";
import Button from "./Button";
import robotmachine from "../assets/robotmachine.png";

const Hero: React.FC = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Power your finance, grow your business with
            <br />
            <span className="inline-block relative">
              RazorPay{""}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Accept payments from customers. Automate payouts to vendors &
            employees. Never run out of working capital.
          </p>
          <Button className="mb-10" href="/pricing" white>
            Get Started
          </Button>

          <div className="realtive max-w-[23rem] mx-auto md:max-w-5xl xl:wb-24">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient ">
              <div className="realtive bg-n-8 rounded-[1rem]  overflow-hidden">
                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem] " />
                <div>
                  <img
                    src={robotmachine}
                    className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[0%]"
                    width={1440}
                    height={1100}
                    alt="hero"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
