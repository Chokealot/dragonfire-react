import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

type IProps = {
    achivement: string
    open: boolean,
}

export default function SimpleSnackbar(props: IProps) {

  const { achivement, open } = props

  const handleClick = () => {
    open
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    open
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        Open Achivementlist
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={achivement}
        action={action}
      />
    </div>
  );
}
