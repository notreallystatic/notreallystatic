import { workHistoryInfoList } from "../constants";
import { WorkCard } from "./workCard";

export function WorkHistory() {
	return (
		<div id="work" className="col-span-12 scroll-offset">
			<div className="grid grid-cols-12">
				<div className="col-span-1">
					<div className="w-1 rounded-md bg-foreground-200 h-full md:left-3/4 relative"></div>
				</div>
				<div className="col-span-11 grid grid-flow-row space-y-5">
					{workHistoryInfoList.map((jobObject, index) => (
						<WorkCard jobObject={jobObject} key={index} />
					))}
				</div>
			</div>
		</div>
	);
}
