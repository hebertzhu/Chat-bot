# Chat-bot
This is only chatbot base on chatgpt.
## 在GitHub静态页面上部署一个调用OpenAI API的电商平台聊天客服机器人案例
## 在这个例子中，将使用JavaScript和HTML
### 首先创建一个新的HTML文件，然后在其中编写以下代码：
<!DOCTYPE html>
<html>
<head>
	<title>电商平台聊天客服机器人</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<div class="chatbox">
		<div class="header">
			<h1>聊天窗口</h1>
		</div>
		<div class="conversation">
			<ul></ul>
		</div>
		<div class="inputbox">
			<input type="text" placeholder="输入消息...">
			<button>发送</button>
		</div>
	</div>

	<script src="https://cdn.jsdelivr.net/npm/@openai/api@1.1.0/dist/openai-api.js"></script>
	<script src="script.js"></script>
</body>
</html>

### 这个HTML文件创建了一个包含聊天窗口的页面。我们使用了一个外部的JavaScript库，@openai/api，它可以让我们轻松地调用OpenAI的API。我们还创建了一个新的JavaScript文件，用于实现聊天机器人的逻辑。
###　接下来，您需要在您的repository中创建一个新的JavaScript文件，然后在其中编写以下代码：
const openai = require('@openai/api')('YOUR_API_KEY')

const conversation = document.querySelector('.conversation ul')
const inputBox = document.querySelector('.inputbox input')
const sendButton = document.querySelector('.inputbox button')

const addMessage = (message, from) => {
	const li = document.createElement('li')
	li.innerHTML = `<span class="${from}">${from === 'user' ? '我' : '机器人'}: </span>${message}`
	conversation.appendChild(li)
	conversation.scrollTop = conversation.scrollHeight
}

sendButton.addEventListener('click', () => {
	const message = inputBox.value
	inputBox.value = ''
	addMessage(message, 'user')

	openai.complete({
		engine: 'davinci',
		prompt: `用户: ${message}\n机器人: `,
		max_tokens: 60,
		n: 1,
		stop: '\n',
	}).then(res => {
		const response = res.data.choices[0].text.trim()
		addMessage(response, 'robot')
	})
})

＃＃＃　这段JavaScript代码将获取聊天窗口的DOM元素，并添加一个事件监听器来响应用户的点击事件。当用户点击发送按钮时，代码将获取用户输入的消息，并将其添加到聊天窗口中。然后，代码将调用OpenAI的API，使用用户的消息来生成机器人的回复。最后，机器人的回复将被添加到聊天窗口中。
＃＃　现在，已经完成了部署一个调用OpenAI API的电商平台聊天客服机器人的所有步骤。如果您遇到任何问题，请随时问我。
