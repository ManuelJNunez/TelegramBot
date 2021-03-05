const commands = require('./commands')

exports.handler = async (event, context) => {
  if (event.body !== '') {
    const body = JSON.parse(event.body)
    const message = body.message
    let text, reply

    if (message != null && 'text' in message) {
      text = message.text
    } else {
      text = ''
    }

    switch (true) {
      case /\/start/.test(text):
        reply = commands.startCommand(message)
        break

      case /\s*toxicidad\s*/.test(text.toLowerCase()):
        reply = commands.toxicidadReply(message)
        break

      case /\s*gordo\s*/.test(text.toLowerCase()):
        reply = commands.gordoReply(message)
        break

      case /\s*no[\s\S].*juego\s*/.test(text.toLowerCase()):
        reply = commands.xokasGameReply(message)
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
      body: JSON.stringify(reply)
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
