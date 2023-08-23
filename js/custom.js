
const H1 = document.querySelector('h1 a');

H1.addEventListener('click', e => {
    e.preventDefault();
    gsap.to(window, {
        scrollTo: 0,
        duration: 2,
    })
});

const NAVLINK = gsap.utils.toArray('.gnb a');

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


const T = document.querySelector('#profile .txt');
const STXT = [...T.innerText].map(it => `<span>${it}</span>`).join('');
T.innerHTML = STXT;
const SPAN = T.querySelectorAll('span');

SPAN.forEach((it, idx) => {
    it.style.cssText = `
    font-size: 24px;
    transform: translate(-50%, 0) rotate(${360 / SPAN.length * idx}deg);
    `;
});

gsap.to(T, {
    rotate: 360,
    duration: 10,
    repeat: -1,
    ease: 'linear',
})







