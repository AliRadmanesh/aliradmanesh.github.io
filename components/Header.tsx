export default function Header() {
    return (
        <div className="flex justify-between items-center px-12 py-4">
            <div>
                {/* logo */}
                <span className="text-4xl font-bold">{"A.R"}</span>
            </div>
            <div>
                {/* CTA */}
                <button className="bg-primary font-semibold py-2 px-8 rounded-full">{"Let's Talk."}</button>
            </div>
        </div>
    );
}
