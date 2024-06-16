// icons
import { RiStarSFill } from "react-icons/ri";

export default function Banner() {
    return (
        <div className="bg-black text-white flex gap-4 text-lg font-medium uppercase py-8 px-4">
            <div className="flex gap-4 items-center "><RiStarSFill color="#F8D06B" /><span>{"Front-End Development"}</span></div>
            <div className="flex gap-4 items-center "><RiStarSFill color="#F8D06B" /><span>{"Mobile App Development"}</span></div>
            <div className="flex gap-4 items-center "><RiStarSFill color="#F8D06B" /><span>{`Fast Prototyping`}</span></div>
            <div className="flex gap-4 items-center "><RiStarSFill color="#F8D06B" /><span>{`Documentation`}</span></div>
        </div>
    );
}
