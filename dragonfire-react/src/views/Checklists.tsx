import { Avatar, Box, Button, Fab, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from "@mui/material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddIcon from '@mui/icons-material/Add';
import React from "react";
import DialogWrapper from "../components/DialogWrapper";
import Checkbox from '@mui/material/Checkbox';

type IProps = {
    setTotalAchievementPoints: React.Dispatch<React.SetStateAction<number>>,
}

const defaultChecklists = [
    {
        name: "Checklist 1",
        id: "Checklists 1",
        time: "8. november 2020",
    },
    {
        name: "Checklist 2",
        id: "Checklists 2",
        time: "12. januar 2021",
    },
    {
        name: "Checklist 3",
        id: "Checklist 3",
        time: "7. mars 2021",
    },
    {
        name: "Checklist 4",
        id: "Checklists 4",
        time: "3. november 2021",
    },
]

const Checklists = (props: IProps) => {
    const { setTotalAchievementPoints } = props;
    const [ checklists, setChecklists ] = React.useState(defaultChecklists);
    const [ dialogOpen, setDialogOpen ] = React.useState(false);
    const pointsPerChecklist = 50;
    const pointsCompleteChecklist = 20;
    var dateOptions: Intl.DateTimeFormatOptions = { weekday: undefined, year: 'numeric', month: 'long', day: 'numeric' };

    const handleAddChecklist = () => {
        setChecklists((old: any) => {
            return [
                ...old,
                {
                    name: "Checklist " + (old.length + 1 ),
                    id: "Checklist_" + (old.length + 1 ),
                    time: `${new Date(Date.now()).toLocaleDateString("nb-NO", dateOptions )}`
                }
            ]
        })
        setTotalAchievementPoints((old: number) => old + pointsPerChecklist);
    }

    const handleClickChecklist = (name: string) => {
        console.log("name", name);
        setDialogOpen(true);
    }

    return (
        <Box sx={{width: "100%", height: "100vh"}}>
            <h1>
                Checklists
            </h1>
            <List sx={{ width: '100%', height:"80%", bgcolor: 'background.paper' }}>
                {
                    checklists.map((checklist: any) => (
                            <ListItem key={checklist.id} onClick={() => handleClickChecklist(checklist.name)}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FormatListBulletedIcon />
                                    </Avatar>
                                </ListItemAvatar>
                            <ListItemText primary={checklist.name} secondary={checklist.time} />
                        </ListItem>
                    ))
                }
            </List>
            <Fab sx={{right: 0, position: "fixed", mr: 2}} color="primary" aria-label="add" onClick={handleAddChecklist}>
                <AddIcon />
            </Fab>
            { dialogOpen && (
                <DialogWrapper open={true} maxWidth={"sm"} fullWidth={true} onSubmit={undefined} ariaLabelledBy={"dialog"}>
                        <Box padding={3}>
                            <h2>Sjekkliste</h2>
                            <List sx={{minHeight: 500}}>
                                <Stack flexDirection={"row"} alignItems="center">
                                    <Checkbox />
                                    <Typography>Har du husket å koble røret?</Typography>
                                </Stack>
                                <Stack flexDirection={"row"} alignItems="center">
                                    <Checkbox />
                                    <Typography>Er smittevernsregler fulgt?</Typography>
                                </Stack>
                                <Stack flexDirection={"row"} alignItems="center">
                                    <Checkbox />
                                    <Typography>Er etterkontrol utført?</Typography>
                                </Stack>
                                <Stack flexDirection={"row"} alignItems="center">
                                    <Checkbox />
                                    <Typography>Avviksmelding utfylt?</Typography>
                                </Stack>
                            </List>
                            <Stack flexDirection={"row"} sx={{justifyContent: "space-between"}}>
                                <Button variant="text" onClick={() => setDialogOpen(false)}>Lukk</Button>
                                <Button variant="contained" onClick={() => {
                                    setDialogOpen(false)
                                    setTotalAchievementPoints((old: number) => old + pointsCompleteChecklist)
                                    }
                                }>Fullfør</Button>
                            </Stack>
                        </Box>
                </DialogWrapper>
            )}
        </Box>
    )
};

export default Checklists;