import { useSelector } from 'react-redux'
import cartIcon from '../assets/cart-icon.png'

const CartIcon = () => {
    const itemsCount = 8

    return (
        <div className="cart-icon">
            <h4 className={itemsCount > 9 ? 'down-size' : undefined}>
                {itemsCount}
            </h4>
            <img src={cartIcon} alt='cart-icon' />
            <p>Cart</p>
        </div>
    )
}

export default CartIcon