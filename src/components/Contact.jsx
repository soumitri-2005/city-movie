import React from "react";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "48cb1b3f-8903-4768-906a-3e5a7a949c38");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent. Thank you!");
      event.target.reset();
    } else {
      alert("Something went wrong.");
    }
  };

  return (
    <section
      id="contact"
      className="flex justify-between items-center flex-col md:flex-row h-[37vh] px-4 py-2 relative mb-20 sm:mb-0"
    >
      <div className="mx-[2rem]">
        <h1 className="text-[2rem] sm:text-[4rem] xl:text-[7rem]  mt-5 font-[550] text-[var(--maroon-color)]">
          Contact Us!
        </h1>
      </div>
      <div className="relative max-w-[500px] w-full flex justify-center items-center p-4 bg-yellow-900/20 rounded-lg shadow-[10px_10px_0px_var(--maroon-color)] backdrop-blur-md border border-white/30 mb-2 mx-[2.5rem]">
        <form
          onSubmit={onSubmit}
          className="relative bg-transparent text-[var(--maroon-color)] flex flex-col gap-4"
        >
          <div className="flex w-full">
            <div className="w-1/2 flex flex-col px-4">
              <div className="mt-2">
                <label htmlFor="name" className="block font-[500]">
                  Full Name:
                </label>
                <input
                  id="fullName"
                  name="name"
                  type="text"
                  placeholder="Enter your name.."
                  required
                  className="w-full h-[25px] bg-white/50 backdrop-blur-md border border-white/30 outline-none rounded-md px-3 py-5 text-base text-black mt-1"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="email" className="block font-[500]">
                  Email:
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email.."
                  required
                  className="w-full h-[25px] bg-white/50 backdrop-blur-md border border-white/30 outline-none rounded-md px-3 py-5 text-base text-black mt-1"
                />
              </div>
            </div>

            <div className="w-1/2 flex flex-col pr-6">
              <div className="mt-2">
                <label htmlFor="message" className="block font-[500]">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  required
                  className="w-full h-[70px] resize-none bg-white/50 backdrop-blur-md border border-white/30 rounded-md px-3 py-2 text-base text-black mt-1 focus:outline-none  "
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-600 p-2 text-[0.8rem] sm:text-[1rem] text-[var(--maroon-color)] font-semibold h-[43px] rounded-md mt-[0.55rem] active:scale-95 hover:bg-[var(--maroon-color)] hover:text-[var(--gold-color)] transition-all duration-300 ease-in-out cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
