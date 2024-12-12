import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShopppingCartContext } from '../../Context'
import "./style.css"

const ProductDetail = () => {
	const context = useContext(ShopppingCartContext)

	return (
		<aside 
			className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
			<div className="flex justify-between items-center p-6">
				<h2 className="font-medium text-xl">Product Detail</h2>
				<div 
				 	onClick={() => context.closeProductDetail()}>
					<XMarkIcon className="h-6 w-6 text-black"></XMarkIcon>
				</div>
			</div>
		</aside>
	)
}

export default ProductDetail