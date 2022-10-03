import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';

const Achievements = () => {
    const achievementsList = [
        {
            name: "achievement 1",
            id: "achievement 1"
        },
        {
            name: "achievement 2",
            id: "achievement 2"
        },
        {
            name: "achievement 3",
            id: "achievement 3"
        },
        {
            name: "achievement 4",
            id: "achievement 4"
        },
    ]
    return (
        <>
            <h1>
                Achievements view
            </h1>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {
                    achievementsList.map((achievement: any) => (
                            <ListItem key={achievement.id}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <WorkIcon />
                                    </Avatar>
                                </ListItemAvatar>
                            <ListItemText primary={achievement.name} secondary="Jan 9, 2014" />
                        </ListItem>
                    ))
                }
            </List>
        </>
    )
};

export default Achievements;