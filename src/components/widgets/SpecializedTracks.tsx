"use client"
import Wraper from '@/components/shared/Wraper'
import QuarterBox from '@/components/shared/QuarterBox'
import Img1 from "@/assets/images/img1.png"
import Img2 from "@/assets/images/img2.png"
import Image from 'next/image'
import { useState } from 'react'

export const programsData = [
    {
        slug: "wmd",
        header: "Web 3.0 (Blockchain) and Metaverse Specialization",
        description: "After completing the first three quarters the participants will select one or more specializations consisting of two courses each: ",
        image: Img1,
        quarters: [
            {
                header: "Quarter IV",
                description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
                number: 4

            },
            {
                header: "Quarter V",
                description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
                number: 5
            }
        ]
    },
    {
        slug: "ai",
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        description: "After completing the first three quarters the participants will select one or more specializations consisting of two courses each: ",
        image: Img2,
        quarters: [
            {
                header: "Quarter IV",
                description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
                number: 4
            },
            {
                header: "Quarter V",
                description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
                number: 5
            }
        ]
    },
    {
        slug: "wmd",
        header: "Web 3.0 (Blockchain) and Metaverse Specialization",
        description: "After completing the first three quarters the participants will select one or more specializations consisting of two courses each: ",
        image: Img1,
        quarters: [
            {
                header: "Quarter IV",
                description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
                number: 4

            },
            {
                header: "Quarter V",
                description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
                number: 5
            }
        ]
    },
    {
        slug: "ai",
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        description: "After completing the first three quarters the participants will select one or more specializations consisting of two courses each: ",
        image: Img2,
        quarters: [
            {
                header: "Quarter IV",
                description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
                number: 4
            },
            {
                header: "Quarter V",
                description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
                number: 5
            }
        ]
    },
    {
        slug: "wmd",
        header: "Web 3.0 (Blockchain) and Metaverse Specialization",
        description: "After completing the first three quarters the participants will select one or more specializations consisting of two courses each: ",
        image: Img1,
        quarters: [
            {
                header: "Quarter IV",
                description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
                number: 4

            },
            {
                header: "Quarter V",
                description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
                number: 5
            }
        ]
    },
    {
        slug: "ai",
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        description: "After completing the first three quarters the participants will select one or more specializations consisting of two courses each: ",
        image: Img2,
        quarters: [
            {
                header: "Quarter IV",
                description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
                number: 4
            },
            {
                header: "Quarter V",
                description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
                number: 5
            }
        ]
    },
]

const SpecializedTracks = () => {

    const [selectedItem, setSelectedItem] = useState("wmd")
    const selectedItemData = programsData.find((item) => item.slug === selectedItem)
    return (
        <section>
            <Wraper>
                {/* header */}
                <div>
                    <h2 className='text-5xl font-bold whitespace-pre-line'>Specialized Tracks:</h2>
                    <p className='mt-3 text-xl text-slate-600 max-w-screen-sm'>After completing the first three quarters the participants will select one or more specializations consisting of two courses each: </p>
                </div>
                <div className='mt-10 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8'>
                    {/* content left */}
                    <div className='shadow-lg self-start sticky top-0 basis-8/12 rounded-xl border border-slate-200 py-8 px-8'>
                        <h4 className='text-lg text-primary font-medium'>Specialized Program</h4>
                        <h3 className='text-2xl font-bold'>{selectedItemData?.header}</h3>
                        <p className='text-lg text-slate-600 mt-2'>{selectedItemData?.description}
                        </p>
                        <button className='text-xl text-teal-700 mt-4 underline flex gap-x-2 items-center'>Learn More
                            <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2" />
                            </svg>
                        </button>
                        <div className='flex flex-col lg:flex-row gap-4 mt-8'>
                            {
                                selectedItemData?.quarters.map((item) => (
                                    <QuarterBox header={item.header}
                                        key={item.number}
                                        description={item.description}
                                        number={item.number} haveBorder={false} />
                                ))
                            }
                        </div>
                    </div>

                    {/* content right */}
                    <div className='bg-slate-100 space-y-4 px-4 py-6 basis-4/12'>
                        {
                            programsData.map((item, i) => (
                                <div onClick={() => setSelectedItem(item.slug)} key={item.slug} className='flex items-center gap-x-4'>
                                    {/* <div className='bg-red-500 h-16 w-16'></div> */}
                                    <div className='flex-shrink-0 h-24 w-36'>
                                        <Image src={item.image} alt={item.header} className={"h-24 w-36 object-cover rounded-md"} />
                                    </div>
                                    <div>
                                        <h4 className='text-primary font-medium'>Specialized Program</h4>
                                        <h3 className='text-xl font-semibold'>{item.header}</h3>
                                    </div>
                                    <div className='leading-8'>---</div>
                                </div>

                            ))
                        }



                    </div>

                </div>
            </Wraper>
        </section>
    )
}

export default SpecializedTracks
