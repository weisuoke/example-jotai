let keyCount = 0; // global key count for all atoms

export function atom(read, write) {
  const key = `atom${++keyCount}`;
  const config = {
    toString: () => key;
  }

  if (typeof read === 'function') {
    config.read = read
  } else {
    config.init = read
    config.read = (get) => get(config)
    config.write = (get, set, update) =>
      set(config, typeof update === 'function' ? update(get(config)) : update)
  }

  if (write) {
    config.write = write
  }

  return config
}
