import React from 'react'
import { Body, colors } from "#common/common.style";
import { ActiveFiltersContainer } from "./ActiveFilters.style"
import { useSelector } from 'react-redux';
import ActiveFilter from './components/ActiveFilter/ActiveFilter';
import Rating from '#components/Rating/Rating.jsx';


function ActiveFilters() {

    const filters = useSelector(state => state.shop.filters)

    return (
        <ActiveFiltersContainer>
            <Body.Small $textcolor={colors.grey[5]}>Active Filters:</Body.Small>
            {
                (!filters.category && !filters.price && !filters.rating) && <Body.Small $medium="true">None</Body.Small>
            }
            {filters.category && <ActiveFilter filterKey={"category"} size={12}/>}
            {filters.price && <ActiveFilter filterKey={"price"} parser={price => `$${price.min} - $${price.max}`}/>}
            {filters.rating && <ActiveFilter filterKey={"rating"} parser={rating => <Rating rating={rating} size={12}/>}/>}
        </ActiveFiltersContainer>
    )
}

export default ActiveFilters