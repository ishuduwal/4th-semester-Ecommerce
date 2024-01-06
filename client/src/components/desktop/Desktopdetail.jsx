import React, { useState} from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import './Desktop.css'
export const Desktopdetail = ({ user }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;

    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(parseInt(state.price));
    const [items, setItems] = useState([]);
    const [message, setMessage] = useState('');
    const[selectedImage, setSelectedImage]=useState(false);

    const handleAddClick = () => {
        setQuantity(quantity + 1);
        setTotalPrice((price) => price + parseInt(state.price));
    };
    const handleSubtractClick = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setTotalPrice((price) => price - state.price);
        }
    };

    const AddToCartHandler = (e) => {
        if (!user)    {
            navigate('/login')
          }
        else {
        e.preventDefault();
    
        const storedItems = JSON.parse(window.localStorage.getItem("items")) || [];
        const updatedState = { ...state, quantity };
        const updatedItems = [...storedItems, updatedState];
        setItems(updatedItems);
    
        window.localStorage.setItem("items", JSON.stringify(updatedItems));
    
        console.log(updatedItems);
        setMessage('Item added to cart'); // Set the message when the item is added to the cart
        console.log(updatedItems);
        }
    };
    
      const dismissMessage = () => {
        setMessage('');
      };
      const openImage = (image) => {
        setSelectedImage(image);
      };
    
      const closeImage = () => {
        setSelectedImage(null);
      };
    
  return (
      <div className='desktop-detail flex'>
          {message && (
        <div className='message-container'>
          <p>{message}</p>
          <button className='dismiss-button' onClick={dismissMessage}>
            OK
          </button>
        </div>
        )}
          <div>
              <img src={require('../../assets/img/uploadedImage/'+state.image)} className='detail-img' onClick={() => openImage(require('../../assets/img/uploadedImage/' + state.image))}/>
          </div>
          {selectedImage && (
                  <div className="full-image-overlay" onClick={closeImage}>
                    <div className="full-image-container">
                     <span className="close-button" onClick={closeImage}>
                       &times;
                     </span>
                     <img src={selectedImage} className="full-image" alt="Hostel" />
                    </div>
                 </div>
          )}
          <div className='detail-text'>
              <h2 className='font-bold text-xl'>{state.title}</h2>
              <h3 className='font-bold'>Product Detail</h3>
              <p className='flex'><p className='mr-1 font-semibold'>Brand:</p>{ state.brand}</p>
              <p className='flex'><p className='mr-1 font-semibold'>CPU:</p>{state.cpu}</p>
              <p className='flex'><p className='mr-1 font-semibold'>Graphics:</p>{state.graphic}</p>
              <p className='flex'><p className='mr-1 font-semibold'>Ram:</p>{ state.ram }</p>
              <p className='flex'><p className='mr-1 font-semibold'>Storage:</p>{state.storage}</p>
              <p className='flex'><p className='mr-1 font-semibold'>Weight:</p>{state.weight}</p>
          <div className='desktop-price'>
              <p>NPR {totalPrice}</p>
          </div>
          <div className='flex gap-16 quantity-cart'>
              <div className='flex'>
                  <p className='mt-2 mr-4'>Quantity</p>
                  <button className='subtract mr-4' onClick={handleSubtractClick}><i class="fa-solid fa-minus"></i></button>
                  <input type='number' className='number' value={quantity} readOnly/>
                  <button className='add ml-4' onClick={handleAddClick}><i class="fa-solid fa-plus"></i></button>
              </div>
              <div>
                  <button className='add-to-cart-detail'  onClick={(e)=>AddToCartHandler(e)}>Add-to-cart</button>  
              </div>
              </div>
        </div>
    </div>
  )
}
