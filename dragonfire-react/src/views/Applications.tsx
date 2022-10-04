import { Box, Fab, List } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

type IProps = {
    setTotalAchievementPoints: React.Dispatch<React.SetStateAction<number>>,
}

const initialApplications = [
    {
        name: "Søknad om byggetillatelse, Vesthagen",
        id: "Application 1",
        time: "8. november 2020",
    },
    {
        name: "Nabovarsel ang. graving i Østre Farimagsgade",
        id: "Application 2",
        time: "22. februar 2021",
    },
]

const Applications = (props: IProps) => {
    return (
        <Box sx={{width: "100%"}}>
            <h1>
                Søknader
            </h1>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>

            </List>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Box>
    );
}

export default Applications;