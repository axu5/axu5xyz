import BragSheet, {
    type BragSheetType,
} from "@/components/BragSheet";
import Link from "next/link";

export const metadata = {
    title: "projects",
};

export default function Projects() {
    const achievements: readonly BragSheetType[] = [
        {
            bg: "bg-[#8651e522] dark:bg-[#8651e577]",
            characteristic: "Charity advocate.",
            _title: (
                <h2 className='text-4xl font-bold sm:text-4xl'>
                    Peace
                    <span className='text-[#5651e5] dark:text-[#7b78ce]'>
                        Lab
                    </span>
                </h2>
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
            bg: "bg-[#2244ff22] dark:bg-[#2244ff88]",
            characteristic: "Committed Leader.",
            _title: (
                <h2 className='text-4xl font-bold sm:text-4xl'>
                    <span className='text-blue-800 dark:text-blue-500'>
                        VIS
                    </span>{" "}
                    MUN
                </h2>
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
        <section className='w-full min-h-[calc(100vh-5rem)] text-center'>
            <div className='mx-auto p-2 flex flex-row justify-center items-center'>
                <h1 className='md:text-6xl font-bold py-4 text-gray-700 dark:text-gray-100 text-3xl'>
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
        </section>
    );
}
