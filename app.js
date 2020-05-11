
  const choices = [
    "It is uncertain",
    "Not a good idea",
    "Worth a shot",
    "Try again later",
    "You should do it"
  ];
  const wholeBall = document.querySelector(".magic");
  const textEffect = document.querySelector(".readingBox p");

  wholeBall.addEventListener("mouseenter", function() {
    const computerDecision = Math.floor(Math.random() * 5);
    const computerChoice = choices[computerDecision];
      textEffect.classList.add("text");
      textEffect.textContent = computerChoice;
      wholeBall.classList.add("animate");
  });
  wholeBall.addEventListener("mouseleave", function() {
    textEffect.classList.remove("text");
    wholeBall.classList.remove("animate");
  });