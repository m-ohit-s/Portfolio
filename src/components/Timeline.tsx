function Timeline({ experiences }) {
    return (
        <section>
            <div className="mt-20 relative">

                {/* Vertical Line */}
                <div className="absolute left-7 top-0 h-full w-px bg-border" />

                {/* Timeline Content */}
                <div className="flex flex-col gap-20">

                    {experiences.map((item) => (
                        <div
                            key={item.period}
                            className="grid grid-cols-[120px_1fr] md:grid-cols-[300px_1fr] gap-10"
                        >

                            {/* Left Side */}
                            <div className="relative">

                                {/* Dot */}
                                <div
                                    className={`
                absolute left-5 top-1 h-4 w-4 rounded-full
                border-4 border-background
                ${item.active ? "bg-brand-primary" : "bg-primary"}
              `}
                                />

                                {/* Period */}
                                <p className="pl-16 text-sm tracking-[0.2em] uppercase opacity-60">
                                    {item.period}
                                </p>
                            </div>

                            {/* Right Side */}
                            <div>
                                <p className="text-xl md:text-xl font-bold">
                                    {item.title}
                                </p>

                                <p className="mt-4 text-md opacity-70">
                                    {item.company}
                                </p>

                                <p className="mt-2 leading-9 text-md opacity-70 max-w-4xl">
                                    {item.description}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Timeline;