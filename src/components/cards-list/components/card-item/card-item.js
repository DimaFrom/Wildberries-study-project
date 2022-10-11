import { Button } from "../../../common/button";

export function CardItem(props = {}) {
	const { name, id, logo, price, priceDiscount } = props;

	this.rootElement = document.createElement('div');
	this.rootElement.classList.add('card_list');
	this.rootElement.innerHTML = '<img src="' + logo + '">';
	this.rootElement.setAttribute('id', id);

	rootElementPriceDiscount = document.createElement('p');
	rootElementPriceDiscount.classList.add('priceDiscount_text');
	rootElementPriceDiscount.innerHTML = priceDiscount;
	this.rootElement.append(rootElementPriceDiscount);

	rootElementPrice = document.createElement('p');
	rootElementPrice.classList.add('price_text');
	rootElementPrice.innerHTML = price;
	this.rootElement.append(rootElementPrice);

	rootElementName = document.createElement('p');
	rootElementName.classList.add('name_text');
	rootElementName.innerHTML = name;
	this.rootElement.append(rootElementName);

	this.addItem = new Button({ label: 'Добавить в корзину', onClick: "", classList: 'btn_get_basket', id: id });
		this.rootElement.append(this.addItem.root);

	this.showItem = new Button({ label: 'Быстрый просмотр', onClick: "", classList: 'btn_quick_view', id: id });
		this.rootElement.append(this.showItem.root);
	}
