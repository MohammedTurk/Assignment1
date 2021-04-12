import React from 'react';
import Title from '../Title/Title';
import "./List.css";

export default function List({ users, onDelete, onEdit, onChange, submitedInput, onCheck }) {
    if (users.length === 0) {
        return <h3 className="alert alert-c ">database is empty ..!</h3>
    }

    return (

        <div>
            <Title name="List" title="Page" />
            <div className="table container">
                <table >
                    <thead>
                        <tr>
                            <th>username</th>
                            <th>password</th>
                            <th>date</th>

                            <th>actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map(u => {
                            const editStyle = {};
                            const viewStyle = {};
                            let cancleStyle = "";
                            if (u.editing === true) {
                                viewStyle.display = "none";


                            } else {
                                editStyle.display = "none";
                            }

                            if (u.check === true) {
                                cancleStyle += "cancel"
                            }
                            else {
                                cancleStyle = "";
                            }
                            return (
                                <tr key={u.id} className={cancleStyle}>
                                    <td><span style={viewStyle}>{u.username}</span>
                                        <input type="text" style={editStyle} id="username" onKeyDown={(event) => submitedInput(event, u)} onChange={(event) => {
                                            onChange(event, u)

                                        }} />
                                    </td>
                                    <td><span style={viewStyle}>{u.password}</span>
                                        <input type="password" style={editStyle} id="password" onKeyDown={(event) => submitedInput(event, u)} onChange={(event) => {
                                            onChange(event, u)

                                        }} />
                                    </td>
                                    <td><span style={viewStyle}>{u.date}</span>
                                        <input type="date" style={editStyle} id="date" onKeyDown={(event) => submitedInput(event, u)} onChange={(event) => {
                                            onChange(event, u)

                                        }} />
                                    </td>
                                    <td>
                                        <div className="buttons">
                                            <button id="delete" onClick={() => onDelete(u)}>Delete</button>
                                            <button id="edit" onClick={() => onEdit(u)} > Edit</button>
                                            <input type="checkbox" name="checkbox" id="checkbox" onClick={() => onCheck(u)} />
                                        </div>
                                    </td>


                                </tr>
                            )
                        })}
                    </tbody>


                </table>
            </div>
        </div>
    )
}
