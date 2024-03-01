/*
 * aplic - ActivePieces License Server
 * Copyright (C) 2024 XaverLeet
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = Number(process.env.APLIC_PORT ) || 8080;

// Main program

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/verify", async (req, res) => {
  console.info(req.body);
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      showPoweredBy: false,
      embeddingEnabled: true,
      gitSyncEnabled: true,
      ssoEnabled: true,
      auditLogEnabled: true,
    }),
  );
});

// refresh CloudOAuth2
app.post("/refresh", async (req, res) => {
  console.info("POST /refesh: " + req.body);
  res.end();
});

// apps CloudOAuth2
app.get("/apps", (req, res) => {
  console.info(req.body);
  res.send(
    '{"pipedrive":{"clientId":"4cfae655a538fece"},"@activepieces/piece-pipedrive":{"clientId":"4cfae655a538fece"},"box":{"clientId":"opoykn5zbzysi29ukdqeeybjvo5ztfz5"},"@activepieces/piece-box":{"clientId":"opoykn5zbzysi29ukdqeeybjvo5ztfz5"},"notion":{"clientId":"dad280d6-db7c-4937-b5f1-69cf5a5d8a62"},"@activepieces/piece-notion":{"clientId":"dad280d6-db7c-4937-b5f1-69cf5a5d8a62"},"gmail":{"clientId":"674512252699-45rosiff4jgk4j4ud7q6a0m1na4411gi.apps.googleusercontent.com"},"@activepieces/piece-gmail":{"clientId":"674512252699-45rosiff4jgk4j4ud7q6a0m1na4411gi.apps.googleusercontent.com"},"google-forms":{"clientId":"674512252699-45rosiff4jgk4j4ud7q6a0m1na4411gi.apps.googleusercontent.com"},"@activepieces/piece-google-forms":{"clientId":"674512252699-45rosiff4jgk4j4ud7q6a0m1na4411gi.apps.googleusercontent.com"},"google-docs":{"clientId":"674512252699-45rosiff4jgk4j4ud7q6a0m1na4411gi.apps.googleusercontent.com"},"@activepieces/piece-google-docs":{"clientId":"674512252699-45rosiff4jgk4j4ud7q6a0m1na4411gi.apps.googleusercontent.com"},"google-drive":{"clientId":"674512252699-45rosiff4jgk4j4ud7q6a0m1na4411gi.apps.googleusercontent.com"},"@activepieces/piece-google-drive":{"clientId":"674512252699-45rosiff4jgk4j4ud7q6a0m1na4411gi.apps.googleusercontent.com"},"google-sheets":{"clientId":"674512252699-45rosiff4jgk4j4ud7q6a0m1na4411gi.apps.googleusercontent.com"},"@activepieces/piece-google-sheets":{"clientId":"674512252699-45rosiff4jgk4j4ud7q6a0m1na4411gi.apps.googleusercontent.com"},"google-my-business":{"clientId":"674512252699-45rosiff4jgk4j4ud7q6a0m1na4411gi.apps.googleusercontent.com"},"@activepieces/piece-google-my-business":{"clientId":"674512252699-45rosiff4jgk4j4ud7q6a0m1na4411gi.apps.googleusercontent.com"},"google-tasks":{"clientId":"674512252699-45rosiff4jgk4j4ud7q6a0m1na4411gi.apps.googleusercontent.com"},"@activepieces/piece-google-tasks":{"clientId":"674512252699-45rosiff4jgk4j4ud7q6a0m1na4411gi.apps.googleusercontent.com"},"google-calendar":{"clientId":"674512252699-45rosiff4jgk4j4ud7q6a0m1na4411gi.apps.googleusercontent.com"},"@activepieces/piece-google-calendar":{"clientId":"674512252699-45rosiff4jgk4j4ud7q6a0m1na4411gi.apps.googleusercontent.com"},"google-business":{"clientId":"674512252699-45rosiff4jgk4j4ud7q6a0m1na4411gi.apps.googleusercontent.com"},"@activepieces/piece-google-business":{"clientId":"674512252699-45rosiff4jgk4j4ud7q6a0m1na4411gi.apps.googleusercontent.com"},"google-contacts":{"clientId":"674512252699-45rosiff4jgk4j4ud7q6a0m1na4411gi.apps.googleusercontent.com"},"@activepieces/piece-google-contacts":{"clientId":"674512252699-45rosiff4jgk4j4ud7q6a0m1na4411gi.apps.googleusercontent.com"},"github":{"clientId":"395c774dcb02b654f3a9"},"@activepieces/piece-github":{"clientId":"395c774dcb02b654f3a9"},"xero":{"clientId":"ED07849460614C87A80FAB32928D893A"},"@activepieces/piece-xero":{"clientId":"ED07849460614C87A80FAB32928D893A"},"linkedin":{"clientId":"78iutpxf104t02"},"@activepieces/piece-linkedin":{"clientId":"78iutpxf104t02"},"line":{"clientId":"2002400991"},"@activepieces/piece-line":{"clientId":"2002400991"},"webflow":{"clientId":"f1b7f64ac4cfe7e579d466981206ab02bf7f4cb93f634c2c7be5176d4096e3e3"},"@activepieces/piece-webflow":{"clientId":"f1b7f64ac4cfe7e579d466981206ab02bf7f4cb93f634c2c7be5176d4096e3e3"},"monday":{"clientId":"ec6540698ab857027e1e107a2649d583"},"@activepieces/piece-monday":{"clientId":"ec6540698ab857027e1e107a2649d583"},"constant-contact":{"clientId":"b73375ff-edc2-4ae0-beb1-2be4ba436163"},"@activepieces/piece-constant-contact":{"clientId":"b73375ff-edc2-4ae0-beb1-2be4ba436163"},"zoho-crm":{"clientId":"1000.3P50FC7QYSK4X7Z27NNAV5JW809FLP"},"@activepieces/piece-zoho-crm":{"clientId":"1000.3P50FC7QYSK4X7Z27NNAV5JW809FLP"},"slack":{"clientId":"3259888084454.4533571344515"},"@activepieces/piece-slack":{"clientId":"3259888084454.4533571344515"},"hubspot":{"clientId":"c53a4933-8606-4927-9787-08f9b7b18eb6"},"@activepieces/piece-hubspot":{"clientId":"c53a4933-8606-4927-9787-08f9b7b18eb6"},"mailchimp":{"clientId":"887440124416"},"@activepieces/piece-mailchimp":{"clientId":"887440124416"},"clickup":{"clientId":"DEJQSXAO7FJ3164GDPV6HDZ87PT7SJNW"},"@activepieces/piece-clickup":{"clientId":"DEJQSXAO7FJ3164GDPV6HDZ87PT7SJNW"},"asana":{"clientId":"1203851607411815"},"@activepieces/piece-asana":{"clientId":"1203851607411815"},"typeform":{"clientId":"AqzDKSX8xFpt25Y4XFt8TVE9TZLqEPzPriiiJEqJ4G45"},"@activepieces/piece-typeform":{"clientId":"AqzDKSX8xFpt25Y4XFt8TVE9TZLqEPzPriiiJEqJ4G45"},"salesforce":{"clientId":"3MVG9vvlaB0y1YsK3L5b9DU9.kXoQ3yEDianMENhqLGu0B9miyAS3kknWKryubs9hUXTt8waYH_0wQIBLy6F4"},"@activepieces/piece-salesforce":{"clientId":"3MVG9vvlaB0y1YsK3L5b9DU9.kXoQ3yEDianMENhqLGu0B9miyAS3kknWKryubs9hUXTt8waYH_0wQIBLy6F4"},"todoist":{"clientId":"9f4fd74764be4b1b927b85cde90120af"},"@activepieces/piece-todoist":{"clientId":"9f4fd74764be4b1b927b85cde90120af"},"dropbox":{"clientId":"tqrus53v6bbshu3"},"@activepieces/piece-dropbox":{"clientId":"tqrus53v6bbshu3"},"figma":{"clientId":"EQeZNcqvfyLmSc1I3VGdZc"},"@activepieces/piece-figma":{"clientId":"EQeZNcqvfyLmSc1I3VGdZc"},"square":{"clientId":"sq0idp-ueLpXoXpYblJXtvwz34KEg"},"@activepieces/piece-square":{"clientId":"sq0idp-ueLpXoXpYblJXtvwz34KEg"},"nifty":{"clientId":"n5AUDTTeIAvZNfCFchBrIt8NlNQRKvTM"},"@activepieces/piece-nifty":{"clientId":"n5AUDTTeIAvZNfCFchBrIt8NlNQRKvTM"},"gitlab":{"clientId":"13738557e121402d984e88de992e1d5355eaf9cc36d0db2e4a63b9dd478c46f4"},"@activepieces/piece-gitlab":{"clientId":"13738557e121402d984e88de992e1d5355eaf9cc36d0db2e4a63b9dd478c46f4"}}',
  );
});

// all other
app.get("*", (req, res) => {
  console.info("unknown GET:" + req.body);
  res.end();
});

app.post("*", (req, res) => {
  console.info("unknown POST:" + req.body);
  res.end();
});

app.listen(
  port,
  () => console.log("aplic is listening at " + port + "..."),
);
