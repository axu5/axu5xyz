import { type ReactNode } from "react";

type ListType = {
    href: string;
    inner: ReactNode;
}[];

export default function UnorderedList({
    list,
    blank,
}: {
    list: ListType;
    blank: boolean;
}) {
    return (
        <ul className='w-[50%] m-auto text-gray-900 dark:text-gray-100 flex flex-col mx-auto'>
            {list.map((item, i) => {
                return (
                    <li key={i}>
                        <a
                            href={item.href}
                            target={blank ? "_blank" : "_self"}
                            className='cursor-pointer text-xl flex flex-row items-center m-4 p-5 bg-gray-300 dark:bg-slate-500 center mx-4 hover:underline hover:text-gray-950 dark:hover:text-white hover:shadow-xl rounded'>
                            {item.inner}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}
