const ProductItem = ({ product, cart, setCart }) => {
    const addToCart = (product)=>{        
        const addFind = cart.find(item => item.id === product.id);  
        if(addFind){
            setCart([...cart.filter(item => item.id !== product.id),{
                id : product.id,
                name: product.name,
                img : product.img,
                price  : product.price,
                amount : product.amount +=  1
              }])
        }else{
            product.amount = 1;
            setCart((preveState) => [...preveState, product]);
        }
    };
     return (
    <div className="border p-4  m-2 rounded-lg shadow-lg">
        <img className="w-full h-48 object-cover rounded-t-lg" src={product.image} alt="product image"/>
        <div>
            <h2 className="text-xl font-semibold mb-2">
            {product.name}
            </h2>
            <p className="text-gray-500 my-2">
                {product.price} 
            </p>
            <button className="bg-blue-500
             text-white px-4 py-[8px] 
             rounded hover:bg-blue-600 
              w-full" onClick={()=> addToCart(product)} >
                Sepete Ekle
            </button>
        </div>

    </div>
  )
}

export default ProductItem