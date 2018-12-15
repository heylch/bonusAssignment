# bonusAssignment
Server Endpoint: https://bonus-assignment.herokuapp.com

Youtube Link: https://youtu.be/KtpH0hJLB54

then you can try those http request in the structions with Postman

get https://bonus-assignment.herokuapp.com/api/actor

post https://bonus-assignment.herokuapp.com/api/actor
body: {
	"id":"123",
	"name":"Harrison"
}

post https://bonus-assignment.herokuapp.com/api/actor
body: {
	"id":"321",
	"name":"Joe"
}


post https://bonus-assignment.herokuapp.com/api/actor
body: {
	"id":"234",
	"first":"Ryan",
	"last":"Goslyn"
}

get https://bonus-assignment.herokuapp.com/api/actor

put https://bonus-assignment.herokuapp.com/api/movie/432
body: {"name": "Joseph"}

put https://bonus-assignment.herokuapp.com/api/actor/432
body: {"name": "Joseph"}

put https://bonus-assignment.herokuapp.com/api/actor/321
body: {"name": "Joseph"}

put https://bonus-assignment.herokuapp.com/api/actor/321
body: {"nombre": "Jose"}

delete https://bonus-assignment.herokuapp.com/api/movie/111

delete https://bonus-assignment.herokuapp.com/api/actor/111

delete https://bonus-assignment.herokuapp.com/api/actor/321

post https://bonus-assignment.herokuapp.com/api/movie
body: {"id":"123","title": "Blade Runner"}


post https://bonus-assignment.herokuapp.com/api/movie
body: {"id":"234","title": "La La Land"}

post https://bonus-assignment.herokuapp.com/api/actor/123/movie/123

post https://bonus-assignment.herokuapp.com/api/actor/234/movie/123

post https://bonus-assignment.herokuapp.com/api/actor/234/movie/234

get https://bonus-assignment.herokuapp.com/api/actor/234/movie

get https://bonus-assignment.herokuapp.com/api/movie/123/actor

delete https://bonus-assignment.herokuapp.com/api/actor/123/movie/123

delete https://bonus-assignment.herokuapp.com/api/actor/123/movie








