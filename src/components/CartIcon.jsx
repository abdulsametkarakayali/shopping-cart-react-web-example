import {FiShoppingCart} from "react-icons/fi";

// eslint-disable-next-line react/prop-types
const CartIcon = ({cart} ) => {
  return (
    <div>
      <div className="relative">
        <FiShoppingCart className="text-2x1" />
        <span className=" bg-red-500 text-white justify-center rounded-full items-center  flex w-5 h-5  absolute -top-2 -right-4 text-xs">
          {cart.length}
        </span>
      </div>
    </div>
  );
};

export default CartIcon;
