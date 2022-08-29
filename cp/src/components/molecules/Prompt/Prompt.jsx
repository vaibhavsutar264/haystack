export default function Prompt({ renderTrigger }) {
   const btnprops = {}
   return (
      <>
         {renderTrigger && renderTrigger(btnprops)}
         <dialog open>
            opsdf
         </dialog>
      </>
   )
}
