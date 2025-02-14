import "./Projects.css";
import ml from "./assests/ml.jpg";
import tm from "./assests/tm.jpg";
export default function Project(){
    return(
        <div className="text-center" id="project">
            <h2 className="fw-bolder">PROJECTS</h2>
            <div className="d-grid justify-content-center">
                <div className="project-block">
                    <a href="https://github.com/pavankarimi/Task-Management-App" target="_blank" rel="noopener noreferrer">
                        <img src={tm} alt="GitHub Link" class="img"/>
                    </a>
                    <div className="p-3">
                        <h3>Task Management Application</h3>
                        <p align="justify" className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Task Management App is a React.js-based to-do list application that allows users to add, edit, delete, and mark tasks as complete while also selecting a specific time for each task, featuring a modern UI, responsive design, and dynamic task management for an enhanced user experience.</p>  
                    </div>
                </div>
                <div className="project-block">
                    <a href="https://github.com/pavankarimi/pneumonia-detection-by-using-machine-learning" target="_blank" rel="noopener noreferrer">
                        <img src={ml} alt="GitHub Link" class="img"/>
                    </a>
                    <div className="p-3">
                        <h3 >Pneumonia Detection Using Machine Learning</h3>
                        <p align="justify" className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Developed a CNN-based model to detect pneumonia from chest X-rays with high accuracy. Applied deep learning techniques for feature extraction, model training, and medical image analysis, contributing to early diagnosis and healthcare advancements.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

