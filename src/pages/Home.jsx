import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineChevronRight } from "react-icons/hi";
import { trendingData } from '../assets/data';
import computer from '../assets/images/computer.svg';
import telescope from '../assets/images/telescope.svg';
import face from '../assets/images/face.svg';
import download from '../assets/images/download.svg';


const Home = () => {
    const [selectedRegion, setSelectedRegion] = useState('India');
    const [selectedCategory, setSelectedCategory] = useState('Movies');

    const filteredData = trendingData.filter((data) => {
        return (
            (selectedRegion === 'India' || selectedRegion === 'Global' ? data.genre === selectedRegion : true) &&
            (selectedCategory === 'Movies' ? data.category === 'Movie' : data.category === 'Series')
        );
    });
    return (
        <main className='home'>
            <header className='mainHeader bg-center bg-no-repeat bg-cover h-[600px] lg:h-[800px] w-full'>
                <div className='backdrop-brightness-[0.3] h-full w-full relative flex flex-col'>
                    <nav className='h-16 w-full flex items-center justify-between px-5 lg:px-32 bg-transparent'>
                        <Link to='/'><img src='https://res.cloudinary.com/dgb69w56a/image/upload/v1725505734/vg2jhsqn9alweyuboutk.png' className='w-24 lg:w-36' /></Link>
                        <div className='flex items-center justify-center gap-2'>
                            <span className='block rounded border h-8 border-white'>
                                <select className='rounded bg-transparent text-white border-white h-8 px-2 outline-none focus:outline-none'>
                                    <option>English</option>
                                    <option>हिंदी</option>
                                </select>
                            </span>
                            <button className='bg-red-600 hover:bg-red-700 transition-colors duration-200 h-8 px-3 rounded text-white text-sm font-semibold'>Sign In</button>
                        </div>
                    </nav>
                    <div className='h-[calc(536px)] lg:h-[calc(736px)] w-full md:w-[600px] mx-auto p-5 lg:p-0 flex flex-col items-center justify-center gap-5'>
                        <h1 className='text-white text-3xl md:text-4xl lg:text-6xl font-bold text-center'>Unlimited movies, TV shows and more</h1>
                        <h5 className='text-white text-lg lg:text-xl lg:font-semibold text-center'>Starts at ₹149. Cancel anytime.</h5>
                        <p className='text-white text-center'>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className='w-full h-fit flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-2'>
                            <input type='email' placeholder='Email address' className='h-11 lg:h-14 w-full lg:flex-1 rounded px-4 bg-transparent border border-gray-500 text-gray-400 focus:outline-none' />
                            <button className='bg-red-600 hover:bg-red-700 transition-colors duration-200 text-white h-11 lg:h-14 w-40 lg:flex-1 rounded capitalize font-semibold text-lg lg:text-2xl flex items-center justify-center gap-5'>get started <HiOutlineChevronRight />                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <section className='border-t-4 border-t-red-600 topPurpleShadow'>
                <div className='w-full h-44 lg:h-32 flex flex-col px-5 py-2 lg:px-32 lg:py-5'>
                    <h3 className='text-white font-semibold text-lg lg:text-2xl capitalize'>trending now</h3>
                    <div className='flex-1 flex flex-col lg:flex-row items-center justify-evenly lg:justify-start lg:gap-5'>
                        <select
                            className='w-full px-2 lg:w-fit rounded bg-transparent border border-gray-400 text-white h-10 text-base focus:outline-none'
                            value={selectedRegion}
                            onChange={(e) => setSelectedRegion(e.target.value)}
                        >
                            <option value="India">India</option>
                            <option value="Global">Global</option>
                        </select>
                        <select
                            className='w-full px-2 lg:w-fit rounded bg-transparent border border-gray-400 text-white h-10 text-base focus:outline-none'
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="Movies">Movies</option>
                            <option value="Series">TV Shows</option>
                        </select>
                    </div>
                </div>
                <div className='carousel px-5 lg:px-32 overflow-hidden overflow-x-auto whitespace-nowrap'>
                    {
                        filteredData.map((data, index) => (
                            <div key={index} className='card inline-block h-[200px] w-[150px] lg:h-[300px] lg:w-[225px] rounded relative mx-2 p-3'>
                                <div className='h-full bg-cover bg-center bg-no-repeat rounded relative poster' style={{ backgroundImage: `url(${data.photo})` }}>
                                    {data.recently ? <p className='absolute top-0 right-0 text-white text-xs font-semibold p-1 bg-red-600 rounded-md'>Recently Added</p> : <></>}
                                </div>
                                <h3 className='absolute left-0 bottom-5 text-black text-7xl lg:text-9xl font-bold textBorder'>{index + 1}</h3>
                            </div>
                        ))
                    }
                </div>
                <div className='moreWaysToJoin px-5 py-5 lg:px-32'>
                    <h3 className='text-white text-lg lg:text-2xl pb-5 font-semibold'>More reasons to join</h3>
                    <div className='h-fit w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch'>
                        <div className='h-full bg-gradient-to-br from-[#1A2043] to-[#200E19] w-full rounded-2xl px-5 pt-5 pb-20 relative'>
                            <h2 className='text-white text-xl lg:text-2xl font-bold'>Enjoy on your TV</h2>
                            <p className='text-slate-300'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                            <img src={computer} className='absolute h-16 w-16 right-2 bottom-2' />
                        </div>
                        <div className='h-full bg-gradient-to-br from-[#1A2043] to-[#200E19] w-full rounded-2xl px-5 pt-5 pb-20 relative'>
                            <h2 className='text-white text-xl lg:text-2xl font-bold'>Download your shows to watch offline</h2>
                            <p className='text-slate-300'>Save your favourites easily and always have something to watch.</p>
                            <img src={download} className='absolute h-16 w-16 right-2 bottom-2' />
                        </div>
                        <div className='h-full bg-gradient-to-br from-[#1A2043] to-[#200E19] w-full rounded-2xl px-5 pt-5 pb-20 relative'>
                            <h2 className='text-white text-xl lg:text-2xl font-bold'>Watch everywhere</h2>
                            <p className='text-slate-300'>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>
                            <img src={telescope} className='absolute h-16 w-16 right-2 bottom-2' />
                        </div>
                        <div className='h-full bg-gradient-to-br from-[#1A2043] to-[#200E19] w-full rounded-2xl px-5 pt-5 pb-20 relative'>
                            <h2 className='text-white text-xl lg:text-2xl font-bold'>Create profiles for kids</h2>
                            <p className='text-slate-300'>Send kids on adventures with their favourite characters in a space made just for them</p>
                            <img src={face} className='absolute h-16 w-16 right-2 bottom-2' />
                        </div>
                    </div>
                </div>
                <div class="wrapper w-full px-5 py-5 lg:px-32">
                    <h3 className='text-white text-lg lg:text-2xl font-semibold pb-5'>Frequently Asked Questions</h3>
                    <div class="tab px-5 py-2 bg-[#2D2D2D] hover:bg-[#414141] shadow-lg relative mb-2 rounded-md">
                        <input type="radio" name="faq" id="faq1" class="appearance-none peer" />
                        <label for="faq1"
                            class="flex items-center cursor-pointer font-semibold text-lg after:content-['+'] after:absolute after:right-5 after:text-2xl after:text-white hover:after:text-white peer-checked:after:transform peer-checked:after:rotate-45">
                            {/* <h2 class=" w-8 h-8 bg-cyan-300 text-white flex justify-center items-center rounded-sm mr-3">01</h2> */}
                            <h3 className='text-white lg:text-2xl'>What is Netflix?</h3>
                        </label>
                        <div class="answer content mt-5 h-0 transition-all ease-in-out  duration-500 overflow-hidden peer-checked:h-full">
                            <p className='text-white text-xl'>
                                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                            </p>
                        </div>
                    </div>
                    <div class="tab px-5 py-2 bg-[#2D2D2D] hover:bg-[#414141] shadow-lg relative mb-2 rounded-md">
                        <input type="radio" name="faq" id="faq2" class="appearance-none peer" />
                        <label for="faq2"
                            class="flex items-center cursor-pointer font-semibold text-lg after:content-['+'] after:absolute after:right-5 after:text-2xl after:text-white hover:after:text-white peer-checked:after:transform peer-checked:after:rotate-45">
                            {/* <h2 class=" w-8 h-8 bg-cyan-300 text-white flex justify-center items-center rounded-sm mr-3">02</h2> */}
                            <h3 className='text-white lg:text-2xl'>How much does Netflix cost?</h3>
                        </label>
                        <div class="answer content mt-5 h-0 transition-all ease-in-out duration-500 overflow-hidden peer-checked:h-full">
                            <p className='text-white text-xl'>
                                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
                            </p>
                        </div>
                    </div>
                    <div class="tab px-5 py-2 bg-[#2D2D2D] hover:bg-[#414141] shadow-lg relative mb-2 rounded-md">
                        <input type="radio" name="faq" id="faq3" class="appearance-none peer" />
                        <label for="faq3"
                            class="flex items-center cursor-pointer font-semibold text-lg after:content-['+'] after:absolute after:right-5 after:text-2xl after:text-white hover:after:text-white peer-checked:after:transform peer-checked:after:rotate-45">
                            {/* <h2 class=" w-8 h-8 bg-cyan-300 text-white flex justify-center items-center rounded-sm mr-3">03</h2> */}
                            <h3 className='text-white lg:text-2xl'>How do I cancel?</h3>
                        </label>
                        <div class="answer content mt-5 h-0 transition-all ease-in-out  duration-500 overflow-hidden peer-checked:h-full">
                            <p className='text-white text-xl'>
                                Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                            </p>
                        </div>
                    </div>
                    <div class="tab px-5 py-2 bg-[#2D2D2D] hover:bg-[#414141] shadow-lg relative mb-2 rounded-md">
                        <input type="radio" name="faq" id="faq4" class="appearance-none peer" />
                        <label for="faq4"
                            class="flex items-center cursor-pointer font-semibold text-lg after:content-['+'] after:absolute after:right-5 after:text-2xl after:text-white hover:after:text-white peer-checked:after:transform peer-checked:after:rotate-45">
                            {/* <h2 class=" w-8 h-8 bg-cyan-300 text-white flex justify-center items-center rounded-sm mr-3">03</h2> */}
                            <h3 className='text-white lg:text-2xl'>Is Netflix good for kids?</h3>
                        </label>
                        <div class="answer content mt-5 h-0 transition-all ease-in-out  duration-500 overflow-hidden peer-checked:h-full">
                            <p className='text-white text-xl'>
                                The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='px-5 py-5 lg:px-32'>
                    <p className='text-white text-center pb-5'>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className='w-full max-w-[800px] mx-auto h-fit flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-2'>
                        <input type='email' placeholder='Email address' className='h-11 lg:h-14 w-full lg:flex-1 rounded px-4 bg-transparent border border-gray-500 text-gray-400 focus:outline-none' />
                        <button className='bg-red-600 hover:bg-red-700 transition-colors duration-200 text-white h-11 lg:h-14 w-40 lg:w-44 rounded capitalize font-semibold text-lg lg:text-xl flex items-center justify-center gap-5'>get started <HiOutlineChevronRight />                            </button>
                    </div>
                </div>
            </section>
            <footer className='px-5 py-5 lg:px-32'>
                <p className='text-gray-400'>Questions? Call <a href='tel:000-800-919-1694'>000-800-919-1694</a></p>
                    <ul className='text-gray-400 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 capitalize underline underline-offset-2 p-2 text-sm'>
                        <a href='https://help.netflix.com/support/412'>
                            FAQ
                        </a>
                        <a href='https://help.netflix.com/'>
                            Help Center
                        </a>
                        <a href='https://www.netflix.com/youraccount'>
                            Account
                        </a>
                        <a href='https://media.netflix.com/'>
                            media Center
                        </a>
                        <a href='http://ir.netflix.com/'>
                            investor relations
                        </a>
                        <a href='https://jobs.netflix.com/jobs'>
                            jobs
                        </a>
                        <a href='https://www.netflix.com/watch'>
                            ways to watch
                        </a>
                        <a href='https://help.netflix.com/legal/termsofuse'>
                            terms of use
                        </a>
                        <a href='https://help.netflix.com/legal/privacy'>
                            privacy
                        </a>
                        <a href='https://www.netflix.com/in/#'>
                            cookies preferences
                        </a>
                        <a href='https://help.netflix.com/legal/corpinfo'>
                            corporate information
                        </a>
                        <a href='https://help.netflix.com/contactus'>
                            contact us
                        </a>
                        <a href='https://fast.com/'>
                            speed test
                        </a>
                        <a href='https://help.netflix.com/legal/notices'>
                            legal notices
                        </a>
                        <a href='https://www.netflix.com/in/browse/genre/839338'>
                            only on netflix
                        </a>
                        <a href='https://sayandip-adhikary.vercel.app/'>
                            developer
                        </a>
                    </ul>
            </footer>
        </main>
    )
}

export default Home