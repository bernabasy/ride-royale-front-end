const baseURL = 'http://localhost:3000';
const userRegistrationURL = `${baseURL}/users`;
const userLoginURL = `${baseURL}/users/sign_in`;

const createNewUser = async (payload) => fetch(`${userRegistrationURL}`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({ user: payload }),
});

const userLogin = async (payload, bearerToken) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (bearerToken) {
      headers.Authorization = `Bearer ${bearerToken}`;
    }

    const response = await fetch(`${userLoginURL}`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ user: payload }),
    });

    if (!response.ok) {
      return {
        error: 'Failed to login',
      };
    }

    const token = response.headers.get('Authorization');
    return {
      token,
      data: await response.json(),
    };
  } catch (error) {
    return {
      error: 'An error occurred while logging in',
    };
  }
};

const registrationService = {
  createNewUser,
  userLogin,
};

export default registrationService;
