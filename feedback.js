const form = document.getElementById("feedbackForm");
const submitButton = document.getElementById("submitbtn");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const feedback = document.getElementById("review").value;

  const feedbackData = {
    name: name,
    email: email,
    feedback: feedback
  };

  localStorage.setItem("feedback", JSON.stringify(feedbackData));
  form.reset();

  alert("Thank you for your feedback!");
});
