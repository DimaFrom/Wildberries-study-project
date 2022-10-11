import { getUsers } from "../api/users";
import { ControlPanel } from "./control-panel";
import { UsersList } from "./users-list";

export function App() {
	this.root = document.createElement('div');
	this.root.classList.add('app');

	this.showUsers = async () => {
		const users = await getUsers();
		this.usersList.update({ users });
	};

	this.controlPanel = new ControlPanel({
		showUsers: this.showUsers,
	});
	
	this.usersList = new UsersList({
		users: [],
	});

	this.root.append(this.usersList.root);
}
