export default class ImageService {
  upload = (data) => {
    // Todo - Refactor to use BASE_URL then BASE_URL + /images
    // Todo - Make common method to post data.
    return fetch("https://react-camera-backend.herokuapp.com/images/", {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  };
}
