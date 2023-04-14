import dotenv from 'dotenv'

dotenv.config();

const { PORT, CHAT_ENGINE_PROJECT_ID, CHAT_ENGINE_PRIVATE_KEY } = process.env

export default {
  port: PORT || 3000,
  chatEngineProjectId: CHAT_ENGINE_PROJECT_ID || '',
  chatEnginePrivateKey: CHAT_ENGINE_PRIVATE_KEY || '',
}