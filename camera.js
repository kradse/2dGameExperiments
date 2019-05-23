import { drawGrid } from "./main.js"

let camera = {
	x: 0,
	y: 0
}

export const getCamera = () => {
	return camera
}

export const moveCamera = (dir) => {
	if (dir == 'up') {
		camera.y += 10
	}
	if (dir == 'right') {
		camera.x -= 10
	}
	if (dir == 'down') {
		camera.y -= 10
	}
	if (dir == 'left') {
		camera.x += 10
	}
	drawGrid()
}
