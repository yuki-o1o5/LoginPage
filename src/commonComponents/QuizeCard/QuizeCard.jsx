import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./QuizeCard.css";

export const QuizeCard = ({
  number,
  question,
  collectAnswer,
  wrongAnswer1,
  wrongAnswer2,
  wrongAnswer3,
}) => {
  const [value, setValue] = React.useState("female");
  const handleChange = (event) => {
    setValue(event.target.value);
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
          <FormControlLabel
            value={collectAnswer}
            control={<Radio />}
            label={collectAnswer}
          />
          <FormControlLabel
            value={wrongAnswer1}
            control={<Radio />}
            label={wrongAnswer1}
          />
          <FormControlLabel
            value={wrongAnswer2}
            control={<Radio />}
            label={wrongAnswer2}
          />
          <FormControlLabel
            value={wrongAnswer3}
            control={<Radio />}
            label={wrongAnswer3}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
