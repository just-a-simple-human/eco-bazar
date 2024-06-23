import React from "react";
import Select from "#ui/b/Select/Select.jsx";
import { Body, DifferentText, StyledImg, colors } from "#common/common.style";
import SelectArrow from "#images/SelectArrowDown.svg";
import { 
  ActiveFiltersContainer, 
  FiltersContainer, 
  SelectContainer, 
  ShopFilterContainer
} from "./ShopFiltersBlock.style.js";
import Rating from "#components/Rating/Rating.jsx";
import { useDispatch, useSelector } from "react-redux";
import { changeActivePage, changeFilter, reset } from "#store/shopSlice.js";
import ActiveFilters from "./components/ActiveFilters/ActiveFilters.jsx";

function ShopFilter() {
  
  const filters = useSelector(state => state.shop.filters)
  const productsFound = useSelector(state => state.shop.productsFound)
  const activePage = useSelector(state => state.shop.activePage)

  const dispatch = useDispatch()

  return (
    <ShopFilterContainer>
      <FiltersContainer>
        <SelectContainer>
          <Select
            buttontext={filters.category || "Select Category"}
            selectList={["Vegetables", "Fresh Fruit", "River Fish", "Meat", "Water and Drinks", "Snacks"]}
            changer={(value) => {
              dispatch(changeFilter({ filter: "category", value: value }))
              dispatch(reset())
            }}
          />
          <StyledImg src={SelectArrow} />
        </SelectContainer>
        <SelectContainer>
          <Select
            buttontext={filters.price?.view || "Select Price"}
            selectList={
              [
                { min: 0, max: 14.99 }, 
                { min: 14.99, max: 29.99 }, 
                { min: 29.99, max: 44.99 }
              ]
            }
            parser={price => `$${price.min} - $${price.max}`}
            changer={(value) => {
              dispatch(changeFilter({ filter: "price", value: value }))
              dispatch(reset())
            }}
          />
          <StyledImg src={SelectArrow} />
        </SelectContainer>
        <SelectContainer>
          <Select
            buttontext={filters.rating ? <Rating rating={filters.rating} size={12}/> : "Select Rating"}
            selectList={[1, 2, 3, 4, 5]}
            parser={(rating) => <Rating rating={rating} size={12}/>}
            changer={(value) => {
              dispatch(changeFilter({ filter: "rating", value: value }))
              dispatch(reset())
            }}
          />
          <StyledImg src={SelectArrow} />
        </SelectContainer>
        <SelectContainer>
          <Select
            buttontext={`Sort by: ${filters.sort}`}
            selectList={["Latest", "Newest", "Low to High", "High to Low"]}
            changer={(value) => {
              dispatch(changeFilter({ filter: "sort", value: value }))
              dispatch(reset())
            }}
          />
          <StyledImg src={SelectArrow} />
        </SelectContainer>
        <SelectContainer>
          <Select
            buttontext={`Show: ${filters.productsPerPage}`}
            selectList={[8, 16]}
            changer={(value) => {
              if (value !== filters.productsPerPage) {
                dispatch(changeFilter({ filter: "productsPerPage", value: value }))
                if (value === 16) {
                  dispatch(changeActivePage(Math.ceil(activePage / 2)))
                }
                if (value === 8) {
                  dispatch(changeActivePage(activePage * 2 - 1))
                }
              }
            }}
          />
          <StyledImg src={SelectArrow} />
        </SelectContainer>
      </FiltersContainer>
      <ActiveFiltersContainer>
        <ActiveFilters />
        <Body.Small $medium="true">
          {Intl.NumberFormat("en-US").format(productsFound)}{" "}
          <DifferentText $textcolor={colors.grey[5]}>
            Results found.
          </DifferentText>
        </Body.Small>
      </ActiveFiltersContainer>
    </ShopFilterContainer>
  );
}

export default ShopFilter;
