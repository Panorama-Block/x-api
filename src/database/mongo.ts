import { connect } from "mongoose"

export const mongoConnect = async () => {
  try {
    console.log('Conectando ao mongodb')
    await connect(process.env.MONGO_URL!)
    console.log('MongoDB conectado com sucesso!')
  }
  catch (error) {
    console.log('Erro de conexão com MongoDB: ', error)
  }
}