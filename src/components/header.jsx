import CartIcon from "./CartIcon"
const header = ({cart}) => {
  return (
    <div className="flex justify-between items-center mb-6">
        <h1 className='text-3x1 font-semibold'>React ve Talwind Css Sepet Uygulaması</h1>
    <CartIcon cart={cart}/>
    </div>
  )
}

export default header