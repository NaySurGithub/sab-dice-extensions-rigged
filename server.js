const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const EXTENSION_CONFIG = {
    remoteVersion: "1.0.1",
    downloadUrlChrome: "https://dice-extension.wuaze.com/dice.zip",
    downloadUrlFirefox: "https://dice-extension.wuaze.com/dice_firefox.zip",
    changelog: "Fixed colordice.fr visual tamper guard and added meowl-dice.com support!",
    sites: {
        colordice: {
            enabled: true,
            bypassMethod: "proxy_getComputedStyle",
            checkIntervalMs: 140
        },
        meowldice: {
            enabled: true,
            observerTimeout: 50
        },
        onlinedice: {
            enabled: true
        },
        sabdice: {
            enabled: true
        }
    }
};

app.get('/', (req, res) => {
    res.send('Sab Dice Extension API is running.');
});

app.get('/api/extension/config', (req, res) => {
    res.json(EXTENSION_CONFIG);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});
