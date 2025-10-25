# Visit galina-lavigina-my-story at:

https://galina-lavigina-my-story.netlify.app/

# Summary

## Setup

Install `http-server` globally (only once):

```bash
npm install -g http-server




## How to run your project each time:
Open your terminal.

Navigate to your project folder:

cd C:\Users\maria\Desktop\test

Run the local server:

http-server

```

If not working do firs:  
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

### Open your browser and go to:

http://127.0.0.1:8080/

http://127.0.0.1:8080/index.html (or this)

### Troubleshooting

### If running http-server gives a PowerShell execution policy error, you can temporarily bypass it by running:

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

### Available on:

Available on:
http://192.168.1.78:8080
http://127.0.0.1:8080

http://192.168.1.78:8080 (use this to test on mobile) - the 192.168.1.78 is the IP address

## Final Advice

From now on, treat:
http://127.0.0.1:8080 (or your local IP)
as your source of truth when testing or debugging.

## Which should you use?

Use 127.0.0.1:8080 when coding/debugging in VS Code on your PC

Use 192.168.1.78:8081 when testing from phone or other devices

Both point to the same project, just viewed from different network perspectives.

## refresh to see the newest version

Ctrl + Shift + R

## gitHub deployment

https://github.com/MariaLavigina/myTesting

## netlify - deployment from master gitHub

https://galina-lavigina-my-story.netlify.app/

## analytics.google

https://analytics.google.com/analytics/web/#/a371110623p508333052/realtime/overview?params=_u..nav%3Dmaui

## merge gh-pages into master while keeping master’s history

git checkout master
git merge gh-pages
git add .
git commit -m "Resolved merge conflicts from gh-pages"
git push origin master

## If there are no conflicts (most likely for a solo project):

git checkout master
git merge gh-pages
git push origin master

## merge master into gh-pages and push in one go, safely:

git checkout gh-pages && git merge master --no-edit && git push origin gh-pages
