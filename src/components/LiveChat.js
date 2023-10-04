import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      //API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 500);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="w-full h-[300px] overflow-y-scroll flex flex-col-reverse  ">
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className=" w-full m-1 p-1  rounded-sm"
        onSubmit={(e) => {e.preventDefault()
        dispatch(addMessage({
            name: "Jerry",
            message: liveMessage
        }))
        setLiveMessage("")
    }}
      >
        <input
          className="w-4/5 border border-gray-200 px-2"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          placeholder=" Message here..."
          type="text"
        />
        <button className="mx-2 px-2 bg-blue-200 rounded-sm">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
