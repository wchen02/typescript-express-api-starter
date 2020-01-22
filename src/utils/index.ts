export const normalizePort = (val: string) => {
    const port = parseInt(val, 10);

    if (isNaN(port) || port < 0) {
        throw Error('Invalid port');
    }

    return port;
};
