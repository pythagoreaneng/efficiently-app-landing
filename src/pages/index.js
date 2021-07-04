import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="m-4 md:m-10">
      <div className="my-20 text-left">
        <h1 className="font-bold text-4xl md:text-9xl ">
          Do <span className="text-blue-400 ">Efficiently</span>
        </h1>
        <p>Manage your time and tasks <span className="text-blue-400 ">Efficiently</span></p>
        <button className="mt-10 px-3 bg-blue-400 rounded-3xl font-medium text-white">
          <a href="#newsletter">Early Access</a>
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2  md:gap-10">
        <Card
          style={{ backgroundColor: "#EAEC8C" }}
          title="Plan"
          body="WIth a built-in calendar, easily see your tasks, notes, and routines."
        />
        <Card
          style={{ backgroundColor: "#447DD2" }}
          title="Work"
          body="Organize your tasks and create an everyday routine that empowers you."
        />
        <Card
          style={{ backgroundColor: "#BBF5D5" }}
          title="Think"
          body="Clear your head of daily clutters and focus on the things most important to you.
          "
        />
        <Card
          style={{ backgroundColor: "#FFD8D7" }}
          title="Play"
          body="With an intuitive drag and drop feature, easily make time for fun and relaxing activities. "
        />
        <Card
          style={{ backgroundColor: "#D5D4F5" }}
          title="Live"
          body="Prioritize your tasks with reminders all in one place to give you the peace of mind to live freely. "
        />
      </div>

      <div className="my-10 rounded-xl shadow-2xl bg-gray-100" id="newsletter">
        <div className="py-28 text-center">
          <label htmlFor="email">
            <p className="font-bold text-3xl md:text-5xl">Join the Waitlist</p>
            <p className="mt-2 mb-10 font-thin text-xs">
              Subscribe to our newsletter to get early access
            </p>
          </label>

          <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact"></input>
            <input
              id="email"
              type="email"
              name="email"
              className="rounded-md text-center p-1"
              placeholder="email@example.com"
              require
            />
            <button
              type="submit"
              className="m-2 px-2 py-1 text-sm text-white bg-blue-400 rounded-md"
            >
              Join
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
