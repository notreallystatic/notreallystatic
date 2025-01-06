import { Work, SocialMedia } from "@/types";

export const skillsIconsMap: Record<string, string> = {
	nodejs: "devicon-nodejs-plain-wordmark colored",
	express: "devicon-express-original-wordmark colored",
	mongodb: "devicon-mongodb-plain-wordmark colored",
	rabbitmq: "devicon-rabbitmq-line colored",
	elasticsearch: "devicon-elasticsearch-plain-wordmark colored",
	docker: "devicon-docker-plain-wordmark colored",
	kubernetes: "devicon-kubernetes-plain-wordmark colored",
	typescript: "devicon-typescript-plain colored",
	javascript: "devicon-javascript-plain colored",
	agile: "devicon-agile-plain colored",
	postgres: "devicon-postgresql-plain-wordmark colored",
	redis: "devicon-redis-plain-wordmark colored",
	golang: "devicon-go-plain colored",
	mysql: "devicon-mysql-plain-wordmark colored",
	mqtt: "devicon-mqtt-plain-wordmark colored",
	react: "devicon-react-original-wordmark colored",
	html: "devicon-html5-plain-wordmark colored",
	css: "devicon-css3-plain-wordmark colored",
	redux: "devicon-redux-original colored",
};

export const workHistoryInfoList: Array<Work> = [
	{
		company: "Yellow AI",
		url: "https://yellow.ai",
		role: "Software Development Engineer",
		time: "June 2022 - July 2024",
		description: [
			"Implemented an authentication sequence in the bot platform to prompt identity verification for unrecognized users prior to proceeding.",
			"Engineered a new node to create an inventory update pipeline for customer bot tables, enabling real-time product displays for end users and successfully tested with up to 200,000 products per bot.",
			"Developed a testing module for bot validation, allowing users to input utterances and FAQs to verify correct bot flow activation, significantly decreasing bot testing time.",
			"Refactored the event hub and implemented an event processing pipeline with RabbitMQ. Integrated visualization and alerts using Prometheus Query Language.",
			"Added version history for the prompts in various nodes. Enhanced internal logging and provided bot developers with access through S3 with up to one-hour precision.",
			"Resolved multiple bugs and optimized various nodes while on on-call duty.",
		],
		skills: [
			"nodejs",
			"express",
			"mongodb",
			"rabbitmq",
			"elasticsearch",
			"docker",
			"kubernetes",
			"typescript",
			"javascript",
			"agile",
			"postgres",
			"redis",
		],
	},
	{
		company: "Park+",
		url: "https://parkplus.io",
		role: "Software Development Engineer",
		time: "Sept 2021 - June 2022",
		description: [
			"Refactored a Django-based Parking Management System to Golang, overseeing the full development lifecycle and maintaining sole codebase ownership.",
			"Enhanced vehicle ingress/egress efficiency via RFID and Fastag integration, achieving sub-1-second processing.",
			"Engineered a flexible system architecture for site-specific customization, including Fastag billing options and access control by vehicle type.",
			"Created an API module to enable parking management via POS devices.",
		],
		skills: ["golang", "redis", "docker", "mysql", "mongodb", "mqtt"],
	},
	{
		company: "Marktine",
		url: "https://marktine.com",
		role: "Software Development Engineer Intern",
		time: "May 2020 - Aug 2020",
		description: [
			"Worked on React Js and with the team, transformed a web-app into a fully fledged react-app.",
			"Create core components and pages for the app.",
		],
		skills: ["javascript", "html", "css", "react", "redux"],
	},
];

export const socialMediaHandles: Array<SocialMedia> = [
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/notreallystatic/",
		icon: "fa-brands fa-linkedin",
	},
	{
		name: "Github",
		url: "https://github.com/notreallystatic",
		icon: "fa-brands fa-github",
	},
	{
		name: "Twitter",
		url: "https://twitter.com/notreallystatic",
		icon: "fa-brands fa-twitter",
	},
	{
		name: "Strava",
		url: "https://www.strava.com/athletes/notreallystatic",
		icon: "fa-brands fa-strava",
	},
];
