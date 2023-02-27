const socket = io("http://localhost:3000");

let message = document.getElementById("message");
let username = document.getElementById("username");
let output = document.getElementById("output");
let actions = document.getElementById("actions");
let button = document.getElementById("send");

button.addEventListener("click", () => {
  let chatObj = {
    username: username.value,
    message: message.value,
  };
  socket.emit("chat:message", chatObj);
});

socket.on("chat:message", (chat) => {
    output.innerHTML +=` <p> USER: ${JSON.stringify(chat.username)} MESSAGE: ${JSON.stringify(chat.message)} </p>` 
  console.log(chat);
});
