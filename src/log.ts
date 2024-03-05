export type Any = Parameters<typeof console.log>[0]

export interface ILogger {
  error: (...data: Any[]) => void
  warn: (...data: Any[]) => void
  info: (...data: Any[]) => void
  debug: (...data: Any[]) => void
}

const LEVEL = ["debug", "info", "warn", "error"] as const

interface Config {
  level: (typeof LEVEL)[number]
  prefix: string
}

export class Logger implements ILogger {
  private config: Config

  constructor(config?: Omit<Partial<Config>, "level"> & { level?: string }) {
    const level = LEVEL.find((it) => it === config?.level) ?? "warn"
    this.config = {
      prefix: config?.prefix ?? "",
      level,
    }
  }

  #write(level: Config["level"], ...data: Any[]) {
    const { level: configLevel, prefix } = this.config
    if (LEVEL.indexOf(level) < LEVEL.indexOf(configLevel)) {
      return
    }

    console[level](`${new Date().toISOString()} ${level.toUpperCase()}${prefix ? ` ${prefix}` : ""}`, ...data)
  }

  debug = (...data: Any[]) => this.#write("debug", ...data)
  info = (...data: Any[]) => this.#write("info", ...data)
  warn = (...data: Any[]) => this.#write("warn", ...data)
  error = (...data: Any[]) => this.#write("error", ...data)
}
