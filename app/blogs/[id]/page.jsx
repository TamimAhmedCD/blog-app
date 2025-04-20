'use client'
import { assets, blog_data } from '@/Assets/assets'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function page({ params }) {
    const [data, setData] = useState(null)
    const fetchBlogData = () => {
        for (let i = 0; i < blog_data.length; i++) {
            if (Number(params.id) === blog_data[i].id) {
                setData(blog_data[i])
                console.log(blog_data[i]);
                break
            }
        }
    }
    useEffect((() => {
        fetchBlogData()
    }), [])
    return (data ? <>
        <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <Link href="/"><Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' /></Link>
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000] cursor-pointer'>Get started <Image src={assets.arrow} /></button>
            </div>
            <div className='text-center my-24'>
                <h1 className='text-2xl sm:text-5xl  font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
                <Image src={data.author_img} width={60} height={60} alt={data.author} className='mx-auto mt-6 border border-white rounded-full' />
                <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
            </div>
        </div>
        <div className='mx-5 max-w-[880px] md:mx-auto mt-[-100px] mb-10'>
            <Image src={data.image} width={1280} height={720} alt={data.title} className='border-4 border-white' />
            <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
            <p>{data.description}</p>
            <h3 className='my-5  text-[18px] font-semibold'>Step 1: Self-Reflection and Goal Setting</h3>
            <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam natus magnam porro veritatis provident, exercitationem aperiam aliquid autem atque odio voluptates recusandae nihil, quos beatae. Odit, similique exercitationem. Quo voluptate voluptas explicabo sapiente atque corporis nulla ab, velit accusantium numquam, sed quisquam impedit deleniti harum fuga minus obcaecati eveniet. Laudantium.</p>
            <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea quod amet quasi! Enim, perspiciatis? Inventore, animi explicabo. Id cupiditate sunt error, reiciendis fugiat repellat est tenetur recusandae. Iste, quisquam?</p>
            <h3 className='my-5  text-[18px] font-semibold'>Step 2: Self-Reflection and Goal Setting</h3>
            <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam natus magnam porro veritatis provident, exercitationem aperiam aliquid autem atque odio voluptates recusandae nihil, quos beatae. Odit, similique exercitationem. Quo voluptate voluptas explicabo sapiente atque corporis nulla ab, velit accusantium numquam, sed quisquam impedit deleniti harum fuga minus obcaecati eveniet. Laudantium.</p>
            <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea quod amet quasi! Enim, perspiciatis? Inventore, animi explicabo. Id cupiditate sunt error, reiciendis fugiat repellat est tenetur recusandae. Iste, quisquam?</p>
            <h3 className='my-5  text-[18px] font-semibold'>Step 3: Self-Reflection and Goal Setting</h3>
            <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam natus magnam porro veritatis provident, exercitationem aperiam aliquid autem atque odio voluptates recusandae nihil, quos beatae. Odit, similique exercitationem. Quo voluptate voluptas explicabo sapiente atque corporis nulla ab, velit accusantium numquam, sed quisquam impedit deleniti harum fuga minus obcaecati eveniet. Laudantium.</p>
            <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea quod amet quasi! Enim, perspiciatis? Inventore, animi explicabo. Id cupiditate sunt error, reiciendis fugiat repellat est tenetur recusandae. Iste, quisquam?</p>
            <h3 className='my-5  text-[18px] font-semibold'>Conclusion:</h3>
            <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae fuga necessitatibus beatae deleniti eum voluptas officia laudantium fugit laboriosam. Dolorem obcaecati adipisci maxime saepe dignissimos distinctio animi explicabo perspiciatis odio quae laboriosam nihil asperiores vel eius sit, eum officia. Pariatur, enim consequuntur. Excepturi accusamus nemo voluptatem aspernatur placeat, reiciendis alias qui perspiciatis maxime iusto totam, quisquam, odit laboriosam. Quia, harum.</p>
            <div className='my-24'>
                <p className='text-black font-semibold my-4'>Share this aritcle on social media</p>
                <div className='flex'>
                    <Image src={assets.facebook_icon} width={50} alt='facebook' />
                    <Image src={assets.twitter_icon} width={50} alt='twitter' />
                    <Image src={assets.googleplus_icon} width={50} alt='google plus' />
                </div>
            </div>
        </div><Footer /></> : <></>
    )
}
