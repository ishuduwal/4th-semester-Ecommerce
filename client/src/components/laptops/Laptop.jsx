import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Laptop.css'
import { useEffect } from 'react';
import { GetLaptop } from '../../function/Laptop';
export const Laptop = () => {

    const location = useLocation();
    const {state} = location; 
  const [laptop, setLaptop] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(4);

  const navigate = useNavigate();
  
  const LaptopSelectedHandler = (e, item) => {
    e.preventDefault();
    navigate('/laptopdetail', { state:item})
  }

  useEffect(() => {
    const FetchLaptop = async()=> {
      var res = await GetLaptop();
      res = res.filter(item => item.brand == state.toLowerCase())
      setLaptop(res);
    }

    FetchLaptop()
  }, [state])
  const totalPages = Math.ceil(laptop.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = laptop.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="laptop">
    {currentItems.map((item) => (
        <Link key={item.id} onClick={(e) => LaptopSelectedHandler(e, item)} className="laptop-item">
            <img src={require(`../../assets/img/uploadedImage/${item.image}`)} alt="Dell Inspiron" className="item-image"/>
            <div className="text-description text-base text-center mt-4">
                <p className="mb-2">{`${item.title} ${item.cpu} / ${item.ram} RAM / ${item.storage} SSD / ${item.display} FHD Display`}</p>
                <button className="add-to-cart">See More</button>
            </div>
        </Link>
    ))}
    <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} onClick={() => paginate(i + 1)}>
                {i + 1}
            </button>
        ))}
    </div>
</div>
  )
}
