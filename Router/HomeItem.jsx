import { useSelector } from "react-redux";
import HomeComp from "../Comp/HomeComp";
function HomeItem() {
   const initialItems= useSelector(store=>store.defItems);
    return (
          <>
            {initialItems.map((item,index)=><HomeComp key={index} item={item} ></HomeComp>)}
          </>
    )
}
export default HomeItem;