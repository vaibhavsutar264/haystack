import Image from 'next/image'
export default function HeroBanner({ title, description, content, image, children, primaryAction, secondaryAction, renderDescription, bgColor = 'bg-blue-100' }) {
   return (
      <section
         className={`py-16 ${bgColor}`}
      >
         <div className="container px-3 md:px-0 mx-auto flex justify-center mb-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
               <div className="grid__col">
                  <h3 className="mb-3 text-4xl md:text-5xl uppercase font-bold text-blue-600">
                     {title}
                  </h3>
                  {renderDescription && renderDescription()}
                  {description && (
                  <p className="mb-3 text-4xl md:text-5xl font-bold text-black">
                     {description}
                  </p>
                  )}
                  {content && (
                  <p className="text-xl mb-4">
                     {content}
                  </p>
                  )}
                  <div className="mb-4 flex gap-3 md:gap-6">
                     {primaryAction && (
                     <button className="border-2 border-green-600 bg-green-600 text-white rounded-full px-7 py-3" {...primaryAction}>
                        Book a call
                     </button>
                     )}
                     {secondaryAction && (
                     <button className="border-2 border-green-600 bg-blue-100 text-green-600 rounded-full px-7 py-3" {...secondaryAction}>
                        Know more
                     </button>
                     )}
                  </div>

               </div>
               <div className="grid__col">
                  <Image src={image} alt="Clinician" />
               </div>
            </div>
         </div>
         {children}
      </section>
   );
}
