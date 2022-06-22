// import ScrollMagic from "scrollmagic";

// import './tweenMax';
// import { TimelineMax} from 'gsap/src/uncompressed/TweenMax.js';
// import './scrollmagicFromStackOverFlow';
// import './scrollmagicDebugFromStackOverFlow';
// import { Controller, Scene } from 'react-scrollmagic';
// import Controller from 'scrollmagic';
// import Link from 'next/link';
import $ from 'jquery';
{/* <Link href="https://scrollmagic.io/docs/ScrollMagic_Controller.js.html"></Link>; */ }
// window.jQuery = $;
// import './controller';
// import '../public/scrollMagic';
// import '../public/scrollMagicIndicators';
// import '../public/scrollMagicGsap';
// import '../public/tweenMax';



if (typeof window !== 'undefined') {
    if (process.browser) {
        // let frame = document.getElementsByClassName('.frame'); 

        document.addEventListener("DOMContentLoaded", function(){
            var flexboxOFTextVideo = document.getElementById("button-wrapper");
            var frame = document.getElementById("frame");
            var navToggle = document.getElementById("bgtoggle");
            var navMenu = document.getElementById("menu_container");
            // var frameMenu = document.getElementById('frame');

            navToggle?.addEventListener("click", function(e){
            //   navMenu.classList.toggle("open");
            
            //   flexboxOFTextVideo.classList.toggle("open");
            //   frame.classList.toggle("open");
            //   flexboxOFTextVideo.style.opacity="0";
              navMenu.style.opacity="1";
            //   frame.style.zIndex="9999999999999999999999999";
            //   navMenu.style.zIndex="999999999";
              
            //   frameMenu.style.height="1000px";

            });
        });
    }
}


// if (process.browser){
//     let abc = $('.menu_container'); 

// $("DOMContentLoaded", function(){
// var navToggle = $("#bgtoggle");
// var navMenu = $("#menu_container");
// navToggle.click,(function(e){
// //   navMenu.classList.toggle("open");
//   navMenu.css("opacity","1");
// //   console.log(abc);
// });
// });}

//   const stickyVideoModule = document.querySelector(".sticky-video-module");
// const boxed = stickyVideoModule.querySelector(".boxed");
// const videoWrapper = stickyVideoModule.querySelector(".video");
// const video = stickyVideoModule.querySelector("video");
// const textScene1 = stickyVideoModule.querySelector(".text-scene-1");
// const textScene2 = stickyVideoModule.querySelector(".text-scene-2");
// const textScene3 = stickyVideoModule.querySelector(".text-scene-3");

// const controller = new ScrollMagic.Controller();

// const scene = new ScrollMagic.Scene({
// 	duration: 1500,
// 	triggerElement: videoWrapper,
// 	triggerHook: 0
// })
// 	.addIndicators({ name: "init" })
// 	.setPin(videoWrapper)
// 	.addTo(controller);

// scene.on("update", (e) => {
// 	scrollPos = e.scrollPos / 1000;
// });

// scene.on("enter", () => {
// 	boxed.style.width = `${window.innerWidth}px`;
// 	boxed.style.paddingTop = "100px";
// });

// scene.on("end", (e) => {
// 	if ("FORWARD" === e.scrollDirection) {
// 		boxed.style.width = "100vw";
// 	}
// });

// setInterval(() => {
// 	delay += (scrollPos - delay) * accelAmount;

// 	video.currentTime = scrollPos;
// }, 33.3);

// // Scale Scene
// const scale_tween = gsap.timeline();
// scale_tween.from(video, {
// 	transform: " scale(1)",
// 	opacity: 1,
// 	duration: 0
// });
// scale_tween.to(video, {
// 	transform: " scale(1.5)",
// 	opacity: 1,
// 	duration: 1
// });
// const scene1 = new ScrollMagic.Scene({
// 	duration: 3000,
// 	triggerElement: videoWrapper,
// 	triggerHook: 0
// })
// 	.addIndicators({ name: "scene1" })
// 	.setTween(scale_tween)
// 	.addTo(controller);




