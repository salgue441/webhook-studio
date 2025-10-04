import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma"

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string }}
) {
  const startTime = Date.now()

  try {
    const { slug } = params 
    const endpoint = await prisma.endpoint.findUnique({
      where: { urlSlug: slug, isActive: true }
    })

    if (!endpoint) {
      return NextResponse.json(
        { error: 'Endpoint not found' },
        { status: 404 }
      );
    }

    const headers = Object.fromEntries(request.headers.entries())
    const body = await request.json().catch(() => null)
    const url = new URL(request.url)
    const queryParams = Object.fromEntries(url.searchParams.entries())

    const webhookRequest = await prisma.webhookRequest.create({
      data: {
        endpointId: endpoint.id,
        method: request.method,
        headers,
        body,
        queryParams: Object.keys(queryParams).length > 0 ? queryParams : null,
        ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
        userAgent: request.headers.get('user-agent'),
        responseStatus: 200,
        responseTime: Date.now() - startTime,
      }
    })

    // TODO: Emit WebSocket event for real-time update
    // TODO: Forward to target URL if forwarding is enabled
    return NextResponse.json({
      success: true,
      requestId: webhookRequest.id,
      message: 'Webhook received'
    });
  } catch (error) {
    console.error('Webhook receive error', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Support all HTTP methods, forwards to POST
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string }}
) {
  return POST(request, { params })
}

export async function PUT(
  request: NextRequest, 
  { params }: { params: { slug: string } }
) {
  return POST(request, { params })
}

export async function PATCH(
  request: NextRequest, 
  { params }: { params: { slug: string } }
) {
  return POST(request, { params })
}

export async function DELETE(
  request: NextRequest, 
  { params }: { params: { slug: string } }
) {
  return POST(request, { params })
}