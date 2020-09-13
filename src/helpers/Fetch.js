import Vars from './Vars';
import axios from 'axios';

class Fetch {

	async fetchSiteSettings() {
		return axios.get(Vars.domain + 'api/singletons/get/site_settings', {
			headers: { 'Cockpit-Token': Vars.token }
		})
			.then(res => {
				//console.log(res);
				return res.data;
			});
	}

	async fetchPages() {
		return axios.get(Vars.domain + 'api/collections/get/pages', {
			headers: { 'Content-Type': 'application/json', 'Cockpit-Token': Vars.token },
			data: {
				filter: { published:true },
			}
		})
			.then(res => {
				let result = [];
				res.data.entries.forEach(page => {
					if(page.alias === '' || page.alias === null || page.alias === undefined) {
						page.alias = page.name.toLowerCase();
					}
					if(page.alias === '/')
						page.alias = '';
					result.push(page);
				});
				/*console.log("------open PAGE------");
				console.log(res.entries);
				console.log(result);
				console.log("------close PAGE------");*/
				return result;
			}).catch((err) => console.log(err));
	}

	async fetchErrorPage() {
		return axios.get(Vars.domain + 'api/collections/get/pages', {
			headers: { 'Content-Type': 'application/json', 'Cockpit-Token': Vars.token },
			data: {
				filter: { alias:'404' },
			}
		})
		.then(res => {
			return res.data?.entries[0];
		});
	}


	async fetchSubPages() {
		return axios.get(Vars.domain + 'api/collections/get/subpages', {
			headers: { 'Content-Type': 'application/json', 'Cockpit-Token': Vars.token },
			data: {
				filter: { published:true },
			}
		})
			.then(res => {
				//console.log(res.entries);
				return res.data?.entries;
			});
	}

	async fetchProducts() {
		return axios.get(Vars.domain + 'api/collections/get/products', {
			headers: { 'Content-Type': 'application/json', 'Cockpit-Token': Vars.token },
			data: {
				filter: { published:true },
			}
		})
			.then(res => {
				//console.log(res.entries);
				return res.data?.entries;
			});
	}

	async fetchSlides() {
		return axios.get(Vars.domain + 'api/collections/get/slider', {
			headers: { 'Content-Type': 'application/json', 'Cockpit-Token': Vars.token },
			data: {
				filter: { published:true },
			}
		})
			.then(res => {
				//console.log("-------Fetch Slides------");
				//console.log(res);
				//console.log("-------Fetch Slides------");
				return res.data?.entries;
			});
	}
}

export default Fetch = new Fetch();