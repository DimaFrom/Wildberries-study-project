export function Button({ onClick, label, classList, id}) {
  this.root = document.createElement('button');
	this.root.type = 'button';
	this.root.classList = classList;
	this.root.innerText = label;
	this.root.id = id;

  if (typeof onClick === 'function') {
    this.root.addEventListener('click', onClick);
  }
}