import '../style/AddAllButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const AddAllButton = () => {
  const songs = useSelector((state) => state.songs.songs);
  const handleAddAll = () => {
    //There may be logic here depending on what we want
    console.log('add all button clicked')
  }
  const handleDropdownClick = (e) => {
    // Prevent the click event from reaching the button
    e.stopPropagation();
    // We can add logic for the dropdown click here
    console.log('Dropdown clicked');
  };
    return (
      <div className="add-all-button">
            <button>
              <div className="button-content" onClick={handleAddAll}>
                  <FontAwesomeIcon icon={faPlus} />
                  <span> Add All</span>
              </div>
            </button>
            <div className='separator'></div>
            <button onClick={handleDropdownClick} className="dropdown-arrow" >
                <span >▼</span>
            </button>
      </div>
        
    );  
  };

export default AddAllButton;
