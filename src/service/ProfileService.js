import axios from 'axios';
import employee from './employee.json';
import assignments from './assignments.json';

const USERNAME = 'someUser';

const BASE_API_URL = `http://localhost:8080/api`;

class EmployeeDataService {
  retrieveProfile(id) {
    return employee;
  }

  retrieveProfilePicture(id) {
    return employee;
  }

  retrieveEmployeeAssignments(id) {
    return assignments;
  }
}

export default new EmployeeDataService();
