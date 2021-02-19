const commands = require('./commands')

exports.handler = async (event, context) => {
  if (event.body !== '') {
    const body = JSON.parse(event.body)
    const message = body.message
    const text = message.text
    let reply

    switch (true) {
      case /\/start/.test(text):
        reply = commands.startCommand(message)
        break

      case /\s*toxicidad\s*/.test(text.toLowerCase()):
        reply = commands.toxicidadReply(message)
        break

      default:
        reply = commands.defaultReply(message)
        break
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: reply.message,
        method: 'sendMessage',
        chat_id: reply.chatid
      })
    }
  } else {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status: 'OK' })
    }
  }
}
