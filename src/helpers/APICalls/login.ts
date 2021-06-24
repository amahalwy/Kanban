import { IFetchOptions, IAuthApiData } from '../../interface/';

const login = async (email: string, password: string): Promise<IAuthApiData> => {
  const fetchOptions: IFetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  };
  return await fetch(
    process.env.NODE_ENV === 'production' ? `${process.env.HOST_URL}/auth/login` : `/auth/login`,
    fetchOptions,
  )
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default login;
