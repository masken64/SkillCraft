import { useState } from "react";
import call from './assets/call.png';
import mail from './assets/mail.png';
import location from './assets/location.png';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
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

function downloadPDF() {
    const element = document.querySelector('.rbody'); // Replace 'rbody' with the ID of your targeted div
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
  
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
  
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
  
      pdf.save('download.pdf');
    });
  }

export default function Lbody() {
    const [personalInfo, setPersonalInfo] = useFormFields({
        name: 'Kartik Sharma',
        email: 'shrkartik2001@gmail.com',
        phone: '9910570989',
        city: 'New Delhi',
        about: 'Pre-final-year college student enrolled in a 4-year B.Tech Computer Science Engineering program. Willing to put in the effort necessary to achieve my goals. Can easily pick up new concepts and skills, highly adaptable, ready to embrace new changes.',
    });

    const [educationInfo, setEducationInfo] = useFormFields({
        school: 'VIT Bhopal University',
        location: 'Bhopal, India',
        degree: 'B.Tech CSE',
        sdate: '',
        edate: ''
    });

    const [experienceInfo, setExperienceInfo] = useFormFields({
        company: 'SmartInternz',
        position: 'Modern Application Developer',
        desc: 'Collaborated with a team to build enterprise Java applications using the Spring framework, worked with various back-end and front-end technologies like: Java Spring Boot, MSSQL, HTML/CSS.',
        esdate: '',
        eedate: ''
    });

    const [projectInfo, setProjectInfo] = useFormFields({
        project: 'Catopedia (A Cat Wiki)',
        tech: 'JavaScript, HTML, CSS, Webpack',
        pdesc: 'A guide to all things cat-related. Utilises the Cat API to provide a comprehensive database of breed information, including a random image generator and a search option for breeds. The project has been bundled using webpack.',
    })

    return (
        <>
            <div className="lbody">
                <div className="pcont">
                <button onClick={downloadPDF} className="export">Export to PDF</button>
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
                                <label htmlFor="about">About Me</label>
                                <input type="text" id="about" name="about" placeholder="Tell us something about yourself" onChange={setPersonalInfo} value={personalInfo.about} />
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
            <div className="rbody">
            <div className="page">
                    <div className="rp">
                        <div className="rname">{personalInfo.name}</div>
                        <div className="rcont">
                            <div>
                        <img src={call} className="call"></img>
                        <div className="rphone">{personalInfo.phone}</div>
                        </div><div>
                        <img src={mail} className="mail"></img>
                        <div className="rmail">{personalInfo.email}</div>
                        </div></div>

                        <div className="loca">
                        <img src={location} className="location"></img>
                        <div className="radd">{personalInfo.city}</div>
                        </div>
                        <div className="rab"><i>{personalInfo.about}</i></div>
                    </div>
                    <div className="red">
                        <div className="title">Education</div>
                        <div className="redname">
                            <div className="edname"><b>{educationInfo.school}</b></div>
                            <div className="edtime">
                                <div className="edfrom">{educationInfo.sdate}</div>
                                <div className="edto">{educationInfo.edate}</div>
                            </div>
                        </div>
                        <div className="edloc">
                            <div className="degree">{educationInfo.degree}</div>
                            <div className="loc"><i>{educationInfo.location}</i></div>
                        </div>
                    </div>
                    <div className="rex">
                        <div className="title">Experience</div>
                        <div className="rexn">
                        <div className="exname"><b>{experienceInfo.position}</b> @ {experienceInfo.company}</div>
                        <div className="extime">
                                <div className="exfrom">{experienceInfo.esdate}</div>
                                <div className="exto">{experienceInfo.eedate}</div>
                            </div>
                        </div>
                        <div className="exdesc"><i> • {experienceInfo.desc}</i></div>
                    </div>
                    <div className="rpr">
                        <div className="title">Projects</div>
                        <div className="prname"><b>{projectInfo.project}</b></div>
                        <div className="prtech"> • Technologies Used: {projectInfo.tech}</div>
                        <div className="prdesc"> • {projectInfo.pdesc}</div>
                    </div>
            </div>
            </div>
        </>
    );
}
