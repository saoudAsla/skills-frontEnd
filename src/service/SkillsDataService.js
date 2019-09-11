import axios from 'axios'
import employeePersonalInfo from './employeeInfo.json';
import assignmentsOfEmployee from './assignmentsOfEmployee.json';
import EmployeesOfManager from './EmployeesOfManager';
import RequestedTechnicalSkillsConfirmation from './RequestedTechnicalSkillsConfirmation';
import RequestedProductSkillsConfirmation from './RequestedProductSkillsConfirmation';
import TechnicalSkills from './TechnicalSkills';
import ProductSkills from './ProductSkills';

const USERNAME = 'someUser'

const USERNAME_API_URL = `http://localhost:8080/SKILLS/${USERNAME}`


class SkillsDataService {

    retrieveProductSkillsById(id) {
        //return axios.get(`${API_URL}/Skills`);
        return ProductSkills;
    }


    retrieveTechnicalSkillsById(id) {
        //return axios.get(`${API_URL}/Skills`);
        return TechnicalSkills;
    }


    retrieveProductSkillsHistoryById(id) {
        //return axios.get(`${API_URL}/Skills`);
       
    }
    
    retrieveTechnicalSkillsHistoryById(id) {
        //return axios.get(`${API_URL}/Skills`);
     
    }

    retrieveRequestedTechnicalSkillsConfirmation(managerId){
        
        return RequestedTechnicalSkillsConfirmation;
    }


    retrieveRequestedProductSkillsConfirmation(managerId){
        
        return RequestedProductSkillsConfirmation;
    }

    retrieveAssignementsOfEmployeeById(id) {
        //return axios.get(`${API_URL}/Skills`);
        return assignmentsOfEmployee;
    }


    retrieveEmployeesOfManagerById(id) {
        //return axios.get(`${USERNAME_API_URL}/Skills`);
        return EmployeesOfManager;
    }

    retrieveEmployeeProfileInfoById(id) {
        //return axios.get(`${USERNAME_API_URL}/Skills`);
        return employeePersonalInfo;
    }

    approveSkillReguestById(id,comment){
        //return axios.get(`${USERNAME_API_URL}/Skills`);   
    }

    declineSkillReguestById(id){
        //return axios.get(`${USERNAME_API_URL}/Skills`);
    }

    addNewSkill(){
        //return axios.get(`${USERNAME_API_URL}/Skills`);
    }

    updateSkillByIdSkill(){
        //return axios.get(`${USERNAME_API_URL}/Skills`);
    }

    removeUnapprovedSkillById(id){
        //return axios.get(`${USERNAME_API_URL}/Skills`);
     
    }
}

export default new SkillsDataService()