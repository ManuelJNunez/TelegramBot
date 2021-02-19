const { handler } = require('../functions/bot')
const commands = require('../functions/commands')

describe('Bot testing', () => {
  it('should retrieve the health endpoint', async () => {
    const event = {
      body: ''
    }
    const context = {}

    const result = await handler(event, context)

    expect(result.statusCode).toEqual(200)
    expect(result.headers).toEqual({
      'Content-Type': 'application/json'
    })
    expect(result.body).not.toBeNull()
  })

  it('should retrieve the returned value of startCommand', async () => {
    const text = 'Hi'
    const chatid = 1234

    const spyStart = jest.spyOn(commands, 'startCommand')
    spyStart.mockReturnValueOnce({
      message: text,
      chatid: chatid
    })

    const event = {
      body: JSON.stringify({
        message: {
          chat: {
            id: chatid
          },
          text: '/start'
        }
      })
    }
    const context = {}

    const result = await handler(event, context)

    expect(JSON.parse(result.body).text).toEqual(text)
    expect(JSON.parse(result.body).chat_id).toEqual(chatid)
    expect(JSON.parse(result.body).method).toEqual('sendMessage')
    expect(result.statusCode).toEqual(200)
    expect(result.headers).toEqual({
      'Content-Type': 'application/json'
    })
  })

  it('should retrieve the returned value of toxicidadReply', async () => {
    const text = 'toxicidad fuera'
    const chatid = 1234

    const spyReply = jest.spyOn(commands, 'toxicidadReply')
    spyReply.mockReturnValueOnce({
      message: text,
      chatid: chatid
    })

    const event = {
      body: JSON.stringify({
        message: {
          chat: {
            id: chatid
          },
          text: 'Aquí hay mucha toxicidad'
        }
      })
    }
    const context = {}

    const result = await handler(event, context)

    expect(JSON.parse(result.body).text).toEqual(text)
    expect(JSON.parse(result.body).chat_id).toEqual(chatid)
    expect(JSON.parse(result.body).method).toEqual('sendMessage')
    expect(result.statusCode).toEqual(200)
    expect(result.headers).toEqual({
      'Content-Type': 'application/json'
    })
  })

  it('should retrieve the returned value of defaultReply', async () => {
    const text = 'Invalid text'
    const chatid = 1234

    const spyReply = jest.spyOn(commands, 'defaultReply')
    spyReply.mockReturnValueOnce({
      message: text,
      chatid: -1
    })

    const event = {
      body: JSON.stringify({
        message: {
          chat: {
            id: chatid
          },
          text: 'Hola bot'
        }
      })
    }
    const context = {}

    const result = await handler(event, context)

    expect(JSON.parse(result.body).text).toEqual(text)
    expect(JSON.parse(result.body).chat_id).toEqual(-1)
    expect(JSON.parse(result.body).method).toEqual('sendMessage')
    expect(result.statusCode).toEqual(200)
    expect(result.headers).toEqual({
      'Content-Type': 'application/json'
    })
  })
})
