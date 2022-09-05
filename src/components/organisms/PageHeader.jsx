import { Button } from "../../../cp/src/components/atoms";

export default function PageHeader({ title, rightElement, primaryAction }) {
   return (
      <div className="mb-3 flex justify-between gap-3">
         <div className="flex-1">
            <h1>{title}</h1>
         </div>
         <div>
            {primaryAction && (
               <div>
                  <Button {...primaryAction} />
               </div>

            )}
            {rightElement && rightElement()}
         </div>
      </div>
   )
}
