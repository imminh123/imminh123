// app/api/webhook/route.js - Next.js App Router

import { NextResponse } from 'next/server';

export async function GET(request) {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    console.log('Received GET webhook from Shelly button');
    
    // Get query parameters from the URL
    const { searchParams } = new URL(request.url);
    const queryParams = Object.fromEntries(searchParams);
    console.log('Query parameters:', queryParams);
    
    // Get GitHub token from environment variable
    const GITHUB_TOKEN = process.env.CADENTIA_GITHUB_TOKEN;
    
    if (!GITHUB_TOKEN) {
      console.error('GITHUB_TOKEN environment variable not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500, headers }
      );
    }
    
    // GitHub API call
    const githubResponse = await fetch(
      'https://api.github.com/repos/Cadentia/CadentiaPlatform/actions/workflows/auto-release-demo.yml/dispatches',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/vnd.github+json',
          'Authorization': `Bearer ${GITHUB_TOKEN}`,
          'X-GitHub-Api-Version': '2022-11-28',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ref: 'betaops',
          inputs: {
            branch_name: 'hieu-agentic-atomic-agent-integration-fix'
          }
        })
      }
    );

    if (githubResponse.ok || githubResponse.status === 204) {
      console.log('GitHub workflow triggered successfully');
      return NextResponse.json(
        { 
          success: true, 
          message: 'GitHub workflow triggered successfully',
          timestamp: new Date().toISOString(),
          params: queryParams
        },
        { status: 200, headers }
      );
    } else {
      const errorText = await githubResponse.text();
      console.error('GitHub API error:', githubResponse.status, errorText);
      return NextResponse.json(
        { 
          error: 'Failed to trigger GitHub workflow',
          status: githubResponse.status,
          details: errorText
        },
        { status: 500, headers }
      );
    }

  } catch (error) {
    console.error('Error in webhook handler:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error.message
      },
      { status: 500, headers }
    );
  }
}

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}