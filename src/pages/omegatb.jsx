import React from "react";
import ProductTemplate from "../ProductTemplate";

import OmegaTb from "../OmegaTb";
import WhyChoose from "../WhyChoose";
import OmegaTbTestWorks from "../OmegaTbTestWorks";

function OmegaTB() {
    return (
        <>
            <div id="omega">
                <ProductTemplate>
                    <OmegaTb />
                    <WhyChoose />
                    <OmegaTbTestWorks />
                </ProductTemplate>
            </div>
        </>
    );
}

export default OmegaTB;