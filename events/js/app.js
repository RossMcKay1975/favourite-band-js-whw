document.addEventListener('DOMContentLoaded', () => {
const newItemForm = document.querySelector('#new-item-form');
newItemForm.addEventListener('submit', handleNewItemFormSubmit);

const deleteAllButton = document.querySelector('#delete-all');
deleteAllButton.addEventListener('click', handleDeleteAllClick);
})
const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const favouriteAlbumListItem = createFavouriteAlbumListItem(event.target);
  const favouriteAlbumList = document.querySelector('#favourite-album-list');
  favouriteAlbumList.appendChild(favouriteAlbumListItem);

  event.target.reset()
}

const createFavouriteAlbumListItem = function (form) {
  const favouriteAlbumListItem = document.createElement('li');
  favouriteAlbumListItem.classList.add('favourite-album-list-item');

  const bandArtist = document.createElement('h2');
  bandArtist.textContent = form.bandArtist.value;
  favouriteAlbumListItem.appendChild(bandArtist);

  const album = document.createElement('h2');
  album.textContent = form.album.value;
  // console.dir(event)
  favouriteAlbumListItem.appendChild(album);

  const genre = document.createElement('h3');
  genre.textContent = form.genre.value;
  favouriteAlbumListItem.appendChild(genre);

  return favouriteAlbumListItem;
}

  const handleDeleteAllClick = function (event) {
    const favouriteAlbumList = document.querySelector('#favourite-album-list');
    favouriteAlbumList.innerHTML = '';
  }
