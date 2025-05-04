import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FaRobot, FaRegSmile, FaLink } from "react-icons/fa";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import avatar2 from "../../assets/imgs/avatar2.png";
import navlogo from '../../assets/imgs/navlogo.png'

const ChatBox = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [messages, setMessages] = useState([
   
    {
        id: 1,
        sender: 'user',
        text: 'Hello',
        image: avatar2,
      },
      {
        id: 2,
        sender: 'bot',
        text: 'Hello! How can I assist you today?',
        image: navlogo,
      },
  ]);
  const [input, setInput] = useState("");
  const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);
  const [fileInputRef, setFileInputRef] = useState(null); // Store the file input reference
  const [filePreview, setFilePreview] = useState(null); // Store file preview URL

  // Ref to handle click outside the emoji picker
  const emojiPickerRef = useRef(null);

  // Handle emoji picker toggle
  const toggleEmojiPicker = () => {
    setIsEmojiPickerVisible(!isEmojiPickerVisible);
  };

  // Handle emoji selection
  const handleEmojiClick = (emoji) => {
    setInput((prevInput) => prevInput + emoji); // Append the selected emoji to the input field
    setIsEmojiPickerVisible(false); // Close the emoji picker after selecting
  };

  // Function to handle sending messages
  const sendMessage = async () => {
    if (input.trim()) {
      const userMessage = {
        id: messages.length + 1,
        sender: "user",
        text: input,
        image: avatar2,
      };
      setMessages([...messages, userMessage]);

      // Clear the input field after sending
      setInput("");

      // Call OpenAI API to get the AI response
      const aiResponse = await getAIResponse(input);

      // Update chat with AI's response
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: prevMessages.length + 1,
          sender: "bot",
          text: aiResponse,
        image: navlogo,
        },
      ]);
    }
  };

  // Function to interact with OpenAI API
  const getAIResponse = async (question) => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          model: "text-davinci-003", // You can change this to another model as needed
          prompt: question,
          max_tokens: 150,
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer YOUR_OPENAI_API_KEY`, // Replace with your actual API key
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error("Error fetching AI response:", error);
      return "Sorry, I could not process your request.";
    }
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setFilePreview(fileURL);

      // Create message based on file type
      const fileMessage = {
        id: messages.length + 1,
        sender: "user",
        text: `Uploaded a ${file.type.split("/")[0]} file: ${file.name}`,
        fileURL: fileURL, // Include file URL for preview
        fileType: file.type.split("/")[0], // Track file type (image/video/audio)
        image: avatar2,
      };
      setMessages([...messages, fileMessage]);
    }
  };

  // Trigger file input click
  const handleFileButtonClick = () => {
    if (fileInputRef) {
      fileInputRef.click();
    }
  };

  // Close emoji picker if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        setIsEmojiPickerVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 overflow-x-hidden">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="md:m-7 m-3 sm:border border border-border-clr md:flex-row flex-col-reverse rounded-lg ">
          <div className="flex flex-col items-center justify-center  ">
            {/* Chat Box */}
            <div className="w-full  bg-white shadow-lg rounded-lg">
              {/* Messages Section */}
              <div className="p-4 space-y-4 overflow-y-auto max-h-96 ">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-center  ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    {message.sender === "bot" && (
                      <img
                        src={message.image}
                        alt="Bot Avatar"
                        className="w-12 h-12 rounded-full mr-2 p-2 bg-black"
                      />
                    )}
                    <div
                      className={`px-4 py-3 rounded-lg ${
                        message.sender === "user"
                          ? "bg-[#F0F0F0] text-black"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {message.text}
                      {message.fileType === "image" && (
                        <img
                          src={message.fileURL}
                          alt="Uploaded file"
                          className="mt-2 w-32 h-32 object-cover"
                        />
                      )}
                      {message.fileType === "video" && (
                        <video controls className="mt-2 w-32 h-32">
                          <source src={message.fileURL} />
                          Your browser does not support the video tag.
                        </video>
                      )}
                      {message.fileType === "audio" && (
                        <audio controls className="mt-2 w-32">
                          <source src={message.fileURL} />
                          Your browser does not support the audio tag.
                        </audio>
                      )}
                    </div>
                    {message.sender === "user" && (
                      <img
                        src={message.image}
                        alt="User Avatar"
                        className="w-12 h-12 rounded-full ml-2"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Input Section */}
              <div className="flex items-center p-4 justify-between border-t xl:gap-0 gap-3">
                 {/* Smiley Icon for Emojis */}
                 <div className="relative ml-2" ref={emojiPickerRef}>
                  <FaRegSmile
                    onClick={toggleEmojiPicker}
                    className="text-gray-600 hover:text-gray-800 cursor-pointer"
                    size={20}
                  />
                  {isEmojiPickerVisible && (
                    <div className="absolute bottom-10 right-0 bg-white shadow-lg rounded-lg p-2 flex gap-2">
                      {/* Add emojis here */}
                      <button onClick={() => handleEmojiClick("😊")}>😊</button>
                      <button onClick={() => handleEmojiClick("😂")}>😂</button>
                      <button onClick={() => handleEmojiClick("😍")}>😍</button>
                      <button onClick={() => handleEmojiClick("😎")}>😎</button>
                      <button onClick={() => handleEmojiClick("👍")}>
                        {" "}
                        👍
                      </button>
                      <button onClick={() => handleEmojiClick("💖")}>
                        {" "}
                        💖
                      </button>
                    </div>
                  )}
                </div>

                {/* Link Icon for File Upload */}
                <div className="relative ml-2">
                  <FaLink
                    onClick={handleFileButtonClick}
                    className="text-gray-600 hover:text-gray-800 cursor-pointer"
                    size={20}
                  />
                  <input
                    type="file"
                    ref={(input) => setFileInputRef(input)} // Set the file input ref here
                    onChange={handleFileChange}
                    className="absolute top-10 left-0 opacity-0 cursor-pointer"
                  />
                </div>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-[85%] px-4 py-2 border rounded-lg outline-none"
                />
                <button
                  onClick={sendMessage}
                  className=" px-4 py-2 bg-black text-white rounded-lg "
                >
                  Send
                </button>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
