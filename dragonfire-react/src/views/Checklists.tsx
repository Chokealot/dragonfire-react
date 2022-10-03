import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const Checklists = () => {
    const checklists = [
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
            id: "achievement 3"
        },
        {
            name: "Checklists 4",
            id: "Checklists 4"
        },
    ]
    return (
        <>
            <h1>
                Checklists view
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
        </>
    )
};

export default Checklists;