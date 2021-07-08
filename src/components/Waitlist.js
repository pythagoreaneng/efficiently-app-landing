import React from "react";

const Waitlist = () => {
  return (
    <>
      <div className="rounded-xl shadow-2xl bg-gray-100" id="newsletter">
        <div className="py-28 text-center">
          <p className="font-bold text-3xl md:text-5xl">Join the Waitlist</p>
          <p className="mt-2 mb-10 font-thin text-xs">
            Subscribe to our newsletter to get early access
          </p>

          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <input
              id="email"
              type="email"
              name="email"
              className="rounded-md text-center px-3 py-2"
              placeholder="email@example.com"
              require
            />
            <button
              type="submit"
              className="bg-efficiently-blue m-2 px-3 py-2 text-sm text-white  rounded-md"
            >
              Join
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Waitlist;
