import Link from "next/link";
import {ReactNode} from "react";
type Props = {
    children: ReactNode
}
export default function ButtonWhite({children}:Props){
    return(
        <Link href='#servicos' className={`
        w-[130px] sm:w-full
        h-[60px]
        rounded-xl
        bg-transparent
        border-white
        border-2
        text-lg sm:text-[28px]
        font-bold 
        flex justify-center items-center
        text-white
        `}>
            {children}
        </Link>
    )

}