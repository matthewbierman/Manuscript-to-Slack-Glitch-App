Manuscript To Slack
=========================

Sends a case update from Manuscript to a slack channel

Configuration:

1. Generate an incoming webhook to your Slack channel

2. Add the url to the Glitch environment as SLACKURL
"SLACKURL=https://hooks.slack.com/services/{yourkeys}"

3. Generate a random string and add it to the Glitch enviroment as APIKEY APIKEY=somerandomkey

4. Add your Manuscript site url to the Glitch as MANUSCRIPTURL (include everything before "/cases") MANUSCRIPTURL="https://{yourmanuscriptsite}.fogbugz.com/{f}/"

5. Add a webhook in Manuscript pointed to your Glitch app, make sure to add the api key "https://{your-glitch-app}.glitch.me/api/sendToSlack?apikey={yourapikey}"

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
