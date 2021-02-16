function makeFriendsList(friends) {
  let UL = document.createElement('ul');
		
		for (let item of friends) {

			UL.insertAdjacentHTML('beforeEnd', `<li>${item.firstName} ${item.lastName}</li>`);

		}

		return UL ;
}
