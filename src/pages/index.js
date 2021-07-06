import React from "react";
import Card from "../components/Card";
import MainMockup from "../img/Mockup1.svg";
import Dot from "../components/Dot";
import Face from "../img/Face.svg";
import { useState } from "react";
import Task from "../components/Task";
import Waitlist from "../components/Waitlist";

const Home = () => {
  const [cardColor, setCardColor] = useState("#FFD8D7");
  const handleCardColor = (cardColor) => {
    setCardColor(cardColor);
  };
  return (
    <div className="m-4 md:m-10">
      <div className="my-20 text-left grid sm:grid-cols-2 grid-wrap">
        <div>
          <h1 className="font-bold text-4xl md:text-7xl ">
            Do <span className="text-blue-400 ">Efficiently</span>
          </h1>
          <p>
            Manage your time and tasks{" "}
            <span className="text-blue-400 ">Efficiently</span>
          </p>
          <button className="mt-10 px-3 bg-blue-400 rounded-3xl font-medium text-white">
            <a href="#newsletter">Early Access</a>
          </button>
        </div>
        <div className="flex justify-center h-full w-full">
          <img src={MainMockup} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2  md:gap-10">
        <Card
          style={{ backgroundColor: "#EAEC8C" }}
          title="Plan"
          body="With a built-in calendar, easily see your tasks, notes, and routines."
        />
        <Card
          style={{ backgroundColor: "#447DD2" }}
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
        />

        <Card
          style={{ backgroundColor: cardColor }}
          title="Play"
          body="Personalize to make planning easy and manage time for people who mean most to you."
          content={
            <div className="grid grid-rows-2 gap-4">
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
          image={
            <div className="animation-pulse">
              <img className="animation-bounce" src={Face} />
            </div>
          }
        />
      </div>

      <Waitlist />
    </div>
  );
};

export default Home;
