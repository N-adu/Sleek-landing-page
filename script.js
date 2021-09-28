// Countdown timer
const countdown = () => {
    const count = new Date('November 29, 2021 00:00:00').getTime();
    const currentTime = new Date().getTime();
    const timeDiff = count - currentTime;
    console.log(timeDiff)

    // Store time in variables
    const second = 1000;
    const minute = second * 60; 
    const hour = minute * 60;
    const day = hour * 24;
    
    // Calculate the difference
    const countDay = Math.floor(timeDiff / day);
    const countHour = Math.floor((timeDiff % day) / hour);
    const countMin = Math.floor((timeDiff % hour) / minute);

    // Change the text content
    document.getElementById('days').innerText = countDay;
    document.getElementById('hours').innerText = countHour;
    document.getElementById('minutes').innerText = countMin;

    setInterval(countdown, 1000);
}
countdown();

// Image Event listener

const imgSect = document.getElementById('itemImg');

function jumpAnimation(){
    imgSect.classList.toggle('jump')  
}

imgSect.addEventListener('mouseover', jumpAnimation)
    
