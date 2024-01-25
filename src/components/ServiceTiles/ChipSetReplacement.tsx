import useScrollGrowHooks from "@/hooks/useScrollGrowHooks";
import { motion } from 'framer-motion';

const ChipSetReplacement = () => {
    const {componentRef, style} = useScrollGrowHooks()
    return (
        <motion.div
        ref={componentRef}
        style={style}

        className="bg-red-500 h-[415px] rounded-xl col-span-6 lg:col-span-5"></motion.div>
    );
};

export default ChipSetReplacement;