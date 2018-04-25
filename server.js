const restify = require('restify');

const server = restify.createServer();

// LIST USERS MOCK
const users = [
	{
		id: "1",
		name: "Lucas Vilela",
		age: "20",
		job: "Programmer",
	},
	{
		id: "2",
		name: "Italo Johnny",
		age: "30",
		job: "Softwaare Development",
	}
];

// GET ALL USERS MOCK
function findAllUsers(req, res, next) {
	res.json([
		users,
	]);

	next();
}

// GET USER MOCK BY ID
function findUserById(req, res, next) {
	const user = users.find(user => user.id === req.params.id);
	res.send(200, user);
	next();
}

server.get('/users', findAllUsers);
server.get('/users/:id', findUserById);
//server.post('/users', createUser);
//server.delete('/users', deleteUser);
//server.update('/users', updateUser);
//server.patch('/users', patchUser);


server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});