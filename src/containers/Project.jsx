import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProject, addSkills } from '../redux/actions/actions';
import { urlBase } from '../redux/actions/fetch';

const Project = () => {
  const [skillsModal, setSkillsModal] = useState(false);
  const [projectModal, setProjectModal] = useState(false);
  const dispatch = useDispatch();
  const [skills, setSkills] = useState({
    name: '',
  });
  const [projectData, setProjectData] = useState({
    title: '',
    github: '',
    demo: '',
    languages: '',
    screenshot: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'screenshot') {
      setProjectData((prevData) => ({
        ...prevData,
        [name]: e.target.files[0],
      }));
    } else {
      setProjectData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleSkills = (e) => {
    setSkills({ name: e.target.value });
  };

  const submitSkills = (e) => {
    e.preventDefault();
    axios.post(`${urlBase}/api/v1/skills`, { name: skills.name },
      {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.status === 'created') {
          setSkillsModal(false);
          dispatch(addSkills(res.data));
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('project[title]', projectData.title);
    formData.append('project[github]', projectData.github);
    formData.append('project[demo]', projectData.demo);
    formData.append('project[languages]', projectData.languages);
    formData.append('project[screenshot]', projectData.screenshot);

    axios.post(`${urlBase}/api/v1/projects`, formData,
      {
        headers: { 'content-type': 'multipart/form-data' },
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.status === 'created') {
          setProjectModal(false);
          dispatch(addProject(res.data));
        }
      });
  };

  const handleClick = () => {
    setSkillsModal(true);
  };

  const handleClickProject = () => {
    setProjectModal(true);
  };

  const handleCloseModal = () => {
    setSkillsModal(false);
  };
  const handleCloseProject = () => {
    setProjectModal(false);
  };
  return (
    <div className="Project">
      <h2>Project Panel</h2>
      <div className="Project__buttons">
        <button className="btn skills" type="submit" onClick={handleClick}>Add Skills</button>
        <button className="btn project" type="submit" onClick={handleClickProject}>Add Project</button>
      </div>

      {skillsModal && (
        <div className="modal">
          <div className="modal__content">
            <span
              className="close"
              onClick={handleCloseModal}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleClick();
                }
              }}
              role="button"
              tabIndex={0}
            >
              &times;
            </span>
            <h3>Add Skill</h3>
            <form className="form" onSubmit={submitSkills}>
              <label htmlFor="skill-name" onChange={handleSkills}>
                Skill Name:
                <input type="text" id="skill-name" name="skill-name" onChange={handleSkills} />
              </label>
              <button type="submit" className="btn">Add Skill</button>
            </form>
          </div>
        </div>
      )}
      {projectModal && (
      <div className="modal">
        <div className="modal__content">
          <span
            className="close"
            onClick={handleCloseProject}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleClick();
              }
            }}
            role="button"
            tabIndex={0}
          >
            &times;
          </span>
          <h3>Add Skill</h3>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="skill-name">
              Project title:
              <input type="text" id="skill-name" name="title" onChange={handleChange} />
            </label>
            <label htmlFor="skill-name">
              Githb Link:
              <input type="text" id="skill-name" name="github" onChange={handleChange} />
            </label>
            <label htmlFor="skill-name">
              Live Demo link:
              <input type="text" id="skill-name" name="demo" onChange={handleChange} />
            </label>
            <label htmlFor="skill-name">
              Languages used:
              <input type="text" id="skill-name" name="languages" onChange={handleChange} />
            </label>
            <label htmlFor="skill-name">
              Project Screenshot:
              <input type="file" id="skill-name" name="screenshot" onChange={handleChange} />
            </label>
            <button type="submit" className="btn">Add Skill</button>
          </form>
        </div>
      </div>
      )}
    </div>
  );
};

export default Project;
