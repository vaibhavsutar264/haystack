import React from 'react';
// import {useEffect,useRef} from
// import "animate-on-scroll";

const VideoRemakeByPratikSir = () => {
    // const element = useRef()
    // useEffect(() => {
    //    $(element.current).animateOnScroll({
    //       scale3d: {
    //         enable: true,
    //         offset_top: 40,
    //         offset_bottom: -30,
    //         range: [0.8,1],
    //         apply_css: (el, v) => el.css ('transform', 'scale3d(' + v + ',' + v + ',' + v + ')')
    //       }
    //     });
    // }, [])
    return (
        <div className="video-remake-again">
            <div className="title-animation-box-video-remake w-100">
                <h1 className="text-center title-animation-video-remake w-100">
                    A Revolutionary technology to aid microbiology <br /> A
                    Revolutionary technology to aid microbiology{" "}
                </h1>
            </div>
            <div className="fake-image">
                <video
                    id="scroll-video"
                    src={
                        "https://media.istockphoto.com/videos/medical-science-laboratory-beautiful-black-scientist-looking-under-video-id1297574801"
                    }
                    type="video/mp4"
                    autoPlay
                    muted
                    loop
                ></video>

            </div>


        </div>
    )
}

export default VideoRemakeByPratikSir