// pages/api/webhook.js - Next.js Pages Router

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed. Use GET.' });
  }

  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
    console.log('Received GET webhook from Shelly button');
    console.log('Query parameters:', req.query);
    
    // Get GitHub token from environment variable
    const GITHUB_TOKEN = process.env.CADENTIA_GITHUB_TOKEN;
    
    if (!GITHUB_TOKEN) {
      console.error('GITHUB_TOKEN environment variable not set');
      return res.status(500).json({ 
        error: 'Server configuration error' 
      });
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
            branch_name: 'hieu-agentic-atomic-agent-integration-fix',
            trigger_source: 'shelly_button_via_nextjs_get',
            timestamp: new Date().toISOString(),
            trigger_params: JSON.stringify(req.query)
          }
        })
      }
    );

    if (githubResponse.ok || githubResponse.status === 204) {
      console.log('GitHub workflow triggered successfully');
      return res.status(200).json({ 
        success: true, 
        message: 'GitHub workflow triggered successfully',
        timestamp: new Date().toISOString(),
        params: req.query
      });
    } else {
      const errorText = await githubResponse.text();
      console.error('GitHub API error:', githubResponse.status, errorText);
      return res.status(500).json({ 
        error: 'Failed to trigger GitHub workflow',
        status: githubResponse.status,
        details: errorText
      });
    }

  } catch (error) {
    console.error('Error in webhook handler:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error.message
    });
  }
}