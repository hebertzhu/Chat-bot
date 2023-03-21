const openaiApiKey = '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';
const chatbotEndpoint = 'https://api.openai.com/v1/engine/davinci-codex/completions';

const generateResponse = async (message) => {
  const response = await fetch(chatbotEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${openaiApiKey}`
    },
    body: JSON.stringify({
      'prompt': `Conversation with a customer:\nCustomer: ${message}\nChatbot:`,
      'max_tokens': 50,
      'temperature': 0.7,
      'stop': '\n'
    })
  });
  const { choices } = await response.json();
  return choices[0].text.trim();
}

const chatbot = async () => {
  const chatHistory = document.querySelector('.chat-history');
  const inputMessage = document.querySelector('.input-message');
  inputMessage.addEventListener('keyup', async (event) => {
    if (event.keyCode === 13) {
      const message = inputMessage.value;
      inputMessage.value = '';
      const customerMessage = document.createElement('div');
      customerMessage.className = 'message message-customer';
      customerMessage.innerText = message;
      chatHistory.appendChild(customerMessage);
      const botMessage = document.createElement('div');
      botMessage.className = 'message message-bot';
      botMessage.innerText = await generateResponse(message);
      chatHistory.appendChild(botMessage);
    }
  });
}

chatbot();


