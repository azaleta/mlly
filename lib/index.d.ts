// CommonJS

export interface CommonjsContext {
  __filename: string
  __dirname: string
}

export function createCommonJS (importMeta: ImportMeta) : CommonjsContext

// Resolve

export interface ResolveOptions {
  from?: string | URL
  conditions?: string[]
}

export function resolve (id: string, opts: ResolveOptions) : Promise<string>
export function resolvePath (id: string, opts: ResolveOptions) : Promise<string>
export function resolveSync (id: string, opts: ResolveOptions) : string
export function resolvePathSync (id: string, opts: ResolveOptions) : string
export function createResolve (defaults: ResolveOptions) : (id: string, from: string | URL) => Promise<string>
export function resolveImports (code: string, opts: ResolveOptions) : Promise<string>


// Evaluate

export interface EvaluateOptions extends ResolveOptions {}
export function loadModule (id: string, opts?: EvaluateOptions) : Promise<any>
export function evalModule (code: string, opts?: EvaluateOptions) : Promise<any>

export function readModule (id: string, opts?: ResolveOptions) : Promise<any>
export function toDataURL(code: string, opts?: ResolveOptions) : Promise<string>

// Utils

export function fileURLToPath (id: URL | string) : string
export function normalizeid (id: URL | string) : string
