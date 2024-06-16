import { portfolios } from "@/data/portfolios";

export default function Portfolios(){
    return (
        <div className="mb-12 px-12 py-4 mt-8">
            <h2 className="text-4xl font-semibold text-center">{"Portfolios."}</h2>
            <h3 className="text-xl font-medium text-center mt-4">{"My best projects which I'm proud of!"}</h3>

            <div className="grid grid-cols-3 gap-4 mt-12">
                {
                    portfolios.map((portfolio, idx) => {
                        return (
                            <div key={idx} className="flex flex-col justify-center gap-6 text-xl font-medium border-2 border-black p-4 rounded-md text-left">
                                <span className="text-2xl">
                                    {portfolio.title}
                                    <span className="ml-2 text-sm">{`(${portfolio.type})`}</span>
                                </span>
                                <span className="font-light text-sm"><span className="font-bold">Tech Stack:</span> {portfolio.stack}</span>
                                <span className="font-light">{portfolio.text}</span>
                                <button className="bg-black text-white py-2 px-8 rounded-full">{"Show details"}</button>
                            </div>
                        );
                    })
                }
            </div>
            
        </div>
    );
}
