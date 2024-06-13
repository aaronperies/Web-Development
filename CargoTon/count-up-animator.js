const createCounter = (el, value) => {
    const counter = new Odometer({
        el: el,
        value: 0,
    });

    let animationHasRun = false;

    const options = {
        threshold: [0,0.9],
    }

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                if(!animationHasRun){
                    counter.update(value);
                    animationHasRun - true;
                }
            }
        })
    }
    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
};

const clientCounter = document.querySelector(".client-count");
createCounter(clientCounter, 15350);

const deliveredCounter = document.querySelector(".stats-over-num-1");
createCounter(deliveredCounter, 890);

const countriesCounter = document.querySelector(".stats-over-num-2");
createCounter(countriesCounter, 137);

const weightCounter = document.querySelector(".stats-over-num-3");
createCounter(weightCounter, 740);

const satisfiedCounter = document.querySelector(".stats-over-num-4");
createCounter(satisfiedCounter, 600);