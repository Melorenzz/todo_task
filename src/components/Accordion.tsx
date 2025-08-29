import {ChevronDownIcon} from "@heroicons/react/16/solid";
import type {IAccordion} from "../types/AccordionProps.ts";



const Accordion = ({isOpen, setIsOpen, title, data, setData}: IAccordion) => {

    const handleChange = (index: number) => {
        setData(prevData =>
            prevData.map((item, index2) =>
                index2 === index ? { ...item, isCompleted: !item.isCompleted } : item
            )
        );
    };


    return (
        <div className='border-1'>
            <button onClick={() => setIsOpen(!isOpen)}
                    className='w-full bg-white p-2 text-left flex items-center gap-3'>
                <ChevronDownIcon className={`w-5 h-5 transform ${isOpen ? '-rotate-0' : '-rotate-90'} transition`}/>
                <h2 className='text-2xl'>{title}</h2>
            </button>

            <div
                className={`w-full bg-[white] transition-all  overflow-hidden ${isOpen ? 'max-h-50 px-3 py-2' : 'max-h-0 p-0'} `}>
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <div key={index} className='flex items-center gap-2'>
                            <input onChange={() => handleChange(index)} id={index.toString()} checked={item.isCompleted} type="checkbox"/>
                            <label htmlFor={index.toString()}>{item.title}</label>
                        </div>
                    ))
                ) : (
                    <p className='text-gray-700'>Clean</p>
                )}
            </div>


        </div>
    );
};

export default Accordion;