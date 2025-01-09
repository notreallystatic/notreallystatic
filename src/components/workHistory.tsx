import { workHistoryInfoList, skillsIconsMap } from "../constants";

export function WorkHistory() {
	return (
		<div id="work" className="col-span-12 scroll-offset mx-0 md:mx-5">
			<div className="">
				<h1 className="text-5xl font-bold">Work History</h1>
				<p className="text-lg font-light">
					Here are some of the places I&apos;ve worked at
				</p>
			</div>
			<div className="grid grid-flow-row mt-3 space-y-14">
				{workHistoryInfoList.map((jobObject, index) => (
					<div
						className={
							(index % 2 !== 1 ? "border-l-2" : "border-r-2") +
							" border-background-500 px-4 my-1 mx-1"
						}
						key={index}
					>
						<p>
							<span className="text-left w-full md:w-2/4 inline-block text-3xl">
								<a
									href={jobObject.url}
									className="text-4xl font-bold"
									target="_blank"
								>
									{jobObject.company}
								</a>
								<span className="w-1/2 bg-foreground-800 h-[2px] block"></span>
							</span>
							<br className="block md:hidden" />
							<span className="text-left md:text-right w-full md:w-2/4 inline-block text-xl">
								{" "}
								{jobObject.time}
							</span>
							<br />
							<span className="inline-block font-light text-lg">
								{" "}
								{jobObject.role}
							</span>
						</p>
						<p className="my-1 text-pretty">{jobObject.intro}</p>
						<ul className="list-disc p-3">
							{jobObject.description.map((desc, index) => (
								<li key={index}>{desc}</li>
							))}
						</ul>
						<div className="flex flex-wrap justify-start">
							{jobObject.skills.map((skill, index) => (
								<i
									className={
										"text-5xl md:text-7xl p-3 opacity-80 my-2 inline-block " +
										skillsIconsMap[skill]
									}
									key={index}
								/>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
