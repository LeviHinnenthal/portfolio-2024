import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { MyProjects } from "@/components/MyProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaHome, FaMugHot, FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-[90vw] max-w-8xl sm:w-full">
        <FloatingNav
          navItems={[
            {
              name: "Home",
              link: "/",
              icon: <FaHome />,
            },
            {
              name: "About",
              link: "#about",
              icon: <FaUser />,
            },
            {
              name: "Projects",
              link: "#projects",
              icon: <FaMugHot />,
            },
          ]}
        />
        <Hero />
        <Grid />
        {/* <RecentProjects /> */}
        <MyProjects />
      </div>

      <div className="texture-background h-full"></div>
      <Footer />
    </main>
  );
}
