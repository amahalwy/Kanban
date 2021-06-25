import { IUploadProfilePicture, IUploadOptions } from '../../interface';

const uploadImage = async (form: FormData): Promise<IUploadProfilePicture> => {
  const fetchOptions: IUploadOptions = {
    method: 'POST',
    body: form,
  };

  return fetch(
    process.env.NODE_ENV === 'production' ? `${process.env.REACT_APP_HEROKU_HOST_URL}files/upload` : `/files/upload`,
    fetchOptions,
  )
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default uploadImage;
