// contentScript.js

function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('time-container');
    const dateElement = document.getElementById('date-container');
  
    const timeOptions = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    };

      // Format date
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
  const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(now);
  const formattedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(now);
  
    timeElement.textContent = formattedTime;
    dateElement.textContent = formattedDate;
  }
  
  // Update time every second
  setInterval(updateTime, 1000);
  
  // Initial update
  updateTime();
  