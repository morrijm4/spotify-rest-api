import { Heading, Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { InputField } from './InputField';
import { Wrapper } from './Wrapper';

export const PlaylistForm = props => {
  return (
    <Wrapper varient="small">
      <Heading my={16}>Search for a playlist on Spotify</Heading>
      <Formik
        initialValues={{ playlistId: '' }}
        onSubmit={values => {
          props.setPlaylistId(values.playlistId);
          props.setLoading(true);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="playlistId"
              placeholder="playlist id"
              label="Playlist Id"
            />
            <Button
              mt={4}
              isLoading={isSubmitting}
              type="submit"
              colorScheme="blue"
            >
              Find
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};
