export default function WelcomeSection({ title, children }) {
   return (
      <section>
         {title && (
            <header className="mb-4 welcome-div">
               <h3 className="leading-10 text-3xl font-bold welcome-title">
                  {title}
               </h3>
               <p className="text-gray-600 welcome-title-para">
                  Happy Gifting , Because loved ones are gift to us , Quick
                  glance
               </p>
            </header>
         )}
         {children}
      </section>
   );
}
