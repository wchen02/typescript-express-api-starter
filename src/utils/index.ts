class Utils {
  static normalizePort = (val: string) => {
    const port = parseInt(val, 10);

    if (Number.isNaN(port) || port < 0) {
      throw Error("Invalid port");
    }

    return port;
  };
}

export default Utils;
