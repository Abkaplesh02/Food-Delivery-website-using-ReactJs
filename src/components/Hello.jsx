import { useParams } from "react-router";
import { useState } from "react";
import useMenuHook from "../utils/useMenuHook";
import ShimmerItems from "./ShimmerItems";
import RestMenuCard from "./RestMenuCard";

const OrderOnline = () => {
  const { "*": restPath } = useParams();
  const data = useMenuHook(restPath);

  const [selectedCategory, setSelectedCategory] = useState(null); // Track the selected category

  console.log(data);

  if (data == null) {
    return <ShimmerItems />;
  }

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div>
      <div className="shadow-2xl border-2 border-gray-200 w-10/12 m-auto p-4 mb-10 flex justify-between">
        {/* Left Menu List */}
        <div className="w-4/12 border-r-2 border-gray-300">
          <ul>
            {data.page_data.order.menuList.menus.map((menu) => (
              <li key={menu.menu.id} className={`py-4 text-2xl border-b-2 border-gray-200 cursor-pointer ${selectedCategory === menu.menu.name ? "text-black font-bold" : "text-gray-500"}`}
                onClick={() => handleCategoryClick(menu.menu.name)}
              >
                {menu.menu.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Menu Items */}
        <div className="w-8/12">
          <div className="flex justify-between mb-5">
            <h1 className="px-5 text-3xl">Order Online</h1>
            <input
              type="text"
              placeholder="🔎 Search within menu"
              className="border-2 border-gray-700 rounded-full py-5 px-10 w-[25vw]"
            />
          </div>
          <span className="text-lg text-gray-500 border-r-2 border-gray-300 px-5">
            🧭 Live track your order
          </span>
          <span className="text-lg text-gray-500 px-2">⌚ 29 min</span>
          <div className="px-5 mt-5 text-lg text-gray-600 px-6">
            <input className="mr-3" type="checkbox" /> Veg Only
          </div>

          <div>
            {/* Display items for the selected category */}
            {data.page_data.order.menuList.menus
              .filter((menu) => menu.menu.name === selectedCategory)
              .map((menu) =>
                menu.menu.categories.map((category) =>
                  category.category.items.map((item) => (
                    <RestMenuCard key={item.item.id} data={item.item} />
                  ))
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;
