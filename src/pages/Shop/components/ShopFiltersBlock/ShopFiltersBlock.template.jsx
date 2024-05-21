import React, { useContext } from "react";
import Select from "#ui/b/Select";
import { Body, DifferentText, StyledImg, colors } from "#common/common.style";
import SelectArrow from "#images/SelectArrowDown.svg";
import OrangeStar from "#svg/OrangeStar";
import GreyStar from "#svg/GreyStar";
import DeleteFilterCross from "#svg/DeleteFilterCross";
import { ShopContext } from "#context";
import { ActiveFilter, 
  ActiveFilters, 
  ActiveFiltersContainer, 
  DeleteFilterButton, 
  FiltersContainer, 
  SelectContainer, 
  ShopFilterContainer
} from "./ShopFiltersBlock.style.js";

function renderRating(size, rating) {
  return Array(rating)
    .fill(<OrangeStar size={size} />)
    .concat(Array(5 - rating).fill(<GreyStar size={size} />))
    .map((e, i) => {
      return { ...e, key: i };
    });
}

let avaibleRatings = [
  {
    value: 1,
    view: renderRating(12, 1)
  }, 
  {
    value: 2,
    view: renderRating(12, 2)
  }, 
  {
    value: 3,
    view: renderRating(12, 3)
  }, 
  {
    value: 4,
    view: renderRating(12, 4)
  }, 
  {
    value: 5,
    view: renderRating(12, 5)
  }
];

let avaiblePrices = [
  {
    value: {
      min: 0,
      max: 14.99
    },
    view: "$0 - $14.99"
  }, 
  {
    value: {
      min: 14.99,
      max: 29.99
    },
    view: "$14.99 - $29.99"
  }, 
  {
    value: {
      min: 29.99,
      max: 44.99
    },
    view: "$29,99 - $44.99"
  }
]

function ShopFilter() {
  let { activeFilters, setActiveFilters, productsFound, setActivePage, setProducts, setMaxActivePage } = useContext(ShopContext);

  function changeCategory(category) {
    setActivePage(1)
    setMaxActivePage(1)
    setProducts([])
    setActiveFilters((prev) => {
      return { ...prev, category: category };
    });
  }
  function changePrice(price) {
    setActivePage(1)
    setMaxActivePage(1)
    setProducts([])
    setActiveFilters((prev) => {
      return { ...prev, price: {value: price.value, view: price.view} };
    });
  }
  function changeRating(rating) {
    setActivePage(1)
    setMaxActivePage(1)
    setProducts([])
    setActiveFilters((prev) => {
      return { ...prev, rating: {value: rating.value, view: rating.view} };
    });
  }
  function changeShownProductsCount(count) {
    setActiveFilters((prev) => {
      return { ...prev, productsPerPage: count };
    });
  }
  function changeSelectedSort(sort) {
    setActivePage(1)
    setMaxActivePage(1)
    setProducts([])
    setActiveFilters((prev) => {
      return { ...prev, sort: sort };
    });
  }

  return (
    <ShopFilterContainer>
      <FiltersContainer>
        <SelectContainer>
          <Select
            buttontext={activeFilters.category || "Select Category"}
            selectList={["Vegetables", "Fresh Fruit", "River Fish", "Meat", "Water and Drinks", "Snacks"]}
            changer={changeCategory}
          />
          <StyledImg src={SelectArrow} />
        </SelectContainer>
        <SelectContainer>
          <Select
            buttontext={activeFilters.price?.view || "Select Price"}
            selectList={avaiblePrices}
            changer={changePrice}
          />
          <StyledImg src={SelectArrow} />
        </SelectContainer>
        <SelectContainer>
          <Select
            buttontext={activeFilters.rating?.view || "Select Rating"}
            selectList={avaibleRatings}
            changer={changeRating}
          />
          <StyledImg src={SelectArrow} />
        </SelectContainer>
        <SelectContainer>
          <Select
            buttontext={`Sort by: ${activeFilters.sort}`}
            selectList={["Latest", "Newest", "Low to High", "High to Low"]}
            changer={changeSelectedSort}
          />
          <StyledImg src={SelectArrow} />
        </SelectContainer>
        <SelectContainer>
          <Select
            buttontext={`Show: ${activeFilters.productsPerPage}`}
            selectList={[8, 16]}
            changer={changeShownProductsCount}
          />
          <StyledImg src={SelectArrow} />
        </SelectContainer>
      </FiltersContainer>
      <ActiveFiltersContainer>
        <ActiveFilters>
          <Body.Small $textcolor={colors.grey[5]}>Active Filters:</Body.Small>
          {activeFilters.category ||
          activeFilters.price ||
          activeFilters.rating ||
          activeFilters.sort !== "Latest" ? (
            (() => {
              let result = [];
              for (const key in activeFilters) {
                key !== "productsPerPage" && activeFilters[key] && activeFilters[key] !== "Latest" && result.push(
                  <ActiveFilter key={key}>
                    <Body.Small $medium="true">
                      { activeFilters[key]["view"] || activeFilters[key] }
                    </Body.Small>
                    <DeleteFilterButton
                      onClick={(e) => {
                        if (key === "category") {
                          setActiveFilters((prev) => {
                            return { ...prev, category: null };
                          });
                        }
                        if (key === "price") {
                          setActiveFilters((prev) => {
                            return { ...prev, price: null };
                          });
                        }
                        if (key === "rating") {
                          setActiveFilters((prev) => {
                            return { ...prev, rating: null };
                          });
                        }
                        if (key === "sort") {
                          setActiveFilters((prev) => {
                            return { ...prev, sort: "Latest" };
                          });
                        }
                        setActivePage(1)
                        setMaxActivePage(1)
                        setProducts([])
                      }}
                    >
                      <DeleteFilterCross />
                    </DeleteFilterButton>
                  </ActiveFilter>,
                );
              }
              return result;
            })()
          ) : (
            <Body.Small $medium="true">None</Body.Small>
          )}
        </ActiveFilters>
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
