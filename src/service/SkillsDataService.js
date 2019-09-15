import axios from 'axios'
import employeePersonalInfo from './employeeInfo.json';
import assignmentsOfEmployee from './assignmentsOfEmployee.json';
import EmployeesOfManager from './EmployeesOfManager';
import RequestedTechnicalSkillsConfirmation from './RequestedTechnicalSkillsConfirmation';
import RequestedProductSkillsConfirmation from './RequestedProductSkillsConfirmation';
import TechnicalSkills from './TechnicalSkills';
import ProductSkills from './ProductSkills';

const USERNAME = 'someUser'

const API_URL = `http://localhost:8080/api/`


class SkillsDataService {

    async retrieveProductSkillsById(id) {
        const response = await axios.get(`${API_URL}/skills/employeeskills/${id}/PRODUCT`);
         if (response.status === 200) {
           return response.data;
         }
        return null;
        //return ProductSkills;
    }


   async retrieveTechnicalSkillsById(id) {
        const response = await axios.get(`${API_URL}/skills/employeeskills/${id}/TECHNICAL`);
         if (response.status === 200) {
           return response.data;
         } 
       // return TechnicalSkills;
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

    async addNewSkill(employeeId, skillId, level, date){
        const response = await axios.post(`${API_URL}/skills/`,{employeeId,skillId,level, date});
         if (response.status === 200) {
           return true;
         } 
    }

    async updateSkillByIdSkill(id, level){
        const response = await axios.post(`${API_URL}/skills/updatelevel/`,{id,level});
         if (response.status === 200) {
           return response.data;
         } 
    }

    async removeUnapprovedSkillById(id){
        const response = await axios.delete(`${API_URL}/skills/${id}`);
         if (response.status === 200) {
           return response.data;
         }      
    }
}

export default new SkillsDataService()