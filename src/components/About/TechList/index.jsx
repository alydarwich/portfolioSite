import { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss";

const TechList = () => {
    const [techs] = useState([
        {
            name: "ReactJS",
            progress: 100,
            className: "react-progress",
            years: 2.5,
        },
        {
            name: "Tailwind CSS",
            progress: 100,
            className: "llm-progress",
            years: 2.5,
        },
        {
            name: "NextJS",
            progress: 60,
            className: "nlp-progress",
            years: 1.5,
        },
        {
            name: "ASP.NET",
            progress: 25,
            className: "postgre-progress",
            years: 0.5,
        },
        {
            name: "ThreeJS",
            progress: 25,
            className: "springboot-progress",
            years: 0.5,
        }
        
        
        //{ name: "NodeJS", progress: 50, className: "node-progress", years: 1 },
        //{ name: "VueJS", progress: 50, className: "vue-progress", years: 1 },
    ]);

    return (
        <div>
            <h2>Frameworks & Technologies</h2>
            <ul>
                {techs.map((tech, index) => (
                    <li key={index}>
                        <span>
                            {tech.name}: {`${tech.years} years`}
                        </span>
                        <ProgressBar
                            progress={tech.progress}
                            className={tech.className}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TechList;
