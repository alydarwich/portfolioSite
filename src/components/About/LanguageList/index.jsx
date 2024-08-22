import { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss";

const LanguageList = () => {
    const [languages] = useState([
        { name: "Javascript", progress: 75, className: "java-progress", years: 3 },
        {
            name: "HTML/CSS",
            progress: 75,
            className: "web-progress",
            years: 3,
        },
        { name: "C++", progress: 50, className: "c-progress", years: 2 },
        { name: "Typescript", progress: 50, className: "vhdl-progress", years: 2 },
        { name: "SQL", progress: 37.5, className: "sql-progress", years: 1.5 },
        {
            name: "Python",
            progress: 25,
            className: "python-progress",
            years: 1,
        },
        
        
        {
            name: "C#",
            progress: 12.5,
            className: "golang-progress",
            years: 0.5,
        },
        {
            name: "PHP",
            progress: 12.5,
            className: "-progress",
            years: 0.5,
        }
        
    ]);

    return (
        <div>
            <h2>Languages</h2>
            <ul>
                {languages.map((language, index) => (
                    <li key={index}>
                        <span>
                            {language.name}: {`${language.years} years`}
                        </span>
                        <ProgressBar
                            progress={language.progress}
                            className={language.className}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LanguageList;
