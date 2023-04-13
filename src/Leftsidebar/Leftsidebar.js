import React, {useState,useEffect} from 'react'
import './Leftsidebar.css';
import { store } from '../Container/store';

function Leftsidebar({setData}) {
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleChange = (size) => {
    let updatedSizes = [...selectedSizes];
    const index = updatedSizes.indexOf(size);
    if (index === -1) {
      updatedSizes.push(size);
    } else {
      updatedSizes.splice(index, 1);
    }
    setSelectedSizes(updatedSizes);
  }

  useEffect(() => {
    let filteredData = store;
    if (selectedSizes.length > 0) {
      filteredData = store.filter(item => selectedSizes.includes(item.size));
    }
    setData(filteredData);
  }, [selectedSizes, setData]);

  return (
    <>
      <div className='sizeselector'>
        <p>Sizes:</p>
        <label className='checkbox'><input onClick={() => handleChange('xs')} type="checkbox"></input> XS</label>
        <label className='checkbox'><input onClick={() => handleChange('s')} type="checkbox"></input> S</label>
        <label className='checkbox'><input onClick={() => handleChange('m')} type="checkbox"></input> M</label>
        <label className='checkbox'><input onClick={() => handleChange('ml')} type="checkbox"></input> ML</label>
        <label className='checkbox'><input onClick={() => handleChange('l')} type="checkbox"></input> L</label>
        <label className='checkbox'><input onClick={() => handleChange('xl')} type="checkbox"></input> XL</label>
        <label className='checkbox'><input onClick={() => handleChange('xxl')} type="checkbox"></input> XXL</label>
      </div>
    </>
  )
}

export default Leftsidebar;
 