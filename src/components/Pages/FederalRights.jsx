import React from "react";
import Navbar from "../Navbar/Navbar";

const FederalRights = () => {
    return (
        <div>
            <Navbar />
            <div className="spacing-pg">  
            <h1>Federal Rights</h1>
            <p> The Title IX of the Education Amendments of 1972 is essential for protecting your rights to federally funded education. </p>
            <h2>Understanding Your Rights While Pregnant</h2>
            <h3> Rights under the Title IX of the Education Amendments of 1972: </h3>
            <ul>
                <li>You have the right to stay in school.
                You cannot be forced to transfer to an
                alternative school, a special school for
                pregnant students, or a GED program.
                </li>
                <li>
                    You have the right to take time off from
                    school for prenatal visits, childbirth,
                    abortion care, and other health reasons
                    related to pregnancy with a doctor’s note
                </li>
                <li>
                    If a school does not have a leave policy for students, or the student does not 
                    qualify for leave under the policy, a school must provide a leave for the student as medically recommended.
                </li>
                <li>
                    You have the right to decide on your own
                    what to do about your pregnancy. 
                </li>

                <li>
                    Schools must not discriminate against any student, or exclude any student from their
                    education program or activity, including any class or extracurricular activity.
                </li>

            </ul>



            <h2>Understanding Your Rights After Pregnancy</h2>
            <h3> Rights under the Title IX of the Education Amendments of 1972: </h3>
            <ul>
                <li>
                    You have the right to receive educational support during the time you take off from school.
                </li>
                <li>
                You must be allowed to pick up where you left off when you return.
                </li>
                <li>
                Excused absences are another form of accommodation sometimes available to parenting students.
                </li>
            </ul>
            </div>
        </div>
    
    );
}
export default FederalRights;