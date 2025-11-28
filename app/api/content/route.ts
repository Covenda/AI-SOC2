import { NextRequest, NextResponse } from 'next/server';
import { updateContentInGitHub } from '@/lib/githubApi';

// This API route uses GitHub API to save content
// No backend database needed - changes are committed directly to the repo!

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { textId, text, batch } = body;

    // Handle batch updates
    if (batch && Array.isArray(batch)) {
      const updates = batch.map((item: any) => ({
        textId: item.textId,
        text: item.text,
      }));

      const result = await updateContentInGitHub(updates);
      if (result.success) {
        return NextResponse.json({
          success: true,
          message: result.message,
        });
      } else {
        return NextResponse.json(
          { error: result.message },
          { status: 500 }
        );
      }
    }

    // Handle single update
    if (!textId || typeof text !== 'string') {
      return NextResponse.json(
        { error: 'Invalid request' },
        { status: 400 }
      );
    }

    const result = await updateContentInGitHub([{ textId, text }]);
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        message: result.message,
      });
    } else {
      return NextResponse.json(
        { error: result.message },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Error saving content:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to save content' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const dataDir = join(process.cwd(), 'data');
    const contentFile = join(dataDir, 'content.json');

    try {
      const fileContent = await readFile(contentFile, 'utf-8');
      const contentData = JSON.parse(fileContent);
      return NextResponse.json(contentData);
    } catch (error) {
      // File doesn't exist, return empty
      return NextResponse.json({
        version: '1.0',
        lastUpdated: null,
        content: {},
      });
    }
  } catch (error) {
    console.error('Error loading content:', error);
    return NextResponse.json(
      { error: 'Failed to load content' },
      { status: 500 }
    );
  }
}

