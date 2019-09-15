import React, { Component } from 'react';

const id = "id"
const level = "level"
const date = "date"
const skillName = "skillName"

class MySkillsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addMode: false,
            [id]: 1,
            [skillName]: null,
            [date]: null,
            [level]: null,
            skills: [{ id: 1, skillName: "CSS" }],

            maxLevel: 5,
            minLevel: 1,
            minYear: 2009,
            err: []
        };
        this.trySubmit = this.trySubmit.bind(this);
        this.newSkill = this.newSkill.bind(this);
        this.inputChanged = this.inputChanged.bind(this);
        this.skillNameByID = this.skillNameByID.bind(this);
    }

    newSkill() {
        this.setState({ addMode: true })
    }

    inputChanged(e) {
        const { type, value } = e.target;
        const err = [];
        switch (type) {
            case 'text':
                if (value === '') {
                    err.push(`Skill name field is empty!`);
                }
                break;
            case 'number':
                if (value === '') {
                    err.push(`Grade field is empty!`);
                } else if (value > this.state.maxLevel) {
                    err.push(`Grade must be lower than or equal to ${this.state.maxLevel}`);

                } else if (value < this.state.minLevel) {
                    err.push(`Grade must be higher than or equal to ${this.state.minLevel}`);
                }
                break;

            case 'date':
                const date = new Date();
                if (value === '') {
                    err.push(`Date field is empty!`);
                }
                else if (value.split("-")[0] < this.state.minYear) {
                    err.push(`date must be later than  ${this.state.minYear}`)


                } else if (new Date(value) > date) {
                    err.push(`date must be earlier than  ${date}`)

                }
                break;

            default:
                break;
        }
        this.setState({ err });
    }

    trySubmit(e) {

        if (this.state.err.length === 0)
            this.props.submitNewSkill.call(this, this.state.id, this.state.date, this.state.level);
    }

    skillNameByID(id) {
        const name = this.state.skills.find(skill => skill.id === id).skillName;

        console.log(name)

        return name;
    }

    render() {
        const { type, updateClick, deleteClick, skills } = this.props;
        return (
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-hover table-sm-12" >
                        <thead className="thead-dark">
                            <tr>
                                <th>Skill ID</th>
                                <th>Skill Name</th>
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
                                            {skill.status !== "APPROVED" ? <td><button className="btn btn-danger btn-sm" onClick={deleteClick.bind(this, type, skill.employeeSkillId)}> Delete </button>&nbsp;
                  <button className="btn btn-alert btn-sm" onClick={updateClick.bind(this, type, skill.employeeSkillId)} > Update</button></td> : <td></td>}
                                        </tr>
                                )
                            }
                            {
                                this.state.addMode ? <tr>
                                    <td><input type="number" name={id} value={this.state.id} width="5px" onBlur={this.inputChanged} min={this.state.minVal} max={this.state.maxVal} onChange={e => this.setState({ id: e.target.value })} /></td>
                                    <td><input type="text" value={this.skillNameByID(this.state.id)} name={skillName} width="5px" disabled /></td>
                                    <td><input type="date" name={date} onBlur={this.inputChanged} onChange={e => this.setState({ date: e.target.value })} /></td>
                                    <td><input type="number" name={level} width="5px" onBlur={this.inputChanged} min={this.state.minVal} max={this.state.maxVal} onChange={e => this.setState({ level: e.target.value })} /></td>
                                    <td><input type="text" disabled width="5px" /></td>
                                    <td><input type="text" disabled width="5px" /></td>
                                    <td><button className="btn btn-primary btn-sm" onClick={this.trySubmit}>Add Skill</button></td>
                                </tr> : ''
                            }
                            {
                                <tr><button className="btn btn-primary btn-sm" onClick={this.newSkill}>New Skill</button></tr>
                            }
                        </tbody>
                    </table>



                    {
                        this.state.err.map(e =>
                            <div class="alert alert-danger" role="alert">
                                {e}
                            </div>
                        )

                    }



                </div>
            </div>
        );
    }
}

export default MySkillsTable;