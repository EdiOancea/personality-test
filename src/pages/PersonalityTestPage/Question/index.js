import {FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@material-ui/core';

const Question = ({
  statement,
  options = [],
  selectedAnswer,
  handleChange,
  id,
}) => (
  <FormControl component="fieldset" key={id}>
    <FormLabel component="legend">{statement}</FormLabel>
    <RadioGroup value={selectedAnswer} onChange={handleChange}>
      {options.map(({value, answer}) => (
        <FormControlLabel
          value={value}
          control={<Radio />}
          label={answer}
        />
      ))}
    </RadioGroup>
  </FormControl>
);

export default Question;
