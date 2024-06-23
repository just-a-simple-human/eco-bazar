import React from 'react'
import Star from '#svg/Star.jsx'

function Rating({rating, size}) {
    return (
        <>
            <Star isActive={rating >= 1} size={size} />
            <Star isActive={rating >= 2} size={size} />
            <Star isActive={rating >= 3} size={size} />
            <Star isActive={rating >= 4} size={size} />
            <Star isActive={rating >= 5} size={size} />
        </>
    )
}

export default Rating