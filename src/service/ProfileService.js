import axios from 'axios';
import employee from './employeeInfo.json';
import assignments from './assignmentsOfEmployee.json';

const USERNAME = 'someUser';

const BASE_API_URL = `http://localhost:8080/api`;

class EmployeeDataService {
 /*async*/ retrieveProfile(id) {

 /*  

     const response = await axios.get(`${BASE_API_URL}/employee/${id}`);
   const data = await response.json();

    // if error is thrown handle in UI with try catch
   //return data;
  */

    return employee;
  }

  async retrieveProfilePicture(id) {
   /*  const imageRes = await fetch(`imageURI/${id}`);
   // parse image*/
       // if error is thrown handle in UI with try catch
   // return image;
  }

  async retrieveEmployeeAssignments(id) {
    /*  try {
     const response = await axios.get(`${BASE_API_URL}/assignments/${id}`);
   const assignments = await response.json();

   //return assignments;
   } catch (error) {
     throw error; // handle error in UI
   }*/
    return assignments;
  }
}

export default new EmployeeDataService();
