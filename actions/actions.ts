'use server'

const TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN
const REVALIDATE_SECONDS = 3600

export async function getRepo(repoName: string) {
  const BASE_URL = `https://api.github.com/repos/sfwnisme/${repoName ?? 'visi'}`
  try {
    const [res, commits] = await Promise.all([
      fetch(BASE_URL, {
        next: { revalidate: REVALIDATE_SECONDS },
        headers: { 'Authorization': `Bearer ${TOKEN}` },
      }),
      getCommitsNumber(repoName),
    ])
    const json = await res.json()
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
        next: { revalidate: REVALIDATE_SECONDS },
        headers: { 'Authorization': `Bearer ${TOKEN}` },
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
