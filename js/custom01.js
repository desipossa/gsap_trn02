
const M = gsap.to('.box', {
    scrollTrigger: {
        trigger: '.test',
        start: 'center center', //앞에꺼 start, 뒤에꺼는 scroller-start
        //markers: true,
        scrub: true,
        pin: true,
    },
    x: 150,
    y: 500,
    rotation: 720,
});


const L = gsap.from('.left', {
    scrollTrigger: {
        trigger: '.test2',
        start: 'center center',
        markers: true,
        scrub: 1,
        pin: true,
    },
    x: -500,
    opacity: 0,
});

// const LNK = document.querySelector('.gnb a');

// LNK.addEventListener('click', function (e) {
//     e.preventDefault();
//     const L = e.target.hash;
//     console.log(L)

//     gsap.to(window, {
//         scrollTo: { y: L, offsetY: 100 }
//     })
// });


const LINK = document.querySelectorAll('.gnb a');
const LINK2 = gsap.utils.toArray('.gnb a');
const NUM = document.querySelector('.num');

const SEC = gsap.utils.toArray('section');
console.log(LINK, LINK2);


SEC.forEach((it, idx) => {
    gsap.to(it, {
        scrollTrigger: {
            trigger: it,
            onEnter: ({ progress, direction, isActive }) => {
                NUM.innerHTML = idx + 1;
                SEC.forEach(it => it.classList.remove('on'));
                it.classList.add('on');
                LINK2.forEach(it => it.classList.remove('on'));
                LINK2[idx].classList.add('on');
            },
            onEnterBack: ({ progress, direction, isActive }) => {
                NUM.innerHTML = idx + 1;
                SEC.forEach(it => it.classList.remove('on'));
                it.classList.add('on');
                LINK2.forEach(it => it.classList.remove('on'));
                LINK2[idx].classList.add('on');
            }
        }
    })
})


LINK.forEach((it, idx, arry) => {
    it.addEventListener('click', (e) => {
        e.preventDefault();
        const TG = e.target.hash;
        console.log(TG);
        gsap.to(window, {
            scrollTo: { y: TG, offsetY: 0 },
            ease: 'bounce',
        });


    })
})



