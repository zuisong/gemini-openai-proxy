enum LogLevel {
  error = 3,
  warn = 4,
  info = 5,
  debug = 7,
}
type Any = Parameters<typeof console.log>[0]

const currentlevel = LogLevel.debug

export function gen_logger(id: string) {
  return mapValues(LogLevel, (value, name) => {
    return (msg: Any) => {
      outFunc(name, value, `${id} ${msg}`)
    }
  })
}

export type Logger = ReturnType<typeof gen_logger>

function outFunc(levelName: string, levelValue: number, msg: string) {
  // if (levelValue > currentlevel) {
  //   return
  // }
  // console.log(`${Date.now().toLocaleString()} ${levelName} ${msg}`)
}

function mapValues<
  T extends Record<string | number | symbol, Any>,
  K extends keyof T,
  V,
>(obj: T, fn: (value: T[K], key: K, obj: T) => V): Record<K, V> {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      return [key, fn(value, key as K, obj)]
    }),
  ) as Record<K, V>
}
