const createTokenUser = (client) => {
    return { name: client.name, clientId: client.clientId , role: client.role };
}

module.exports = { createTokenUser };