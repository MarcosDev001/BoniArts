import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    isOpen: boolean,
    close: () => void,
}

const CartModal = ({
    isOpen,
    close
}: Props) => {
    return isOpen ? (
        <div className={`fixed inset-0 bg-gray-600/30 z-40`}>
            <div className="fixed top-0 right-0 w-[500px] bg-white h-full p-4">
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5 text-black" />
                        <h4>Carrinho</h4>
                    </div>
                    <button onClick={close}>
                        X
                    </button>
                </div>
            </div>
        </div>
    ) : <></>;
};

export default CartModal;