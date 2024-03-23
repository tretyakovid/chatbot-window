const sendBtn = document.querySelector(".chatbot__send-btn");
const chatbot = document.querySelector(".chatbot");
const chatInput = document.querySelector(".chatbot__input textarea");
const chatbox = document.querySelector(".chatbot__chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
let userMessage;
let chatContent;

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chatbot__message", className);
  if (className == "message--outcoming") {
    chatContent = `<p class="chatbot__text message-text--alt">${message}</p>`;
  } else {
    chatContent = `         <span class="bot">Bot:</span>
    <p class="chatbot__text">${message}</p>`;
  }
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi;
};
const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;
  chatInput.value = "";
  chatbox.appendChild(createChatLi(userMessage, "message--outcoming"));
  chatbox.scrollTo(0, chatbox.scrollHeight);
  setTimeout(() => {
    chatbox.appendChild(
      createChatLi(
        "Oops! API function is temporarily disabled!",
        "message--incoming"
      )
    );
    chatbox.scrollTo(0, chatbox.scrollHeight);
  }, 500);
};

sendBtn.addEventListener("click", handleChat);
chatbotToggler.addEventListener("click", () => {
  chatbot.classList.toggle("chatbot--active");
});
