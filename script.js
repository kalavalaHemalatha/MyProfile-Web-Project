document.addEventListener('DOMContentLoaded', () => {
    const sayHelloButton = document.getElementById('sayHelloButton');
    const greetingMessage = document.getElementById('greetingMessage');

    sayHelloButton.addEventListener('click', () => {
       
        const userName = prompt("Please enter your name:");
        if (userName) {
            alert(`Hello, ${userName}!`);
            greetingMessage.textContent = `Hello, ${userName}! Welcome to my profile.`;
            greetingMessage.style.textAlign = 'center';
            greetingMessage.style.marginTop = '10px'; 
        } else {
            alert("No name entered. Please try again.");
            greetingMessage.textContent = "";
        }
    });
});