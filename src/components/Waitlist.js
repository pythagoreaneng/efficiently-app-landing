import React from "react";

const Waitlist = () => {
  return (
    <>
      <div className="my-10 rounded-xl shadow-2xl bg-gray-100" id="newsletter">
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
    </>
  );
};

export default Waitlist;
