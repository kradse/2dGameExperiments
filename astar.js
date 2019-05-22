import { getMap } from "./map.js"
import { getPlayer } from "./player.js"

let map = getMap()
let player = getPlayer()


export const findPath = () => {
	const neighbours = [
		map[player.loc.y-1][player.loc.x],
		map[player.loc.y-1][player.loc.x+1],
		map[player.loc.y][player.loc.x+1],
		map[player.loc.y+1][player.loc.x+1],
		map[player.loc.y+1][player.loc.x],
		map[player.loc.y+1][player.loc.x-1],
		map[player.loc.y][player.loc.x-1] ,
		map[player.loc.y-1][player.loc.x-1],
    ]
    

	neighbours.forEach(element => {
        if (element == 0) {
            
        }
		console.log(element)
	})
	// if (!player.foundGoal) {
	// 	findPath()
	// }
}