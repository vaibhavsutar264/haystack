import styled from "@emotion/styled";
import Footer from "../Footer";
import HambergerMenuWithScriptTag from "../../HambergerMenuWithScriptTag";
import Navbar from "../Navbar";
import PreAnimationOnLoad from "../../PreAnimationOnLoad";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
const StyledTemplate = styled.div`
   margin: 0;
   padding: 0;
   border: none;
   box-sizing: border-box;

   padding: 0px;
   margin: 0px;
`

const cursorAnimation = (  ) => {
   const dom = globalThis.document
   const cursor = dom.querySelector(".cursor");
   dom.addEventListener('mousemove', e => {
      // console.log(e.clientY - cursor.clientHeight)
      cursor.style.top = e.clientY - cursor.clientHeight / 2 + 'px'
      cursor.style.left = e.clientX - cursor.clientWidth / 2 + 'px'
      // console.log(e)
      cursor.classList.remove('playing-bg')
      const maskImg = document.querySelector('.mask1 img')
      if (maskImg) {
         maskImg.opacity = 0
         maskImg.style.position = 'fixed'
      }
      if (e.target.tagName == 'A') {
         // cursor.style.transform = `scale(10.2)`
      } else if (e.target.localName == 'span' && e.target.classList.contains('letter')) {
         cursor.style.transform = `scale(10.2)`
      } else if (e.target.classList.contains('js-hover')) {
         maskImg.opacity = 1

         maskImg.style.top = (e.clientY - (cursor.clientHeight / 2)) + 10 + 'px'
         maskImg.style.left = (e.clientX - (cursor.clientWidth / 2)) + 10 + 'px'
         maskImg.style.transform = `translate(-50%, -50%)`
         cursor.classList.add('playing-bg')
         cursor.style.transform = `scale(10.2)`
      } else {
         cursor.style.transform = `scale(1)`
      }
   })
   dom.addEventListener('mouseleave', e => {
      cursor.style.opacity = 0
   })
   dom.addEventListener('mouseenter', e => {
      cursor.style.opacity = 1
   })
}

function AppTemplate({ children, pageProps = {}, bodyClassName = '', settings = {}, renderMenu, ...props  }) {
   useEffect(() => {
      if (AOS) {
         AOS.init();
      }
      cursorAnimation()
   }, [])
   return (
      <StyledTemplate {...props} className={`body__content ${bodyClassName}`}>
         <div className="cursor"></div>
         <PreAnimationOnLoad />
         <Navbar renderMenu={renderMenu} />
         {children}
         <div className="bg-white">
            <Footer settings={settings} />
         </div>
      </StyledTemplate>
   );
}

export default AppTemplate;
