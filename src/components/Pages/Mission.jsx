import React from "react";
import Navbar from "../Navbar/Navbar";

const Mission = () => {
    return (
        <div>
            <Navbar />
            <div className="spacing-pg">
            
                <h1>Mission</h1>
                <p>
                    The overall goal of this website is to provide pregnant teens and/or their guardians with the necessary resources for teen mothers to continue their education. Since education is a social determinant of health and has strong correlation with economic prosperity, helping pregnant teens continue and finish their education is essential in their success.
                </p>
                <p>
                    Education is not a federal right, so education programs vary by state and local level. This website will focus on Texas, but the website identifies rights for all pregnant individuals at the federal level.
                </p>
                <p>
                    Specifically, this website is aimed at providing Latinx communities with the information necessary to make the process of continuing education smoother. This website can be viewed in Spanish and English, with English as the default setting. However, all ethnic groups are welcome to use the website.
                </p>
                <h2>Education is an investment</h2>
                <img src="../../public/img/earning-by-edu.png" width="100%" alt="graph"></img>
                <p>
                    Having a high school degree improves the weekly take home salary and having a higher level degree further improves the weekly earnings as seen above. While working towards the degree might seem daunting, the outcome are much more favorable in the future. For teenage parent, this can be challenging since they have to take care of a child, which is a job by itself. Moreover, having children comes with extra expenses like clothes, formula, child care and food. As a result, many parents drop out and decide to join the workforce to provide for their new family. Additionally, it can be extremely challenging to juggle taking care of a child, having a job, and going to school. However, there are programs that assist teens continue their education through affordable child care and extra resources.
                </p>
            </div>
        </div>
        
    );
}
export default Mission;