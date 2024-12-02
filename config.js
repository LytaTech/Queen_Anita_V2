//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "https://youtube.com/@lytamanhwa?si=fFa9W6ai6i2h6_aG";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://youtube.com/@lytamanhwa?si=fFa9W6ai6i2h6_aG";
global.gurl = process.env.GURL || "https://youtube.com/@lytamanhwa?si=fFa9W6ai6i2h6_aG";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "2347084528285";
global.owner = process.env.OWNER_NUMBER || "2347084528285";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEJVeDJkNlY5UXNxT0VMcWZTK2UzTGJlUlladng3Q00rRCt4Ty9rUVEyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVVMQzhTTWhzY2xnc1RQeVVTNWl0MWc2dkN2enF3dHRqeGV6NmU4a3dEQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRGZVQ3ZTTW84WHg2cmJ2a2lPeE9wcjFYUFBlUWJ0UkFCQUcvVnF4ejNJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTYlhrcENzS0pObyswTDFIOXlNZXYyWXRxa1NyZ0tDM2Y0L1FoVGZSb0NJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFQaDdNYUI3cFM1a2pyVXpmS3Rqd2ZHcEF0MVI5RzdwbUE0STlBTmN3MVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVCTTZhMjIzd2xFMExDczNVSlBiOE5weDBJeThqYlJHc3FxdXMvbU9ZRGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0hkNVVJN1VxNlJTSzBzbkgza3AvZGpCSHhjbnFWd0VLRkxJZDNVV0JrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU1hSUhZaVowVzdURGFtR05ZNzViZkMxZkswQkp1OGszUTBFRE9Dc2Qzdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZXZG9OR0NVZ1ZCaW5OQ0oreTNIUkprbSt6RHBpelhBQ05SNXVSd3dTNktNclpZK3IwTzdXbUQxQkxqdFg1RFdPNTlUdUVmYUlPcHFsZWJqUjFWVmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk3LCJhZHZTZWNyZXRLZXkiOiIwTGJrYmRJWnF6bWpWb3pubXQ5Sks3cy9xZTFYZkxDQ1AzT21BWFhoTnZFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkRXFKTGtucVI2YVlpTy0yZEJZYWFnIiwicGhvbmVJZCI6ImZhZjkwNDZhLWYwYjAtNGJmNi05ZmM2LTJlNWNmZGZiZWI2YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4YXl3Qkl4YXZKREM2WkpRSTNIVFVYT3NBSUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3FjVWd1SFgxdnJRZjRyNFRFa21YSUZGb25vPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRDQjQ4M0ZDIiwibWUiOnsiaWQiOiIyMzQ3MDg0NTI4Mjg1OjMzQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQbjNrZEFCRUtuanQ3b0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJtUjVTVzVlcDNHakRSY0V1KzlVT0pxazFqQy9QS1NmbnRrYWNWS3hpQlRVPSIsImFjY291bnRTaWduYXR1cmUiOiJNdWFmaEpNeEgvTkFyTWk2Sjl0ajQ1L3loSkNkREozcXFGOTc5TVowVHROQmp1SmwyUU1rNHN3RzhOeUJtd3VuRXdRbzlaRDFTU0l2ZGg4ak42WHlDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZXIrVkQwZjVlYWFyTnpOK0R4M3lQWmw5L2FHdHdtV0QrdHNPVFdwbi85ZjNDRGprck80Q3F5ajk5M1diSFpFVG0wV1ppb0N6S1BMakErNFYrMmxIamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDg0NTI4Mjg1OjMzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlprZVVsdVhxZHhvdzBYQkx2dlZEaWFwTll3dnp5a241N1pHbkZTc1lnVTEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzMxNjEzOTh9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "lyta",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
