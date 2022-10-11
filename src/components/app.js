import { getCards } from "../api/cards";
import { ControlPanel } from "./control-panel";
import { CardsList } from "./cards-list";

export function App() {
	this.root = document.createElement('div');
	this.root.classList.add('app');

	this.showCards = async () => {
		const cards = await getCards();
		this.cardsList.update({ cards });
	};

	this.controlPanel = new ControlPanel({
		showCards: this.showCards,
	});
	
	this.cardsList = new CardsList({
		cards: [],
	});

	this.root.append(this.cardsList.root);
}
