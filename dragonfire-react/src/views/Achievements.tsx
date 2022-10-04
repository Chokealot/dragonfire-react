import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
import React, { useId } from "react";

const Achievements = (props: any) => {
    const id = useId();
    const {sjekklister = [] } = props;

    const bruk = [
        {
            category: 'Bruk',
            name: 'Førstegangs innlogging',
            id: 1,
            isComplete: true,
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
    ];

    const søknader = [
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
    },];

    const prosjekt = [
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
    ];

    const produktregister = [
        {
            category: 'Produktregister',
            name: 'Importer nye priser',
            id: 18,
            isComplete: false,
            completedAt: null,
            points: 150,
        },
    ];

    const prosedyrer = [
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
    ];

    const timeregistrering = [
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
    ];

    return (
        <>
            <h1>Achievements</h1>
            <Typography sx={{textDecoration: "underline"}} alignItems="flex-start" display={"flex"} pl={1} variant="h4" component="h2">Bruk</Typography>
            <List sx={{ width: '100%', bgcolor: 'background.paper', paddingBottom: 8 }}>
                {
                    bruk.map((achievements: any, index: number) => (
                        createAchievementList(achievements)
                    ))
                }
            </List>

            <Typography sx={{textDecoration: "underline"}} alignItems="flex-start" display={"flex"} pl={1} variant="h4" component="h2">Sjekklister</Typography>
            <List sx={{ width: '100%', bgcolor: 'background.paper', paddingBottom: 8 }}>
                {
                    sjekklister.map((achievements: any, index: number) => (
                        createAchievementList(achievements)
                    ))
                }
            </List>

            <Typography sx={{textDecoration: "underline"}} alignItems="flex-start" display={"flex"} pl={1} variant="h4" component="h2">Søknader</Typography>
            <List sx={{ width: '100%', bgcolor: 'background.paper', paddingBottom: 8 }}>
                {
                    søknader.map((achievements: any, index: number) => (
                        createAchievementList(achievements)
                    ))
                }
            </List>

            <Typography sx={{textDecoration: "underline"}} alignItems="flex-start" display={"flex"} pl={1} variant="h4" component="h2">Prosjekt</Typography>
            <List sx={{ width: '100%', bgcolor: 'background.paper', paddingBottom: 8 }}>
                {
                    prosjekt.map((achievements: any, index: number) => (
                        createAchievementList(achievements)
                    ))
                }
            </List>

            <Typography sx={{textDecoration: "underline"}} alignItems="flex-start" display={"flex"} pl={1} variant="h4" component="h2">Produktregister</Typography>
            <List sx={{ width: '100%', bgcolor: 'background.paper', paddingBottom: 8 }}>
                {
                    produktregister.map((achievements: any, index: number) => (
                        createAchievementList(achievements)
                    ))
                }
            </List>

            <Typography sx={{textDecoration: "underline"}} alignItems="flex-start" display={"flex"} pl={1} variant="h4" component="h2">Håndbok/prosedyrer</Typography>
            <List sx={{ width: '100%', bgcolor: 'background.paper', paddingBottom: 8 }}>
                {
                    prosedyrer.map((achievements: any, index: number) => (
                        createAchievementList(achievements)
                    ))
                }
            </List>

            <Typography sx={{textDecoration: "underline"}} alignItems="flex-start" display={"flex"} pl={1} variant="h4" component="h2">Timeregistrering</Typography>
            <List sx={{ width: '100%', bgcolor: 'background.paper', paddingBottom: 8 }}>
                {
                    timeregistrering.map((achievements: any, index: number) => (
                        createAchievementList(achievements)
                    ))
                }
            </List>
        </>
    )

    function createAchievementList(achievement: any): JSX.Element {
        return (
        <ListItem key={achievement.id + "-" + id}>
            <ListItemAvatar>
                <Avatar sx={{ backgroundColor: achievement?.isComplete ? "#FFD700" : undefined }}>
                    <WorkIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={achievement.name}
                primaryTypographyProps={!achievement?.isComplete ? { color: "lightgrey" } : { fontWeight: "bold" }}
                secondary={achievement?.completedAt ?? null}
                secondaryTypographyProps={!achievement?.isComplete ? { color: "lightgrey" } : {}} />
        </ListItem>
        )
    }
};

export default Achievements;