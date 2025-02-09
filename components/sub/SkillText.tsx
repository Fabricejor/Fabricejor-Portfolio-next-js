"use client"
import React, { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop, slideInFromRight } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid' 

const SkillText = () => {
  // Mémorisation des variantes d'animation pour éviter leur recalcul
  const topVariant = useMemo(() => slideInFromTop, []);
  const leftVariant = useMemo(() => slideInFromLeft(0.5), []);
  const rightVariant = useMemo(() => slideInFromRight(0.5), []);
   
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
        variants={topVariant}
        className="Welcome-box py-[8px] px-[7px] border border-[#00B1A8] opacity-[0.9] max-sm:border-[#5be6dc]"
      >
        <SparklesIcon className="text-[#96fffa] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Réalisé avec Next js 14.2.3
        </h1>
      </motion.div>
      <motion.div
        variants={leftVariant}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
      >
        Technologies experimentées / maitrisées
      </motion.div>
      <motion.div
        variants={rightVariant}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
      >
        &quot;Les bons développeurs ne résolvent pas seulement des problèmes ; ils les anticipent.&quot; – Chris Pine
      </motion.div>
    </div>
  )
}

export default memo(SkillText)