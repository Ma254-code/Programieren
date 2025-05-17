document.getElementById("quizForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let score = 0;
  if (document.querySelector('input[name="q1"]:checked')?.value === "p") score++;
  if (document.querySelector('input[name="q2"]:checked')?.value === "h1") score++;

  if (score === 2) {
    alert("Super! Du hast das Quiz bestanden! 🎉");
    window.location.href = "success.html";
  } else {
    alert(`Du hast ${score} von 2 richtig. Versuch's nochmal!`);
  }
});
