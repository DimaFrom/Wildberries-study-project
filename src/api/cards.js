const PRODUCT_URL = 'https://633728365327df4c43d0d067.mockapi.io/wildberries/v1/wildberries'

export async function getCards() {
	try {
		const response = await fetch(PRODUCT_URL);
		const cards = await response.json();

		return cards;
	} catch (error) {
		console.log(error);
	}
}

