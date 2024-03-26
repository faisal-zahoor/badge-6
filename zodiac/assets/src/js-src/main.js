document.addEventListener("DOMContentLoaded", function () {
  const zodiacSigns = document.querySelectorAll(".zodiac-sign");
  const result = document.getElementById("result");

  zodiacSigns.forEach(function (sign) {
    sign.addEventListener("click", function () {
      const signName = this.getAttribute("data-name");
      const future = getFuture(signName);
      result.textContent = future;
      result.classList.add("show");

      setTimeout(() => {
        result.classList.remove("show");
      }, 3000);
    });
  });

  function getFuture(signName) {
    switch (signName) {
      case "aries":
        return "You will have a burst of energy today. Use it wisely!";
      case "taurus":
        return "Today is a good day to indulge in some self-care activities.";
      case "gemini":
        return "You might receive some exciting news today. Stay open-minded!";
      case "cancer":
        return "Focus on your emotional well-being today. Reach out to loved ones if needed.";
      case "leo":
        return "Your creativity will be at its peak today. Channel it into your projects.";
      case "virgo":
        return "Pay attention to the details today. It's the little things that matter.";
      case "libra":
        return "Seek balance in all aspects of your life today. Trust your instincts.";
      case "scorpio":
        return "Your intuition is strong today. Listen to your inner voice.";
      case "sagittarius":
        return "Take a leap of faith today. Adventure awaits!";
      case "capricorn":
        return "Stay disciplined and focused on your goals today. Success is within reach.";
      case "aquarius":
        return "Embrace your uniqueness today. Don't be afraid to stand out";
      case "pisces":
        return "Compassionate, artistic, and intuitive. Pisces are dreamers who have a deep connection to their emotions.";
    }
  }
});
