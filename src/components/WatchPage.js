import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());   
  }, []);
  return (
    <div className="flex flex-col w-full h-[350px] ">
    <div className="px-4 flex mx-2">
      <div className="mr-2">
      <iframe
        width="600"
        height="350"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      </div>
      <div className=" border border-black p-2 w-full bg-slate-100 rounded-lg ">
        <LiveChat />  
      </div>
    </div >
    <CommentsContainer />
    </div>
  );
};

export default WatchPage;
