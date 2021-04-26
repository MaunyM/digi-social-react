const mapMessage = (message) => ({
    ...message,
    datetime : new Date(message.updatedAt)
})
export function transform(messages)  {
    return messages.map(mapMessage).sort((a, b) => a.datetime - b.datetime)
}

