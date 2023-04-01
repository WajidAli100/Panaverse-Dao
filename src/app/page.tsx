import CoreTracks from "@/components/widgets/CoreTracks";
import Hero from "@/components/widgets/Hero";
import ProgramOutcom from "@/components/widgets/ProgramOutcom";
import SpecializedTracks from "@/components/widgets/SpecializedTracks";


export default function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <Hero />
        {/* core tracks */}
        <CoreTracks />
        {/* Specialized Tracks */}
        <SpecializedTracks />
        {/* Program outcom */}
        <ProgramOutcom />
      </main>

    </>
  )
}
