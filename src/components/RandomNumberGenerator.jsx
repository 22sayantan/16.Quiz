import "./Timer.css";
import Ques from "./Data";
import { useNavigate } from "react-router-dom";

export default function RandomNumberGenerator() {
  const navigate = useNavigate();

  const min = 1;
  const max = 50;

  const id_list = [];
  const ans_list = [];

  for (let i = 0; i < max; i++) {
    const rand_num = Math.floor(Math.random() * (max - min + 1)) + min;
    id_list.push(rand_num);
  }

  const unique_num = [...new Set(id_list)];
  const unique_array = unique_num.slice(0, 10);
  console.log(unique_array);

  function SubmitResponse() {
    console.log("you click on submit button !");
    console.log(ans_list.sort((a,b) => a.Q_no-b.Q_no));
    navigate('/timeUp');
  }
  function ExitResponse() {
    confirm('Are you sure to exit?')
    console.log("you click on EXIT button !");
  }
  return (
    <>
      <ol className="QSet">
        {unique_array.map((e, index) => {
          return (
            <li key={index}>
              [Q] &ensp;
              <span>{Ques.find((obj) => obj.id === e).Q}</span>
              <div>
                <ol type="A" className="Container">
                  <div className="RBtn">
                    <input
                      type="radio"
                      name={"ans_" + index}
                      value={Ques.find((obj) => obj.id === e).A}
                      onClick={(event) => {
                        if ((ans_list.findIndex((obj) => obj.Q === e)) !== -1) {
                          ans_list[ans_list.findIndex((obj) => obj.Q === e)] = { 'Q_no':index+1,'Q': e, 'ans': event.target.value };
                        } else {
                          ans_list.push({ 'Q_no':index+1,'Q': e, 'ans': event.target.value });
                        }
                      }}
                    />
                    <li>{Ques.find((obj) => obj.id === e).A}</li>
                  </div>
                  <div className="RBtn">
                    <input
                      type="radio"
                      name={"ans_" + index}
                      value={Ques.find((obj) => obj.id === e).B}
                      onClick={(event) => {
                        if ((ans_list.findIndex((obj) => obj.Q === e)) !== -1) {
                          ans_list[ans_list.findIndex((obj) => obj.Q === e)] = { 'Q_no':index+1,'Q': e, 'ans': event.target.value };
                        } else {
                          ans_list.push({ 'Q_no':index+1,'Q': e, 'ans': event.target.value });
                        }
                      }}
                    />
                    <li>{Ques.find((obj) => obj.id === e).B}</li>
                  </div>
                  <div className="RBtn">
                    <input
                      type="radio"
                      name={"ans_" + index}
                      value={Ques.find((obj) => obj.id === e).C}
                      onClick={(event) => {
                        if ((ans_list.findIndex((obj) => obj.Q === e)) !== -1) {
                          ans_list[ans_list.findIndex((obj) => obj.Q === e)] = { 'Q_no':index+1,'Q': e, 'ans': event.target.value };
                        } else {
                          ans_list.push({ 'Q_no':index+1,'Q': e, 'ans': event.target.value });
                        }
                      }}
                    />
                    <li>{Ques.find((obj) => obj.id === e).C}</li>
                  </div>
                  <div className="RBtn">
                    <input
                      type="radio"
                      name={"ans_" + index}
                      value={Ques.find((obj) => obj.id === e).D}
                      onClick={(event) => {
                        if ((ans_list.findIndex((obj) => obj.Q === e)) !== -1) {
                          ans_list[ans_list.findIndex((obj) => obj.Q === e)] = { 'Q_no':index+1,'Q': e, 'ans': event.target.value };
                        } else {
                          ans_list.push({ 'Q_no':index+1,'Q': e, 'ans': event.target.value });
                        }
                      }}
                    />
                    <li>{Ques.find((obj) => obj.id === e).D}</li>
                  </div>
                </ol>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="submissiion_button">
        <button type="submit" onClick={SubmitResponse}>
          Submit
        </button>
        <button type="submit" onClick={ExitResponse}>
          Exit
        </button>
      </div>
    </>
  );
}
