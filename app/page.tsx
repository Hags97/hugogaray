import IntroSection from "./components/IntroSection";

import NavBarDesktop from "./components/NavBarDesktop";

import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import MobileNavBar from "./components/MobileNavBar";



export default function Home() {
  return (
    <>
      <MobileNavBar />
      <NavBarDesktop />
      <IntroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection/>
    </>
  );
}
