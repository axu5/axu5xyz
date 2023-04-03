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
                <div className=''>
                    <p className='uppercase pt-5 underline text-sm tracking-widest text-gray-600'>
                        {characteristic}
                    </p>
                    <h1 className='py-4 text-gray-700 uppercase tracking-widest'>
                        {_title}
                    </h1>
                    <h1 className='py-4 text-gray-700 text-2xl'>
                        {subtitle}
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        {additionalInfo}
                    </p>
                </div>
            </div>
        </div>
    );
}
