'use server'

const TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN
export async function getRepo(repoName: string) {
  const BASE_URL = `https://api.github.com/repos/sfwnisme/${repoName ?? 'visi'}`
  try {
    const res = await fetch(BASE_URL, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`
      }
    })
    const json = await res.json()
    const commits = await getCommitsNumber(repoName)
    return { ...json, commits }
  } catch (error) {
    console.log('===========', error)
  }
}

export async function getCommitsNumber(repoName: string) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/sfwnisme/${repoName}/commits?per_page=1`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
        headers: {
          'Authorization': `Bearer ${TOKEN}`
        }
      }
    );

    const linkHeader = response.headers.get('Link');
    if (linkHeader) {
      const lastPageMatch = linkHeader.match(/page=(\d+)>; rel="last"/);
      if (lastPageMatch) {
        return parseInt(lastPageMatch[1], 10);
      }
    }
    return 0;
  } catch (error) {
    console.error('Error fetching commit count:', error);
    return 0;
  }
}