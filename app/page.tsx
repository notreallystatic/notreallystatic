import { WorkHistory } from "@/components/workHistory";

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
				<WorkHistory />
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
					</div>
				</div>
			</div>
		</>
	);
}
