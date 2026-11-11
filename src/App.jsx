import HeroSection from "./Herosection"; 
import SoundFamiliarSection from "./SoundFamiliarSection";
import WhySection from "./Why";
import ProjectsSection from "./ProjectsSection";
import HowItWorksSection from "./HowItWorksSection";
import WhatYouGetSection from "./WhatYouGetSection";
import BeforeAfterSection from "./Beforeaftersection";
import Quiz from "./Quiz"
import GapCheckFormSection from "./GapCheckFormSection";
import Meet from "./Meet";
import PricingSection from "./PricingSection";
import ObjectionsSection from "./ObjectionsSection";
import FaqSection from "./FAQSection";
import Closing from "./Closing";

export default function App() {
  return (
    <div>
      <HeroSection />
      <ProjectsSection />
      <SoundFamiliarSection />
      <WhySection />
      <HowItWorksSection />
      <WhatYouGetSection />
      <BeforeAfterSection />
      <Quiz />
      <Meet />
      <PricingSection />
      <ObjectionsSection />
            <GapCheckFormSection />
      <FaqSection />
      <Closing />
    </div>
  );
}