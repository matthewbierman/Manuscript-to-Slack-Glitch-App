Manuscript To Slack
=========================

Sends a case update from Manuscript to a Slack channel

*will also invoke a case lookup if your Slack channel has the Manuscript app installed

Configuration:

1. Generate an incoming webhook to your Slack channel

5. Add a webhook in Manuscript pointed to this Glitch app (or your own if you copied it), make sure to add the Slack webhhook URL as an argument "https://post-case-updates-to-slack.glitch.me/api/sendToSlack?slackWebHookURL={your-slack-incoming-webhook-url}"

About Glitch:

Welcome to the Glitch BETA
=========================

Click `Show` in the header to see your app live. Updates to your code will instantly deploy and update live.

**Glitch** is the friendly community where you'll build the app of your dreams. Glitch lets you instantly create, remix, edit, and host an app, bot or site, and you can invite collaborators or helpers to simultaneously edit code with you.

Find out more [about Glitch](https://glitch.com/about).


Your Project
------------

On the front-end,
- edit `public/client.js`, `public/style.css` and `views/index.html`
- drag in `assets`, like images or music, to add them to your project

On the back-end,
- your app starts at `server.js`
- add frameworks and packages in `package.json`
- safely store app secrets in `.env` (nobody can see this but you and people you invite)


Made by [Fog Creek](https://fogcreek.com/)
-------------------

\ ゜o゜)ノ
