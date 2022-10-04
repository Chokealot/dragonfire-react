import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';

const Achievements = () => {
    const achievementsList = [
        {
            category: 'Bruk',
            name: 'Førstegangs innlogging',
            id: 1,
            isComplete: true,
            points: 10,
        },
        {
            category: 'Bruk',
            name: 'Aktiv fem dager på rad',
            id: 2,
            isComplete: false,
            points: 100,
        },
        {
            category: 'Bruk',
            name: 'Aktiv 20 dager sist måned',
            id: 3,
            isComplete: false,
            points: 200,
        },
        {
            category: 'Sjekklister',
            name: 'Opprette sjekkliste',
            id: 4,
            isComplete: false,
            points: 50,
        },
        {
            category: 'Sjekklister',
            name: 'Fylle ut sjekkpunkt',
            id: 5,
            isComplete: false,
            points: 20,
        },
        {
            category: 'Sjekklister',
            name: 'Kommentar på sjekkpunkt',
            id: 6,
            isComplete: false,
            points: 10,
        },
        {
            category: 'Sjekklister',
            name: 'Lagt til bilde på sjekkliste',
            id: 7,
            isComplete: false,
            points: 20,
        },
        {
            category: 'Søknader',
            name: 'Legg til søknad',
            id: 8,
            isComplete: false,
            points: 50,
        },
        {
            category: 'Søknader',
            name: 'Sende inn søknad',
            id: 9,
            isComplete: false,
            points: 100,
        },
        {
            category: 'Timeregistrering',
            name: 'Registrere samme dag',
            id: 10,
            isComplete: false,
            points: 50,
        },
        {
            category: 'Timeregistrering',
            name: 'Registerer samme dag, 5 dager på rad',
            id: 11,
            isComplete: false,
            points: 100,
        },
        {
            category: 'Håndbok/prosedyrer',
            name: 'Opprettet',
            id: 12,
            isComplete: false,
            points: 100,
        },
        {
            category: 'Håndbok/prosedyrer',
            name: 'Lest',
            id: 13,
            isComplete: false,
            points: 50,
        },
        {
            category: 'Prosjekt',
            name: 'Lagt inn full adresse',
            id: 14,
            isComplete: false,
            points: 30,
        },
        {
            category: 'Prosjekt',
            name: 'Valgt kunde',
            id: 15,
            isComplete: false,
            points: 20,
        },
        {
            category: 'Prosjekt',
            name: 'Valgt prosjektleder',
            id: 16,
            isComplete: false,
            points: 20,
        },
        {
            category: 'Prosjekt',
            name: 'Alle tre over',
            id: 17,
            isComplete: false,
            points: 30,
        },
        {
            category: 'Produktregister',
            name: 'Importer nye priser',
            id: 18,
            isComplete: false,
            points: 150,
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
                                    <Avatar sx={{ backgroundColor: achievement?.isComplete ? "#FFD700" : undefined}}>
                                        <WorkIcon />
                                    </Avatar>
                                </ListItemAvatar>
                            <ListItemText
                                primary={achievement.name}
                                primaryTypographyProps={!achievement?.isComplete ? {color: "lightgrey"} : {fontWeight: "bold"}}
                                secondary="Jan 9, 2014"
                                secondaryTypographyProps={!achievement?.isComplete ? {color: "lightgrey"} : {}}
                            />
                        </ListItem>
                    ))
                }
            </List>
        </>
    )
};

export default Achievements;