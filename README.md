# nodejs - Run JavaScript Everywhere

	- It is runtime environment of JS build on V8, run JS outside browser - 2009 developed by ryan dahl
	- It is cross platform (run on all platform), open-source (maintained by openjs community)
	- It is based on V8 Engine (Same used in Chrome browser) + libuv (Asynchronous I/0 (non blocking I/0), Event driven architecture, Thread pool + etc) + more super powers (APIs and all).

# JS run on Server

	Server - It is computer with some configuration and placed remotely to handle some client request. 

	Intially JS was only run on browser - Client side only 
	Now JS can run on any machine - JS is everywhere in Web, desktop, mobile, Watch, TV, any device where we can integrated js engine.

	V8 code is most of code written in c++ only.
	V8 uses 
	
		ECMAScript (Standard which is followed by scripting language like JS) managed by TC39 and 
		
		WebAssembly (low-level binary instruction format that allows developers to run high-performance applications directly in web browsers at near-native speeds. It acts as a portable compilation target for languages like C, C++, and Rust, allowing you to bring heavy processing to the web).

	V8 can be emebedded on any c++ application. - It is invention of node JS

# Souce code

	Most of programming language uses c++/c code for communicating the OS, High level language (JS) it is compile into machine level code which support OS. 

	- Level of layer for JS code	
	
	JS - HIgh level code (C++ or C) - Low level code [Machine code - Assembly code] - Computer (Binary code 1010101.. )

# Install and Verify nodeJs

	- Download nodejs - Choose OS, Version

		- nvm - node verion manager (with command)
		- prebuild installer ...

		- We have installed node via docker we need to start docker desktop and create a container

	- Verify

		- node -v = version of node else need to install node
		- npm -v - it is package manager got installed automatically 


# Node REPL (READ EVALUATE, PRINT, LOOP)

	It is given a program prompt we can run the nodejs code something like console of browser.
	type node and try the code like simple calculation and all

# require and module.exports is use to execute multiple module file from single entry points

	- CJS - module.exports and require, by default in nodeJS - older way - Synchronous - Non strict mode

	- MJS - import and export - by default used in react, angular, next js - newer way - ASynchronous - Non strict mode

# 	