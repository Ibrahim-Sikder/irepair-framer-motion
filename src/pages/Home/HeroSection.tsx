import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import macbook from '../../../src/assets/images/macbook.jpg'
import { motion } from "framer-motion"
const HeroSection = () => {
    const intro = {
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                duration: 0.5,
                staggerChildren: 0.3,
                delayChildre:0.5,
            }
        }
    }

    const introChildren = {
        hidden:{
            opacity: 0,
            y:-200,
        },
        visible:{
            opacity:1, y:0,
            transtion:{
                duration: 0.7,
                type:'spring',
                bounce:0.8,
            }
        }
    }

    const laptop = {
        initial:{
            y:0,rotate:0, scale:5,
        },
        animate:{
            y:50,
            rotate:-30,
            scale:1,
           
            transition:{
                duration:1,
                repeate:Infinity,
              y:{
                duration:2,
                repeat: Infinity,
                repeatType:'reverse',
                ease:'easeInOut'
              }
            }
        }
    }
    return (
        <div className="overflow-hidden  h-screen ">
            <Container>
            <div className='grid grid-cols-1 lg:grid-cols-2  h-[calc(100vh-64px)] place-content-center '>
               <motion.div
               variants={intro}
               initial='hidden'
               animate='visible'

               >
               <motion.h1 variants={introChildren} className='text-5xl lg:text-8xl text-nowrap '> 
                <span className=' text-primary '>Don't Worry,</span>
                <br />
                <span>We'll fix it.</span>
               
                </motion.h1>
                <motion.p variants={introChildren} className='text-gray max-w-[50ch] mb-3'>Welcome to  <span>iRepair </span> , you one-stop place for all kinds of <span>Macbook repairs</span> and diagnostices. </motion.p>
               <motion.div variants={introChildren}>
               <Button>Book a service </Button>
               </motion.div>
               </motion.div>
               <motion.div
               variants={laptop}
               initial='initial'
               animate='animate'
                className='mt-10 w-3/4 lg:w-full mx-auto '>
        <img className='rotate-[50deg] h-[90%] object-cover' src={macbook} alt="macbook" />
            </motion.div>
            </div>
           
        </Container>
        </div>
    );
};

export default HeroSection;