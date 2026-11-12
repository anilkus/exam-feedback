# Exam Feedback

A lightweight, Turkish-language web app that helps students review exam results by showing estimated topic-level strengths and areas to study. Students select a course, enter their name and score, and receive a personalized report. The app can also display course and overall rankings when its API is configured.

> **Important:** Topic analysis is an estimate based on the total score. It assumes students earn points on easier questions before harder ones; it does not identify which questions were actually answered incorrectly. Students should check their exam paper for exact results.

## Features

- Course and exam selection, with course-specific score limits.
- Topic-level analysis with study suggestions.
- Printable reports (including saving as PDF through the browser’s print dialog).
- Course and overall rankings, when the ranking API is available.
- Responsive layout for desktop and mobile screens.

## Run locally

This is a static website built with HTML, CSS, and vanilla JavaScript. No build step or package installation is required.

1. Clone or download this repository.
2. Open `index.html` in a browser, or serve the project directory with a local static web server.

The course data is maintained in `dersler.js`. The API endpoint is configured in `config.js` as `window.API_URL`. If no API endpoint is configured, ranking and score submission features are unavailable.

## Deployment

The project can be hosted on any static web hosting service, including GitHub Pages. Publish the repository’s root directory and ensure `index.html`, `style.css`, `app.js`, `config.js`, and `dersler.js` are included.

## Project files

- `index.html` — page structure and form.
- `style.css` — layout, styling, and print rules.
- `app.js` — validation, estimated topic analysis, reports, and ranking integration.
- `dersler.js` — course, exam, question-point, difficulty, and study-tip data.
- `config.js` — ranking API endpoint configuration.

---

# Exam-Feedback (Deutsch)

Eine schlanke Webanwendung auf Türkisch, die Studierenden hilft, Prüfungsergebnisse auszuwerten. Sie zeigt eine geschätzte Übersicht der Stärken und Lernbereiche nach Themen. Studierende wählen ein Fach aus, geben ihren Namen und ihre Punktzahl ein und erhalten einen persönlichen Bericht. Bei konfigurierter API kann die Anwendung außerdem Ranglisten pro Fach und eine Gesamtrangliste anzeigen.

> **Wichtig:** Die Themenanalyse ist eine Schätzung auf Grundlage der Gesamtpunktzahl. Sie geht davon aus, dass zuerst Punkte für leichtere und anschließend für schwierigere Fragen erzielt werden. Die tatsächlich falsch beantworteten Fragen werden nicht ermittelt. Für genaue Ergebnisse sollte die Prüfungsarbeit eingesehen werden.

## Funktionen

- Auswahl von Fach und Prüfung mit fachspezifischer Punktebegrenzung.
- Themenbezogene Analyse mit Lernempfehlungen.
- Druckbare Berichte (über den Druckdialog des Browsers auch als PDF speicherbar).
- Ranglisten pro Fach und eine Gesamtrangliste, sofern die Ranking-API verfügbar ist.
- Responsives Layout für Desktop- und Mobilgeräte.

## Lokal ausführen

Dies ist eine statische Website mit HTML, CSS und reinem JavaScript. Ein Build-Schritt oder die Installation von Paketen ist nicht erforderlich.

1. Dieses Repository klonen oder herunterladen.
2. `index.html` im Browser öffnen oder das Projektverzeichnis mit einem lokalen statischen Webserver bereitstellen.

Die Fachdaten befinden sich in `dersler.js`. Der API-Endpunkt wird in `config.js` als `window.API_URL` konfiguriert. Ohne konfigurierten API-Endpunkt sind Ranglisten und die Übermittlung von Punktzahlen nicht verfügbar.

## Bereitstellung

Das Projekt kann bei jedem statischen Hosting-Anbieter veröffentlicht werden, zum Beispiel mit GitHub Pages. Veröffentliche das Stammverzeichnis des Repositorys und stelle sicher, dass `index.html`, `style.css`, `app.js`, `config.js` und `dersler.js` enthalten sind.

## Projektdateien

- `index.html` — Seitenstruktur und Formular.
- `style.css` — Layout, Gestaltung und Druckregeln.
- `app.js` — Validierung, geschätzte Themenanalyse, Berichte und Ranking-Integration.
- `dersler.js` — Daten zu Fächern, Prüfungen, Fragenpunkten, Schwierigkeitsgraden und Lerntipps.
- `config.js` — Konfiguration des Ranking-API-Endpunkts.
