import React, {useState} from 'react'
import axios from "axios";
import Typewriter from "typewriter-effect";

const Qr = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a request to the server with the prompt
    axios
      .post("http://localhost:8080/chat", { prompt })
      .then((res) => {
        // Update the response state with the server's response
        setResponse(res.data);
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };




  return (
    <div className="qrcode__container m-auto flex flex-col items-center w-full">
      <div className="input__group  flex flex-col ">
        <form onSubmit={handleSubmit}>
          <div className=' flex flex-col'>
          <label className=' text-xl font-thin'>Enter Text</label>
          <input
          className='h-16 w-80 rounded-lg px-4 border border-indigo-300 focus:outline-indigo-700 focus:bg-white text-xl font-thin'
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="input text"
          />
          </div>
          <button className='h-16 w-80 bg-indigo-500 rounded-lg text-white font-thin mt-8' type="submit" >
            Get Response
          </button>
        </form>
        
      </div>
      <p className='font-thin mt-8 text-left w-80 '>{response}</p>
      {/* <a href="https://oputah-portfolio.netlify.app" target='_blank'><div className='flex flex-row justify-center items-center  items-center h-12 w-80 font-mono font-semibold  mt-8 text-indigo-500 text-sm animate-bounce border border-indigo-500'>
        Check out Developer's Portfolio 
 
    

    </div> </a> */}
    </div>
  )
}

export default Qr