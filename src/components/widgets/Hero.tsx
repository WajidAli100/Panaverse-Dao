import Wraper from "@/components/shared/Wraper";
import Image from "next/image";
import HeroPoster from "@/assets/images/hero-poster.png"
import Button from "@/components/shared/Button";


export default function Hero() {
  return (
    <section>
      <Wraper>
        <div className="flex items-center flex-col md:flex-row">
          {/* left side */}
          <div className="flex-1">
            <h4 className="text-teal-800 font-semibold text-lg">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
            <h1 className="text-5xl sm:text-6xl font-bold">Certified Web 3.0 and Metaverse Developer</h1>
            <p className="mt-6 text-gray-800 text-lg">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet

            </p>
            <p className="mt-6 text-gray-800 text-lg">Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>
            <div className="mt-6">
              <Button text="Learn More" />
            </div>
          </div>
          {/* right side */}
          <div className="flex-1">
            <Image src={HeroPoster} alt="hero poster" />
          </div>
        </div>
      </Wraper>
    </section>
  )
}
