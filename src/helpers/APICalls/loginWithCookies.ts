import { IFetchOptions, IAuthApiData } from '../../interface/';

const loginWithCookies = async (): Promise<IAuthApiData> => {
  const fetchOptions: IFetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(
    process.env.NODE_ENV === 'production' ? `${process.env.REACT_APP_HEROKU_HOST_URL}auth/user` : `/auth/user`,
    fetchOptions,
  )
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default loginWithCookies;
