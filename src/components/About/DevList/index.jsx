import { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss";

const TechList = () => {
    const [devs] = useState([
        //{
        //    name: "Amazon Web Services (AWS)",
        //    progress: 100,
        //   className: "aws-progress",
        //    years: 2,
        //}, 
        { name: "Git", progress: 87.5, className: "github-progress", years: 2.5 },
        {
            name: "MSSQL",
            progress: 60,
            className: "pbi-progress",
            years: 1.5,
        },
        {
            name: "Postman",
            progress: 17.5,
            className: "postman-progress",
            years: 0.5,
        },
        
        {
            name: "Microsoft Azure DevOps",
            progress: 17.5,
            className: "azure-progress",
            years: 0.5,
        }
        //{
        //    name: "Docker",
        //    progress: 50,
        //    className: "docker-progress",
        //    years: 1,
        //},
        
    ]);

    return (
        <div>
            <h2>Development Tools</h2>
            <ul>
                {devs.map((dev, index) => (
                    <li key={index}>
                        <span>
                            {dev.name}: {`${dev.years} years`}
                        </span>
                        <ProgressBar
                            progress={dev.progress}
                            className={dev.className}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TechList;
