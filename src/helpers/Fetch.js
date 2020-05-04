import Vars from './Vars';

class Fetch {

	async fetchSiteSettings() {
		return await fetch(Vars.domain + 'api/singletons/get/site_settings', {
			headers: { 'Cockpit-Token': Vars.token }
		})
			.then(res => res.json())
			.then(res => {
				//console.log(res);
				return res;
			});
	}

	async fetchPages() {
		return await fetch(Vars.domain + 'api/collections/get/pages', {
			method: 'post',
			headers: { 'Content-Type': 'application/json', 'Cockpit-Token': Vars.token },
			body: JSON.stringify({
				filter: {published:true},
			})
		})
			.then(res => res.json())
			.then(res => {

				let result = [];
				res.entries.forEach(page => {
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
			});
	}

	async fetchErrorPage() {
		return await fetch(Vars.domain + 'api/collections/get/pages', {
			method: 'post',
			headers: { 'Content-Type': 'application/json', 'Cockpit-Token': Vars.token },
			body: JSON.stringify({
				filter: {alias:'404'},
			})
		})
		.then(res => res.json())
		.then(res => {
			return res.entries[0];
		});
	}


	async fetchSubPages() {
		return await fetch(Vars.domain + 'api/collections/get/subpages', {
			method: 'post',
			headers: { 'Content-Type': 'application/json', 'Cockpit-Token': Vars.token },
			body: JSON.stringify({
				filter: {published:true},
			})
		})
			.then(res => res.json())
			.then(res => {
				//console.log(res.entries);
				return res.entries;
			});
	}

	async fetchProducts() {
		return await fetch(Vars.domain + 'api/collections/get/products', {
			method: 'post',
			headers: { 'Content-Type': 'application/json', 'Cockpit-Token': Vars.token },
			body: JSON.stringify({
				filter: {published:true},
			})
		})
			.then(res => res.json())
			.then(res => {
				//console.log(res.entries);
				return res.entries;
			});
	}

	async fetchSlides() {
		return await fetch(Vars.domain + 'api/collections/get/slider', {
			method: 'post',
			headers: { 'Content-Type': 'application/json', 'Cockpit-Token': Vars.token },
			body: JSON.stringify({
				filter: {published:true},
			})
		})
			.then(res => res.json())
			.then(res => {
				//console.log("-------Fetch Slides------");
				//console.log(res);
				//console.log("-------Fetch Slides------");
				return res.entries;
			});
	}
}

export default Fetch = new Fetch();