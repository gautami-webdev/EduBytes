document.addEventListener("DOMContentLoaded", function () {
  // Countdown Timer
  function startCountdown(durationInSeconds) {
      const timerElements = document.querySelectorAll(".date");

      function updateTimer() {
          let days = Math.floor(durationInSeconds / (60 * 60 * 24));
          let hours = Math.floor((durationInSeconds % (60 * 60 * 24)) / (60 * 60));
          let minutes = Math.floor((durationInSeconds % (60 * 60)) / 60);
          let seconds = durationInSeconds % 60;

          timerElements[0].innerHTML = `${days} <br> Days`;
          timerElements[1].innerHTML = `${hours} <br> Hours`;
          timerElements[2].innerHTML = `${minutes} <br> Minutes`;
          timerElements[3].innerHTML = `${seconds} <br> Seconds`;

          if (durationInSeconds > 0) {
              durationInSeconds--;
              setTimeout(updateTimer, 1000);
          } else {
              document.querySelector(".reminder p").innerText = "Offer Expired!";
          }
      }

      updateTimer();
  }

  // Start Countdown (11 Days, 14 Hours, 8 Minutes, 58 Seconds)
  const countdownDuration = 11 * 86400 + 14 * 3600 + 8 * 60 + 58;
  startCountdown(countdownDuration);

  // Form Validation and Submission
  document.querySelector(".btn a").addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link action

      let name = document.querySelector("input[placeholder='Name']").value.trim();
      let email = document.querySelector("input[placeholder='Email Address']").value.trim();
      let phone = document.querySelector("input[placeholder='Phone Number']").value.trim();

      if (name === "" || email === "" || phone === "") {
          alert("Please fill in all fields.");
          return;
      }

      // Email Validation
      let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
          alert("Please enter a valid email address.");
          return;
      }

      alert("Registration successful!");
      // You can send form data to a backend here
  });
});