//text-in-video-script

// let foo = null; 
if (typeof window !== 'undefined') {
    //   foo = window.localStorage.getItem("foo");

    $($).ready(function () {

        var cursor = $(".cursor");
        var src = $("#banner").attr("src");

        $(window).mousemove(function (e) {
            cursor.css({
                top: e.clientY - cursor.height() / 2,
                left: e.clientX - cursor.width() / 2
            });
        });

        $(window)
            .mouseleave(function () {
                cursor.css({
                    opacity: "0"
                });
            })
            .mouseenter(function () {
                cursor.css({
                    opacity: "1"
                });
            });

        $(".link")
            .mouseenter(function () {
                cursor.css({
                    transform: "scale(10.2)",
                });
            })
            .mouseleave(function () {
                cursor.css({
                    transform: "scale(1)"

                });
            });

        $(window)
            .mousedown(function () {
                cursor.css({
                    transform: "scale(.2)"
                });
            })
            .mouseup(function () {
                cursor.css({
                    transform: "scale(1)"
                });
            });
    });

    let updateScrollPos = function (e) {
        $(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
    }

    class Button {
        constructor(HTMLButtonElement) {
            this.button = HTMLButtonElement;
            this.width = this.button.offsetWidth;
            this.height = this.button.offsetHeight;
            this.left = this.button.offsetLeft;
            this.top = this.button.offsetTop;
            this.x = 0;
            this.y = 0;
            this.cursorX = 0;
            this.cursorY = 0;
            this.magneticPullX = 0.4;
            this.magneticPullY = 0.9;
            this.isHovering = false;
            // this.magnetise();
            // this.createRipple();
        }

        onEnter = () => {
            gsap.to(this.button, 0.4, {
                x: this.x * this.magneticPullX,
                y: this.y * this.magneticPullY,
                ease: Power4.easeOut
            });
        };

        onLeave = () => {
            gsap.to(this.button, 0.7, {
                x: 0,
                y: 0,
                ease: Elastic.easeOut.config(1.1, 0.5)
            });
        };

        // magnetise = () => {
        //     document.querySelector("body").addEventListener("mousemove", (e) => {
        //         this.cursorX = e.clientX;
        //         this.cursorY = e.clientY;

        //         const center = {
        //             x: this.left + this.width / 2,
        //             y: this.top + this.height / 2
        //         };

        //         this.x = this.cursorX - center.x;
        //         this.y = this.cursorY - center.y;

        //         const distance = Math.sqrt(this.x * this.x + this.y * this.y);
        //         const hoverArea = this.isHovering ? 0.6 : 0.5;

        //         if (distance < this.width * hoverArea) {
        //             if (!this.isHovering) {
        //                 this.isHovering = true;
        //             }
        //             this.onEnter();
        //         } else {
        //             if (this.isHovering) {
        //                 this.onLeave();
        //                 this.isHovering = false;
        //             }
        //         }
        //     });
        // };

        createRipple = () => {
            this.button.addEventListener("click", () => {
                const circle = document.createElement("span");
                const diameter = Math.max(
                    this.button.clientWidth,
                    this.button.clientHeight
                );
                const radius = diameter / 2;

                const offsetLeft = this.left + this.x * this.magneticPullX;
                const offsetTop = this.top + this.y * this.magneticPullY;

                circle.style.width = circle.style.height = `${diameter}px`;
                circle.style.left = `${this.cursorX - offsetLeft - radius}px`;
                circle.style.top = `${this.cursorY - offsetTop - radius}px`;
                circle.classList.add("ripple");

                const ripple = this.button.getElementsByClassName("ripple")[0];

                if (ripple) {
                    ripple.remove();


                }

                this.button.appendChild(circle);
            });
        };
    }

    const buttons = $("button");
    for (const button of buttons) {
        new Button(button);
    }

}


// function setVideo(){
//   // document.getElementById("banner").src="istockphoto-454669794-640_adpp_is.mp4";
//   document.getElementById("banner").src="https://media.istockphoto.com/videos/animation-floating-through-blue-microbes-healthy-microbiome-video-id1293799762";
// }

// function noVideo(){
//   document.getElementById("banner").src="";
// }




// video.jsx js code scrollmagic

// if (typeof window !== 'undefined'){
//         if (process.browser){

//       const stickyVideoModule = document.querySelector(".sticky-video-module");
//       const boxed = stickyVideoModule.querySelector(".boxed");
//       const videoWrapper = stickyVideoModule.querySelector(".video");
//       const video = stickyVideoModule.querySelector("#scroll-video-increase");

//       const controller = new ScrollMagic.Controller();

//       const scene = new ScrollMagic.Scene({
//           duration: 1500,
//           triggerElement: videoWrapper,
//           triggerHook: 0
//       })
//           .addIndicators({ name: "init" })
//           .setPin(videoWrapper)
//           .addTo(controller);

//       scene.on("update", (e) => {
//           scrollPos = e.scrollPos / 1000;
//       });

//       scene.on("enter", () => {
//           boxed.style.width = `${window.innerWidth}px`;
//           boxed.style.paddingTop = "100px";
//       });

//       scene.on("end", (e) => {
//           if ("FORWARD" === e.scrollDirection) {
//               boxed.style.width = "100vw";
//           }
//       });

//       // Scale Scene
//       const scale_tween = gsap.timeline();
//       scale_tween.from(video, {
//           transform: " scale(1)",
//           opacity: 1,
//           duration: 0
//       });
//       scale_tween.to(video, {
//           transform: " scale(1.5)",
//           opacity: 1,
//           duration: 1
//       });
//       const scene1 = new ScrollMagic.Scene({
//           duration: 3000,
//           triggerElement: videoWrapper,
//           triggerHook: 0
//       })
//           .addIndicators({ name: "scene1" })
//           .setTween(scale_tween)
//           .addTo(controller);

//     }

// }



// scroll magic gsap
{/* <Scene duration={600} pin>
<div>Sticky Example</div>
</Scene> */}


//video-remake-js

// if (typeof window !== 'undefined'){
//     if (process.browser){

    
// var windowSize = $(window).width();

// $( window ).resize(function() {
//   windowSize = $(window).width();
// });	



//   if (windowSize > 767) {

// 	var controller = new ScrollMagic.Controller();

//  	var zoomHeader = TweenMax.to("#header", 0.5, {scale: 1.9, ease: Circ.EaseIn});

// 	var zoomOne = TweenMax.to("#one", 0.5, {scale: 1, ease: Circ.EaseIn});
//   var zoomTwo = TweenMax.to("#two", 0.5, {scale: 1.3, ease: Circ.EaseIn});
//   var zoomThree = TweenMax.to("#three", 0.5, {scale: 1.6, ease: Circ.EaseIn});
//  var zoomFour = TweenMax.to("#four", 0.5, {scale: 1.9, ease: Circ.EaseIn});


// 	var headerZoom = new ScrollMagic.Scene({
//     triggerElement: "#header", 
//     triggerHook: 0, 
//     duration: "300%"
//   })
//              .setPin('#header')
//              .setClassToggle('#header', 'showing')
// 					   .setTween(zoomHeader)
//             .addIndicators({name: 'header zoom'})
//     				 .addTo(controller);


// 	var sceneOneZoom = new ScrollMagic.Scene({
//     triggerElement: "#one", 
//     triggerHook: 0,
//     duration: "300%"
//   })
//              .setPin('#one')
//              .setClassToggle('#one', 'showing')
// 					   .setTween(zoomOne)
//             .addIndicators({name: 'Scene 1 zoom'})
//     				 .addTo(controller);


// 	var sceneTwoZoom = new ScrollMagic.Scene({
//     triggerElement: "#two", 
//     triggerHook: 0,
//     duration: "300%"
//   })
//              .setPin('#two')
//              .setClassToggle('#two', 'showing')
// 					   .setTween(zoomTwo)
//             .addIndicators({name: 'Scene 2 zoom', indent: 400})
//     				 .addTo(controller);


// 	var sceneThreeZoom = new ScrollMagic.Scene({
//     triggerElement: "#three", 
//     triggerHook: 0, 
//     duration: "300%"
//   })
//              .setPin('#three')
//              .setClassToggle('#three', 'showing')
// 					   .setTween(zoomThree)
//             .addIndicators({name: 'Scene 3 zoom', indent: 800})
//     				 .addTo(controller);

// 	var sceneFourZoom = new ScrollMagic.Scene({
//     triggerElement: "#four", 
//     triggerHook: 0, 
//     duration: "100%"
//   })
//              .setPin('#four')
//              .setClassToggle('#four', 'showing')
// 					   .setTween(zoomFour)
//              .addIndicators({name: 'Scene 4 zoom'})
//     				 .addTo(controller);

// }

// var documentHeight = document.body.clientHeight;
// var windowHeight = $('#wow').height();
// var bottomPoint = documentHeight - windowHeight;


// $( window ).scroll(function() {
//     var scrollTop = $(window).scrollTop();

//     console.log(scrollTop);
//     console.log(bottomPoint);

//     if ( scrollTop > bottomPoint ) {
//       $('#four a').addClass('email-showing');
//     } else {
//        $('#four a').removeClass('email-showing');
//     }
// });

//     }}

// videocrolltrial1 js

// if (typeof window !== 'undefined') {
//     if (process.browser) {

//         if (document.querySelector('.orangeWrapper') || document.querySelector('.orange')) {



//             gsap.registerPlugin(ScrollTrigger);



//             // --- ORANGE PANEL ---

//             const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: ".orangeWrapper",
//                     scrub: true,
//                     pin: true,

//                     start: "50% 50%",
//                     end: "+=200%"
//                 }
//             })

//                 .from(".orange", {
//                     scale: 0.5,
//                     ease: "none"
//                 })

//                 .from(".line-2", {
//                     scaleX: 0,
//                     ease: "none",
//                     transformOrigin: "left top"
//                 }, 0)

//         }
//     }
// }

// videocrolltrial js

// if (typeof window !== 'undefined') {
//     if (process.browser) {

// $(function() {

//     $(window).scroll(function() {
  
//       var mass = Math.min(20, 1+0.005*$(this).scrollTop());
  
//       $('#expandable').css('transform', 'scale(' + mass + ')');
//     });
//   });
// }}


// mousemove scroll

if (typeof window !== 'undefined') {
    if (process.browser) {
var windowWidth = $(window).width();
    
$('.page-container').mousemove(function(event){

    var moveX = (($(window).width() / 2) - event.pageX) * 0.2;
    $('.page-back').css('margin-left', moveX + 'px');
});
$('.page-container').mouseout(function(event){

    var moveX = (($(window).width() / 2) + event.pageX) * 0.2;
    $('.page-back').css('margin-left', moveX - 'px');
});
    }}

    // vdeoremake video scale increase

    if (typeof window !== 'undefined') {
        if (process.browser) {
    window.addEventListener(
        "scroll",
        () => {
          document.body.style.setProperty(
            "--scroll",
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
          );
        },
        false
      );
    }
}
     
// background color change


if (typeof window !== 'undefined') {
    if (process.browser) {

window.sections = [...document.querySelectorAll('.section')];
window.lastScrollTop = window.pageYOffset;

document.body.style.background = window?.sections[0]?.getAttribute('data-bg');

window.addEventListener('scroll', onScroll);

function onScroll() {
  const scrollTop = window.pageYOffset;
  
  const section = window.sections
    .map(section => {
      const el = section;
      const rect = el.getBoundingClientRect();
      return {el, rect};
    })
    .find(section => section.rect.bottom >= (window.innerHeight * 0.5));
  document.body.style.background = section.el.getAttribute('data-bg');
}
    }
}
