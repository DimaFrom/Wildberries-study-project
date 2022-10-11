import { UserItem } from "./components/user-item";

export function UsersList(props = {}) {
  const { users, removeUser, editUser } = props;

	this.root = document.createElement('div');
	this.root.classList.add('card');

  this.update = ({ users }) => {
	  this.root.innerHTML = '';

    if (Array.isArray(users)) {
      users.forEach(user => {
        const userItem = new UserItem({
          id: user.id,
			 name: user.name,
			 logo: user.logo,
			 price: user.price,
			 priceDiscount: user.priceDiscount,
         //  remove: removeUser,
			//  edit: editUser,
        });
			this.root.append(userItem.rootElement);
      })
    }
  }
  this.update({ users });
}