import BragSheet, {
    type BragSheetType,
} from "@/components/BragSheet";
import Link from "next/link";

export default function Projects() {
    const achievements: readonly BragSheetType[] = [
        {
            bg: "bg-[#8651e522]",
            characteristic: "Charity advocate.",
            _title: (
                <>
                    Peace
                    <span className='text-[#5651e5]'>Lab</span>
                </>
            ),
            subtitle:
                "I created documentation for computer usage to help refine peoples' skills.",
            additionalInfo: (
                <>
                    Find the documentation{" "}
                    <Link
                        href='https://peacelab.vercel.app'
                        target='_blank'
                        className='text-blue-600 underline'>
                        here
                        {/* TODO: Add an arrow here */}
                    </Link>{" "}
                    (or visit the Peace Lab website here{" "}
                    <Link
                        href='https://peacelab.org'
                        target='_blank'
                        className='text-blue-600 underline'>
                        peacelab.org
                    </Link>
                    )
                </>
            ),
        },
        {
            bg: "bg-[#2244ff22]",
            characteristic: "Committed Leader.",
            _title: (
                <>
                    <span className='text-[#2244bb]'>VIS</span> MUN
                </>
            ),
            subtitle:
                "I created a website for my school's Model United Nations (MUN) club to help my teacher and the other leaders.",
            additionalInfo: (
                <>
                    Find the website{" "}
                    <Link
                        href='https://vismun.vercel.app'
                        target='_blank'
                        className='text-blue-600 underline'>
                        here
                    </Link>
                </>
            ),
        },
    ];

    return (
        <>
            <div className='w-full h-screen text-center'>
                <div className='max-w-[1240px] w-full mx-auto p-2 flex flex-row justify-center items-center'>
                    <h1 className='py-4 text-gray-700 text-3xl'>
                        My Projects
                    </h1>
                </div>
                <div className='flex flex-col'>
                    {achievements.map((achievement, i) => {
                        return (
                            <BragSheet
                                key={i}
                                bg={achievement.bg}
                                _title={achievement._title}
                                subtitle={achievement.subtitle}
                                characteristic={
                                    achievement.characteristic
                                }
                                additionalInfo={
                                    achievement.additionalInfo
                                }
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
