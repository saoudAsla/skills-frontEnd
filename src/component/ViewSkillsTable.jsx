import React from 'react';

const ViewSkillsTable = ({ type, skillsArray }) => {
    return (
        <div id="tableContainer" className="mx-auto">
            <table className="table table-hover table-sm">
                <thead className="thead-dark">
                    {
                        ["Skill", "Date", "Grade", "Status", "Comment", "Details"]
                            .map((col, index) => (
                                <th key={index}>{col}</th>
                            ))

                    }
                </thead>
                <tbody>
                    {skillsArray.map(
                        (skill) =>
                            <tr key={skill.userName}>
                                <td>{skill.skillName}</td>
                                <td>{skill.skillStartDate}</td>
                                <td>{skill.grade}</td>
                                <td>{skill.status}</td>
                                <td>{skill.comment}</td>
                                <td>{skill.details}</td>
                            </tr>

                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ViewSkillsTable;

