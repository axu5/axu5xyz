import cn from "@/helpers/cn";
import type { HTMLAttributes, ReactNode } from "react";

export type BragSheetType = {
    bg: string;
    characteristic: string;
    _title: ReactNode;
    subtitle: ReactNode;
    additionalInfo: ReactNode;
};

type BragSheetComponentProps = BragSheetType &
    HTMLAttributes<HTMLDivElement>;

export default function BragSheet({
    characteristic,
    _title,
    subtitle,
    additionalInfo,
    bg,
    className,
    ...rest
}: BragSheetComponentProps) {
    return (
        <div
            className={cn(
                "my-2 md:max-w-[66%] xl:max-w-[50%] mx-auto w-full h-[40%] text-center p-5 rounded shadow-md hover:shadow-xl",
                bg,
                className
            )}
            {...rest}>
            <div className='max-w-[1240px] w-full h-full md:mx-auto mp-2 flex justify-center items-center'>
                <div className='mx-10'>
                    <p className='uppercase dark:text-gray-200 pt-5 underline text-sm tracking-widest text-gray-600'>
                        {characteristic}
                    </p>
                    <h1 className='text-5xl font-bold md:text-6xl py-4 text-gray-700 dark:text-gray-100 uppercase tracking-widest'>
                        {_title}
                    </h1>
                    <h3 className='md:text-2xl font-bold py-4 text-gray-700 dark:text-gray-200 text-2xl'>
                        {subtitle}
                    </h3>
                    <p className='py-4 text-gray-600 dark:text-gray-200 max-w-[70%] m-auto'>
                        {additionalInfo}
                    </p>
                </div>
            </div>
        </div>
    );
}
