import Image from "next/image";

export const Heroes = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[1020px]
            sm:h-[250px] md:w-[1020px] md:h-[250px]">
                <Image 
                    src ="/marketing.png"
                    fill
                    className="object-contain"
                    alt="Marketing"

                />
                </div>
            </div>
        </div>
    )
}