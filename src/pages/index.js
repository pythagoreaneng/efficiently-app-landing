import React, { useState } from "react";
import CalendarMockup from "../img/Calendar.svg";
import Face from "../img/Face.svg";
import {
  Card,
  Dot,
  Footer,
  Header,
  Navbar,
  Note,
  Task,
  Waitlist,
  WideCard,
} from "../components";

const Home = () => {
  const [cardColor, setCardColor] = useState("#FFD8D7");
  const handleCardColor = (cardColor) => {
    setCardColor(cardColor);
  };

  return (
    <>
      <Navbar />
      <Header />
      <div className="grid m-4 sm:m-10 gap-4 md:gap-10">
        <div className="grid gap-4 md:grid-cols-2 md:gap-10">
          <Card
            style={{ backgroundColor: "#BBF5D5" }}
            title="Plan"
            body="With a built-in calendar, easily see your tasks, notes, and routines."
            content={
              <img
                className="h-auto w-60"
                alt="calendar"
                src={CalendarMockup}
              />
            }
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
            style={{ backgroundColor: "#FBF689" }}
            title="Think"
            body="Clear your head of daily clutters and focus on the things most important to you.
          "
            content={
              <Note
                body={
                  <div
                    className="font-normal"
                    style={{ backgroundColor: "#FFFB9E", resize: "none" }}
                  >
                    <p>Ways to be successful</p>
                    <br />
                    <p>-Stay organized</p>
                    <p>-Don’t sweat the small things.</p>
                    <p>-Fake it until you make it.</p>
                  </div>
                }
              />
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
        </div>
        <WideCard
          style={{
            backgroundColor: "#D5D4F5",
          }}
          title="Live"
          body="Priortize your efficiency all in one place to give you the peace of mind to enjoy your life."
          content={
            <img className="animate-bounce" alt="face-icon" src={Face} />
          }
        />

        <Waitlist />
      </div>
      <Footer />
    </>
  );
};

export default Home;
