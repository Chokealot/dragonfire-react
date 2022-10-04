import { Avatar, Box, Container, IconButton, List, ListItem, ListItemAvatar, ListItemText, Stack } from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
import Diamond from './../assets/diamond.svg';

const Achievements = () => {
    const achievementsList = [
        {
            category: 'Bruk',
            name: 'Førstegangs innlogging',
            id: 1,
            isComplete: false,
            completedAt: '03. november 2020',
            points: 10,
        },
        {
            category: 'Bruk',
            name: 'Aktiv fem dager på rad',
            id: 2,
            isComplete: false,
            completedAt: null,
            points: 100,
        },
        {
            category: 'Bruk',
            name: 'Aktiv 20 dager sist måned',
            id: 3,
            isComplete: false,
            completedAt: null,
            points: 200,
        },
        {
            category: 'Sjekklister',
            name: 'Opprette sjekkliste',
            id: 4,
            isComplete: false,
            completedAt: null,
            points: 50,
        },
        {
            category: 'Sjekklister',
            name: 'Fylle ut sjekkpunkt',
            id: 5,
            isComplete: false,
            completedAt: null,
            points: 20,
        },
        {
            category: 'Sjekklister',
            name: 'Kommentar på sjekkpunkt',
            id: 6,
            isComplete: false,
            completedAt: null,
            points: 10,
        },
        {
            category: 'Sjekklister',
            name: 'Lagt til bilde på sjekkliste',
            id: 7,
            isComplete: false,
            completedAt: null,
            points: 20,
        },
        {
            category: 'Søknader',
            name: 'Legg til søknad',
            id: 8,
            isComplete: false,
            completedAt: null,
            points: 50,
        },
        {
            category: 'Søknader',
            name: 'Sende inn søknad',
            id: 9,
            isComplete: false,
            completedAt: null,
            points: 100,
        },
        {
            category: 'Timeregistrering',
            name: 'Registrere samme dag',
            id: 10,
            isComplete: false,
            completedAt: null,
            points: 50,
        },
        {
            category: 'Timeregistrering',
            name: 'Registerer samme dag, 5 dager på rad',
            id: 11,
            isComplete: false,
            completedAt: null,
            points: 100,
        },
        {
            category: 'Håndbok/prosedyrer',
            name: 'Opprettet',
            id: 12,
            isComplete: false,
            completedAt: null,
            points: 100,
        },
        {
            category: 'Håndbok/prosedyrer',
            name: 'Lest',
            id: 13,
            isComplete: false,
            completedAt: null,
            points: 50,
        },
        {
            category: 'Prosjekt',
            name: 'Lagt inn full adresse',
            id: 14,
            isComplete: false,
            completedAt: '15. november 2020',
            points: 30,
        },
        {
            category: 'Prosjekt',
            name: 'Valgt kunde',
            id: 15,
            isComplete: false,
            completedAt: '15. november 2020',
            points: 20,
        },
        {
            category: 'Prosjekt',
            name: 'Valgt prosjektleder',
            id: 16,
            isComplete: false,
            completedAt: '16. november 2020',
            points: 20,
        },
        {
            category: 'Prosjekt',
            name: 'Alle tre over',
            id: 17,
            isComplete: false,
            completedAt: null,
            points: 30,
        },
        {
            category: 'Produktregister',
            name: 'Importer nye priser',
            id: 18,
            isComplete: false,
            completedAt: null,
            points: 150,
        },
    ]
    return (
        <>
            <h1>
                Achievements view
            </h1>
            <Container maxWidth="xl">
            <Stack flexDirection={"row"} sx={{justifyContent: "center"}}>
            <Box sx={{ flexGrow: 0 }}>
                <div className="avatar-wrapper">
                    <div className={"avatar-ring bronze"}>
                        <IconButton sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </div>
                </div>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
            <div className="avatar-wrapper">
                <div className={"avatar-ring silver"}>
                    <IconButton sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                </div>
            </div>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
            <div className="avatar-wrapper">
                <div className={"avatar-ring gold"}>
                    <IconButton sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                </div>
            </div>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
            <div className="avatar-wrapper">
                <img className="avatar-diamond" src={Diamond} alt="diamond"/>
                <div className={"avatar-ring gold"}>
                    <IconButton sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                </div>
            </div>
            </Box>
            </Stack>
            </Container>

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