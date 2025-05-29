function Typer(text, Type, onCompletion) {
	let current_index = Type == 'Write' ? 0 : text.length - 1

	function loop() {
		const animatedText = document.querySelector('#animated_Text')
		animatedText.innerHTML = text.substring(0, current_index)
		if (current_index == text.length && Type == 'Write') {
			setTimeout(onCompletion, 1000)
			return
		}
		if (current_index == 0 && Type == 'Erase') {
			setTimeout(onCompletion, 0)
			return
		}
		Type == 'Write' ? current_index++ : current_index--
		setTimeout(loop, 100)
	}

	loop()
}

function onLoad() {
	const text = ['Frontend Developer', 'Coder', 'Programmer']
	Typer(text[0], 'Write', () => {
		Typer(text[0], 'Erase', () => {
			Typer(text[1], 'Write', () => {
				Typer(text[1], 'Erase', () => {
					Typer(text[2], 'Write', () => {
						Typer(text[2], 'Erase', () => {
							onLoad()
						})
					})
				})
			})
		})
	})
}
window.addEventListener('load', onLoad)
