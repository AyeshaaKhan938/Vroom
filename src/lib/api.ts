export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || ''

type JsonHeadersInit = HeadersInit | undefined

export async function getJson<T>(
  path: string,
  init?: {
    headers?: JsonHeadersInit
    next?: { revalidate?: number }
  }
): Promise<T> {
  const base = API_BASE_URL.replace(/\/$/, '')
  const needsApiPrefix = !/\/api$/.test(base)
  const pathWithSlash = path.startsWith('/') ? path : `/${path}`
  let url = `${base}${needsApiPrefix ? '/api' : ''}${pathWithSlash}`
  // Normalize accidental double /api segments
  url = url.replace('/api/api/', '/api/')
  if (url.endsWith('/api/api')) url = url.slice(0, -4)

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      ...(init?.headers || {}),
    },
    next: init?.next,
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`GET ${url} failed: ${res.status} ${res.statusText} ${text}`)
  }

  return (await res.json()) as T
}

export async function postJson<TResponse, TBody = unknown>(
  path: string,
  body: TBody,
  init?: {
    headers?: JsonHeadersInit
  }
): Promise<TResponse> {
  const base = API_BASE_URL.replace(/\/$/, '')
  const needsApiPrefix = !/\/api$/.test(base)
  const pathWithSlash = path.startsWith('/') ? path : `/${path}`
  let url = `${base}${needsApiPrefix ? '/api' : ''}${pathWithSlash}`
  url = url.replace('/api/api/', '/api/')
  if (url.endsWith('/api/api')) url = url.slice(0, -4)

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    let text = ''
    try {
      text = await res.text()
    } catch {
      text = ''
    }
    throw new Error(`POST ${url} failed: ${res.status} ${res.statusText} ${text}`)
  }

  return (await res.json()) as TResponse
}

export async function postForm<TResponse>(
  path: string,
  form: FormData,
  init?: { headers?: HeadersInit }
): Promise<TResponse> {
  const base = API_BASE_URL.replace(/\/$/, '')
  const needsApiPrefix = !/\/api$/.test(base)
  const pathWithSlash = path.startsWith('/') ? path : `/${path}`
  let url = `${base}${needsApiPrefix ? '/api' : ''}${pathWithSlash}`
  url = url.replace('/api/api/', '/api/')
  if (url.endsWith('/api/api')) url = url.slice(0, -4)

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      // Hint Laravel to return JSON instead of redirecting (302) on validation errors
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      // Do not set Content-Type; browser will set multipart boundary
      ...(init?.headers || {}),
    },
    body: form,
  })

  if (!res.ok) {
    // Try to surface structured errors (e.g., Laravel 422 validation)
    let text = ''
    let json: any = null
    try {
      const contentType = res.headers.get('content-type') || ''
      if (contentType.includes('application/json')) {
        json = await res.json()
      } else {
        text = await res.text()
      }
    } catch {
      // ignore
    }
    const error: any = new Error(`POST ${url} failed: ${res.status} ${res.statusText}` + (text ? ` ${text}` : ''))
    error.status = res.status
    if (json) error.body = json
    throw error
  }

  return (await res.json()) as TResponse
}


