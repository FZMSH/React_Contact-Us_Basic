import React, { useState } from "react";
import Button from "./Button";
import { MdOutlineMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
function Centerdiv() {
  
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [text, settext] = useState("");
  

  const onSubmitting = (event) => {
    setname(event.target[0].value);
    setemail(event.target[1].value);
    settext(event.target[2].value);
    event.preventDefault();
  };

  return (
    <div className="flex relative">
      <div id="center-div" className="w-full h-screen  mx-[8vw] ">
        <h1 className="text-[3.5vw] font-bold pt-[3vw] mb-[1vw]">CONTACT US</h1>
        <p className="w-5/6 mb-[3vw] ">
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.{" "}
        </p>
        <div id="center-bottom " className="w-[50vw]">
          <div id="button" className="flex gap-4">
            <div id="center-b1 " className="w-[10vw] h-[2vw]">
              <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage />} />
            </div>
            <div id="center-b1 " className="w-[10vw] h-[2vw] ">
              <Button text="VIA CALL" icon={<IoCall />} />
            </div>
          </div>
          <div id="center-b1 " className="w-[21vw] h-auto mt-[2vw]">
            <Button
              isOutline={true}
              text="VIA EMAIL FORM"
              icon={<IoMailSharp />}
            />
          </div>

          {/* form start down below */}
          <form onSubmit={onSubmitting}>
            <div id="form-control" className="relative w-[20vw]">
              <label htmlFor="name" className="absolute bg-white ml-[1vw]">
                Name
              </label>
              <input
                className="border border-black mt-[1vw] pt-[.4vw] w-full "
                type="text"
                name="name"
              />

              <label
                htmlFor="email"
                className=" absolute block bg-white ml-[1vw] mt-[.2vw]"
              >
                E-mail
              </label>
              <input
                className="border border-black mt-[1vw] pt-[.4vw] w-full"
                type="email"
                name="email"
              />

              <label
                htmlFor="text"
                className="absolute block bg-white ml-[1vw] mt-[1vw]"
              >
                Text
              </label>
              <textarea
                cols="2"
                rows="5"
                className="border border-black w-full mt-[2vw]"
                name="text"
              />
            </div>
            <div className="mt-[1vw] ml-[10vw] w-[10vw] ">
              <Button text="Submit" />
            </div>
            <div>{name + " " + email + " " + text}</div>
          </form>
        </div>
      </div>
      <img
        className="absolute translate-x-[35vw] translate-y-[12vw] w-[35vw]"
        src="/src/assets/Service.png"
        alt=""
      />
    </div>
  );
}

export default Centerdiv;
