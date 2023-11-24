import { QlikEmbed, QlikEmbedConfig } from "@qlik/embed-react";

const hostConfig = {
  host: "https://9ctwh8crgs00gc5.us.qlikcloud.com",
  clientId: "<CLIENT__ID>",
  redirectUri: "https://localhost:5173/oauth-callback.html",
  accessTokenStorage: "session",
  authType: "Oauth2",
};
const appId = "00f51e7e-36a5-4d16-a650-480c1452bb16";
const sheetId = ""; // sheet id or empty string

export default () => (
  // @ts-expect-error There's som missing typery here
  <QlikEmbedConfig.Provider value={hostConfig}>
    <div className="container">
      <h1>Qlik Embed with React</h1>
      <div className="selections-bar">
        <QlikEmbed ui="analytics/selections" appId={appId} />
      </div>
      <div className="viz">
        <QlikEmbed ui="classic/app" app={appId} sheet={sheetId} />
      </div>
      <div className="viz">
        <QlikEmbed ui="analytics/chart" appId={appId} objectId="hRZaKk" />
      </div>
    </div>
  </QlikEmbedConfig.Provider>
);
