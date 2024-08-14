import {  useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState("Tap on Button to get an advice");
  const [loading,setLoading] = useState(false)
 
  async function getAdvice(){
    setLoading(true)
    try{
        await axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{
          const newAdvice = response.data.slip.advice;
          setAdvice(newAdvice)
        }).finally(()=>{
          setLoading(false)
        })
    } catch (err){
      console.log('Error in code' + err)
    }
  }

  return (
    <>
      <div className="bg-hero-pattern bg-cover w-full h-screen bg-no-repeat">

        <div className="bg-[#000] text-white rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100  card text-[20px] h-[300px] w-[600px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Advice !</h2>
            <p className="m-4">{loading? "Loading ...":advice}</p>
            <div className="card-actions justify-end">
              <button onClick={getAdvice} className="btn btn-primary px-8">Accept</button>
            </div>
          </div>
        </div>      

      </div>
    </>
  );
}

export default App;
