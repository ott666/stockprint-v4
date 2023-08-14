import {ReactNode} from "react";
type Props = {
    children: ReactNode
}
export default function Button({children}:Props){
    return(
        <button className={`
        w-[130px] sm:w-full
        h-[60px]
        rounded-xl
        bg-blue-600
        text-lg sm:text-[28px]
        font-bold
        `}>
            {children}
        </button>
    )

}