import { useContext } from "react";
import { ShopppingCartContext } from "../../Context";


const Card = (data) => {
	const context = useContext(ShopppingCartContext)
	const cleanImageUrl = (url) => url.replace(/[\[\]\"\\]/g, "");

  return(
      <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
				<figure className="relative mb-2 w-full h-4/5">
					<span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-ms m-2 px-3 py-0.5">{data.data.category.name}</span>
					<img 
						className="w-full h h-full object-cover rounded-lg"  
						src={data.data.images?.[0] || "https://via.placeholder.com/150" }
					 	alt={data.data.title} />
					<div 
						className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
						onClick={()=> context.setCount(context.count + 1)}>
						+
					</div>
				</figure>
				<p className="flex justify-between">
					<span className="text-sm font-light">{data.data.title}</span>
					<span className="text-lg font-medium">${data.data.price}</span>
				</p>
			</div>
  )
}

export default Card