import React from 'react';

class ViewSkillsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { skillsHistory: [] };

        this.updateSkill = this.updateSkill.bind(this)
        this.deleteSkill = this.deleteSkill.bind(this)
    }

    componentDidMount() {

        const { type } = this.props;

        if (type === "Products") {
            const sk = [{ id: 3, skillName: "HTML", details: 5, skillStartDate: 2018, grade: 5, comment: 5, status: 5 }];

            this.setState({ skillHistory: sk })
        }
        else if (type === "Technical") {
            const sk = [{ id: 2, skillName: "Python", details: 5, skillStartDate: 2018, grade: 5, comment: 5, status: 5 }];

            this.setState({ skillHistory: sk })
        }

        //load skills
    }

    deleteSkill(id) {

        console.log(id)
        /*if(SkillServices.removeUnApproveSkillById(id)) 
            this.setState({skillHistory: [...this.state.skillHistory.filter(skill => skill.id != id)]})*/


        this.setState({ skillHistory: [...this.state.skillHistory.filter(skill => skill.id !== id)] })
    }

    updateSkill(id) {
        /*if(SkillServices.updateUnApproveSkillById(id)) 
            this.setState({skillHistory: [...this.state.skillHistory.filter(skill => skill.id != id)]})*/

        // this.setState({ skillHistory: [...this.state.skillHistory.filter(skill => skill.id !== id)] })
    }

    render() {
        return (
            <div id="tableContainer" className="mx-auto">
                <table className="table table-hover table-sm" >
                    <thead className="thead-dark">
                        {

                            ["Skill", "Date", "Grade", "Status", "Comment", "Details", "Edit"]
                                .map((col, index) => (
                                    <th key={index}>{col}</th>
                                ))

                        }
                    </thead>
                    <tbody>
                        {this.state.skillsHistory.map(
                            (skill, index) =>
                                <tr key={index}>
                                    <td>{skill.skillName}</td>
                                    <td>{skill.skillStartDate}</td>
                                    <td>{skill.grade}</td>
                                    <td>{skill.status}</td>
                                    <td>{skill.comment}</td>
                                    <td>{skill.details}</td>
                                    <td><button className="btn btn-danger btn-sm" onClick={e => this.deleteSkill(skill.id)}> Delete </button>&nbsp;
                                <button className="btn btn-primary btn-sm" onClick={e => this.updateSkill(skill.id)}>Update</button></td>
                                </tr>

                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ViewSkillsTable;

