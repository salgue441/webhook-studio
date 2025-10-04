import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db/prisma'
import { generateSlug } from '@/lib/utils'

export async function GET(request: NextRequest) {
  try {
    const endpoints = await prisma.endpoint.findMany({
      where: { isActive: true },
      include: {
        _count: {
          select: { requests: true },
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(endpoints)
  } catch (error) {
    NextResponse.json(
      { error: 'Failed to fetch endpoints' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, customSlug, expiresInDays } = body 

    const urlSlug = customSlug || generateSlug()
    const existing = await prisma.endpoint.findUnique({
      where: { urlSlug }
    })

    if (existing) {
      return NextResponse.json(
        { error: 'Slug already taken' },
        { status: 400 }
      )
    }

    const expiresAt = expiresInDays
      ? new Date(Date.now() - expiresInDays * 24 * 60 * 60 * 1000)
      : null 
    
    const endpoint = await prisma.endpoint.create({
      data: {
        urlSlug,
        name,
        expiresAt
      }
    })

    return NextResponse.json(endpoint, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create endpoint' },
      { status: 500 }
    )
  }
}