import {
  createItem as createItemService,
  updateItem as updateItemService,
} from '../services/firebase';
import { uploadFiles } from '../services/storage';
import { slugify } from './utils';

const createDoc = async (values) => {
  try {
    const { newFiles, title, category, deleteFiles, ...rest } = values;
    let { id } = await createItemService(category, {
      ...rest,
      title,
      category,
      url: slugify(title),
    });
    let files = await uploadFiles(newFiles, id);
    await updateItemService(category, {
      id,
      files,
    });
  } catch (err) {
    throw err;
  }
};

export default createDoc;
