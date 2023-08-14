import {ReactNode} from "react";
type Props = {
    children: ReactNode
}
export default function ButtonWhite({children}:Props){
    return(
        <button className={`
        w-[130px] sm:w-full
        h-[60px]
        rounded-xl
        bg-transparent
        border-white
        border-2
        text-lg sm:text-[28px]
        font-bold
        text-white
        `}>
            {children}
        </button>
    )

}