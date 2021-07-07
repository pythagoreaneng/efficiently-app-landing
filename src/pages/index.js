import React from "react";
import Card from "../components/Card";
import "../App.css";
import MainMockup from "../img/Mockup1.svg";
import CalendarMockup from "../img/Calendar.svg";
import Dot from "../components/Dot";
import Face from "../img/Face.svg";
import { useState } from "react";
import Task from "../components/Task";
import Note from "../components/Note";
import Waitlist from "../components/Waitlist";
import { red } from "jest-matcher-utils/node_modules/chalk";

const Home = () => {
  const [cardColor, setCardColor] = useState("#FFD8D7");
  const handleCardColor = (cardColor) => {
    setCardColor(cardColor);
  };

  return (
    <div className="m-4 sm:m-10">
      <div className="flex justify-center text-left grid md:grid-cols-2 grid-wrap m-5 h-full">
        <h1 className="sm:m-auto">
          <div className="grid grid-col justify-center ">
            <p className="font-bold text-4xl sm:text-7xl lg:text-8xl">
              Do <span className="efficiently-blue">Efficiently</span>
            </p>
            <p className="text-gray-500 pl-2">All-in-One Productivity App</p>
          </div>

          <div className="flex justify-center md:justify-start">
            <button className="bg-efficiently-blue rounded-3xl font-medium text-white p-3 my-8">
              <a href="#newsletter">Early Access</a>
            </button>
          </div>
        </h1>

        <div className="flex justify-center  my-10">
          <img className="h-auto w-72" src={MainMockup} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2  md:gap-10">
        <Card
          style={{ backgroundColor: "#EAEC8C" }}
          title="Plan"
          body="With a built-in calendar, easily see your tasks, notes, and routines."
          content={<img className="h-auto w-60 mt-8" src={CalendarMockup} />}
        />
        <Card
          style={{ backgroundColor: "#C0E5FE" }}
          title="Work"
          body="Organize your tasks and create an everyday routine that empowers you."
          content={
            <div className="grid grid-col gap-3">
              <Task check="true" due="8AM" body="Grab a coffee" />
              <Task check="true" due="9AM" body="Meeting with Alex" />
              <Task check="true" due="4PM" body="Go to gym" />
              <Task check="true" due="7PM" body="Dinner with Sam" />
            </div>
          }
        />
        <Card
          style={{ backgroundColor: "#BBF5D5" }}
          title="Think"
          body="Clear your head of daily clutters and focus on the things most important to you.
          "
          content={
            <div>
              <Note
                body={
                  <div>
                    <div contentEditable="true" className="font-normal ">
                      <p>Ways to be successful</p>
                      <p>-Stay organized</p>
                      <p>-Don’t sweat the small things.</p>
                      <p>-Fake it until you make it.</p>
                    </div>
                  </div>
                }
              />
            </div>
          }
        />

        <Card
          style={{ backgroundColor: cardColor }}
          title="Play"
          body="Personalize to make planning easy and manage time for people who mean most to you."
          content={
            <div className="grid grid-rows-2 gap-7 items-center justify-center">
              <div className="flex gap-5">
                <Dot
                  color={"#C0E5FE"}
                  onClick={() => handleCardColor("#C0E5FE")}
                />
                <Dot
                  color={"#FBF689"}
                  onClick={() => handleCardColor("#FBF689")}
                />

                <Dot
                  color={"#BBF5D5"}
                  onClick={() => handleCardColor("#BBF5D5")}
                />
              </div>
              <div className="flex gap-5">
                <Dot
                  color={"#FFD8D7"}
                  onClick={() => handleCardColor("#FFD8D7")}
                />
                <Dot
                  color={"#D5D4F5"}
                  onClick={() => handleCardColor("#D5D4F5")}
                />
                <Dot color={"#111"} onClick={() => handleCardColor("#111")} />
              </div>
            </div>
          }
        />
        <Card
          style={{ backgroundColor: "#D5D4F5" }}
          title="Live"
          body="Priortize your efficiency all in one place to give you the peace of mind to enjoy your life."
          content={<img className="animate-bounce" src={Face} />}
        />
      </div>

      <Waitlist />
    </div>
  );
};

export default Home;
