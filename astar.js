import { getMap } from "./map.js"
import { getPlayer, getGoal } from "./player.js"
import { updateMap } from "./main.js"

let map = getMap()
let player = getPlayer()
let goal = getGoal()

export const findPath = (x, y) => {
	// const g = 10
	// const h = (((player.loc.x - goal.x) * 10) + ((player.loc.y - goal.y) * 10))
	// const f = g + h

	const neighbours = [
		map[y-1][x] == 0 || map[y-1][x] == 3 ? {node: {x: x, y: y-1}, // map[y-1][x], 
			g: 10,
			h: ((Math.abs(x - goal.x) * 10) + (Math.abs(y-1 - goal.y) * 10))
		} : null,
		// map[y-1][x+1],
		map[y-1][x+1] == 0 || map[y-1][x+1] == 3 ? {node: {x: x+1, y: y-1}, // map[y-1][x], 
			g: 14,
			h: ((Math.abs(x+1 - goal.x) * 10) + (Math.abs(y-1 - goal.y) * 10))
		} : null,

		map[y][x+1] == 0 || map[y][x+1] == 3 ? {node: {x: x+1, y: y}, 
			g: 10,
			h: ((Math.abs(x+1 - goal.x) * 10) + (Math.abs(y - goal.y) * 10))
		} : null,
		// map[y+1][x+1],
		map[y+1][x+1] == 0 || map[y+1][x+1] == 3 ? {node: {x: x+1, y: y+1}, // map[y-1][x], 
			g: 14,
			h: ((Math.abs(x+1 - goal.x) * 10) + (Math.abs(y+1 - goal.y) * 10))
		} : null,

		map[y+1][x] == 0 || map[y+1][x] == 3 ? {node: {x: x, y: y+1}, 
			g: 10,
			h: ((Math.abs(x - goal.x) * 10) + (Math.abs(y+1 - goal.y) * 10))
		} : null,
		// map[y+1][x-1],
		map[y+1][x-1] == 0 || map[y+1][x-1] == 3 ? {node: {x: x-1, y: y+1}, // map[y-1][x], 
			g: 14,
			h: ((Math.abs(x-1 - goal.x) * 10) + (Math.abs(y+1 - goal.y) * 10))
		} : null,

		map[y][x-1] == 0 || map[y][x-1] == 3 ? {node: {x: x-1, y: y}, 
			g: 10,
			h: ((Math.abs(x-1 - goal.x) * 10) + (Math.abs(y - goal.y) * 10))
		} : null,
		// map[player.loc.y-1][player.loc.x-1],
		map[y-1][x-1] == 0 || map[y-1][x-1] == 3 ? {node: {x: x-1, y: y-1}, // map[y-1][x], 
			g: 14,
			h: ((Math.abs(x-1 - goal.x) * 10) + (Math.abs(y-1 - goal.y) * 10))
		} : null,
    ]
    

	let cheapestPath = {f: 999}

	for (let i = 0; i < neighbours.length; i++) {
		// const item = neighbours[i]
		if (neighbours[i] == null) {
			continue
		}else{
			neighbours[i].f = neighbours[i].g + neighbours[i].h
			if (neighbours[i].f < cheapestPath.f) {
				cheapestPath = neighbours[i]
			}
		}
		// console.log(neighbours[i])
	}
	console.log('cheapestPath: ', cheapestPath)
	player.path.push(cheapestPath.node)
	// console.log(player.path)

	// neighbours.forEach(element => {
	// 	if (element != null) {
	// 		console.log(element)
	// 		if (element.g + element.h < cheapestPath) {
	// 			cheapestPath = element.g + element.h
	// 		}
	// 	}
	// })
	if (cheapestPath.node.x == goal.x && cheapestPath.node.y == goal.y) {
		player.foundGoal = true
		console.log('found goal')
		console.log(player.path)
		updateMap()
	}
	// else{
	// 	findPath(cheapestPath.node.x, cheapestPath.node.y)
	// }


	if (!player.foundGoal) {
		if (player.path.length > 10) {
			
			player.foundGoal = true
		}
		findPath(cheapestPath.node.x, cheapestPath.node.y)
	}
}