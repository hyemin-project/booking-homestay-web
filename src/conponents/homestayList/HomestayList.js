import "./homestayList.css";
import Dropdown from 'react-bootstrap/Dropdown';

const HomestayList = () => {
    return (
        <>
            <div className="listResultTitle">
                <div className ="searchResult">
                <h4>Vancouver: 20 search results found</h4>
                </div>
         

                 {/* sorted button here */}
                 <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Sorted by recommended
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Sorted by price (high to low)</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Sorted by price (low to high)</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Sorted by rate&nbsp;  (high to low)</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Sorted by rate&nbsp; (low to high)</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
            </div>

        </>
    )


}

export default HomestayList;