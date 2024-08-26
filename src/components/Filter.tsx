import { useRef, useEffect } from "react";
import { categories } from "../context/dummyData";
import FilterCard from "./FilterCard";
import useGetFilterTag from "../hooks/useGetFilterTag";
import ChangeTimePeriod from "./ChangeTimePeriod";

const Filter = () => {
  const { filterTag, setFilterTag, timePeriodValue } = useGetFilterTag();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleScroll = (e: WheelEvent) => {
      if (scrollContainer) {
        if (e.deltaY !== 0) {
          scrollContainer.scrollLeft += e.deltaY;
          e.preventDefault();
        }
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  return (
    <div className="w-full flex flex-col justify-between gap-3">
      <div className="flex items-center justify-between gap-3 pr-2 w-full">
        <h1 className="text-lg sm:text-xl font-medium pt-2">Categories</h1>
        <ChangeTimePeriod
          value={timePeriodValue}
          functionCTP={(e) => {
            const newValue = e.currentTarget.value;
            const newParams = new URLSearchParams(filterTag);
            newParams.set("timePeriod", newValue);
            setFilterTag(newParams);
          }}
        />
      </div>

      <div
        ref={scrollContainerRef}
        className="flex w-full pb-2 flex-row overflow-x-auto items-center gap-4"
      >
        {categories.map((category) => (
          <FilterCard {...category} key={category.name} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
