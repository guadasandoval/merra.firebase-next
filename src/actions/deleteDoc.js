import { deleteFromFolder } from '../services/firebase';
import { deleteFiles } from '../services/storage';

const deleteDoc = async (doc) => {
  const { id, files, description: { blocks = [] } = {}, category } = doc;
  const descriptionFiles = blocks.filter(({ type }) => type === 'image');
  try {
    await deleteFromFolder(id, category);
    if (descriptionFiles?.length) {
      const mappedFiles = descriptionFiles.map(
        ({ data: { file = {} } = {} }) => ({ ...file })
      );
      await deleteFiles(mappedFiles);
    }
    if (files.length > 0) {
      await deleteFiles(files, id);
    }
  } catch (err) {
    throw err;
  }
};

export default deleteDoc;
