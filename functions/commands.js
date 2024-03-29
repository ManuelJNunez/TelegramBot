const startCommand = (received) => {
  const message = 'Bienvenido a HalfonsoBot.'
  const chatid = received.chat.id

  return {
    text: message,
    chat_id: chatid,
    method: 'sendMessage'
  }
}

const toxicidadReply = (received) => {
  const message = 'Toxicidad fuera, mala vibra fuera 🎵🎶'
  const chatid = received.chat.id

  return {
    text: message,
    chat_id: chatid,
    method: 'sendMessage'
  }
}

const gordoReply = (received) => {
  const message = 'Me llamas gordo, te doy la mano... 🎵🎶'
  const chatid = received.chat.id

  return {
    text: message,
    chat_id: chatid,
    method: 'sendMessage'
  }
}

const xokasReply = (received) => {
  const message = 'Esto no es un juego, ¿eh? No es un juego. 🏀'
  const chatid = received.chat.id

  return {
    text: message,
    chat_id: chatid,
    method: 'sendMessage'
  }
}

const perroReply = (received) => {
  const message = '🐶 Las ratiiiilllas, que son ratiiillas 🐀'
  const chatid = received.chat.id

  return {
    text: message,
    chat_id: chatid,
    method: 'sendMessage'
  }
}

const defaultReply = (received) => {
  const message = 'hola'
  const chatid = -1

  return {
    text: message,
    chat_id: chatid,
    method: 'sendMessage'
  }
}

module.exports = {
  startCommand,
  toxicidadReply,
  gordoReply,
  xokasReply,
  perroReply,
  defaultReply
}
