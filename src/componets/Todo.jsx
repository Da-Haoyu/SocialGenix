import { RxHamburgerMenu } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";



export const Todo = () => {

    const categories = [
        {name:"Today",item:10,color:"blue"},
        {name:"Week",item:10,color:"orange"},
        {name:"Month",item:10,color:"pink"},
        {name:"All Tasks",item:10,color:"purple"},
    ]

return <div className="w-full sm:w-64 p-4 bg-gray-300 h-screen sm:h-auto flex-shrink-0">
    <RxHamburgerMenu />
    <div className="mt-2">
        <h1 className="text-xl font-semibold">All Lists</h1>
        <h1 className="text-sm">{categories.length} Categories</h1>
    </div>
    <div className=" text-center mt-4">
        {categories.map((category,index) => (
            <ul>
                <li className="bg-white mt-1 justify-between md:flex p-3" key={index} style={{borderLeftColor: category.color}}>
                    <span>{category.name}</span> <br />
                    <span>{category.item}</span></li>
                    </ul>
        ) )}
        <span className="bg-white text-gray-600 mt-1 justify-between md:flex p-3">Add new list <FaPlus /></span>        
    
    </div>
</div>
}