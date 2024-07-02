import type { NextApiRequest, NextApiResponse } from 'next';

const USER = {
  email: process.env.EMAIL_USER,
  password: process.env.USER_APP_SENHA
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests allowed' });
  }
  const { email, password } = req.body;

  console.log(email, USER.email);
  
  if (email === USER.email && password === USER.password) {
    res.status(200).send('Login Feito com sucesso');
  } else {
    res.status(401).send('Credenciais inválidas');
  }
}
