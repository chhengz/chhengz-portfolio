import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { DiPhp } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { animate, motion } from 'framer-motion'


// rendom number between 1.0 and 3.0
const randomDuration = () => Math.random() * (3 - 1) + 1
const randomDelay = () => Math.random() * (2 - 0.5) + 0.5

// Animation for the icons
const iconVariants = (duration) => ({
    initial: { y: -10},
    animate: {
        y: 0,
        transition: {
            duration: duration,
            case: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
})




const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100}}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl '>Technologies</motion.h2>

        <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100}}
        transition={{ duration: 0.5 }}

        className='flex flex-wrap items-center justify-center gap-4'>

            <motion.div
            variants={iconVariants(randomDuration())}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400' />
            </motion.div>

            <motion.div
            variants={iconVariants(randomDuration())}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className='text-7xl' />
            </motion.div>

            <motion.div 
            variants={iconVariants(randomDuration())}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className='text-7xl text-green-500' />
            </motion.div>

            <motion.div 
            variants={iconVariants(randomDuration())}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPhp className='text-7xl text-[#474A8A] ' />
            </motion.div>

            <motion.div 
            variants={iconVariants(randomDuration())}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className='text-7xl text-green-500' />
            </motion.div>

            <motion.div 
            variants={iconVariants(randomDuration())}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className='text-7xl text-sky-700' />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies