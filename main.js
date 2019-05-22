const screen = document.getElementById('screen')
const ctx = screen.getContext('2d')
screen.width = 640
screen.height = 480


const drawGrid = () => {
	ctx.clearRect(0, 0, screen.width, screen.height)
	ctx.beginPath()


	for (let x = 80; x < 640; x+=80) {
		ctx.moveTo(x, 0)
		ctx.lineTo(x, screen.height)
	}

	// for (let y = 80; y < 480; y+=80) {
	// 	ctx.moveTo(0, y)
	// 	ctx.lineTo(0, screen.width)
	// }


	ctx.moveTo(0, 80)
	ctx.lineTo(0, screen.width)

	// ctx.moveTo(160, 0)
	// ctx.lineTo(160, screen.height)

	ctx.stroke()
}
drawGrid()




ctx.fillRect(50, 50, 50, 50)