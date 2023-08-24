const pages = gsap.utils.toArray('.page');

gsap.to(pages, {
    xPercent: -100 * (pages.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: '#h_scroll',
        end: '+=10000', // 스크롤량을 늘여줌.
        scrub: 1, //scrub: 0,
        pin: true,
        snap: 1 / (pages.length - 1),//scrub: 0일 경우 작동하지 않음
    }
})