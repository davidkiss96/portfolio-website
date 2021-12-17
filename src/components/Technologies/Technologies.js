import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <div style={{ padding: "32px 48px 0" }}>
      <SectionDivider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range of technologies in the web development world.
        From Front-end to Design
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiZend size="3rem" />
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br />
              Figma
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </div>
  </Section>
);

export default Technologies;
