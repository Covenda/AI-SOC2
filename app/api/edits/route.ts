import { NextRequest, NextResponse } from 'next/server';
import { getEdit, saveEdit, getAllEdits } from '@/lib/edits';

// GET - Retrieve all edits or a specific edit
export async function GET(request: NextRequest) {
  try {
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
    const { elementId, content } = await request.json();

    if (!elementId || content === undefined) {
      return NextResponse.json(
        { error: 'elementId and content are required' },
        { status: 400 }
      );
    }

    // Use 'anonymous' as userId since we removed authentication
    const edit = saveEdit(elementId, content, 'anonymous');

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

