import {Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

const LandingPage = () => {
  const history = useHistory();

  return (
    <Button color="primary" variant="contained" onClick={() => history.push('/take-test')}>
      Start Personality Test
    </Button>
  );
}

export default LandingPage;
