import { Work } from "../types";

export function WorkCard({ jobObject }: { jobObject: Work }) {
	return (
		<div className="debug box-border shadow-md shadow-background-400 hover:shadow-background-600 rounded-md p-6">
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
			<ul className="list-disc p-3">
				{jobObject.description.map((desc, index) => (
					<li key={index}>{desc}</li>
				))}
			</ul>
			<i className="text-sm opacity-80">Stack: {jobObject.skills.join(", ")}</i>
		</div>
	);
}
