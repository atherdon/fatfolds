running.js


id: document._id
		revision: document._rev
		averageHeartRate: document.averageHeartRate
		comments: document.comments
		date: document.date
		distance: document.distance
		duration: document.duration
		shoes: document.shoes
		speed: document.speed
		user: document.user


		calculateWearFor = (pairOfShoes, runs, wearThreshold) ->
	pairOfShoes.distance = 0
	pairOfShoes.distance += run.distance for run in runs
	pairOfShoes.status = if pairOfShoes.distance < wearThreshold then "OK" else "Worn"
	pairOfShoes.lastStatusUpdate = _.getCurrentDate()



	calculateSpeedFor = (run) -> 
	durationInSeconds = (run.duration.hours * 3600) + (run.duration.minutes * 60) + run.duration.seconds
	speed = (run.distance / durationInSeconds) * 3600
	return parseFloat(speed.toFixed(2))