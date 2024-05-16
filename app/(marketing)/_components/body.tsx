export const Body = () =>{
    return(
        <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                Why choose us
            </h1>
            <h3 className="text-sm sm:text-lg md:text-xl font-medium">
                By using Flowi you obtain true freedom. <br />
                No ads, no limitations, free forever!
            </h3>
            <div className="sm:md:max-w-lg md:max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
                lg:gap-x-[50px] py-10">
                    <div className="flex h-full w-full flex-col items-center lg:items-start md:gap-y-3 lg:gap-y-4">
                        <h2 className="text-l sm:text-xl md:text-2xl font-semibold ">
                            Work anytime, anywhere
                        </h2 >
                        <p className="lg:text-justify">
                            Keep important info handy - all your notes are
                            automaticly synced and stored on our servers.
                        </p>
                    </div>
                    <div className="flex h-full w-full flex-col items-center lg:items-start md:gap-y-3 lg:gap-y-4">
                        <h2 className="text-l sm:text-xl md:text-2xl font-semibold">
                            Expand possibilities
                        </h2>
                        <p className="lg:text-justify">
                            Explore new tools and make yournotes more
                            useful by adding text, images,audio etc.
                        </p>
                    </div>
                    <div className="flex h-full w-full flex-col items-center lg:items-start md:gap-y-3 lg:gap-y-4">
                        <h2 className="text-l sm:text-xl md:text-2xl font-semibold">
                            Organize your workflow
                        </h2>
                        <p className="lg:text-justify">
                            Bring your notes, tasks and schedules together
                            to get things done more easily.
                        </p>
                    </div>
                    <div className="flex h-full w-full flex-col items-center lg:items-start md:gap-y-3 lg:gap-y-4">
                        <h2 className="text-l sm:text-xl md:text-2xl font-semibold">
                            Zero Ads
                        </h2>
                        <p className="lg:text-justify">
                        Enjoy using Flowi for free without
                        any banners and distracting ads.
                        </p>
                    </div>
            </div>
        </div>
    )

}