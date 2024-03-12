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

  debug!: Log
  info!: Log
  warn!: Log
  error!: Log

  constructor(config?: Omit<Partial<Config>, "level"> & { level?: string }) {
    const level = LEVEL.find((it) => it === config?.level) ?? "warn"
    this.config = {
      prefix: config?.prefix ?? "",
      level,
    }

    for (const m of LEVEL) {
      this[m] = (...data: Any[]) => this.#write(m, ...data)
    }
  }

  #write(level: Config["level"], ...data: Any[]) {
    const { level: configLevel, prefix } = this.config
    if (LEVEL.indexOf(level) < LEVEL.indexOf(configLevel)) {
      return
    }

    console[level](`${new Date().toISOString()} ${level.toUpperCase()}${prefix ? ` ${prefix}` : ""}`, ...data)
  }
}

type Log = typeof console.log
