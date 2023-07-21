const FrontEndData = {
	"name": "Front-end",
	"children": [
		{ "name": "Internet" },
		{ "name": "HTML 5" },
		{
			"name": "CSS",
			"children": [
				{ "name": "Sass" },
				{ "name": "Less" },
				{ "name": "Bootstrap" },
				{
					"name": "Responsive Design",
					"children": [
						{ "name": "Flex-box" },
						{ "name": "Grid" },
						{ "name": "Media Query" },
						{ "name": "First Mobile" },
					]
				},
				{
					"name": "Modern css",
					"children": [
						{ "name": "CSS Moduls" },
						{ "name": "Styled Components" },
						{ "name": "Motion" },
					]
				}
			]
		},
		{
			"name": "JavaScript",
			"children": [
				{
					"name": "Js Basic",
					"children": [
						{ "name": "Syntax" },
						{ "name": "DOM manipulation" },
						{ "name": "Es6+" },
						{ "name": "Ajax/API" },
					]
				},
				{
					"name": "Frameworks",
					"children": [
						{ "name": "React" },
						{ "name": "Angular" },
						{ "name": "Vue" },
						{ "name": "Svelte" },
						{ "name": "Solid js" },
					]
				},
			]
		},
		{ "name": "GitHub" },
		{
			"name": "TypeScript",
			"children": [
				{"name": "Static Typing"},
				{"name": "Type Annotations"},
				{"name": "Type Inference"},
				{"name": "Interfaces"},
				{"name": "Classes"},
				{"name": "Generics"},
				{"name": "Enums"},
				{"name": "Modules and Namespaces"}
			]
		},
		{
			"name": "Package Managers",
			"children": [
				{ "name": "npm" },
				{ "name": "yarn" },
			]
		},
		{
			"name": "Build Tools",
			"children": [
				{ "name": "Vite" },
				{ "name": "Esbuild" },
				{ "name": "Webpack" },
			]
		},
		{
			"name": "Testing",
			"children": [
				{ "name": "Jest" },
				{ "name": "React-testing-library" },
				{ "name": "Cypress" },
				{ "name": "Playwright" },
			]
		},
		{
			"name": "Authentication",
			"children": [
				{ "name": "Basic Auth" },
				{ "name": "JWT" },
				{ "name": "OAth" },
				{ "name": "SSO" },
				{ "name": "Session Auth" }
			]
		},
		{
			"name": "progressive",
			"children": [
				{"name": "Storage"},
				{"name": "Web Sockets"},
				{"name": "Server Sent Events"},
				{"name": "Service Workers"},
				{"name": "Location"},
				{"name": "Notifications"},
				{"name": "Device Orientation"},
				{"name": "Payments"},
				{"name": "Credentials"}
			]
		},
		{
			"name": "SSR(Server Side Rendering)",
			"children": [
				{"name": "Remix"},
				{"name": "Next.js"}
			]
		},
		{
			"name": "Static Site Generators",
			"children": [
				{"name": "Eleventy"},
				{"name": "Astro"}
			]
		},
		{
			"name": "GraphQL",
			"children": [
				{"name": "Apollo"},
				{"name": "Relay Modern"}
			]
		},
	]
}

export default FrontEndData;