import { useState } from "react";

function useFormFields(initialState) {
    const [fields, setFields] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFields(prevFields => ({
            ...prevFields,
            [name]: value
        }));
    };

    return [fields, handleChange];
}

export default function Lbody() {
    const [personalInfo, setPersonalInfo] = useFormFields({
        name: '',
        email: '',
        phone: '',
        city: ''
    });

    const [educationInfo, setEducationInfo] = useFormFields({
        school: '',
        location: '',
        degree: '',
        sdate: '',
        edate: ''
    });

    const [experienceInfo, setExperienceInfo] = useFormFields({
        company: '',
        position: '',
        desc: '',
        esdate: '',
        eedate: ''
    });

    const [projectInfo, setProjectInfo] = useFormFields({
        project: '',
        tech: '',
        pdesc: '',
    })

    return (
        <>
            <div className="lbody">
                <div className="pcont">
                    <form className="form">
                        <fieldset>
                            <legend>Personal Info</legend>
                            <div className="pinfo">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" name="name" placeholder="Enter your full name" onChange={setPersonalInfo} value={personalInfo.name} />
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Enter your email address" onChange={setPersonalInfo} value={personalInfo.email} />
                                <label htmlFor="phone">Phone Number</label>
                                <input type="text" id="phone" name="phone" placeholder="Enter your phone number" onChange={setPersonalInfo} value={personalInfo.phone} />
                                <label htmlFor="city">City</label>
                                <input type="text" id="city" name="city" placeholder="Where do you live?" onChange={setPersonalInfo} value={personalInfo.city} />
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Education</legend>
                            <div className="einfo">
                                <label htmlFor="school">School</label>
                                <input type="text" id="school" name="school" placeholder="Enter your school name" onChange={setEducationInfo} value={educationInfo.school} />
                                <label htmlFor="location">Location</label>
                                <input type="text" id="location" name="location" placeholder="Enter your school's location" onChange={setEducationInfo} value={educationInfo.location} />
                                <label htmlFor="degree">Degree</label>
                                <input type="text" id="degree" name="degree" placeholder="Enter your degree type" onChange={setEducationInfo} value={educationInfo.degree} />
                                <label htmlFor="sdate">Start Date</label>
                                <input type="date" id="sdate" name="sdate" onChange={setEducationInfo} value={educationInfo.sdate} />
                                <label htmlFor="edate">End Date</label>
                                <input type="date" id="edate" name="edate" onChange={setEducationInfo} value={educationInfo.edate} />
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Experience</legend>
                            <div className="exinfo">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" placeholder="Enter your company name" onChange={setExperienceInfo} value={experienceInfo.company} />
                                <label htmlFor="position">Position</label>
                                <input type="text" id="position" name="position" placeholder="Enter your position title" onChange={setExperienceInfo} value={experienceInfo.position} />
                                <label htmlFor="desc">Description</label>
                                <input type="text" id="desc" name="desc" placeholder="Describe your position" onChange={setExperienceInfo} value={experienceInfo.desc} />
                                <label htmlFor="esdate">Start Date</label>
                                <input type="date" id="esdate" name="esdate" onChange={setExperienceInfo} value={experienceInfo.esdate} />
                                <label htmlFor="eedate">End Date</label>
                                <input type="date" id="eedate" name="eedate" onChange={setExperienceInfo} value={experienceInfo.eedate} />
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Personal Projects</legend>
                            <div className="prinfo">
                                <label htmlFor="project">Project Name</label>
                                <input type="text" id="project" name="project" placeholder="Enter your project name" onChange={setProjectInfo} value={projectInfo.project} />
                                <label htmlFor="tech">Tech Used</label>
                                <input type="text" id="tech" name="tech" placeholder="Enter tech used seprarated by a comma" onChange={setProjectInfo} value={projectInfo.tech} />
                                <label htmlFor="pdesc">Description</label>
                                <input type="text" id="pdesc" name="pdesc" placeholder="Describe your project" onChange={setProjectInfo} value={projectInfo.pdesc} />
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
}
