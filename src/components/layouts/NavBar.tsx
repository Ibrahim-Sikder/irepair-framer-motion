import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';

const NavBar = () => {
    return (
        <motion.header
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1, duration:1 }}

        className='h-16 fixed w-full bg-white z-[9999]'>
           <nav className='px-[20px] h-full  w-full max-w-[1220px] mx-auto flex justify-between items-center '>
           <span className='text-3xl'>iRepair</span>
           <ul className='space-x-5'>
           <NavLink to='/'>Home</NavLink>
           <NavLink to='/'>About</NavLink>
           <NavLink to='/'>Serivces</NavLink>
           <Button>
           <NavLink to='/'>Login</NavLink>
           </Button>
           </ul>
           </nav>
        </motion.header>
    );
};

export default NavBar;