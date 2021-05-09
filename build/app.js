import DC from "discord.js";
import dotenv from 'dotenv';
import { getAkakcePrice } from "./akakceScrap.js";
dotenv.config();
let archID = process.env.ID;
let old_prices = {
    rx550: 0,
    rx560: 0,
    rx5500xt: 0,
    rx5600xt: 0
};
let prices = {
    rx550: 0,
    rx560: 0,
    rx5500xt: 0,
    rx5600xt: 0
};
const client = new DC.Client();
client.on('ready', async () => {
    sendMessage('Started');
    console.log('Started');
    await getPrices();
    sendMessage('Current Prices:');
    sendMessage(`rx550: ${prices.rx550}`);
    sendMessage(`rx560: ${prices.rx560}`);
    sendMessage(`rx5500xt: ${prices.rx5500xt}`);
    sendMessage(`rx5600xt: ${prices.rx5600xt}`);
    setInterval(async () => {
        let old_prices = prices;
        prices.rx550 = await getAkakcePrice('rx550');
        prices.rx560 = await getAkakcePrice('rx560');
        prices.rx5500xt = await getAkakcePrice('rx5500xt');
        prices.rx5600xt = await getAkakcePrice('rx5600xt');
        if (prices.rx550 < old_prices.rx550) {
            sendMessage(`rx550 got cheaper: ${prices.rx550}`);
        }
        if (prices.rx560 < old_prices.rx560) {
            sendMessage(`rx560 got cheaper: ${prices.rx560}`);
        }
        if (prices.rx5500xt < old_prices.rx5500xt) {
            sendMessage(`rx5500xt got cheaper: ${prices.rx5500xt}`);
        }
        if (prices.rx5600xt < old_prices.rx5600xt) {
            sendMessage(`rx5600xt got cheaper: ${prices.rx5600xt}`);
        }
    }, 60000);
});
client.login(process.env.TOKEN);
async function getPrices() {
    prices.rx550 = await getAkakcePrice('rx550');
    prices.rx560 = await getAkakcePrice('rx560');
    prices.rx5500xt = await getAkakcePrice('rx5500xt');
    prices.rx5600xt = await getAkakcePrice('rx5600xt');
}
function sendMessage(msg) {
    client.users.fetch(archID, false).then(u => {
        u.send(msg);
    });
}
//# sourceMappingURL=app.js.map