import axios from 'axios'
import data from './SkillsHistory.json';

const USERNAME = 'someUser'

const USERNAME_API_URL = `http://localhost:8080/SKILLS/${USERNAME}`


class SkillsDataService {

    retrieveAllSkills(name) {
        //return axios.get(`${USERNAME_API_URL}/Skills`);
        return data;
    }

}

export default new SkillsDataService()