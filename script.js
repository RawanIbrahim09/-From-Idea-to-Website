const loginScreen =
document.getElementById("loginScreen");

const mainApp =
document.getElementById("mainApp");

const startBtn =
document.getElementById("startBtn");

const welcomeText =
document.getElementById("welcomeText");

const saveBtn =
document.getElementById("saveBtn");

const moodResult =
document.getElementById("moodResult");

const quoteResult =
document.getElementById("quoteResult");

const quoteSource =
document.getElementById("quoteSource");

const adviceList =
document.getElementById("adviceList");

const historyList =
document.getElementById("historyList");

const addTodoBtn =
document.getElementById("addTodoBtn");

const todoList =
document.getElementById("todoList");

const moodCards =
document.querySelectorAll(".mood-card");



let selectedMood = "";



// DATE

const today = new Date();

document.getElementById("date").innerHTML =
today.toLocaleDateString("en-US", {

  weekday:"long",
  year:"numeric",
  month:"long",
  day:"numeric"

});



// LOGIN

startBtn.addEventListener("click", function(){

  const username =
  document.getElementById("username").value;

  if(username.trim() !== ""){

    localStorage.setItem("username", username);

    welcomeText.innerHTML =
    `Welcome back, ${username} ✨`;

    loginScreen.style.display = "none";

    mainApp.style.display = "block";

  }

});



// AUTO LOGIN

const savedUser =
localStorage.getItem("username");

if(savedUser){

  loginScreen.style.display = "none";

  mainApp.style.display = "block";

  welcomeText.innerHTML =
  `Welcome back, ${savedUser} ✨`;

}



// MOOD CARDS

moodCards.forEach(function(card){

  card.addEventListener("click", function(){

    moodCards.forEach(function(c){

      c.classList.remove("selected");

    });

    card.classList.add("selected");

    selectedMood =
    card.dataset.mood;

  });

});



// SAVE JOURNAL

saveBtn.addEventListener("click", function(){

  const journalInput =
  document.getElementById("journalInput")
  .value;

  const now = new Date();

  const date =
  now.toLocaleDateString();

  const time =
  now.toLocaleTimeString();



  // SAVE ENTRY

  if(
    selectedMood !== "" ||
    journalInput.trim() !== ""
  ){

    const entry =
    document.createElement("li");

    entry.innerHTML =
    `
    <strong>📅 ${date}</strong>

    <br>

    <strong>⏰ ${time}</strong>

    <br><br>

    <strong>💭 Mood:</strong>
    ${selectedMood}

    <br><br>

    <strong>📖 Journal:</strong>

    <br>

    ${journalInput}
    `;

    historyList.prepend(entry);

  }



  // HAPPY

  if(selectedMood === "happy"){

    moodResult.innerHTML =
    "🌞 Your energy feels warm and light today.";

    quoteResult.innerHTML =
    `"Happiness can be found even in the darkest of times."`;

    quoteSource.innerHTML =
    "— Harry Potter";

    adviceList.innerHTML =
    `
      <li>Capture today's happy moments 📸</li>
      <li>Spend time with people you love 💛</li>
      <li>Celebrate small wins 🌼</li>
    `;

    document.body.style.background =
    "linear-gradient(135deg,#ff9a9e,#fad0c4)";
  }



  // SAD

  else if(selectedMood === "sad"){

    moodResult.innerHTML =
    "💙 Your heart seems quieter today.";

    quoteResult.innerHTML =
    `"After all, tomorrow is another day."`;

    quoteSource.innerHTML =
    "— Gone with the Wind";

    adviceList.innerHTML =
    `
      <li>Rest without guilt 🌧️</li>
      <li>Talk to someone you trust ☕</li>
      <li>Be gentle with yourself 🤍</li>
    `;

    document.body.style.background =
    "linear-gradient(135deg,#89f7fe,#66a6ff)";
  }



  // STRESSED

  else if(selectedMood === "stressed"){

    moodResult.innerHTML =
    "🌿 You've been carrying too much lately.";

    quoteResult.innerHTML =
    `"Just keep swimming."`;

    quoteSource.innerHTML =
    "— Finding Nemo";

    adviceList.innerHTML =
    `
      <li>Drink water slowly 💧</li>
      <li>Take a break from screens 🌙</li>
      <li>Breathe deeply 🌿</li>
    `;

    document.body.style.background =
    "linear-gradient(135deg,#c471f5,#fa71cd)";
  }



  // CALM

  else if(selectedMood === "calm"){

    moodResult.innerHTML =
    "🌙 Your mind feels softer today.";

    quoteResult.innerHTML =
    `"Peace begins with a smile."`;

    quoteSource.innerHTML =
    "— Mother Teresa";

    adviceList.innerHTML =
    `
      <li>Enjoy the quiet moments 🌙</li>
      <li>Protect your peace ✨</li>
      <li>Stay present 🌿</li>
    `;

    document.body.style.background =
    "linear-gradient(135deg,#84fab0,#8fd3f4)";
  }



  // ANGRY

  else if(selectedMood === "angry"){

    moodResult.innerHTML =
    "🔥 Some emotions arrive loudly because they need to be heard.";

    quoteResult.innerHTML =
    `"Speak when you are angry and you will make the best speech you will ever regret."`;

    quoteSource.innerHTML =
    "— Ambrose Bierce";

    adviceList.innerHTML =
    `
      <li>Pause before reacting 🌙</li>
      <li>Write your feelings down ✍️</li>
      <li>Step away and breathe 🌿</li>
    `;

    document.body.style.background =
    "linear-gradient(135deg,#ff758c,#ff7eb3)";
  }



  // CLEAR

  document.getElementById("journalInput").value = "";

});



// TODO LIST

addTodoBtn.addEventListener("click", function(){

  const todoInput =
  document.getElementById("todoInput");

  const task =
  todoInput.value;

  if(task.trim() !== ""){

    const li =
    document.createElement("li");

    li.innerHTML =
    `✨ ${task}`;

    todoList.appendChild(li);

    todoInput.value = "";

  }

});