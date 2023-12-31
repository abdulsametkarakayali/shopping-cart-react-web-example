const Cart = ({ cart, emptyCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.amount, 0);

  return (
    <div className="border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Sepet</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="mt-2 flex justify-between">
            <span>
              {item.name} ({(item.amount)} adet)
            </span>
            <span>{item.price} ₺</span>
            <span>{item.price *item.amount} ₺</span>
          </li>
        ))}
      </ul>
      <hr className="my-4" />
      <p className="font-semibold text-xl">Toplam : {total} ₺ </p>
      <button
        className="bg-red-500 text-white transition-all mt-4 py-2 rounded w-full hover:bg-red-600"
        onClick={emptyCart}
      >
        Sepeti Boşalt
      </button>
    </div>
  );
};

export default Cart;