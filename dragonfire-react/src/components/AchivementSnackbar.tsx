import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { SnackbarContent } from '@mui/material';

type IProps = {
    achivement: string
    open: boolean,
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SimpleSnackbar(props: IProps) {

  const { achivement, open, setOpen } = props


  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen?.((old) => !old);
  };

  const action = (
    <React.Fragment>
      <Button sx={{color: "black"}} size="small" onClick={handleClose}>
        Close
      </Button>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
        color={"#FFD700"}
        sx={{ background: "#FFD700" }}
      >
        <SnackbarContent style={{ background: "#FFD700", color: "black" }} message={achivement} />
      </Snackbar>
    </div>
  );
}
