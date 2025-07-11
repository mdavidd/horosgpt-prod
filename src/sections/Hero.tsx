"use client";
import { Button } from "@/components/Button";
import startBg from "@/assets/stars.png";
import { motion, useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import { useRef } from "react";
import Link from "next/link";



export const Hero = () => {
  const sectionRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'] //basically - koliko % sam scrollo kroz taj section, kada se radi scroll.. i onda mjeri od 0 do 1 value
  })

  const backgroundPositionY = useTransform(scrollYProgress, [0,1], [-300,300]) //umjesto 0 do 1 prebacuje na ovih 300

  return <motion.section ref={sectionRef}  className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" 
  style={{
    backgroundImage: `url(${startBg.src})`,
    backgroundPositionY
  }} animate={{
    backgroundPositionX: startBg.width,
     //OVDJE ANIMIRAMO ZVIJEZDE U POZADINI DA SE MIČU :D
  }}transition={{
    repeat: Infinity,
    ease :"linear",
    duration:100
  }}>
    <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]">
      {/*OVO JE SAMO ZA TU LJUBICASTU BACKGROUND LAGANU BOJICU IZA PLANETA*/}
    </div>
    <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]">
      {/* OVO JE SAV CSS OD KRUGA LJUBICASTOG I NJEGOV SHADOW */}</div>
    <motion.div style={{
      translateY: '-50%', //ovo moram jer koristim taj translate prije ovaj -translate pa se pokida onda taj css kad ovdje zovem animate...
      translateX: '-50%'
    }} animate={{
      rotate:'1turn'
    }} transition={{
      repeat: Infinity,
      duration: 45, //to su animacije za ova tri planeta u prvom prstenu
      ease: "linear"
    }} className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* OVO JE KRUG KAO OVAJ OKO PLANETA */}
      <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
          {/* OVO SU TE NEKE PIZDARIJE NA KRUGU TOM OKO PLANETA, krugovi na krugu :D - OVO JE LIJEVI KRUG PO SREDINI */}
      </div>
      <div className="absolute h-2 w-2 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* OVO SU TE NEKE PIZDARIJE NA KRUGU TOM OKO PLANETA, krugovi na krugu :D - OVO JE GORNJI KRUG PO SREDINI*/}
      </div>
      <div className="absolute h-5 w-5 border border-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          {/* OVO SU TE NEKE PIZDARIJE NA KRUGU TOM OKO PLANETA, krugovi na krugu :D - OVO JE DESNI KRUG PO SREDINI - NAPREDNI*/}
          <div className="h-2 w-2 bg-white rounded-full">
              {/* a ovo je krug unutar kruga, ne pitaj me ništa :D  */}</div> 
      </div>
      </motion.div>
      <motion.div style={{
      translateY: '-50%', //
      translateX: '-50%'
    }} animate={{
      rotate:'-1turn'
    }} transition={{
      repeat: Infinity,
      duration: 280, //to su animacije za ISPREKIDANI DASHED krug oko planeta
      ease: "linear"
    }} className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed">
      {/* OVO DRUGI VANJSKI, DRUGI, KRUG OKO PLANTA, ovaj isprekidani dashed */}
      </motion.div>
      <motion.div style={{
      translateY: '-50%', //
      translateX: '-50%'
    }} animate={{
      rotate:'1turn'
    }} transition={{
      repeat: Infinity,
      duration: 280, //to su animacije za ZADNJI NAJVECI krug oko planeta
      ease: "linear"
    }} className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* OVO JE ZADNJI ADVANCED KRUG SA MOVING SRANJIMA */}
        <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
          {/* */}
      </div>
      <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2">
          {/**/}
      </div>
      </motion.div>
    <div className="container relative mt-16">
      <h1 className="text-6xl md:text-[122px] md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
        HOROSGPT {/* OVO JE FORMATTING I CS NASLOVA */}
        </h1>
      <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
        Saznajte više o sebi kombinacijom znanja starih civilizacija, čitanjima NASA-e te umjetnom inteligencijom!
      </p>
      <div className="flex justify-center mt-5">
        <Link href="/coming-soon">
        <Button>Prijavi se!</Button>
        </Link>
      </div>
      
    </div>
  </motion.section>;
};
