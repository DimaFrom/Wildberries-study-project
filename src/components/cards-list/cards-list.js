import { CardItem } from "./components/card-item";

export function CardsList(props = {}) {
	const { cards } = props;

	this.root = document.createElement('div');
	this.root.classList.add('card');

	this.update = ({ cards }) => {
		this.root.innerHTML = '';

		if (Array.isArray(cards)) {
			cards.forEach(card => {
				const cardItem = new CardItem({
					id: card.id,
					name: card.name,
					logo: card.logo,
					price: card.price,
					priceDiscount: card.priceDiscount,
				});
				this.root.append(cardItem.rootElement);
			})
		}
	}
	this.update({ cards });
}