function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Calculate the angles for the clock hands
    const hourAngle = (hours % 12) * 30 + minutes * 0.5; // 360 / 12 = 30 degrees
    const minuteAngle = minutes * 6; // 360 / 60 = 6 degrees
    const secondAngle = seconds * 6; // 360 / 60 = 6 degrees

    // Set the rotation of the clock hands
    document.getElementById('hour-hand').style.transform = `translateX(-50%) rotate(${hourAngle}deg)`;
    document.getElementById('minute-hand').style.transform = `translateX(-50%) rotate(${minuteAngle}deg)`;
    document.getElementById('second-hand').style.transform = `translateX(-50%) rotate(${secondAngle}deg)`;

    // Update the date display
    const dateString = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('date').innerText = dateString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();