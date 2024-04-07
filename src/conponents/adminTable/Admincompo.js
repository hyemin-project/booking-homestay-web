
import Table from 'react-bootstrap/Table';
import { client } from "../../class/user";
import { useState } from 'react';

const Admincompo = (props) => {
  console.log("here is admin compo ->each user data" + props.clientData)
  const newClient = new client(1, "John", "Doe", "john.doe@example.com", "password123", "Male", true, 500, "New York", "client");
  console.log("this is new client" + newClient.email);  // test email is private
  console.log("this is new client" + newClient.userEmail);  // test userEmail funciton can be accessed


  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  // Filter the client data based on the search term
  const filteredClients = props.clientData.filter((client) => {
    return client.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.lname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.budget.toString().includes(searchTerm)||
      client.location.toLowerCase().includes(searchTerm.toLowerCase())});

      return (
        <>
          <div className="mb-3 mt-3 mx-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search clients by name, budget, location..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
      
          <Table striped="columns" className="mx-3 mb-3">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>User Email</th>
                <th>Gender</th>
                <th>Vegetarian</th>
                <th>Location Preference</th>
                <th>User Budget</th>
                <th>User Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client) => ( // Ensure you use filteredClients here
                <tr key={client.id}>
                  <td>{client.id}</td>
                  <td>{client.fname}</td>
                  <td>{client.lname}</td>
                  <td>{client.userEmail}</td>
                  <td>{client.gender}</td>
                  <td>{client.vegetarian ? "Yes" : "No"}</td>
                  <td>{client.location}</td>
                  <td>{client.budget}</td>
                  <td>{client.type}</td>
                  <td><button className="btn btn-success">View Favorite</button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      );
      

}

export default Admincompo;