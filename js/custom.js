
const H1 = document.querySelector('h1 a');

H1.addEventListener('click', e => {
    e.preventDefault();
    gsap.to(window, {
        scrollTo: 0,
        duration: 2,
    })
});

const NAVLINK = gsap.utils.toArray('.gnb a');

console.log(NAVLINK);
// [a,a,a,a,a,a]


NAVLINK.forEach((it, idx) => {
    it.addEventListener('click', (e) => {
        e.preventDefault();
        const TG = e.target.hash;
        gsap.to(window, {
            scrollTo: TG,
            duration: 1,
            ease: 'bounce',
        })
    })
});


const txt = gsap.utils.toArray('#intro h2');

txt.forEach((it, idx, arry) => {
    const a = it.innerText;
    const t = [...a].map(it => `<span>${it}</span>`).join('');

    it.innerHTML = t;
    const chars = it.querySelectorAll('span');

    gsap.from(chars, {
        yPercent: 100,
        autoAlpha: 0,
        duration: 1,
        //repeat: 3,
        //repeatDelay: 2,
        //yoyo: true,
        ease: "bounce",
        stagger: {
            amount: 1,
            from: "random"
        },
        // scrollTrigger: {
        //     trigger: it,
        //     start: "top center",
        //     //end: "+=400",
        //     toggleActions: "play none play reverse",
        //     markers: 1
        // }
    });
});




// T.forEach((it, idx) => {
//     const TX = it.map(it => `<span>${it}</span>`);
//     console.log(TX)
// })



