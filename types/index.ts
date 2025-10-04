export interface WebhookEndpoint {
  id: string
  urlSlug: string
  name: string | null
  userId: string | null
  createdAt: Date
  expiresAt: Date | null
  isActive: boolean
}

export interface WebhookRequest {
  id: string
  endpointId: string
  method: string
  headers: Record<string, string>
  body: any
  queryParams: Record<string, string> | null
  ipAddress: string | null
  userAgent: string | null
  receivedAt: Date
  responseStatus: number | null
  responseBody: any
  responseTime: number | null
}

export interface MockEndpoint {
  id: string
  userId: string | null
  path: string
  method: string
  responseStatus: number
  responseBody: any
  responseDelay: number
  conditions: any
  createdAt: Date
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD'

export interface RequestFilter {
  status?: 'success' | 'error' | 'all'
  timeRange?: 'hour' | 'day' | 'week' | 'custom'
  search?: string
}