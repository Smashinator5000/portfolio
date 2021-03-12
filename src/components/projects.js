import React from "react";
import Pokemon from "../img/Eeveelutions.jpg";
import Cats from "../img/match.png";
import SMQG from "../img/SMQG.PNG";
import Scheduler from "../img/HW5.PNG";
import WASS from "../img/WASS.PNG";
import Team from "../img/MyTeam.PNG";
//FONT AWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Projects = () => {
  const openPopupboxPokemon = () => {
    const content = (
      <>
        <img
          className="project-image-popupbox"
          src={Pokemon}
          alt="Pokemon App"
        />
        <p>
          Are you a Pokemon Lover?? So am I! Here is an app that you can search your favorite pokemons and their stats! It also pulls up a pokemon card for you to look at!
        </p>
        <a
          className="hyper-link"
          href="https://gsteed1677.github.io/furry-bassoon/"
        >
          Check it out!
        </a>
        <br />
        <a
          className="hyper-link"
         href="https://github.com/gsteed1677/furry-bassoon"
        >
          GitHub Repo 
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigPokemon = {
    titleBar: {
      enable: true,
      text: "Pokemon App",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxCats = () => {
    const content = (
      <>
        <img
          className="project-image-popupbox"
          src={Cats}
          alt="Cat Marketplace App"
        />
        <p>
         Need a friend? Here is a cat app that will help match you with your furry friend!
        </p>
        <a 

          className="hyper-link"
          href="https://mighty-sea-42900.herokuapp.com/"
          // onClick={() => window.open("https://mighty-sea-42900.herokuapp.com/")}
        >
          Check it out!
        </a>
        <br />
        <a
          className="hyper-link"
          href="https://github.com/CodyOps/Project-2"
          // onClick={() => window.open("https://github.com/CodyOps/Project-2")}
        >
          GitHub Repo 
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigCats = {
    titleBar: {
      enable: true,
      text: "Cats Marketplace",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxSMQG = () => {
    const content = (
      <>
        <img
          className="project-image-popupbox"
          src={SMQG}
          alt="Sailor Moon Quiz Game"
        />
        <p>
          Test your knowledge with this Sailor Moon QuizGame
        </p>
        <a
          className="hyper-link"
          href="https://smashinator5000.github.io/Sailor.Moon.QuizGame/"
          // onClick={() =>
          //   window.open("https://smashinator5000.github.io/Sailor.Moon.QuizGame/")
          // }
        >
          Check it out!
        </a>
        <br></br>
        <a
          className="hyper-link"
          href="https://github.com/Smashinator5000/Sailor.Moon.QuizGame"
          // onClick={() =>
          //   window.open("https://github.com/Smashinator5000/Sailor.Moon.QuizGame")
          // }
        >
          GitHub Repo 
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigSMQG = {
    titleBar: {
      enable: true,
      text: "Sailor Moon QuizGame",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  
  const openPopupboxScheduler = () => {
    const content = (
      <>
        <img
          className="project-image-popupbox"
          src={Scheduler}
          alt="Workday Scheduler"
        />
        <p>
          Need help getting through your day? Use this app to help you!
        </p>
        <a
          className="hyper-link"
          href="https://smashinator5000.github.io/daily_creations/"
          // onClick={() =>
          //   window.open("https://smashinator5000.github.io/daily_creations/")
          // }
        >
          Check it out!
        </a>
        <br />
        <a
          className="hyper-link"
          href="https://github.com/Smashinator5000/daily_creations"
          // onClick={() =>
          //   window.open("https://github.com/Smashinator5000/daily_creations")
          // }
        >
          GitHub Repo 
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigScheduler = {
    titleBar: {
      enable: true,
      text: "Workday Scheduler",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxWASS = () => {
    const content = (
      <>
        <img
          className="project-image-popupbox"
          src={WASS}
          alt="Winter-Autumn-Summer-Spring"
        />
        <p>
          Going on a hike? How about a rafting trip? either way, use this weather app to help know what the weaether will be like!
        </p>
                <a
          className="hyper-link"
          href="https://smashinator5000.github.io/W-A-S-S/"
          // onClick={() =>
          //   window.open("https://smashinator5000.github.io/W-A-S-S/")
          // }
        >
          Check it out!
        </a>
        <a
          className="hyper-link"
          href="https://github.com/Smashinator5000/W-A-S-S"
          // onClick={() =>
          //   window.open("https://github.com/Smashinator5000/W-A-S-S")
          // }
        >
          GitHub Repo 
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigWASS = {
    titleBar: {
      enable: true,
      text: "Winter-Autumn-Summer-Spring",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxTeam = () => {
    const content = (
      <>
        <img
          className="project-image-popupbox"
          src={Team}
          alt="My Team"
        />
        <p>
         hsgfjsfghjsfghjsfgjn
        </p>
        <a
          className="hyper-link"
          href="https://github.com/Smashinator5000/We_Need_YOU"
          // onClick={() =>
          //   window.open("https://github.com/Smashinator5000/We_Need_YOU")
          // }
        >
          GitHub Repo 
        </a>
        <br />
        <a
          className="hyper-link"
          href="https://github.com/Smashinator5000/We_Need_YOU"
          // onClick={() =>
          //   window.open("https://github.com/Smashinator5000/We_Need_YOU")
          // }
        >
          GitHub Repo 
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigTeam = {
    titleBar: {
      enable: true,
      text: "My Team",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="project-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="project-image-box" onClick={openPopupboxPokemon}>
            <img
              className="project-image"
              src={Pokemon}
              alt="Pokemon App"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
          </div>

          {/* - */}

          <div className="project-image-box" onClick={openPopupboxCats}>
            <img className="project-image" src={Cats} alt="Cats App" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
          </div>

          {/* - */}

          <div className="project-image-box" onClick={openPopupboxSMQG}>
            <img
              className="project-image"
              src={SMQG}
              alt="SMQG"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
          </div>

          {/* - */}

          <div className="project-image-box" onClick={openPopupboxScheduler}>
            <img className="project-image" src={Scheduler} alt="Scheduler App" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
          </div>

          {/* - */}

          <div className="project-image-box" onClick={openPopupboxWASS}>
            <img
              className="project-image"
              src={WASS}
              alt="Winter-Autumn-Summer-Spring"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
          </div>

          {/* - */}

          <div className="project-image-box" onClick={openPopupboxTeam}>
            <img
              className="project-image"
              src={Team}
              alt="My Team"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigPokemon} />
      <PopupboxContainer {...popupboxConfigCats} />
      <PopupboxContainer {...popupboxConfigSMQG} />
      <PopupboxContainer {...popupboxConfigScheduler} />
      <PopupboxContainer {...popupboxConfigWASS} />
      <PopupboxContainer {...popupboxConfigTeam} />
    </div>
  );
};

export default Projects;