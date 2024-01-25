import Container from "@/components/Container";
import { motion } from 'framer-motion';

const AboutUsSection = () => {
    const parent = {
        initial:{
            rotate: 0,
        },
        animate:{
            rotate:360,
        },
        hidden:{
            opacity:0, scale:0.8,
        },
        visible:{
            opacity:1, scale:1,
        },
        hover:{
            scale:1.1
        }
    }
    const child = {
        hidden:{
            opacity:0, scale:0.9,
        },
        visible:{
            opacity:1, scale:1,
        }
    }


    return (
        <Container>
            <h3>About section </h3>

            <motion.div
            variants={parent}
            initial='hidden'
            animate='visible'
          drag


            
             className="flex flex-wrap justify-center items-center p-5 size-44 gap-5f bg-indigo-700 rounded-md ">
            </motion.div>
           
        </Container>
    );
};

export default AboutUsSection;