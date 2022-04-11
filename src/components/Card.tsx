import React from "react";
import {TaskContainer} from "./TaskContainer";

export const Card = () => {
    return (
        <div className="card">
            <p className="title">This is a title.</p>
            <div className="divider"></div>
            <TaskContainer />
        </div>
    )
}
