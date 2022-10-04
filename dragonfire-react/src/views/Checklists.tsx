import { Avatar, Box, Fab, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddIcon from '@mui/icons-material/Add';
import React from "react";

type IProps = {
    setTotalAchievementPoints: React.Dispatch<React.SetStateAction<number>>,
}

const defaultChecklists = [
    {
        name: "Checklists 1",
        id: "Checklists 1"
    },
    {
        name: "Checklists 2",
        id: "Checklists 2"
    },
    {
        name: "Checklists 3",
        id: "Checklist 3"
    },
    {
        name: "Checklists 4",
        id: "Checklists 4"
    },
]

const Checklists = (props: IProps) => {
    const { setTotalAchievementPoints } = props;
    const [ checklists, setChecklists ] = React.useState(defaultChecklists);
    const pointsPerChecklist = 20;

    const handleAddChecklist = () => {
        setChecklists((old: any) => {
            return [
                ...old,
                {
                    name: "Checklist " + (old.length + 1 ),
                    id: "Checklist_" + (old.length + 1 ),
                }
            ]
        })
        setTotalAchievementPoints((old: number) => old + pointsPerChecklist);
    }

    return (
        <Box sx={{width: "100%"}}>
            <h1>
                Checklists
            </h1>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {
                    checklists.map((checklist: any) => (
                            <ListItem key={checklist.id}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FormatListBulletedIcon />
                                    </Avatar>
                                </ListItemAvatar>
                            <ListItemText primary={checklist.name} secondary="Feb 4, 2022" />
                        </ListItem>
                    ))
                }
            </List>
            <Fab color="primary" aria-label="add" onClick={handleAddChecklist}>
                <AddIcon />
            </Fab>
        </Box>
    )
};

export default Checklists;