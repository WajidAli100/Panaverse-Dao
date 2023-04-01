import { FC } from "react"

const Button: FC<{ text: string }> = ({ text }) => {
    return (
        <button className="bg-[#00616C] hover:shadow-lg hover:scale-105 duration-500
         text-white rounded-full px-7 py-4 text-lg font-medium">{text}</button>
    )
}

export default Button