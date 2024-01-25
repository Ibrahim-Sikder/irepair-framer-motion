import {  motion } from 'framer-motion';

import useScrollGrowHooks from '@/hooks/useScrollGrowHooks';

const BatteryReplacement = () => {
const {componentRef, style} = useScrollGrowHooks()
    return (
        <motion.div
        ref={componentRef}
        style={style}
         className="bg-red-500 h-[415px] w-full rounded-xl col-span-12"> </motion.div>
    );
};

export default BatteryReplacement;