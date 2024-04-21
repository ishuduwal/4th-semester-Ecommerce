import React, { useEffect, useState } from 'react';
import { AddCart, DeleteCart, GetCart } from '../../function/Cart';
import { AddPayment, VerfiyPayment } from '../../function/Payment';
import { useParams } from 'react-router-dom';

export const Cart = () => {
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showBill, setShowBill] = useState(false);
    const [addedItemsInfo, setAddedItemsInfo] = useState(null);
    
    const params = useParams();

    const updateTotalPrice = (cartItems) => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.price * item.quantity;
        });
        setTotalPrice(total);
    };
    const generateBill = () => {
        const user = JSON.parse(window.localStorage.getItem("userInfo"));
        const currentDate = new Date().toLocaleDateString();

        const billData = {
            userEmail: user.email,
            userName: user.name,
            items: items.map(item => ({
                itemId: item._id,
                title: item.title,
                image: item.image,
                price: item.price,
                quantity: item.quantity,
                totalPrice: item.price * item.quantity,
                dateAdded: currentDate,
            })),
            totalAmount: totalPrice,
        };
        console.log("Generated Bill Data:", billData); 
        if (billData.userEmail && billData.userName && billData.items.length > 0) {
            setAddedItemsInfo(billData);
        } else {
            console.error("Failed to add items to cart or invalid response");
        }
    };
    const handleGenerateBill = () => {
        generateBill();
        setShowBill(true);
    };
    const handleCloseBill = () => {
        setShowBill(false);
    };

    const PaymentHandler = async (e) => {
        e.preventDefault();
        const user = JSON.parse(window.localStorage.getItem("userInfo"));
        const cartItems = {
            email: user.email,
            name: user.name,
            items: items
        };
        try {
            const res = await AddCart(cartItems);
            console.log("AddCart response:", res);
            if (res && res.success) {
                window.localStorage.setItem("items", JSON.stringify(res.items));
                setItems(res.items, () => {
                    console.log("Items added successfully");
                    generateBill();    
                });
                
            } else {
                console.error("Failed to add items to cart");
            }
            const res2 = await VerfiyPayment(cartItems)
            window.localStorage.setItem("PaidItems",JSON.stringify(cartItems))
            window.location.replace(res2.url)
            
        } catch (error) {
            console.error("Error adding items to cart:", error);
        }
    };
    
    const FetchCart = async () => {
        try {
            const user = JSON.parse(window.localStorage.getItem("userInfo"));
            console.log("User:", user);
            
            if (!user) {
                window.localStorage.removeItem("items");
                console.error("User not logged in");
                return;
            }
            
            const email = { email: user.email };
            
            const cart = await GetCart(email);
            
            if (cart && cart.length > 0) {
                // Ensure that cart is an array and has items
                const cartItemsArray = cart;
                setItems(cartItemsArray);
                
                window.localStorage.setItem("items", JSON.stringify(cartItemsArray));
                
                let total = 0;
                cartItemsArray.forEach(item => {
                    total += item.price * item.quantity;
                });
                setTotalPrice(total);
            } else {
                console.error("Cart data or items not available:", cart);
                setItems([]);
            }
        } catch (error) {
            console.error("Error fetching cart data:", error);
            // Log the specific error message received from the API or other issues
        }
    };
    
    const createPayment = async () => {
        if (params.isPayment === "success") {
            window.localStorage.removeItem("items")
            setItems([])
            const cartItems = JSON.parse(window.localStorage.getItem("PaidItems"))
            const res = await AddPayment(cartItems);
            if (res !== "payment done!!") return 
            console.log(res)
        }
    }
    
    useEffect(() => {
        const isItems = window.localStorage.getItem("items");
        
        if (isItems) {
            const parsed = JSON.parse(isItems);
            setItems(parsed);
            updateTotalPrice(parsed);
        } else {
            FetchCart();
        }
        createPayment();
    }, []);
    useEffect(() => {
        if (items.length > 0) {
            generateBill();
        }
    }, [items]);
    const RemoveItems = async (e, id) => {
        e.preventDefault();
        const filteredItems = items.filter(item => item._id !== id);
        const user = JSON.parse(window.localStorage.getItem('userInfo')).email;
        const data = { email: user, id };

        try {
            const res = await DeleteCart(data);
            if (res) {
                window.localStorage.setItem("items", JSON.stringify(filteredItems));
                setItems(filteredItems);
            } else {
                console.error("Failed to delete item from cart");
            }
        } catch (error) {
            console.error("Error deleting item from cart:", error);
        }
    };

    return (
        <>
            <div className='cart'>
                <p>Click on Proceed to order and screenshot the bill</p>
                <div className='added-cart-item flex justify-center items-center m-8 flex-col p-4'>
                    {items.length === 0 ? "Empty List" : (
                        items.map(item => (
                            <div key={item._id} className='flex gap-4 justify-center items-center cart-content'>
                                <div className='img-cont'>
                                    <img src={require(`../../assets/img/uploadedImage/${item.image}`)} alt="Dell Inspiron" className='added-cart-image' />
                                </div>
                                <div>
                                    <p>{item.title} {item.cpu} / {item.ram} RAM / {item.storage} SSD / {item.display} FHD Display</p>
                                    <p>Total = NPR.{item.price * item.quantity}</p>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                                <div className='items-start flex added-item-remove'>
                                    <button className='item-remove' onClick={(e) => RemoveItems(e, item._id)}>Remove</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className='cart-ship flex justify-between items-center px-8 py-4'>
                    <div className='flex'>
                        <p className='font-bold'>Total Amount:</p>
                        <p className='font-bold pl-2'>{totalPrice}</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='proceed' onClick={(e) => PaymentHandler(e)}>Proceed</button>
                        <button className='generate-bill' onClick={handleGenerateBill}>Generate Bill</button>
                    </div>
                </div>
                {showBill && addedItemsInfo && (
                <div className="bill-container">
                    <div className="bill-header">
                            <h2>Bill Details</h2>
                            <button className="close-bill" onClick={handleCloseBill}>
                                X
                            </button>
                        </div>
                        <div className="user-info">
                            <p>User Email: {addedItemsInfo.userEmail}</p>
                            <p>User Name: {addedItemsInfo.userName}</p>
                        </div>
                        <div className="added-items">
                            {addedItemsInfo.items.map((item, index) => (
                               <div key={index} className="item-details">
                               <table>
                                 <thead>
                                   <tr>
                                    <th>S.N</th>
                                     <th>Title</th>
                                     <th>Quantity</th>
                                     <th>Total Price</th>
                                   </tr>
                                 </thead>
                                 <tbody>
                                   <tr>
                                    <td data-label ="S.N:">{index+1}</td>
                                     <td data-label ="Title:">{item.title}</td>
                                     <td data-label ="Quantity:">{item.quantity}</td>
                                     <td data-label ="Total Price:" >{item.totalPrice}</td>
                                   </tr>
                                 </tbody>
                               </table>
                             </div>
                             
                            ))}
                        </div>
                        <div className="bill-summary">
                            <p>Total Amount: {addedItemsInfo.totalAmount}</p>
                            <p>Cash on delivery</p>
                            <p>We will contact you soon!</p>
                            <p>Hope you enjoyed the shopping</p>
                        </div>
                </div>
            )}
            </div>
        </>
    );
};

