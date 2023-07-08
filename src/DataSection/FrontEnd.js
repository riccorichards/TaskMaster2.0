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
		"children": ["Static Typing", "Type Annotations", "Type Inference", "Interfaces", "Classes", "Generics", "Enums", "Modules and Namespaces"]
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
			"children": ["Basic Auth", "JWT", "OAth, SSO", "Session Auth"]
		},
		{
			"name": "progressive",
			"children": ["Storage", "Web Sockets", "Server Sent Events", "Service Workers", "Location", "Notifications", "Device Orientation", "Payments", "Credentials"]
		},
		{
			"name": "SSR(Server Side Rendering)",
			"children": ["Remix", "Next.js"]
		},
		{
			"name": "Static Site Generators",
		"children": ["Eleventy", "Astro"]
		},
		{
			"name": "GraphQL",
		"children": ["Apollo", "Relay Modern"]
		},
	]
}

export default FrontEndData;