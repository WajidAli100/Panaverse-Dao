import React from 'react'
import Wraper from '@/components/shared/Wraper'
import Button from '@/components/shared/Button'
import QuarterBox from '@/components/shared/QuarterBox'

const CoreTrackData = [
    {
        header: "Quarter I",
        description: "CS-101: Object-Oriented Programming using TypeScript",
        number: 1
    },
    {
        header: "Quarter II",
        description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 2
    },
    {
        header: "Quarter III",
        description: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
        number: 3
    },
]

export default function CoreTracks() {
    const header = "Core Courses \n (Common in All Specializations):"
    return (
        <section className='mt-16 lg:mt-28'>
            <Wraper>
                <div className='max-w-screen-sm'>
                    <h4 className="text-teal-800 font-semibold text-lg">Program of Studies</h4>
                    <h2 className="text-3xl sm:text-4xl font-bold whitespace-pre-line">{header}</h2>
                    <p className="mt-6 text-gray-800 text-lg">Every participant of the program will start by completing the following three core courses:

                    </p>
                    <div className='mt-6'>
                        <Button text='Learn More' />
                    </div>
                </div>
                {/* Boxes */}
                <div className='my-20 flex flex-col md:flex-row items-stretch gap-x-8 gap-y-6 max-w-screen-xl mx-auto'>
                    {
                        CoreTrackData.map((item, i) => (
                            <QuarterBox
                                key={item.number}
                                header={item.header}
                                description={item.description}
                                number={i + 1} />
                        ))
                    }


                </div>
            </Wraper>
        </section>
    )
}
