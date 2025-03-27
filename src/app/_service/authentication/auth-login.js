import axios from 'axios'
;('configurar variavel de ambiente')

export const authLogin = async (email, password) => {
  try {
    const response = await axios.post(
      'http://localhost:9000/login/signin',
      {
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    return { success: true, response }
  } catch (err) {
    return {
      success: false,
      message: err.response?.data?.message || 'Verifique os dados.',
    }
  }
}
