import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopaddig>
    <LeftSection>
      <SectionTitle main center>
        Welcom To <br />
        My Personal Porftolio
      </SectionTitle>
      <SectionText>
        My goal as a self-taught developer is to master as many aspect of Front
        End Development as possible and offer people the greatest solution for
        their project.
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);
export default Hero;
