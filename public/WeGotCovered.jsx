import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const topBottomVariants = {
    visible: { scale: 1, opacity: 1, transition: { delay: 0, duration: 2 } },
    hidden: { scale: 0.7, opacity: 0.5 }
};


function WeGotCovered() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <>
            <section className="we-got-covered m-auto container" >
                <h2 className="we-got-covered-heading p-lg-3 p-md-3 p-sm-1">
                    <div class="title-animation-box">
                        <h1 class="title-animation">We got Covered <br /> We got Covered </h1>
                    </div>

                </h2>
                <motion.div ref={ref} animate={controls} initial="hidden" variants={topBottomVariants} className="we-got-covered-inner-container row">
                    <div className="col-lg-3 col-md-6 my-2">
                        <div className="we-got-covered-img"></div>
                        <h3>Haystack Analytics and faster genomics diagnostics</h3>
                        <a href="#read-more"><strong>Read more &gt;&gt;</strong></a>
                    </div>
                    <div className="col-lg-3 col-md-6 my-2">
                        <div className="we-got-covered-img"></div>
                        <h3>Haystack Analytics and faster genomics diagnostics</h3>
                        <a href="#read-more"><strong>Read more &gt;&gt;</strong></a>
                    </div>
                    <div className="col-lg-3 col-md-6 my-2">
                        <div className="we-got-covered-img"></div>
                        <h3>Haystack Analytics and faster genomics diagnostics</h3>
                        <a href="#read-more"><strong>Read more &gt;&gt;</strong></a>
                    </div>
                    <div className="col-lg-3 col-md-6 my-2">
                        <div className="we-got-covered-img"></div>
                        <h3>Haystack Analytics and faster genomics diagnostics</h3>
                        <a href="#read-more"><strong>Read more &gt;&gt;</strong></a>
                    </div>
                </motion.div>
            </section>
        </>
    );
}

export default WeGotCovered;