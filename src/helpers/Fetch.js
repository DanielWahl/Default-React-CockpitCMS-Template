const token = "0ea2897b224a0603ac1b0cf01a204b";
const domain = "https://cockpit.portfolio.danielwahl.lu/api/";

class Fetch {

	constructor() {

	}

	static get token() {
		return token;
	}

	static get domain() {
		return domain;
	}

	async fetchSiteSettings() {
		return await fetch(domain + 'singletons/get/site_settings', {
			headers: { 'Cockpit-Token': token }
		})
			.then(res => res.json())
			.then(res => {
				console.log(res);
				return res;
			});
	}

	async fetchPages() {
		return await fetch(domain + 'collections/get/pages', {
			headers: { 'Cockpit-Token': token }
		})
		.then(res => res.json())
		.then(res => {
			console.log(res.entries);
			return res.entries;
		});
	}

	async fetchSubPages() {
		return await fetch(domain + 'collections/get/subpages', {
			headers: { 'Cockpit-Token': token }
		})
			.then(res => res.json())
			.then(res => {
				console.log(res.entries);
				return res.entries;
			});
	}
}

export default Fetch = new Fetch;