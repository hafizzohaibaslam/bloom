import { Navbar } from "./components/NavBar";
import { GridHoverHero } from "./components/GridHoverHero";
import { StickyCards } from "./components/stickyCards";
import { TextParallaxContentExample } from "./components/TextParallaxContent";
import { NavProvider } from "./context/NavContext";
import { DisappearingFeatures } from "./components/DisappearingScrollFeatures";
import CollapseCardFeatures from "./components/CollapseCardFeatures"
import StackedCardTestimonials from "./components/StackedCardTestimonials";
import { TextParallaxContentHero } from "./components/BelowHeader";
import Footer from "./components/footer";

export default function Home() {
  return (
    <NavProvider>
      <Navbar />
      <GridHoverHero />
      <TextParallaxContentHero />
      <CollapseCardFeatures />
      <TextParallaxContentExample />
<StackedCardTestimonials />
      <DisappearingFeatures />
      

    </NavProvider>
  );
}
