const PRODUCT_URL = 'https://633728365327df4c43d0d067.mockapi.io/wildberries/v1/wildberries'

export async function getUsers() {
	try {
		const response = await fetch(PRODUCT_URL);
		const users = await response.json();

		return users;
	} catch (error) {
		console.log(error);
	}
}

