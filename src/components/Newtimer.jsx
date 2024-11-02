import './Timer.css'
import Timer from "./Timer"

export default function NewTimer(){
  return(
    <div>
      <h1>Exam</h1>
      <div className="timer">Timer : <Timer/></div>
      <p>Question : </p>
    </div>
  )
}