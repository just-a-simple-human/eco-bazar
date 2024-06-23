import React from 'react'
import DeleteFilterCross from "#svg/DeleteFilterCross";
import { Body } from '#common/common.style';
import {
    DeleteFilterButton,
    ActiveFilterContainer
} from "./ActiveFilter.style"
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, reset } from '#store/shopSlice.js';

function ActiveFilter({filterKey, parser}) {

    const filters = useSelector(state => state.shop.filters)

    const dispatch = useDispatch()

    return (
        <ActiveFilterContainer>
            <Body.Small $medium="true"> {parser ? parser(filters[filterKey]) : filters[filterKey]} </Body.Small>
            <DeleteFilterButton
                onClick={() => {
                    dispatch(changeFilter({ filter: filterKey, value: filterKey === "sort" ? "Latest" : null }))
                    dispatch(reset())
                }}
            >
                <DeleteFilterCross />
            </DeleteFilterButton>
        </ActiveFilterContainer>
    )
}

export default ActiveFilter