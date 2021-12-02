import { v4 as uuid } from 'uuid'

type SignInRequestData = {
  username: string,
  password: string
}

const delay = (amount = 750) => new Promise(resolve=> setTimeout(resolve, amount))

export async function signInRequest(data: SignInRequestData) {
  await delay()

  if (data.username === 'admin' && data.password === 'admin') {
    return {
      token: uuid(),
      user: {
        username: 'admin',
        password: 'admin'
      }
    }
  } else {
    console.log('invalid user data')
  }
}

export async function recoverUserInformation() {
  await delay()

  return {
    user: {
      username: 'admin',
      password: 'admin'
    }
  }
}