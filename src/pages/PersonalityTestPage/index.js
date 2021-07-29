import {useState, useEffect, Fragment} from 'react';
import {useHistory} from 'react-router-dom';
import {Paper, Button, CircularProgress} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import api from 'utils/api';
import Question from './Question';

const useStyles = makeStyles(() => ({
  paper: {
    width: 800,
    height: 600,
    padding: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
  },
  finishButton: {
    marginLeft: 'auto',
  },
  spinner: {
    margin: 'auto',
  }
}));

const PersonalityTestPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [step, setStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState([]);

  useEffect(() => {
    localStorage.clear();

    setIsLoading(true);
    api.get('/questions')
      .then(({data}) => setQuestions(data))
      .finally(() => setIsLoading(false));
  }, []);

  const handleFinish = () => {
    setIsLoading(true);
    api
      .post('/personality-test', {selectedAnswer})
      .then(res => {
        localStorage.setItem('your-trait', res);
        history.push('/your-trait');
      });
  };

  return (
    <Paper elevation={5} className={classes.paper}>
      {isLoading && <CircularProgress className={classes.spinner} />}
      {!isLoading && (
        <Fragment>
          <Question
            {...questions[step]}
            selectedAnswer={selectedAnswer[step]}
            handleChange={e => {
              setSelectedAnswer(prevSelectedAnswer => {
                prevSelectedAnswer[step] = e.target.value;

                return [...prevSelectedAnswer];
              });
            }}
          />
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="secondary"
              disabled={step === 0}
              onClick={() => setStep(step - 1)}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setStep(step + 1)}
              disabled={!selectedAnswer[step] || step === questions.length - 1}
            >
              Next
            </Button>
            <Button
              className={classes.finishButton}
              color="secondary"
              onClick={handleFinish}
              disabled={selectedAnswer.length !== questions.length}
            >
              Finish
            </Button>
          </div>
        </Fragment>
      )}
    </Paper>
  );
}

export default PersonalityTestPage;
