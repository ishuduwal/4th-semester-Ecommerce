import React, { useEffect, useState } from 'react';
import { useNavigate,useLocation} from 'react-router-dom';
import { searchProducts } from '../../api/Product';


const Searchresult = () => {
  const location = useLocation();
  const searchQuery = location.state?.query;
  const navigate = useNavigate(); 

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await searchProducts(searchQuery);
        setSearchResults(data.results);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery]);
  return (
    <div className='search-div'>
      <h2>Search Results for "{searchQuery}"</h2>
      <div className='searched-result'>
      {searchResults.length > 0 ? (
          <ul>
             <p> Welcome! This page is crafted to help you easily find the items you're looking for. Link is not functional for now.</p>
          {searchResults.map((result) => (
                <li key={result?.S?.N} >
               <h3>{result?.Title}</h3>
              {result?.Brand && <p>Brand: {result?.Brand}</p>}
              {result?.CPU && <p>CPU: {result?.CPU}</p>}
              {result?.Display && <p>Display: {result?.Display}</p>}
              {result?.Storage && <p>Storage: {result?.Storage}</p>}
              {result?.Ram && <p>Ram: {result?.Ram}</p>}
              {result?.Graphics && <p>Graphics: {result?.Graphics}</p>}
              {result?.Price && <p>Price: {result?.Price}</p>}
              {result?.Length && <p>Length: {result?.Length}</p>}
              {result?.Width && <p>Width: {result?.Width}</p>}
              {result?.Type && <p>Type:{result?.Type}</p>}
              {result?.Weight && <p>Weight:{result?.Weight}</p>}
              {result?.Connection && <p>Connection:{result?.Connection}</p>}
              </li>
          ))}
        </ul>
      ) : (
        <p className='no-result'>No results found.</p>
      )}
      </div>
    </div>
  );
};

export default Searchresult;
