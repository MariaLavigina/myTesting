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
