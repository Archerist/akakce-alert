import got, { OptionsOfTextResponseBody } from "got";
import { OutgoingHttpHeaders } from "http";
import {JSDOM} from 'jsdom'

const rx550URL = 'https://www.akakce.com/ekran-karti/rx-550,1,2.html'
const rx560URL = 'https://www.akakce.com/ekran-karti/rx-560,1,2.html'
const rx5500xtURL = 'https://www.akakce.com/ekran-karti/rx-5500-xt,1,2.html'
const rx5600xtURL = 'https://www.akakce.com/ekran-karti,1,2.html/150008'


export async function getAkakcePrice(gpu:string):Promise<any>{
	let price;
	let res;
	const options:OptionsOfTextResponseBody = {
		cache:false,
		
	}
	switch(gpu){
		case 'rx550':
			res = await got(rx550URL,options)
			break;
		case 'rx560':
			res = await got(rx560URL,options)
			break;
		case 'rx5500xt':
			res = await got(rx5500xtURL, options)
			break;
		case 'rx5600xt':
			res = await got(rx5600xtURL, options)
			break;
	
	}
	
	let dom = new JSDOM(res.body);
	price = dom.window.document.querySelector('#CPL').firstElementChild.getElementsByClassName('pt_v8')[0].innerHTML;
	price = parseInt(price.substring(0, price.indexOf('<')).replace('.',''))

	return price;

}