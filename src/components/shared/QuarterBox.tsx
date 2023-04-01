import { FC } from "react";

interface IProps {
    header: string;
    description: string;
    number: number;
    haveBorder?: boolean;
}

const QuarterBox: FC<IProps> = ({ header, description, number, haveBorder = true }) => {
    return (
        <div className={`${haveBorder ? "border" : ""} rounded-md flex-1 flex flex-col items-center justify-center relative px-8 py-12`}>
            <h4 className='font-bold text-lg'>{header}</h4>
            <p className='mt-2 to-slate-800 z-0'>{description}</p>
            <span className='absolute -top-10 right-10 text-[170px] font-bold -z-10 text-gray-200'>{number}</span>
        </div>
    )
}

export default QuarterBox