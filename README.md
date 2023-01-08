# DT193G Projekt---klient-applikation-christinejohanson chjo2104 DEL 2

Projekt i kursen Fullstacks-utveckling med ramverk. Denna del består av klient-applikation skapad med Vue och Bootstrap som konsumerar 
webbtjänsten i del 1. 

Skivbutiken Ordinary´s webbplats för internt bruk där användare kan logga in och sedan läsa ut alla skivor i databasen, lägga till ny skiva, 
uppdatera vald skiva, radera skiva samt se spår på vald skiva. 

Varken webbtjänst eller klient applikationen finns publicerade online. 


För att göra fetch-anrop till webbtjänsten: 

## API ##

RecordController

| Metod | Ändpunkt | Beskrivning |
| --- | --- | --- |
| GET | /api/record | hämtar alla record |
| GET | /api/record/1 | hämtar record med angivet ID |
| GET | /api/gettracks/1 | hämtar alla tracks som finns på record med angivet ID |
| POST | /api/record | lagrar ny record |
| PUT | /api/record/1 | uppdaterar record med angivet ID |
| DELETE | /api/record/1 | raderar record med angivet ID |

TrackController

| Metod | Ändpunkt | Beskrivning |
| --- | --- | --- |
| GET | /api/track | hämtar alla track |
| GET | /api/track/1 | hämtar track med angivet ID |
| POST | /api/track | lagrar ny track |
| PUT | /api/track/1 | uppdaterar track med angivet ID |
| DELETE | /api/track/1 | raderar track med angivet ID |

AuthController

| Metod | Ändpunkt | Beskrivning |
| --- | --- | --- |
| POST | /api/register | registrera ny användare |
| POST | /api/login | logga in |
| POST | /api/logout | logga ut |
