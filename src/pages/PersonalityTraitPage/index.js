import {useHistory} from 'react-router-dom';
import {Typography, Button} from '@material-ui/core';

const PersonalityTraitPage = () => {
  const history = useHistory();

  return (
    <div>
      <Typography variant="h4">
        {localStorage.getItem('your-trait')}
      </Typography>
      <Button onClick={() => history.goBack()}>Try Again</Button>
    </div>
  );
}

export default PersonalityTraitPage;
