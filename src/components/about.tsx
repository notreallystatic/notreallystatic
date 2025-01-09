import Image from "next/image";
import profilePic from "../../public/images/picture.jpeg";

const HighlightSection = (text: string) => {
	return <span className="text-orange-600 italic">{text}</span>;
};

export default function About() {
	return (
		<div className="col-span-12">
			<div className="grid grid-cols-12 my-5 md:my-20">
				<div className="col-span-12 md:col-span-6 p-1 my-auto">
					<div className="flex justify-center">
						<Image
							src={profilePic}
							alt="Sachin Kumar"
							className="rounded-[50%] overflow-hidden object-cover"
							width={215}
							height={215}
						/>
					</div>
					<div className="text-8xl text-center">
						<p>Sachin</p>
						<p>Kumar</p>
					</div>
				</div>

				<div className="col-span-12 md:col-span-6 p-2 md:p-6 font-medium leading-6 text-justify my-auto">
					<p className="m-1">
						<span className="text-3xl">👋</span>&nbsp;Hello!
					</p>
					<p className="m-2">
						&nbsp;&nbsp;
						<span className="text-3xl">🚀</span>&nbsp;I’m a developer on a
						mission—whether it’s wrangling backend beasts, occasionally dabbling
						in frontend sorcery, or speaking fluent {HighlightSection("MERN ")}
						and {HighlightSection("Golang")}. With over{" "}
						<span className="italic text-orange-600">
							3 years of experience
						</span>
						, I focus on building systems that are practical and efficient.
						Databases? I enjoy fine-tuning them to keep things running smoothly.
						And when it comes to solving problems, I approach each challenge
						with curiosity and persistence.
					</p>
					<p className="m-4 text-prettify">
						&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<span className="text-3xl">🧙‍♂️</span>&nbsp; Lately, I’ve been
						tiptoeing into the mysterious land of{" "}
						{HighlightSection("Data Science")} at{" "}
						{HighlightSection("University of Konstanz, Germany")}. Am I a
						natural fit, or will I retreat back to my backend kingdom? Only time
						(and a lot of Python) will tell.
					</p>
					<p className="m-2">
						<span className="text-3xl">🌟</span>
						&nbsp;When I’m not buried in code, you might spot me running like
						I’m late for a meeting, watching birds and marveling at their
						quirks, or disappearing into a book so good it makes me forget to
						deploy. Let’s connect and create something so incredible even our
						future selves would high-five us for it!
					</p>
				</div>
			</div>
		</div>
	);
}
