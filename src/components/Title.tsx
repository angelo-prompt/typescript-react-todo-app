
// Types:
import { FC } from 'react';

const Title: FC = () => {
    return <>
        <div
            className='font-bold text-6xl
            mt-11 mb-12 flex justify-center items-center'
        >
            <img
                className='w-14 h-14 mr-3 select-none'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
            />
            <h1>
                Todo
            </h1>
            <span
                className='text-[#556ff2]'
            >
                List
            </span>
        </div>
    </>
}

export default Title;

