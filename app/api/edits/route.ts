import { NextRequest, NextResponse } from 'next/server';
import { getEdit, saveEdit, getAllEdits } from '@/lib/edits';
import { getSession } from '@/lib/auth';

// GET - Retrieve all edits or a specific edit
export async function GET(request: NextRequest) {
  try {
    const sessionId = request.cookies.get('sessionId')?.value;

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const user = getSession(sessionId);

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid session' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const elementId = searchParams.get('elementId');

    if (elementId) {
      const edit = getEdit(elementId);
      return NextResponse.json({ edit: edit || null });
    }

    // Return all edits
    const edits = getAllEdits();
    return NextResponse.json({ edits });
  } catch (error) {
    console.error('Get edits error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST - Save or update an edit
export async function POST(request: NextRequest) {
  try {
    const sessionId = request.cookies.get('sessionId')?.value;

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const user = getSession(sessionId);

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid session' },
        { status: 401 }
      );
    }

    const { elementId, content } = await request.json();

    if (!elementId || content === undefined) {
      return NextResponse.json(
        { error: 'elementId and content are required' },
        { status: 400 }
      );
    }

    const edit = saveEdit(elementId, content, user.id);

    return NextResponse.json({
      success: true,
      edit,
    });
  } catch (error) {
    console.error('Save edit error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

