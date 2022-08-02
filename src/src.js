import $ from "jquery";

if (typeof window !== "undefined") {
   if (process.browser) {
      // let frame = document.getElementsByClassName('.frame');

      document.addEventListener("DOMContentLoaded", function () {
         var flexboxOFTextVideo = document.getElementById("button-wrapper");
         var frame = document.getElementById("frame");
         var navToggle = document.getElementById("bgtoggle");
         var navMenu = document.getElementById("menu_container");
         // var frameMenu = document.getElementById('frame');

         navToggle?.addEventListener("click", function (e) {
            //   navMenu.classList.toggle("open");

            //   flexboxOFTextVideo.classList.toggle("open");
            //   frame.classList.toggle("open");
            //   flexboxOFTextVideo.style.opacity="0";
            navMenu.style.opacity = "1";
            //   frame.style.zIndex="9999999999999999999999999";
            //   navMenu.style.zIndex="999999999";

            //   frameMenu.style.height="1000px";
         });
      });
   }
}

//text-in-video-script

// let foo = null;
if (typeof window !== "undefined") {
   //   foo = window.localStorage.getItem("foo");

   $($).ready(function () {
      var cursor = $(".cursor");
      var src = $("#banner").attr("src");

      $(window).mousemove(function (e) {
         cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2,
         });
      });

      $(window)
         .mouseleave(function () {
            cursor.css({
               opacity: "0",
            });
         })
         .mouseenter(function () {
            cursor.css({
               opacity: "1",
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
               transform: "scale(1)",
            });
         });

      $(window)
         .mousedown(function () {
            cursor.css({
               transform: "scale(.2)",
            });
         })
         .mouseup(function () {
            cursor.css({
               transform: "scale(1)",
            });
         });
   });

   let updateScrollPos = function (e) {
      $(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
   };

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
            ease: Power4.easeOut,
         });
      };

      onLeave = () => {
         gsap.to(this.button, 0.7, {
            x: 0,
            y: 0,
            ease: Elastic.easeOut.config(1.1, 0.5),
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

// mousemove scroll

if (typeof window !== "undefined") {
   if (process.browser) {
      var windowWidth = $(window).width();

      $(".page-container").mousemove(function (event) {
         var moveX = ($(window).width() / 2 - event.pageX) * 0.2;
         $(".page-back").css("margin-left", moveX + "px");
      });
      $(".page-container").mouseout(function (event) {
         var moveX = ($(window).width() / 2 + event.pageX) * 0.2;
         $(".page-back").css("margin-left", moveX - "px");
      });
   }
}

// vdeoremake video scale increase

if (typeof window !== "undefined") {
   if (process.browser) {
      window.addEventListener(
         "scroll",
         () => {
            document.body.style.setProperty(
               "--scroll",
               window.pageYOffset /
                  (document.body.offsetHeight - window.innerHeight)
            );
         },
         false
      );
   }
}

// background color change

if (typeof window !== "undefined") {
   if (process.browser) {
      window.sections = [...document.querySelectorAll(".section")];
      window.lastScrollTop = window.pageYOffset;

      document.body.style.background =
         window?.sections[0]?.getAttribute("data-bg");

      window.addEventListener("scroll", onScroll);

      function onScroll() {
         const scrollTop = window.pageYOffset;

         const section = window.sections
            .map((section) => {
               const el = section;
               const rect = el.getBoundingClientRect();
               return { el, rect };
            })
            .find((section) => section.rect.bottom >= window.innerHeight * 0.5);
         document.body.style.background = section.el.getAttribute("data-bg");
      }
   }
}

// video remake by pratik sir
if (typeof document !== "undefined") {
   $(document).scroll((e) => {
      // How much the user has scrolled
      let percentScrolled = window.scrollY / window.innerHeight;

      let minWidth = 900;
      let maxWidth = 1200;
      // How wide the image should be
      let width = percentScrolled * (maxWidth - minWidth) + minWidth;

      let minHeight = 150;
      let maxHeight = 300;
      // How tall the image should be
      let height = percentScrolled * (maxHeight - minHeight) + minHeight;

      // The starting position
      let originalPosition = [100, 150];

      // Update width and height
      $(".fake-image").css("width", width + "px");
      $(".fake-image").css("height", height + "px");

      // Move the image so the center stays the same
      $(".fake-image").css(
         "left",
         originalPosition[0] - (width - minWidth) / 2 + "px"
      );
      $(".fake-image").css(
         "top",
         originalPosition[1] - (height - minHeight) / 2 + "px"
      );
   });
}
