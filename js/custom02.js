const pages = gsap.utils.toArray('#hscroll .page');
console.log(pages);


const MAIN = gsap.to(pages, {
    xPercent: -100 * (pages.length - 1),
    //duration: 3,
    scrollTrigger: {
        trigger: '#hscroll',
        start: 'top top',
        //end: 'bottom bottom',
        end: "+=5600",
        scrub: 0,
        pin: true,
        //snap: 1 / (pages.length - 1),
        // snap: { // 공간 단위로 스냅이 붙는다.
        //     snapTo: 1 / (pages.length - 1),
        //     inertia: true,
        //     duration: { min: 1, max: 1 }
        // },
        //markers: true,
    }
});

const itm = gsap.utils.toArray('#hscroll .page .move');
console.log(itm);

itm.forEach((it, idx) => {

    gsap.from(it, {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: '#hscroll .page',
            start: "left 80%",
            end: "left 20%",
            containerAnimation: MAIN,
            scrub: 0,
            markers: true,
        }
    })

})
