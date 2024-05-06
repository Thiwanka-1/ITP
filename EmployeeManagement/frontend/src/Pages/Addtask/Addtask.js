import React, { useState } from "react";
import axios from "axios";
import Header from "../../Component/Header/Header";

function Addtask() {
    const [equipmentname, setequipmentname] = useState("");
    const [taskname, settaskname] = useState("");
    const [description, setdescription] = useState("");
    const [scheduledate, setscheduledate] = useState("");
    const [completionstatus, setcompletionstatus] = useState("");

    function resetForm() {
        setequipmentname("");
        settaskname("");
        setdescription("");
        setscheduledate("");
        setcompletionstatus("");
    }

    function sendData(e) {
        e.preventDefault();

        const newtask = {
            equipmentname,
            taskname,
            description,
            scheduledate,
            completionstatus
        };

        axios.post('http://localhost:8070/maintenance1/add', newtask)
            .then(() => {
                alert("Task Added");
                resetForm(); // Reset the form after successful submission
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (
        <div style={{ position: "relative" }}>
            <div
                style={{
                    backgroundImage: "url('Images/tgd.jpg')",
                    backgroundSize: "cover",
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#000"
                }}
            >
                <div
                    className="container"
                    style={{
                        marginTop: "50px",
                        width: "300px",
                        padding: "20px",
                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                        borderRadius: "10px",
                        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)"
                    }}
                >
                    <h2 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "30px", color: "#000" }}>
                        Add Task
                    </h2>
                    <form onSubmit={sendData}>
                        <div style={{ marginBottom: "20px", color: "#000" }}>
                            <label htmlFor="equipmentname">Equipment Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="equipmentname"
                                placeholder="Enter equipment name"
                                value={equipmentname}
                                onChange={(e) => setequipmentname(e.target.value)}
                                style={{ marginBottom: "10px", backgroundColor: "#a6a8a6", color: "#000" }}
                            />
                        </div>

                        <div style={{ marginBottom: "20px", color: "#000" }}>
                            <label htmlFor="taskname">Task Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="taskname"
                                placeholder="Enter task name"
                                value={taskname}
                                onChange={(e) => settaskname(e.target.value)}
                                style={{ marginBottom: "10px", backgroundColor: "#a6a8a6", color: "#000" }}
                            />
                        </div>

                        <div style={{ marginBottom: "20px", color: "#000" }}>
                            <label htmlFor="description">Description:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                placeholder="Enter description"
                                value={description}
                                onChange={(e) => setdescription(e.target.value)}
                                style={{ marginBottom: "10px", backgroundColor: "#a6a8a6", color: "#000" }}
                            />
                        </div>

                        <div style={{ marginBottom: "20px", color: "#000" }}>
                            <label htmlFor="scheduledate">Schedule Date:</label>
                            <input
                                type="date"
                                className="form-control"
                                id="scheduledate"
                                value={scheduledate}
                                onChange={(e) => setscheduledate(e.target.value)}
                                style={{ marginBottom: "10px", backgroundColor: "#a6a8a6", color: "#000" }}
                            />
                        </div>

                        <div style={{ marginBottom: "20px", color: "#000" }}>
                            <label htmlFor="completionstatus">Completion Status:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="completionstatus"
                                placeholder="Enter completion status"
                                value={completionstatus}
                                onChange={(e) => setcompletionstatus(e.target.value)}
                                style={{ marginBottom: "10px", backgroundColor: "#a6a8a6", color: "#000" }}
                            />
                        </div>

                        <div style={{ textAlign: "center" }}>
                            <button
                                type="submit"
                                className="btn btn-dark btn-lg"
                                style={{ marginTop: "20px", display: "block", marginLeft: "auto", marginRight: "auto" }}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Addtask;
