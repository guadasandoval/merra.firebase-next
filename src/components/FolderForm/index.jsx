import React, { Fragment, useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Stack,
  Box,
  Select,
} from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import dynamic from 'next/dynamic';
import Tags from './Tags';
import FileUpload from './FileUpload';
import * as folders from '../../services/foldersNames';

const allFolders = Object.values(folders);

const Editor = dynamic(() => import('./Editor'), {
  ssr: false,
});

const validationSchema = Yup.object().shape({
  title: Yup.string().required('El titulo es requerido.'),
  category: Yup.string().required('La categoria es requerida'),
});

const FolderForm = ({ loading, folder, onSubmit }) => {
  const [deleteFiles, setDeleteFiles] = useState([]);
  const [newFiles, setNewFiles] = useState([]);

  async function handleSubmit(values) {
    onSubmit({ ...values, newFiles, deleteFiles });
    setNewFiles([]);
    setDeleteFiles([]);
  }

  return (
    <Fragment>
      <Formik
        validationSchema={validationSchema}
        initialValues={folder}
        enableReinitialize
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ values, errors, touched, setFieldValue, setFieldTouched }) => (
          <Form>
            <Stack gap={6}>
              <FormControl isInvalid={errors.category && touched.category}>
                <FormLabel fontSize='md' fontWeight={'bold'} htmlFor='category'>
                  Categoria
                </FormLabel>
                <Field variant='filled' name='category'>
                  {({ field }) => (
                    <Select
                      id='category'
                      {...field}
                      placeholder='Selecciona una categoria'
                      onChange={(e) =>
                        setFieldValue('category', e.target.value)
                      }
                    >
                      {allFolders.map((f) => (
                        <option value={f}>{f}</option>
                      ))}
                    </Select>
                  )}
                </Field>
                <ErrorMessage name='category' component={FormErrorMessage} />
              </FormControl>
              <FormControl isInvalid={errors.title && touched.title}>
                <FormLabel fontSize='md' fontWeight={'bold'} htmlFor='title'>
                  Titulo
                </FormLabel>
                <Field
                  as={Input}
                  variant='filled'
                  id='title'
                  name='title'
                  placeholder='Nuevo titulo'
                />
                <ErrorMessage name='title' component={FormErrorMessage} />
              </FormControl>
              <Tags values={values?.tags || []} />
              <FormControl>
                <FormLabel
                  fontSize='md'
                  fontWeight={'bold'}
                  htmlFor='description'
                >
                  Descripción
                </FormLabel>
                <Box bgColor={'gray.100'} p={3}>
                  {!loading && (
                    <Editor
                      name='description'
                      data={values?.description}
                      onChange={(data) => {
                        setFieldValue('description', data);
                        setFieldTouched('description', true);
                      }}
                    />
                  )}
                </Box>
                <ErrorMessage name='description' component={FormErrorMessage} />
              </FormControl>
              <FileUpload
                values={values?.files || []}
                newFiles={newFiles}
                setNewFiles={setNewFiles}
                setDeleteFiles={setDeleteFiles}
              />
              <Button
                colorScheme='brand'
                width={{ base: '100%', md: 'fit-content' }}
                isLoading={loading}
                loadingText={'Cargando'}
                type='submit'
              >
                {folder?.title?.length > 0 ? 'Editar Carpeta' : 'Crear Carpeta'}
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

FolderForm.defaultProps = {
  folder: {
    title: '',
    category: '',
    description: {},
    tags: [],
    files: [],
  },
};

export default FolderForm;
