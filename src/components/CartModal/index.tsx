import React, { useContext } from "react";
import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "@/context/CartProvider";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type Props = {
  isOpen: boolean;
  close: () => void;
};

// taaa vendo q os itens taooo vindo simmm viadaooo
// elesss nao vao mais virrr daqui, vao virr do context
// praaa puxar elesss pra ca, temm que usar isso mas tipo e quanto eu quiser fazer com outra pagina ? vaii ser a mesmaaa coisa
const CartModal = ({ isOpen, close }: Props) => {
  const calculateSubtotal = (cartItems: Product[]): number => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    console.log("Compra finalizada!");
  };

  const santoAntonio: Product = {
    id: 1,
    name: "Santo Antônio",
    price: 25.99,
    quantity: 1,
    image:
      "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/betanial/catalog/novo-fornecedor/santo-antonio-30-cm-resina-frente.png",
  };

  const cart = useContext(CartContext);
  const cartItems = cart.items;

  const combinedCartItems = [...cartItems, santoAntonio];

  return isOpen ? (

    

    <div className={`fixed inset-0 bg-gray-600/30 z-40`}>
      <div className="fixed top-0 right-0 w-[353px] bg-white h-full p-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="w-5 h-5 text-black"
            />
            <h4>Carrinho</h4>
          </div>
          <button onClick={close}>
            <FontAwesomeIcon icon={faTimes} className="w-4 h-4 text-black" />
          </button>
        </div>
        {combinedCartItems && combinedCartItems.length > 0 ? (
          <ul>
            {combinedCartItems.map((item) => (
              <li key={item.id} className="flex items-center gap-4 mt-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h5>{item.name}</h5>
                  <p>Preço unitário: R${item.price.toFixed(2)}</p>
                  <p>Quantidade: {item.quantity}</p>
                  <p>Total: R${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum item no carrinho.</p>
        )}
        {combinedCartItems && combinedCartItems.length > 0 && (
          <div className="mt-4 text-center">
            <strong>
              Subtotal: R${calculateSubtotal(combinedCartItems).toFixed(2)}
            </strong>
          </div>
        )}
        <div className="mt-4">
          <button
            onClick={handleCheckout}
            className="bg-blue-500 text-white px-4 py-2 w-[317px] rounded-md hover:bg-blue-600"
            disabled={combinedCartItems.length === 0}
          >
            Finalizar Carrinho
          </button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default CartModal;
