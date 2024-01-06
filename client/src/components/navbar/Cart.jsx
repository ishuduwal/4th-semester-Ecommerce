import React, { useEffect, useState } from 'react';
import { AddCart, DeleteCart, GetCart } from '../../function/Cart';

export const Cart = () => {
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const updateTotalPrice = (cartItems) => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.price * item.quantity;
        });
        setTotalPrice(total);
    };
    const generateBill = () => {
        const user = JSON.parse(window.localStorage.getItem("userInfo"));

        const billContent = `
            User: ${user.name}
            Email: ${user.email}
            
            Items Bought:
            ${items.map(item => `
                - ${item.title} ${item.cpu} / ${item.ram} RAM / ${item.storage} SSD / ${item.display} FHD Display
                  Quantity: ${item.quantity}
                  Total Amount: NPR.${item.price * item.quantity}
            `).join('\n')}

            Total Amount: NPR.${totalPrice}
        `;

        return billContent;
    };
    const downloadBill = () => {
        const billContent = generateBill();
        const blob = new Blob([billContent], { type: 'text/html' });

        // Create an anchor tag
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'bill.txt';

        // Append the anchor to the body and click it
        document.body.appendChild(a);
        a.click();

        // Remove the anchor from the body
        document.body.removeChild(a);
    };
    const AddCartHandler = async (e) => {
        e.preventDefault();
        const user = JSON.parse(window.localStorage.getItem("userInfo"));
        const cartItems = {
            email: user.email,
            name: user.name,
            items: items
        };
        try {
            const res = await AddCart(cartItems);
            console.log("AddCart Response:", res);
            if (res && res.success) {
                window.localStorage.setItem("items", JSON.stringify(res.items));
                setItems(res.items);
                console.log("Items after adding to cart:", res.items);
            console.log("Total Price:", totalPrice);
                downloadBill();
            } else {
                console.error("Failed to add items to cart. response:", res);
            }
        } catch (error) {
            console.error("Error adding items to cart:", error);
        }
    };

    const FetchCart = async () => {
        try {
            const user = JSON.parse(window.localStorage.getItem("userInfo"));
            console.log("User:", user);
    
            if (!user) {
                console.error("User not logged in");
                return;
            }
    
            const email = { email: user.email };
            console.log("Email:", email);
    
            const cart = await GetCart(email);
            console.log("Cart:", cart);
    
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
    

    useEffect(() => {
        const isItems = window.localStorage.getItem("items");

        if (isItems) {
            const parsed = JSON.parse(isItems);
            setItems(parsed);
            updateTotalPrice(parsed);
        } else {
            FetchCart();
        }
    }, []);

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
                        <button className='proceed' onClick={(e) => AddCartHandler(e)}>Proceed</button>
                    </div>
                </div>
            </div>
        </>
    );
};

