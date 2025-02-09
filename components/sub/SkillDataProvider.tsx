"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';


interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
    title:string;
}

// Définition des variants en dehors du composant pour éviter de les recréer à chaque rendu
const imageVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1}
}

// Valeur du délai d'animation (définie à l'extérieur pour performance)
const animationDelay = 0.3

const SkillDataProvider = ({ src, width, height, index ,title} : Props) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{delay: index * animationDelay}}
        >
            <Image
                src={src}
                width={width}
                height={height}
                alt='skill image'
                title={title}
                loading='lazy'
            />
        </motion.div>
    )
}

export default React.memo(SkillDataProvider)