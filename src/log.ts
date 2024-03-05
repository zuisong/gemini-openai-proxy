const LogLevel = {
  error: 3,
  warn: 4,
  info: 5,
  debug: 7,
} as const
type Any = Parameters<typeof console.log>[0]

export interface ILogger {
  error: (msg: Any) => void
  warn: (msg: Any) => void
  info: (msg: Any) => void
  debug: (msg: Any) => void
}

export class Logger implements ILogger {
  constructor(
    private level: string,
    private id: string,
  ) {}
  error = (msg: Any) => this.outFunc("error", LogLevel.error, `${this.id} ${JSON.stringify(msg)}`)
  warn = (msg: Any) => this.outFunc("warn", LogLevel.warn, `${this.id} ${JSON.stringify(msg)}`)
  info = (msg: Any) => this.outFunc("info", LogLevel.info, `${this.id} ${JSON.stringify(msg)}`)
  debug = (msg: Any) => this.outFunc("debug", LogLevel.debug, `${this.id} ${JSON.stringify(msg)}`)

  outFunc(levelName: string, levelValue: number, msg: string) {
    const level = Object.keys(LogLevel).includes(this.level) ? this.level : "debug"
    if (levelValue > LogLevel[level as keyof typeof LogLevel]) {
      // 仅打印大于等于当前日志级别的日志
      return
    }
    console.log(`${Date.now().toLocaleString()} ${levelName} ${msg}`)
  }
}
