// @ts-nocheck
import AppTemplate from "../../components/templates/AppTemplate";
import { getSettings } from "../../utils/settings";
import { getActiveNews } from "../../utils/news";
import styled from "@emotion/styled";
import Section from '../../components/atoms/Section'
import Link from "next/link";

const StyledHome = styled(AppTemplate)`
   .HeroSection {
      background-image: url("https://images.unsplash.com/photo-1659535901690-ab95a8539929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
      background-size: 60%;
      background-repeat: no-repeat;
      background-position: right center;
   }

`

const StyledHeroSection = styled(Section)`
   background-image: url(https://images.unsplash.com/photo-1659535901690-ab95a8539929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
   background-size: 60%;
   background-repeat: no-repeat;
   background-position: right center;
   .section__container {
      min-height: calc(100vh - var(--safe-top-padding, 100px));
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
`

const HeroSection = () => {
   return (
      <StyledHeroSection className="HeroSection ">
         <Section.Container className="mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="grid__col"></div>
               <div className="grid__col bg-white py-8">
                  <h3 className="mb-4 text-4xl font-extrabold">
                     Bringing precision therapy<br />
                     with Genomics, ensuring<br />
                     improved personalised<br />
                     patient outcomes<br />
                  </h3>
                  <p className="font-bold text-muted">Stay on top with cutting edge technology</p>
                  <div className="mt-8 flex items-center gap-4">
                     <Link href={'#'} >
                        <a className="btn-primary">BOOK A CALL</a>
                     </Link>
                     <Link href={'#'} >
                        <a className="btn-secondary opacity-50">KNOW MORE</a>
                     </Link>
                  </div>
               </div>
            </div>
         </Section.Container>
      </StyledHeroSection>
   )
}

export default function Post({ Component, pageProps, news, settings }) {

   return (
      <StyledHome settings={settings}>
         <HeroSection />
         <Section className="bg-gray-100">
            <Section.Container className="container mx-auto py-12">
               <h3 className="section-heading text-center">
               Automated Bioinformatics Platform
               </h3>
               <p className="text-center mb-4 text-muted font-semibold">Localized Report with Software access</p>
               <div className="flex flex-col md:flex-row gap-4 my-8 mx-auto md:w-6/12 ">
                  <div className="flex-1">
                     <h3 className="heading">{`TGS Assessment Profile`}</h3>
                  </div>
                  <div className="md:w-5/12">
                     <h3 className="heading">{`TGS Assessment Profile`}</h3>
                  </div>
               </div>
            </Section.Container>
         </Section>
         <Section className=" bg-blue-800 text-white">
            <Section.Container className="container mx-auto py-12">
               <h3 className="text-white section-heading section-heading--invert text-center">
               Why Choose Haystack
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8">
                  <div className="grid__col">
                     <figure className="flex gap-4">
                        <picture className="w-4/12"></picture>
                        <figcaption className="flex-1 text-sm">
                           <h4>1200+ PATHOGENS</h4>
                           <p>Comprehensive single screening test covering bacteria, fungi, protozoa</p>
                        </figcaption>
                     </figure>
                  </div>
                  <div className="grid__col">
                     <figure className="flex gap-4">
                        <picture className="w-4/12"></picture>
                        <figcaption className="flex-1 text-sm">
                           <h4>1200+ PATHOGENS</h4>
                           <p>Comprehensive single screening test covering bacteria, fungi, protozoa</p>
                        </figcaption>
                     </figure>
                  </div>
                  <div className="grid__col">
                     <figure className="flex gap-4">
                        <picture className="w-4/12"></picture>
                        <figcaption className="flex-1 text-sm">
                           <h4>1200+ PATHOGENS</h4>
                           <p>Comprehensive single screening test covering bacteria, fungi, protozoa</p>
                        </figcaption>
                     </figure>
                  </div>
                  <div className="grid__col">
                     <figure className="flex gap-4">
                        <picture className="w-4/12"></picture>
                        <figcaption className="flex-1 text-sm">
                           <h4>1200+ PATHOGENS</h4>
                           <p>Comprehensive single screening test covering bacteria, fungi, protozoa</p>
                        </figcaption>
                     </figure>
                  </div>
               </div>
            </Section.Container>
         </Section>


      </StyledHome>
   )
}

export async function getStaticPaths(params:any) {
   const { slug } = params
   let paths = []
   return {
      paths: paths,
      fallback: 'blocking',
   }
}

export async function getStaticProps(context) {
   let news = getActiveNews()
   console.log({ news })
   const settings = getSettings()

   return {
     props: {
      news: JSON.parse(JSON.stringify(news)),
      settings: JSON.parse(JSON.stringify(settings))
     }, // will be passed to the page component as props
   }
}


