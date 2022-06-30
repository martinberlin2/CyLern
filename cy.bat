@echo off
echo ... starte Cypress 9, die machen Chrome
rem ..\node_modules\.bin\cypress open --browser chrome 
rem workpc

node_modules\.bin\cypress open --browser chrome
echo ... Cypress beendet

rem test: neues Verz mit was drin und checkout
danach git-ignoren