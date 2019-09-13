import React from 'react';

const MySkillsTable = ({ type, deleteClick, updateClick, skills }) => {
    return (
        <div className="row">
            <table className="table table-hover table-sm" >
                <thead className="thead-dark">
                    <tr>
                        <th>Skill</th>
                        <th>Date</th>
                        <th>Grade</th>
                        <th>Status</th>
                        <th>Comment</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody id="technicalReq">
                    {

                        skills.map(
                            (skill, index) =>
                                <tr key={index}>
                                    <td>{skill.skillName}</td>
                                    <td>{skill.date}</td>
                                    <td>{skill.level}</td>
                                    <td>{skill.status}</td>
                                    <td>{skill.comment}</td>
                                    {skill.status !== "Approved" ? <td><button className="btn btn-danger btn-sm" onClick={deleteClick.bind(this, type, skill.employeeSkillId)}> Delete </button>&nbsp;
                  <button className="btn btn-alert btn-sm" onClick={updateClick.bind(this, type, skill.employeeSkillId)} > Update</button></td> : <td></td>}
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default MySkillsTable;