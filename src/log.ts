const LogLevel = {
  error: 3,
  warn: 4,
  info: 5,
  debug: 7,
} as const
type Any = Parameters<typeof console.log>[0]

export type Logger = {
  [K in keyof typeof LogLevel]: (msg: Any) => void
}

const currentlevel = LogLevel.debug

export function gen_logger(id: string): Logger {
  return mapValues(LogLevel, (value, name) => {
    return (msg: Any) => {
      out_func(name, value, `${id} ${msg}`)
    }
  })
}

function out_func(levelName: string, levelValue: number, msg: string) {
  if (levelValue > currentlevel) {
    return
  }
  console.log(`${Date.now().toLocaleString()} ${levelName} ${msg}`)
}

function mapValues<T, K extends keyof T, V>(
  obj: T,
  fn: (value: T[K], key: K, obj: T) => V,
): Record<K, V> {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      return [key, fn(value, key as K, obj)]
    }),
  ) as Record<K, V>
}
