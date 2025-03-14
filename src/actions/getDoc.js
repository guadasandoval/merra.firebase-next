import { POSTS } from 'src/services/foldersNames';
import { getItemByTitle } from '../services/firebase';

const getDoc = async (title, category) => {
  try {
    let data;
    let docs = await getItemByTitle(title, category);
    docs.forEach((doc) => {
      data = {
        id: doc.id,
        ...doc.data(),
        created: doc.data().created.toJSON(),
      };
    });
    return data;
  } catch (err) {
    throw err;
  }
};

export default getDoc;
