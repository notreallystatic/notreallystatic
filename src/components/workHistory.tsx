import { workHistoryInfoList } from "../constants";

export function WorkHistory() {
	return (
		<div id="work" className="col-span-12 scroll-offset mx-0 md:mx-5">
			<div className="">
				<h1 className="text-5xl font-bold">Work History</h1>
				<p className="text-lg font-light">
					Here are some of the places I&apos;ve worked at
				</p>
			</div>
			<div className="grid grid-flow-row mt-3 space-y-10">
				{workHistoryInfoList.map((jobObject, index) => (
					<div
						className={
							(index % 2 !== 1 ? "border-l-2" : "border-r-2") +
							" border-background-500 px-4 my-3 mx-1"
						}
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
						{/* TODO: Add icons for the tech-stack */}
						<ul className="list-disc p-3">
							{jobObject.description.map((desc, index) => (
								<li key={index}>{desc}</li>
							))}
						</ul>
						<i className="text-sm opacity-80">
							Stack: {jobObject.skills.join(", ")}
						</i>
					</div>
				))}
			</div>
		</div>
	);
}
