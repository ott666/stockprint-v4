import Link from "next/link";
import {ReactNode} from "react";

type Props = {
    children: ReactNode
}
export default function Button({children}:Props){
    return(
        <Link href='#bundle' className={`
        w-[130px] sm:w-full
        h-[60px]
        rounded-xl
        bg-blue-600
        text-lg sm:text-[28px]
        flex justify-center items-center
        font-bold
        `}>
            {children}
        </Link>
    )

}