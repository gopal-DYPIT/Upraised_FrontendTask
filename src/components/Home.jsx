import React from "react";

const Home = ({ startQuiz }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#BCF2F6]">
      <div className="relative w-[340px] h-[700px] bg-black rounded-3xl shadow-lg flex items-center justify-center">
        <div className="absolute inset-3 bg-gradient-to-b from-blue-400 to-blue-200 rounded-2xl flex flex-col items-center justify-center text-white p-8">
          <h1 className="text-4xl font-bold mt-4 text-center max-w-xs mx-auto">
            Quiz
          </h1>
          <div className="absolute w-32 h-32 bg-white rounded-full opacity-30 flex items-center justify-center -top-6 mt-60"></div>
          <button
            className="bg-white text-blue-500 mt-24 py-2 px-4 rounded shadow-lg hover:bg-lime-200 transition duration-200"
            onClick={startQuiz}
          >
            Start Quiz
          </button>
        </div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-black rounded-b-xl"></div>
      </div>
    </div>
  );
};

export default Home;
