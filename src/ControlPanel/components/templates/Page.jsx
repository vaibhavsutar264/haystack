import { usePage } from "@inertiajs/inertia-react";
import Breadcrumb from "../molecules/Breadcrumb";

export default function Page({ title, children }) {
   const {
      props: { errors },
   } = usePage();
   return (
      <>
         <header className="container mx-auto py-3 message-page-div">
            <Breadcrumb title={title} />
            {title && (
               <h1 className="leading-10 text-3xl font-bold message-page-heading">
                  {title}
               </h1>
            )}
         </header>
         {errors && Object.keys(errors).length > 0 && (
            <div className="container mx-auto py-3 mb-4 bg-red-400 text-white px-4 rounded-md">
               <ol className="text-sm">
                  {Object.keys(errors).map((er) => (
                     <li key={er}>{errors[er]}</li>
                  ))}
               </ol>
            </div>
         )}
         {children}
      </>
   );
}

Page.Section = ({ children, className, ...rest }) => {
   return <div className={`container mx-auto ${className}`}>{children}</div>;
};
