import { workHistoryInfoList } from "../constants";
import { WorkCard } from "./workCard";

export function WorkHistory() {
	return (
		<div className="debug col-span-12">
			<div className="grid grid-cols-12">
				<div className="debug col-span-1">
					<div className="w-1 rounded-md bg-foreground-200 h-full md:left-3/4 relative"></div>
				</div>
				<div className="debug col-span-11 grid grid-flow-row space-y-5">
					{workHistoryInfoList.map((jobObject, index) => (
						<WorkCard jobObject={jobObject} key={index} />
					))}
				</div>
			</div>
		</div>
	);
}
