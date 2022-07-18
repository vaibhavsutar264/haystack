import React from "react";
import Template from "../Template";
import OmegaTb from "../OmegaTb";
import WhyChoose from "../WhyChoose";
import OmegaTbTestWorks from "../OmegaTbTestWorks";

function OmegaTB() {
    return (
        <>
            <div id="omega">
                <Template>
                    <OmegaTb />
                    <WhyChoose />
                    <OmegaTbTestWorks />
                </Template>
            </div>
        </>
    );
}

export default OmegaTB;