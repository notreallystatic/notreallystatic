import Link from "next/link";

const workHistoryInfoList: Array<{
	company: string;
	url: string;
	role: string;
	time: string;
	description: string[];
	skills: string[];
}> = [
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
			"Node.js",
			"Express",
			"MongoDB",
			"RabbitMQ",
			"Elasticsearch",
			"Docker",
			"Kubernetes",
			"Typescript",
			"Javascript",
			"Agile",
			"Postgres",
			"Redis",
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
		skills: ["Golang", "Redis", "Docker", "MySQL", "MongoDB", "MQTT"],
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
		skills: ["React", "Javascript", "HTML", "CSS", "Redux"],
	},
];

export default function Home() {
	return (
		<>
			<div className="grid grid-cols-12 debug">
				<div className="debug col-span-12">
					<div className="grid grid-cols-12 my-0 md:my-20">
						<div className="col-span-12 md:col-span-6 debug p-1 md:p-6 text-8xl text-center my-auto">
							<p>Sachin</p>
							<p>Kumar</p>
							{/* <span className="text-8xl w-[100]">Sachin</span>
							<br />
							<span className="text-8xl">Kumar</span> */}
						</div>
						<div className="col-span-12 md:col-span-6 debug p-6 font-medium leading-6 text-justify">
							<p className="m-1">👋 Hi,</p>
							<p className="m-2">
								{" "}
								I’m a passionate developer(
								<i>mostly backend, sometimes frontend</i>) with 3+ years of
								experience specializing in the MERN stack and Golang. I love
								building efficient systems, optimizing databases, and solving
								complex problems. Currently, I’m expanding my skills in Data
								Science and exploring the potential of Machine Learning and AI.
							</p>
							<p className="m-2">
								When I’m not coding, you’ll find me running, watching birds, or
								diving into a good book. Let’s connect and build something
								amazing!
							</p>
						</div>
					</div>
				</div>
				<div className="debug col-span-12">
					<div className="grid grid-cols-12">
						<div className="debug col-span-1">
							<div className="w-1 rounded-md bg-foreground-200 h-full md:left-3/4 relative"></div>
						</div>
						<div className="debug col-span-11 grid grid-flow-row space-y-5">
							{workHistoryInfoList.map((jobObject, index) => (
								<>
									<div
										className="debug box-border shadow-md shadow-background-400 hover:shadow-background-600 rounded-md p-4"
										key={index}
									>
										<p>
											<span className="text-left w-2/4 inline-block text-3xl">
												<a href={jobObject.url}>{jobObject.company}</a>
												<hr className="w-1/2 bg-foreground-200 h-1" />
											</span>
											<span className="text-right w-2/4 inline-block text-xl">
												{" "}
												{jobObject.time}
											</span>
											<br />
											<span className="inline-block font-light text-lg">
												{" "}
												{jobObject.role}
											</span>
										</p>
										<ul className="list-disc p-2">
											{jobObject.description.map((desc, index) => (
												<li key={index}>{desc}</li>
											))}
										</ul>
										<div className="flex flex-wrap">
											{jobObject.skills.map((skill, index) => (
												<div
													key={index}
													className="m-1 p-2 bg-background-300 text-foreground-200 rounded-lg font-mono"
												>
													{skill}
												</div>
											))}
										</div>
									</div>
								</>
							))}
						</div>
					</div>
				</div>
				<div className="debug col-span-12">
					<div className="px-4">
						<div className="grid grid-cols-12 bg-white m-5 gap-5 p-5">
							<div className="bg-background-100 col-span-3 m-2 p-4 text-foreground-800">
								bg-100
							</div>
							<div className="bg-background-200 col-span-3 m-2 p-4 text-foreground-700">
								bg-200
							</div>
							<div className="bg-background-300 col-span-3 m-2 p-4 text-foreground-600">
								bg-300
							</div>
							<div className="bg-background-400 col-span-3 m-2 p-4 text-foreground-500">
								bg-400
							</div>
							<div className="bg-background-500 col-span-3 m-2 p-4 text-foreground-400">
								bg-500
							</div>
							<div className="bg-background-600 col-span-3 m-2 p-4 text-foreground-300">
								bg-600
							</div>
							<div className="bg-background-700 col-span-3 m-2 p-4 text-foreground-200">
								bg-700
							</div>
							<div className="bg-background-800 col-span-3 m-2 p-4 text-foreground-100">
								bg-800
							</div>
							<div className="bg-foreground-100 col-span-3 m-2 p-4 text-background-100">
								fg-100
							</div>
							<div className="bg-foreground-200 col-span-3 m-2 p-4 text-background-700">
								fg-200
							</div>
							<div className="bg-foreground-300 col-span-3 m-2 p-4 text-background-600">
								fg-300
							</div>
							<div className="bg-foreground-400 col-span-3 m-2 p-4 text-background-500">
								fg-400
							</div>
							<div className="bg-foreground-500 col-span-3 m-2 p-4 text-background-400">
								fg-500
							</div>
							<div className="bg-foreground-600 col-span-3 m-2 p-4 text-background-300">
								fg-600
							</div>
							<div className="bg-foreground-700 col-span-3 m-2 p-4 text-background-200">
								fg-700
							</div>
							<div className="bg-foreground-800 col-span-3 m-2 p-4 text-background-100">
								fg-800
							</div>
						</div>
						<Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link>
						<Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link> <Link href="/blogs">Blogs</Link>
						<br></br>
						<Link href="/about">About us</Link>
					</div>
				</div>
			</div>
		</>
	);
}
