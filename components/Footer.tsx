// icons
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer(){
    const socials = [
        {
            icon: <MdEmail color="#333333" />,
            text: "Email",
            link: "mailto:ali.radmanesh1995@gmail.com"
        },
        {
            icon: <FaLinkedin color="#333333" />,
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/ali-radmanesh/"
        },
        {
            icon: <FaGithubAlt color="#333333" />,
            text: "Github",
            link: "https://github.com/AliRadmanesh"
        },
        {
            icon: <FaStackOverflow color="#333333" />,
            text: "StackOverflow",
            link: "https://stackoverflow.com/users/4579834/ali-radmanesh"
        },
    ];

    return (
        <div className="mt-12 p-16 bg-black text-white flex justify-center gap-32 items-center">
            <span className="text-8xl font-bold">{"A.R"}</span>
            <div className="grid grid-cols-2 gap-10">
                {
                    socials.map((social, idx) => {
                        return (
                            <div className="flex items-center gap-4" key={idx}>
                                <span className="bg-white text-xl p-2 rounded-full">{social.icon}</span>
                                <a href={social.link} target="_blank">{social.text}</a>
                            </div>
                        );
                    })
                }

            </div>
        </div>
    );
}
