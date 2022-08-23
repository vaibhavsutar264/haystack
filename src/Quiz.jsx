import React from "react";

function Quiz() {
   return (
      <section name="quiz">
         <div className="container quiz p-5">
            <div className="row">
               <div className="col-4">
                  <div className="quiz-img"></div>
               </div>
               <div className="col-4 mt-5">
                  <p className="h2 font-weight-normal text-uppercase quiz-heading mb-4">
                     Take a General Trivia Quiz
                  </p>
                  <button className="font-weight-normal text-uppercase quiz-btn">
                     Let&apos; s do it
                  </button>
               </div>
               <div className="col-4">
                  <div className="quiz-inner-container container border pt-3 pb-5 h-90">
                     <p className="h5">Which was the first antibiotic?</p>
                     <input type="radio" name="radio" id="amoxycillin" />
                     &nbsp;
                     <label
                        className="font-weight-normal quiz-radio-btn-label"
                        htmlFor="Amoxycillin"
                     >
                        Amxoycillin
                     </label>
                     <br />
                     <input type="radio" name="radio" id="penicillin" />
                     &nbsp;
                     <label
                        className="font-weight-normal quiz-radio-btn-label"
                        htmlFor="Penicillin"
                     >
                        Penicillin
                     </label>
                     <br />
                     <input type="radio" name="radio" id="erthromycin" />
                     &nbsp;
                     <label
                        className="font-weight-normal quiz-radio-btn-label"
                        htmlFor="Erthromycin"
                     >
                        Erthromycin
                     </label>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Quiz;
