import Picture1 from '../assets/images/Picture1.png'
import AnxietyPic from '../assets/images/anxiety.png'
import DepressionPic from '../assets/images/depression.png'
import StressPic from '../assets/images/stress.png'
import SelfReliefPic from '../assets/images/self-relief.png'
import IndividualTherapyPic from '../assets/images/individual.png'
import TeenTherapyPic from '../assets/images/teen.png'
import CoupleTherapyPic from '../assets/images/couple.png'
import { Link } from 'react-router-dom'
function Main() {
    return (
        <div id='main' className='box-border'>
            <section id='home-heading' className='mt-8 pl-4 flex justify-between'>
                <div className='flex flex-col justify-center p-4 w-[38rem]'>
                    <h1 className='text-4xl font-bold font-kavoon'>You deserve to be Happy.</h1>
                    <h2 className='text-lg py-4 font-semibold'>Basic info about website Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, placeat.</h2>
                    <div className='flex flex-col justify-center items-center font-jaldi'>
                        <p className='text-center text-lg mb-2'>What you can get here?</p>
                        <ul className='border-2 w-[25rem] py-4 pl-8 rounded-lg bg-[#efb399] list-disc'>
                            <li>Self Mental Health Assessment Test</li>
                            <li>Tracking solutions of Mental Health Issues</li>
                            <li>Brief Articles & Advices for Better Mental Health</li>
                            <li>Therapy</li>
                        </ul>
                    </div>
                </div>
                <div className='w-[38rem]'>
                    <img src={Picture1} alt="picture1" className='drop-shadow-2xl' />
                </div>
            </section>
            <section id="self-assessment" className='mt-36'>
                <div className='text-3xl font-kavoon text-center w-full'>
                    <h1>Self Assessment</h1>
                </div>
                <div className='flex justify-center items-center mt-10 gap-10'>
                    <div className='flex flex-col items-center w-60 h-60 rounded-2xl bg-[#f4edd9] shadow-sm'>
                        <img src={AnxietyPic} alt="anxiety" className='w-40 h-40' />
                        <Link to='/anxiety-test'>
                            <h1 className='text-center text-lg font-jaldi font-medium text-[1.5rem] mt-4'>Anxiety</h1>
                        </Link>
                    </div>
                    <div className='flex flex-col items-center w-60 h-60 rounded-2xl bg-[#e7e4f2] shadow-sm'>
                        <img src={DepressionPic} alt="depression" className='w-40 h-40 pt-4' />
                        <Link to='/depression-test'>
                            <h1 className='text-center text-lg font-jaldi font-medium text-[1.5rem] mt-4'>Depression</h1>
                        </Link>
                    </div>
                    <div className='flex flex-col items-center w-60 h-60 rounded-2xl bg-[#f4edd9] shadow-sm'>
                        <img src={StressPic} alt="stress" className='w-40 h-38 pt-4' />
                        <Link to='/stress-test'>
                            <h1 className='text-center text-lg font-jaldi font-medium text-[1.5rem] mt-4'>Stress</h1>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-between items-center  m-auto w-[35rem] bg-[#eaf3fa] my-10 rounded-xl p-4'>
                    <Link to='/relief-activities'>
                        <h1 className='ml-8 text-center text-lg font-jaldi font-medium text-[1.5rem]'>Relief Activities</h1>
                    </Link>
                    <img src={SelfReliefPic} alt="self-relief" className='w-52 h-40 pt-4' />
                </div>
            </section>
            <section id="therapy" className='mt-32'>
                <div className='text-3xl font-kavoon text-center w-full'>
                    <h1>Therapy</h1>
                </div>
                <div className='flex justify-center items-center my-10 gap-10'>
                    <div className='flex flex-col items-center w-60 h-60 rounded-2xl bg-[#e7e4f2] shadow-sm'>
                        <img src={IndividualTherapyPic} alt="anxiety" className='w-40 h-40' />
                        <Link to='/therapy'>
                            <h1 className='text-center text-lg font-jaldi font-medium text-[1.5rem] mt-4'>Individual</h1>
                        </Link>
                    </div>
                    <div className='flex flex-col items-center w-60 h-60 rounded-2xl bg-[#f4edd9] shadow-sm'>
                        <img src={TeenTherapyPic} alt="depression" className='w-52 pl-4 pt-2' />
                        <Link to='/therapy'>
                            <h1 className='text-center text-lg font-jaldi font-medium text-[1.5rem] mt-4'>Teen</h1>
                        </Link>
                    </div>
                    <div className='flex flex-col items-center w-60 h-60 rounded-2xl bg-[#e7e4f2] shadow-sm'>
                        <img src={CoupleTherapyPic} alt="stress" className='w-48 h-40 pt-4' />
                        <Link to='/therapy'>
                            <h1 className='text-center text-lg font-jaldi font-medium text-[1.5rem] mt-4'>Couple</h1>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main