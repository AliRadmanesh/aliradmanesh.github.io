export default function Hero() {
    return (
        <div className="mt-12 flex items-center justify-center px-12 py-4 h-[calc(100vh-72px-3rem)]">
            <div className="flex flex-col gap-8 mr-8">
                {/* left */}
                <h1 className="uppercase text-4xl font-semibold max-w-xl leading-normal">
                    <span className="block">{"Hey There, I'm Ali!"}</span>
                    <span>{"An experienced frontend developer from Iran."}</span>
                </h1>
                <div className="flex gap-4">
                    <button className="bg-transparent border-2 border-black font-semibold py-2 px-8 rounded-full">{"See my portfolio"}</button>
                    <button className="bg-primary font-semibold py-2 px-8 rounded-full">{"Download My CV"}</button>
                </div>
            </div>
            <div>
                {/* right image section */}
                <img className="w-72 object-contain rounded-full" src="/ali-radmanesh-avatar.jpg" alt="Ali Radmanesh" />
            </div>
        </div>
    );
}
