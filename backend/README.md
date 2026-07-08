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

	expressjs - light weight web framework based on nodejs, make the routing, communication easier and faster

		Like when we create a server with expressjs we can eaily and fastly create server without proving much information like (header, type, body etc.)
	
	
	installed express for the web server, listen to custom port and create different route 
			createApp.use("/boss",(req, res) => {res.send("Hello from BOSS server");});
				here anything comes after the /boss/new, /boss/11 it will execute wit work as special charcter, here squenence of code is matter

				.use() it will access by all http method if the route matches

				if we use route as "/" and it is placed on top everytime we get this route response for all route because it matched with all routes

	As we want to call/test the http method and route we can use postman but here i am using thunder client extension for the vs code.

	## Routes 

		By default on browser it only support GET method
		There are different routes with special regex, Wildcards in routing handler like ?, +, * etc   



	
	
		



