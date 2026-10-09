// let counter = document.querySelector(".counter");
// counter.innerText = 1000;

// let count = 0;
// setInterval(() => {
//     if (count <= 75) {
//         count++;
//         counter.innerText = count;
//     }
// }, 1000);

let counters = document.querySelectorAll(".counter");
let time = 300;
counters.forEach((counter) => {
    let updateCount = () => {
        let target = +counter.getAttribute("data_target");
        let count = +counter.innerText;
        let increment = target / time;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});

let healthCondition = document.querySelector(".health");
setTimeout(() => {
    healthCondition.innerText = "You are FIT!";
}, 2000);
