const BackEnd = {
	"name": "BackEnd", "children": [
		{
			"name": "Internet",
			"children": [
				{ "name": "Internet" },
				{ "name": "HTTP" },
				{ "name": "Browsers" },
				{ "name": "DNS" },
				{ "name": "Domain" },
				{ "name": "Hosting" },
			],
		},
		{
			"name": "Version Control Systms",
			"children": [{ "name": "Git" }]
		},
		{
			"name": "Repo hosting services",
			"children": [
				{ "name": "GitHub" },
				{ "name": "GitLab" },
				{ "name": "Gitbucket" },
			]
		},
		{
			"name": "node Js",
			"children": [
				{
					"name": "Introduction",
					"children": [
						{ "name": "what is node" },
						{ "name": "why use node" },
						{ "name": "history of node" },
						{ "name": "node vs browser" },
						{ "name": "running code" },
					]
				},
				{
					"name": "Modules",
					"children": [
						{ "name": "Common js" },
						{ "name": "ESM" },
						{ "name": "Custom Modules" },
						{ "name": "[global] Keyword" },
					]
				},
				{
					"name": "npm",
					"children": [
						{ "name": "i global & local" },
						{ "name": "Updating Packages" },
						{ "name": "Running Scripts" },
					]
				},
				{
					"name": "Error Handler",
					"children": [
						{ "name": "Uncaught Exceptions" },
						{
							"name": "Types of Errors",
							"children": [
								{ "name": "JavaScript Error" },
								{ "name": "System Errors" },
								{ "name": "User Specified Errors" },
								{ "name": "AsserTion Errors" },
							]
						},
						{ "name": "Handling Async Errors" },
						{ "name": "Call Stack & Stack Trace" },
						{ "name": "Using Debugger" },
					]
				},
				{
					"name": "Asynchronouse Programming",
					"children": [
						{ "name": "Promises" },
						{ "name": "async/await" },
						{ "name": "CallBacks" },
						{ "name": "setTimeout" },
						{ "name": "setInterval" },
						{ "name": "setImmediate" },
						{ "name": "process.nextTick" },
					]
				},
				{
					"name": "working with files",
					"children": [
						{ "name": "glob" },
						{ "name": "globby" },
						{ "name": "fs-extra" },
						{ "name": "chokidar" },
						{ "name": "__dirname" },
						{ "name": "__filename" },
					]
				},
				{
					"name": "Command Line Apps",
					"children": [
						{ "name": "Exitting & Exit Codes" },
						{
							"name": "Environment Variables",
							"children": [
								{ "name": "dotenv" },
								{ "name": "process.env" },
							]
						},
						{
							"name": "Command Line Args",
							"children": [
								{ "name": "process.argv" },
								{ "name": "Commander.js Package" },
							]
						},
						{
							"name": "Printing Output",
							"children": [
								{ "name": "process.stdout" },
								{ "name": "process.stderr" },
								{ "name": "chalk package" },
								{ "name": "figlet package" },
								{ "name": "cli-progress package" },
							]
						},
						{
							"name": "Taking Input",
							"children": [
								{ "name": "process.stdin" },
								{ "name": "Prompts package" },
								{ "name": "Inquirer package" },
							]
						}
					]
				},
				{
					"name": "Working with APIs",
					"children": [
						{
							"name": "HTTP server",
							"children": [
								{ "name": "fastify framework" },
								{ "name": "Nestjs framework" },
								{ "name": "Express framework" },
								{ "name": "http module" },
							]
						},
						{
							"name": "Making API Calls",
							"children": [
								{ "name": "http module" },
								{ "name": "axios package" },
								{ "name": "unfetch package" },
								{ "name": "got package" },
							]
						},
						{
							"name": "Authentication",
							"children": [
								{ "name": "jsonwebtoken package" },
								{ "name": "Passport.js package" },
							]
						},
					]
				},
				{
					"name": "Keeping Application Running",
					"children": [{ "name": "nodemon package" }]
				},
				{
					"name": "Templation Engines",
					"children": [
						{ "name": "ejs" },
						{ "name": "pug" },
						{ "name": "marko" },
					]
				},
				{
					"name": "working with databases",
					"children": [
						{
							"name": "Document",
							"children": [
								{ "name": "Mongoose package" },
								{ "name": "Prosma package" },
								{ "name": "Native Drives" },
							]
						},
						{
							"name": "Relational",
							"children": [
								{ "name": "Knex package" },
								{ "name": "TypeORM package" },
								{ "name": "Sequelize package" },
								{ "name": "Prisma package" },
								{ "name": "native Drivers" },
							]
						}
					]
				},
				{
					"name": "Testing",
					"children": [
						{ "name": "Jest" },
						{ "name": "Mocha" },
						{ "name": "Cypress" },
					]
				},
				{
					"name": "Logging",
					"children": [
						{ "name": "Morgan" },
						{ "name": "Winston" },
					]
				},
				{
					"name": "Keeping App Running",
					"children": [
						{ "name": "pm2 Package" },
						{ "name": "forever Package" },
						{ "name": "nohup" },
					]
				},
				{
					"name": "Threads",
					"children": [
						{ "name": "Child Process" },
						{ "name": "Cluster" },
						{ "name": "Worker Threads" },
					]
				},
				{ "name": "Streans" },
				{
					"name": "More Debugging",
					"children": [
						{ "name": "Memory Leaks" },
						{ "name": "node --inspect" },
						{ "name": "Using APM" },
					]
				},
				{
					"name": "Common Built-in Modules",
					"children": [
						{ "name": "fs" },
						{ "name": "os" },
						{ "name": "net" },
						{ "name": "path" },
						{ "name": "url" },
						{ "name": "events" },
						{ "name": "http" },
						{ "name": "console" },
						{ "name": "assert" },
						{ "name": "process" },
						{ "name": "cluster" },
						{ "name": "perf_hooks" },
						{ "name": "crypto" },
						{ "name": "buffer" },
					]
				}
			]
		},
		{
			"name": "OS and General Knowledge",
			"children": [
				{
					"name": "basic Terminal Commands",
					"children": [
						{ "name": "grep" },
						{ "name": "awk" },
						{ "name": "sed" },
						{ "name": "lsof" },
						{ "name": "curl" },
						{ "name": "wget" },
						{ "name": "tail" },
						{ "name": "head" },
						{ "name": "less" },
						{ "name": "find" },
						{ "name": "ssh" },
						{ "name": "kill" },
						{ "name": "dig" },
					]
				},
				{ "name": "Terminal Usage" },
				{
					"name": "POSIX Basics",
					"children": [
						{ "name": "stdin" },
						{ "name": "stdout" },
						{ "name": "stderr" },
						{ "name": "pipes" },
					]
				},
				{
					"name": "Operating Systems Knowledge",
					"children": [
						{ "name": "How OSs work in General" },
						{ "name": "Memory Management" },
						{ "name": "Interprocess Communication" },
						{ "name": "I/O Management" },
						{ "name": "Basic Networking Concepts" },
						{ "name": "Threads and Concurrency" },
						{ "name": "Process management" },
					]
				},
				{
					"name": "Relational Databases",
					"children": [
						{ "name": "PostgresSQL" },
						{ "name": "MySQL" },
						{ "name": "MariaDB" },
						{ "name": "MS SQL" },
						{ "name": "Oracle" },
					]
				},
				{
					"name": "NoSQL Databases",
					"children": [
						{
							"name": "Document DBs",
							"children": [
								{ "name": "MongoDB" },
								{ "name": "CouchDB" },
							]
						},
						{
							"name": "Time Series",
							"children": [
								{ "name": "InfluxDB" },
								{ "name": "TimeScale" },
							]
						},
						{
							"name": "Realtime",
							"children": [
								{ "name": "Firebase" },
								{ "name": "RethinkDB" },
							]
						},
						{
							"name": "Column DBs",
							"children": [
								{ "name": "Cassandra" },
								{ "name": "HBase" },
							]
						},
						{
							"name": "Key-Value",
							"children": [
								{ "name": "Redis" },
								{ "name": "DynamoDB" },
							]
						},
						{
							"name": "Graph DBs",
							"children": [
								{ "name": "Neo4j" },
							]
						},
					]
				},
			]
		},
		{
			"name": "More about Databases",
			"children": [
				{ "name": "ORMs" },
				{ "name": "ACID" },
				{ "name": "Transactions" },
				{ "name": "N+1 Problems" },
				{ "name": "Normalization" },
				{ "name": "failure Modes" },
				{ "name": "Profilinf Perfor" },
			]
		},
		
	],
}

export default BackEnd;