import axios from 'axios';
import employee from './employee.json';
import assignments from './assignments.json';

const USERNAME = 'someUser';

const BASE_API_URL = `http://localhost:8080/api`;

class EmployeeDataService {
 async retrieveProfile(id) {

 /*  try {
     const response = await fetch(`${BASE_API_URL}/employee/${id}`);
   const data = await response.json();

   const imageRes = await fetch(data.imageUrl);
   // parse image

   //return data;
   } catch (error) {
     throw error;  // handle error in UI
   }*/

    return employee;
  }

  async retrieveProfilePicture(id) {
   /*  const imageRes = await fetch(`imageURI/${id}`);
   // parse image*/
   // return image;
  }

  async retrieveEmployeeAssignments(id) {
    /*  try {
     const response = await fetch(`${BASE_API_URL}/assignments/${id}`);
   const assignments = await response.json();

   const imageRes = await fetch(data.imageUrl);
   // parse image

   //return data;
   } catch (error) {
     throw error; // handle error in UI
   }*/
    return assignments;
  }
}

export default new EmployeeDataService();
