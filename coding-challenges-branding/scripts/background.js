// function updateTime() {
//     const now = new Date();
//     const timeElement = document.getElementById('time-container');
//     const dateElement = document.getElementById('date-container');
  
//     const options = {
//       hour: 'numeric',
//       minute: 'numeric',
//       second: 'numeric',
//       hour12: true
//     };
  
//     const formattedTime = now.toLocaleTimeString('en-US', options);
//     const formattedDate = now.toDateString();
  
//     timeElement.textContent = formattedTime;
//     dateElement.textContent = formattedDate;
//   }
  
//   // Update time every second
//   setInterval(updateTime, 1000);
  
//   // Initial update
//   updateTime();
  