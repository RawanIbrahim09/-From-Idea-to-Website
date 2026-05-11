const button =
document.getElementById("analyzeBtn");

const historyList =
document.getElementById("historyList");

button.addEventListener("click", function () {

  const input =
  document
  .getElementById("moodInput")
  .value
  .toLowerCase();

  const moodResult =
  document.getElementById("moodResult");

  const quoteResult =
  document.getElementById("quoteResult");



  // ADD TO HISTORY

  if(input.trim() !== ""){

    const newMood =
    document.createElement("li");

    newMood.textContent = input;

    historyList.prepend(newMood);

  }



  // HAPPY

  if (
    input.includes("happy") ||
    input.includes("excited") ||
    input.includes("good")
  ) {

    moodResult.innerHTML =
    "😊 You seem happy and positive!";

    quoteResult.innerHTML =
    "Keep shining. Your energy is beautiful ✨";

    document.body.style.background =
    "linear-gradient(135deg,#f6d365,#fda085)";
  }



  // SAD

  else if (
    input.includes("sad") ||
    input.includes("cry") ||
    input.includes("upset")
  ) {

    moodResult.innerHTML =
    "💙 You may be feeling sad.";

    quoteResult.innerHTML =
    "Bad days don't last forever 🌧️";

    document.body.style.background =
    "linear-gradient(135deg,#4facfe,#00f2fe)";
  }



  // STRESSED

  else if (
    input.includes("stress") ||
    input.includes("tired") ||
    input.includes("anxious")
  ) {

    moodResult.innerHTML =
    "😵 You seem stressed.";

    quoteResult.innerHTML =
    "Take a deep breath and rest a little 🌿";

    document.body.style.background =
    "linear-gradient(135deg,#667eea,#764ba2)";
  }



  // DEFAULT

  else {

    moodResult.innerHTML =
    "🤔 Mood unclear, but your feelings matter.";

    quoteResult.innerHTML =
    "Every emotion deserves attention 💫";

    document.body.style.background =
    "linear-gradient(135deg,#141e30,#243b55)";
  }



  // CLEAR TEXTAREA

  document.getElementById("moodInput").value = "";

});