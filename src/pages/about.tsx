import React from "react";
import AppTemplate from "../components/templates/AppTemplate";
import styled from "@emotion/styled";
import Section from '../components/atoms/Section'
const StyledPage = styled(AppTemplate)`

`

const About = () => {
   return (
      <StyledPage>
         <Section>
            <h2>About page shown here</h2>
         </Section>
      </StyledPage>
   );
};

export default About;
