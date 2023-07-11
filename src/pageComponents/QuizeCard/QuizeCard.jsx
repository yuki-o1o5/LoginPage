import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./QuizeCard.css";

export const QuizeCard = ({ number, question, answers, updateQuizAnswer }) => {
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    updateQuizAnswer(value);
  }, [value]);

  const handleChange = (event) => {
    console.log("v", event.target.value);
    const newValue = JSON.parse(JSON.stringify(event.target.value));
    setValue(newValue);
  };

  return (
    <div className="quizeControler">
      <div className="questionContainer">
        <div className="questionNumber">Q{number}</div>
        <div>{question}</div>
      </div>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          {answers.map((data, index) => {
            return (
              <FormControlLabel
                value={JSON.stringify(data)}
                control={<Radio />}
                label={data.answer}
                key={index}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </div>
  );
};
