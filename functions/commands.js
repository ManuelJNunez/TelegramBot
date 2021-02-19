
const startCommand = (received) => {
  const message = 'Bienvenido a HalfonsoBot.'
  const chatid = received.chat.id

  return { message, chatid }
}

const toxicidadReply = (received) => {
  const message = 'Toxicidad fuera, mala vibra fuera 🎵🎶'
  const chatid = received.chat.id

  return { message, chatid }
}

const defaultReply = (received) => {
  const message = 'hola'
  const chatid = -1

  return { message, chatid }
}

module.exports = {
  startCommand,
  toxicidadReply,
  defaultReply
}
