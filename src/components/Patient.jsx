import React, { useState } from "react";
import SymptomSteps from "./SymptomSteps";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Patient = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { text: "Hi there! How can I assist you today?", sender: "bot" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const payload = {
      user_input: userInput,
      chat_history: chatHistory.map((chat) => chat.text),
    };

    try {
      const response = await axios.post("http://127.0.0.1:7010/chat", payload);
      const responseText = response.data.response;
      const sources =
        response.data.sources
          ?.map(
            (source, index) =>
              `Source ${index + 1}: ${source.node.metadata.file_name}`
          )
          .join("\n") || "";
      const fullResponse = `${responseText}\n\n${sources}`;

      setChatHistory([
        ...chatHistory,
        { text: userInput, sender: "user" },
        { text: fullResponse, sender: "bot" },
      ]);
      setIsLoading(false);
      setUserInput(""); // Reset the input field after sending
    } catch (error) {
      console.error("Error sending message:", error);
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div>
      <SymptomSteps step1 step2 />
      <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <div className="flex flex-col flex-auto h-full p-6">
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
              <div className="flex flex-col h-full overflow-x-auto mb-4">
                <div className="flex flex-col h-full">
                  <div className="grid grid-cols-12 gap-y-2">
                    {/* Chat history and API response display */}
                    {chatHistory.map((chat, index) => (
                      <div
                        key={index}
                        className={`col-start-${
                          chat.sender === "user" ? "6" : "1"
                        } col-end-${
                          chat.sender === "user" ? "13" : "8"
                        } p-3 rounded-lg`}
                      >
                        <div
                          className={`flex flex-row items-center ${
                            chat.sender === "user" ? "justify-end" : ""
                          }`}
                        >
                          <div
                            className={`flex items-center justify-center h-10 w-10 rounded-full bg-${
                              chat.sender === "user" ? "green" : "indigo"
                            }-500 flex-shrink-0`}
                          >
                            {chat.sender === "user" ? "U" : "A"}
                          </div>
                          <div
                            className={`relative ml-3 text-sm bg-${
                              chat.sender === "user" ? "green" : "white"
                            } py-2 px-4 shadow rounded-xl`}
                          >
                            <div>{chat.text}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="col-start-1 col-end-13 p-3">
                        <div className="flex justify-center items-center">
                          <div>Loading...</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Input and send button */}
              <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                <div className="flex-grow ml-4">
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={userInput}
                      onChange={handleChange}
                      className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    />
                    <button
                      onClick={submitHandler}
                      className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="ml-4">
                  <button
                    onClick={submitHandler}
                    className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                  >
                    <span>Send</span>
                    <span className="ml-2">
                      <svg
                        className="w-4 h-4 transform rotate-45 -mt-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
