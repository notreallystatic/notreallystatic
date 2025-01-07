import { WorkHistory } from "@/components/workHistory";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import About from "@/components/about";

export default function Home() {
	return (
		<>
			<div className="grid grid-cols-12">
				<About />
				<WorkHistory />
				<Contact />
				{/* <div className="col-span-12">
					<div className="px-4">
						<div className="grid grid-cols-12 bg-white m-5 gap-5 p-5">
							<div className="bg-background-100 col-span-3 m-2 p-4">bg-100</div>
							<div className="bg-background-200 col-span-3 m-2 p-4">bg-200</div>
							<div className="bg-background-300 col-span-3 m-2 p-4">bg-300</div>
							<div className="bg-background-400 col-span-3 m-2 p-4">bg-400</div>
							<div className="bg-background-500 col-span-3 m-2 p-4">bg-500</div>
							<div className="bg-background-600 col-span-3 m-2 p-4">bg-600</div>
							<div className="bg-background-700 col-span-3 m-2 p-4">bg-700</div>
							<div className="bg-background-800 col-span-3 m-2 p-4">bg-800</div>
							<div className="bg-foreground-100 col-span-3 m-2 p-4">fg-100</div>
							<div className="bg-foreground-200 col-span-3 m-2 p-4">fg-200</div>
							<div className="bg-foreground-300 col-span-3 m-2 p-4">fg-300</div>
							<div className="bg-foreground-400 col-span-3 m-2 p-4">fg-400</div>
							<div className="bg-foreground-500 col-span-3 m-2 p-4">fg-500</div>
							<div className="bg-foreground-600 col-span-3 m-2 p-4">fg-600</div>
							<div className="bg-foreground-700 col-span-3 m-2 p-4">fg-700</div>
							<div className="bg-foreground-800 col-span-3 m-2 p-4">fg-800</div>
						</div>
					</div>
				</div> */}
			</div>
			<Footer />
		</>
	);
}
