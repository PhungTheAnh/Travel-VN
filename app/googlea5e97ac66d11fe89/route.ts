// app/googlea5e97ac66d11fe89/route.ts

import { NextResponse } from 'next/server';

export function GET() {
    const html = `
    google-site-verification: googlea5e97ac66d11fe89.html
  `;

    return new NextResponse(html, {
        status: 200,
        headers: {
            'Content-Type': 'text/html',
        },
    });
}
