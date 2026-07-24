# Event-driven programing

	### Event - Any action alert (any user actions, system notification)
	### Event Emitter - The manage the event and trigger specific action

	
	## Buffer class 

		reading and writing data in form of binary format for communication

# nodejs - DevTinder projects

	### Tech stack - NodeJS (Express JS), MongoDB and React
	It is kind of Tinder app make connection with developer

	SDLC (Software Development Life Cycle)

		Waterfall model (Requirements (PMs + Designer) -> Design (HLD, LLD) -> Development -> Testing -> Deployment (Developer + Devops) -> Maintaince)

	Monolithic - One application for all services (Backend, frontend, email, Anlytics etc)
	Microservices - multiple small service (it is project it do one job like FE, BE, Notifications etc.)	

		Dev speed - faster in micro services
		code repo - easy to manage in micro services
		scalability - easier to manage and scaling in micro services
		deployment - small change deployment will be easy in micro services
		Tech stack - we can use different tech stack in microservices
		Infra cost - more cost in microservices
		Debugging - easy debugging in monolothic
		Rewamps - easy in micro service
		maintainence - easy in microservice
		ownership - small team can manage in the micro
		Testing - writing test case will be difficult in micro services
		Fault isolation - small error will affect single microservice application 
		complexity - more complex in monolithic

	Planning

		- create an account	
		- login 
		- update your profile
		- feed page - explore 
		- send connection request 
		- see our matches 
		- see request which we have send friend

	Backend - NodeJS, ExpressJS, MongoDB
	Frontend - React

	# DB Design 

		customers collection
		
			id, first_name, last_name, email, password, dob, gender, created_at, updated_at

		connection_relations collection

			id, status, sender, receiver, created_at, updated_at

	# API Design

		RestAPI

			GET 	/users 
			GET 	/user/<id>
			POST	/login
			POST    /signup
			POST	/profile
			PATCH	/profile
			DELETE 	/profile
			POST	/sendRequest
			POST	/reviewRequest
			GET		/request
			GET		/connections

## Intialized project 

	version and packages - 2.3.1, here 2 is major (need to check before upgrade), 3 is minor change (backword compatible) and 1 will be small changes (patch change)

	~ - tilda - limit to patch change, if version ~4.5.2 => 4.5.X
	^ - carat - project will auto update 4.X.X if we are using 4.X.X

	node_modules - when we install any available library from npm it got installed in this folder. (physical building constructed from blueprint of package-lock.json)
	package.json - defined the meta data of project, create via npm init, main depedecy
	package-lock.json - lock down exact version of packages, auto generated on npm install, sub nested depedency

		Sometime people not push the package-lock.json but we need to push it, As the file is used to maintain exact version of packaged with it is all depedency and it is needed for making standard across project.

	> npm init - Intialised the project with some configuration details like name, description, version, author etc
	
## Node modules

	Every time on change of src/app.js we need to restart the server to overcome this process using nodemon package will keep watch on the file.

		> npm i -g nodemon // -g used to maintain package on system level instead of project level 
		> nodemon -L src/app.js // using -L as the docker container unable to track the filesystem events often

	expressjs - light weight web framework based on nodejs (it is bulit top of nodejs, whatever application support nodejs there we can run express), make the routing, communication easier and faster

		Like when we create a server with expressjs we can eaily and fastly create server without proving much information like (header, type, body etc.)

		express can do manything like - Routing, Middleware, Request/Response helpers, Error handling, static file serving
	
	
	installed express for the web server, listen to custom port and create different route

			app.use(()=>{}) // this will work for all the incoming request 
			createApp.use("/boss",(req, res) => {res.send("Hello from BOSS server");});
				here anything comes after the /boss/new, /boss/11 it will execute wit work as special charcter, here squenence of code is matter

				.use() it will access by all http method if the route matches

				if we use route as "/" and it is placed on top everytime we get this route response for all route because it matched with all routes

	As we want to call/test the http method and route we can use postman but here i am using thunder client extension for the vs code.

	## Routes 

		By default on browser it only support GET method
		There are different routes with special regex, Wildcards in routing handler like ?, +, * etc 

		If server dont send - res.send() the rquest will be continuous processing phase and it will stop on the server timeout, Always handle a request with appropriate return.

			res.send() and next() ordering play important a role

		Route handlers consist of 3 parameter like req, res and next (use to manget the multiple route handler for single route)

		.use - matched the paths as prefix and ignore the http method - /rahul (/rahul/new, /rahul/create, etc)
		.all - matches exact paths and applies to all http methods - /rahul (only /rahul not allowed /rahul/new) 
		.get, .post etc  - will match exact route like .all

		Middleware - when we create route to handle common authorization with login or token, logging and monitoring etc in route handle

			In middleware work as api gateway in the webserver as we can check act accordingly

		error handling - always use try and catch to handle the error gracefully also we can use the / route at the end for handling all the error grancefully

			use("/", (err, req, res, next) - order of the parameter matters, if only one parater will be treated as req, if 2 req and res, if 3 then req, res and next.

	For the mongodb we use mongoose npm library, it is standard, it give some boiler plate code

		Only listen server when database is connection sucessfully

	for reading a json data express given express-json package but now latest version support json in express library so no new package, for xml, html might be needed some parser.

	created all the html method and update the code accordingly
	Also added the try and catch module

## Concepts and Features

	JS Object -  JS data strcture, store and manipulate, key may or may not be in double quote, JSON.stringify() - convert JS object into JSON
	JSON - String format, used to exchange, key must be double quotes, JSON.parse() - converts JSON to JS object
	 
	Data sanitization and schema validation

		Existing moongoose validation and custom validation
		Also we can use validate library to check for email, url sanitize the data

	We can't add re.body directly for creating a dcoument we always need to sanitize the data

	Creating a password hash with bcrypt package and decrypt as well to compare the password while login

	----

	we can send cookie to the user 
		res.cookie(<NAME>, <VALUE>, <{OPTIONS}>);

	For reading the cookin we need package which is - cookie-parser

		appServer.use(cookieParser());
		// reading the data => req.cookies 

	creating (on login req) and verifyting (verifying the data) the jwttoken - we need to install jsonwebtoken

	- For every request i am verifying the jwttoken, instead of checking each request of jwttoken now we can create middleware for verifying each request

	Create a API LIST and now group them with express router, managing, testing easily, it will modular

	--

	Exploring devtinder

	To start we need to create a account (signup) 

	email - OTP
	mobile - OTP

	Name- Rahul Yadav
	Email - prefilled (already added above, not editable)
	Birthday - 19/06/1994
	Gender - Man
	checkbox - show my gender on my profile
	Inrested in - Women - options
	Looking for - Still figuring it out (list of options)
	upload 2 photos
	Interests - [interest] (list of predifed intrest)

	Sexual orientation - one option to choose (list of predefined options)

	Feth the all feed data - https://api.gotinder.com/v2/recs/core?l	
