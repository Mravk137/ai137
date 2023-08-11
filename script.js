function saveConversation() {
    const conversationText = document.getElementById("conversation").value;
    localStorage.setItem("savedConversation", conversationText);
    alert("Разговор сохранен!");
}
