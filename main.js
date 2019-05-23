import { findPath } from "./astar.js"
import { getMap } from "./map.js"
import { getPlayer, getGoal } from "./player.js"
import { getCamera, moveCamera } from "./camera.js"
const screen = document.getElementById('screen')
const ctx = screen.getContext('2d')
screen.width = 640
screen.height = 480

let map = getMap()
let player = getPlayer()
let camera = getCamera()

/**
 * walkable
 * obstcle
 * player
 * endgoal
 * path
 */
const clrArr = ['#fff', '#000', '#f0f', '#0ff', '#0f0']

export const updateMap = () => {
	// console.log('updateMap', player.path)
	player.path.forEach(element => {
		map[element.y][element.x] = 4
	})
	drawGrid()
}

export const drawGrid = () => {
	ctx.clearRect(0, 0, screen.width, screen.height)
	ctx.beginPath()

	/*
	for (let x = 80; x < 640; x+=80) {
		ctx.moveTo(x, 0)
		ctx.lineTo(x, screen.height)
	}

	for (let y = 80; y < 480; y+=80) {
		ctx.moveTo(0, y)
		ctx.lineTo(screen.width, y)
	}

	ctx.stroke()
	*/

	for (let y = 0; y < map.length; y++) {
		for (let x = 0; x < map[y].length; x++) {
			ctx.fillStyle = clrArr[map[y][x]]
			ctx.fillRect((x*80) + camera.x, (y*80) + camera.y, 80, 80)
		}
	}

	findPath(player.loc.x, player.loc.y)
}

/*screen.addEventListener("click", function(e){
	// console.log(e)
	const x = Math.floor(e.offsetX / 80)
	const y = Math.floor(e.offsetY / 80)

	// console.log({x: x, y: y})

	ctx.fillStyle = '#000'
	ctx.fillRect(x*80, y*80, 80, 80)

	// findPath()
})*/

document.addEventListener("keydown", function onPress(e) {
	let dir
	if (e.code == 'ArrowUp') {
		dir = 'up'
	}
	if (e.code == 'ArrowRight') {
		dir = 'right'
	}
	if (e.code == 'ArrowDown') {
		dir = 'down'
	}
	if (e.code == 'ArrowLeft') {
		dir = 'left'
	}

	moveCamera(dir)
	// console.log(e)
})


const goal = getGoal()

const setMarkers = () => {
	map[player.loc.y][player.loc.x] = 2
	map[goal.y][goal.x] = 3

	drawGrid()
}
setMarkers()

