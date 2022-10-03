import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AchivementSnackbar(handleSnackbar: boolean) {

    
    const [ achivement, setAchivement ] = React.useState<any>("Default Achivement Message")
    
    const [open, setOpen] = React.useState(false);
    
    const handleClick = (value: boolean) => {
        setOpen(value);
    };
    
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        
        setOpen(false);
    };
    
    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
        
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                { achivement }
            </Alert>
        </Snackbar>
        </Stack>
    );
}
