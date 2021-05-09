import got from "got";
import {JSDOM} from 'jsdom'

const rx550URL = 'https://www.akakce.com/ekran-karti.html/23163,26215,109703'
const rx560URL = 'https://www.akakce.com/ekran-karti.html/23163,26215,109704'
const rx5500xtURL = 'https://www.akakce.com/ekran-karti.html/23163,26215,149659'
const rx5600xtURL = 'https://www.akakce.com/ekran-karti.html/23163,26215,150008'


export async function getAkakcePrice(gpu:string):Promise<any>{
	let price;
    let res;
    switch(gpu){
        case 'rx550':
            res = await got(rx550URL)
            break;
        case 'rx560':
            res = await got(rx560URL)
            break;
        case 'rx5500xt':
            res = await got(rx5500xtURL)
            break;
        case 'rx5600xt':
            res = await got(rx5600xtURL)
            break;
    
    }
	
    let dom = new JSDOM(res.body);
	price = dom.window.document.querySelector('#CPL').firstElementChild.getElementsByClassName('pt_v8')[0].innerHTML;
    price = parseInt(price.substring(0, price.indexOf('<')).replace('.',''))

    return price;

}