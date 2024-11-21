//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2349123731026";
global.sudo = process.env.SUDO || "2348138361189";
global.owner = process.env.OWNER_NUMBER || "2348138361189";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMktQMUdNREcyT1NVVzhrSnE2b3AwYWVkQ1QwYVptOWZQMVRDckoxTlMzYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3lJdWowTHNITVYzeG5nWkoyMStOdDdWK2JFdEFIRk1BZVdmSGpoS25Wbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSnRoRXQ5d1Q3d0tpM0l4aDhhMmsxckswMk94eWZ3TUh6WkREdTNVRTNZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3bnFQc2ZJWWh1WEJRd1UwUCtYQWpwcmpMRnlNUnRVa2ZuRTY2YUs2cDM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNEMllic2pXTUZmMU8xTG5qU2VNZWlIY1QwbWpKQmJ2Tlo5clM4T2dTSEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhYd0tmaTc1WTRVa0ZxbG1QYVBaeWJvK0F3U0hGOEI1YitBckV5SHROZ0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0FsYjhpRXB4b2VHaGZrYXdDWmszTHpkNCtrSHdlRjVQNmVHNEFvN3pVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlg5ZitZYWxIZzhIdlVoVkZ5bmpJZkh3OFRVLzRtT3AyeU8wSHNTTERSQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxJQ0prRFE3REFidWpJK1VnZkJ5Z2ozMkkwTXJsTzdaVmtvZXc3VzFtanRmQlFWUnF1Q255TVErY21xMTlaZS9PcHVCd1N2QjVnY3I2blNCQjAyRENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE1LCJhZHZTZWNyZXRLZXkiOiJaVFU2cnlYU0lWUE45ZXBOeWU5NVNRV3BHYnJGNnFtc3BGUzhiRUczaFp3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCbzQ5cEF1MFRKMlBTZjdwUWNkdUJRIiwicGhvbmVJZCI6ImQyMWE0ODNmLTIxOTEtNDQ3My05YzllLWFlZjcxZGI3NjFkNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxVEl1MFhHL0ZJMERxSjY3Mk8yMk90MEpmQTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUQwMXQyNFNRSFRWZFdlYkNYNnU5bHdUQlFJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNITEE3S0VaIiwibWUiOnsiaWQiOiIyMzQ4MTM4MzYxMTg5OjYyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKRFFqczBDRUxyeSs3a0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ4YkJpc3B3dCtSRmpNUWlOQ1dDeFpnaEtSc2JhNGZqTFM4eklFaXZBbDE4PSIsImFjY291bnRTaWduYXR1cmUiOiJoNTJ3U0xZTXIyalRnRzBlUHJnTGhhR0FvV09odDRzQ0dkb1JhSUlxcktSY2JwN211aHRkQU0rb1NMaFhPRUVxMEp2L3l1VU82NFVrbFhpYUdHRkxCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZEtFWC81UC91UndIYytQellXYTg1SS92MDAraDRvdnVhTmlPN0RxR0NLUElDUWRyRzk1UTVsYnVOY0V1VmdMeFlBQktzdG04dkYxdW5uLzZ3ek91RGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTM4MzYxMTg5OjYyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNXd1lyS2NMZmtSWXpFSWpRbGdzV1lJU2tiRzJ1SDR5MHZNeUJJcndKZGYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzIxODAyOTR9";
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0NDM2R1LzFFNC9YYlZFOGFZcUNqOS9oZHVrdkdZWTFBL3NQalduZzlVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXEzaFpiNkdnbVdIYjU5N1ZaTlQzMUh1Sm5raDdSY1RKdmpsUnNISnpnST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyT01FeVdVcndGMGR4amhRL3NwMTdxOVpKY2pZdGhEbXFsV292a1Y5N1VBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpdnJueDhXbmxmNnYycjdiMEFBUnFDdW9yQ0NYZVdkWXhJaU9VVy8zaVVJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlIV1hZQ1FHdTRiZmJScERnc0NTR1VOcjZYeXp3ZzBEclZmKzhtcDNMR0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikw1T3g5N09aYjQyLzM2YkYydVhOTndDRTA2UzhiVHhhY1dxYm1IZERQRmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0FkMnVZa2QvS2hTVUJLWFNHM0ttRFFXZllrZUdMRmU0dVpQNThlbmxVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHUwOElScFMrbmtjVVR3enlFaVBnUlFidEQwYlMzZzNvc0dwWGQrTzZVRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InY5c2RWQ2hVZHVTYkFtdkM1Z0RqUG9iZy9oOUlEUHU1TmlOUUg0dVRxeFhhK0dwQmxka1RZQmVVN0NhL01Da3M3WEM1bmdsbVNjYVNPN1ZHNFZBckRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjksImFkdlNlY3JldEtleSI6IkJydG5xYnB3Rk51Ulc5bFMrQXMyT284SzMvNmpyeExwTTBpbU15bjZRc289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2NDQyNzA1ODhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzhCMUU4QzU5RENEOUY0QzI4RUUyRkUyREZENUMwNDgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzM2MDMxM30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2NDQyNzA1ODhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQjgyNzJGQ0QyNkNDMDYwN0ExMEY2OTc3QTdDQUQ1NkQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzM2MDMxM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoid0k0dE9jVlZTT2lCZVZsSXp0NGc4USIsInBob25lSWQiOiI5YmIzMWZiNi05MTA2LTQ5MDQtYWU3ZS05OTRkOWY4MGQ1ZTAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHphVVJwUldESjVhN3MyVitiUWJFQ3V4QklZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVsZUk0MEk1MTNhRHI2NVpmdVpoc2FTZnZkUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI2RFE4Wk01WiIsIm1lIjp7ImlkIjoiMjc2NDQyNzA1ODg6OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJLSU5HIFBIQU5UT00g8J+RkSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTDZYcExJRkVLamExYmNHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOTUvbnI3Rk5ZKytCd3hHVGQ5c2ttN0VWb0JQbTdSQWpiSVhPb05PaXpRVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiai94TjV6eEdqNURIODJIY2JuRUpxVWpnYzVibXQ0YXd2QTFac3B3U1R3aFdiUGZNb3ZwdHNpZHkxRHV0ZXBTOEpGY2dMZ1UwNHV0Q09MK3FDdzhaRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IjFmZXh1cVhvNVo1bVp5M3RMTXU2Y2cxbnZiWVhrYVFkMjgwNjdKRGJQbFl0UmYvS3BZV0lVTUhpaWVNYTczQlZVZWRjOVF2UEpIY25aL1VDUnJHbERnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc2NDQyNzA1ODg6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmZWY1Nit4VFdQdmdjTVJrM2ZiSkp1eEZhQVQ1dTBRSTJ5RnpxRFRvczBGIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3MzYwMzA5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5kSiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`Yaki_the_plug™`",
  author: process.env.PACK_AUTHER || "Yaki_the_plug",
  packname: process.env.PACK_NAME || "Y A K I",
  botname: process.env.BOT_NAME || "KING_YAKI",
  ownername: process.env.OWNER_NAME || "YAKI THE PLUG",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
