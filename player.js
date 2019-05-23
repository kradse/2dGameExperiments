let player = {
	path: [],
	foundGoal: false,
	loc: {
		x: 2,
		y: 1
	}
}

export const getPlayer = () => {
    return player
}

const goal = {
	x: 6,
	y: 4
}

export const getGoal = () => {
    return goal
}