"use client"

import React from 'react'
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    title: string;
    // index prop is no longer needed here as delay will be handled by OrbitingCircles
}

const SkillDataProvider = ({ src, width, height, title }: Props) => {
    return (
            <Image
                src={src}
                width={width}
                height={height}
            alt={title} // Use skill_name for alt text for better accessibility
                title={title}
                loading='lazy'
            className="object-contain" // Ensure image scales nicely within its container
            />
    );
}

export default React.memo(SkillDataProvider);