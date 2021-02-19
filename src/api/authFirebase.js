import firebase from 'firebase/app';

/**
 * Signin session
 * @param {string} social
 */
export async function siginWithFirebase(social) {
  if (typeof social !== 'string') return false;

  let provider = null;

  /**
   * Select social provider Firebase
   */
  switch (social) {
    case 'facebook':
      provider = new firebase.auth.FacebookAuthProvider();
      break;
    case 'google':
      provider = new firebase.auth.GoogleAuthProvider();
      break;
    default:
      break;
  }

  return new Promise((resolve, reject) => {
    if (!provider) reject(false);

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        console.log('error', error);
        reject(error);
      });
  });
}

/**
 * Signout session Firebase
 */
export async function signoutWithFirebase() {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        resolve(true);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 * Get access_token session Firebase
 */
export async function getIdTokenWithFirebase() {
  return new Promise((resolve, reject) => {
    try {
      firebase
        .auth()
        .currentUser.getIdToken(true)
        .then((idToken) => {
          resolve(idToken);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(false);
    }
  });
}
