// import { InertiaLink } from '@inertiajs/inertia-react'
import {
   Cell,
   Column,
   Row,
   TableBody,
   TableHeader,
} from "@react-stately/table";
import React from "react";
import CtaCard from "../components/molecules/CtaCard";
import WelcomeSection from "../components/molecules/WelcomeSection";
import { Table } from "../components/oragnisms";
import { Page } from "../components/templates";
export default function Home({ cards }) {
   return (
      <Page>
         <Page.Section className="mb-6">
            <WelcomeSection title={"Welcome"}>
               <div className="grid grid-cols-4 gap-4">
                  {cards &&
                     cards.map((row, rowIndex) => (
                        <div className="grid__cell" key={`card_${rowIndex}`}>
                           <CtaCard {...row} />
                        </div>
                     ))}
               </div>
            </WelcomeSection>
         </Page.Section>
      </Page>
   );
}
