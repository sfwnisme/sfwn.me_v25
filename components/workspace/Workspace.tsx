import React from 'react'
import Work from '../work/Work'
import { getRepo } from '@/actions/actions'
import Style from './Workspace.module.css'
import Title from '../Title/Title'

export default async function Workspace() {

  const visiRepo = await getRepo('visi')
  const complaintTicketsRepo = await getRepo('COMPLAINT-TICKETS')
  const backendTicketSystemRepo = await getRepo('backend-ticket-system')
  const luberefDotComCloneRepo = await getRepo('luberef.com-clone')
  const schoolManagementSystemeRepo = await getRepo('school-management-system')
  const eCommerceRepo = await getRepo('e-commerce')
  return (
    <div className={Style.workspace}>
      <Title>Workspace</Title>
      <div className={Style['workspace__works']}>
        <Work repo={visiRepo} />
        <Work repo={complaintTicketsRepo} />
        <Work repo={backendTicketSystemRepo} />
        <Work repo={luberefDotComCloneRepo} />
        <Work repo={schoolManagementSystemeRepo} />
        <Work repo={eCommerceRepo} />
      </div>
    </div>
  )
}
/**
 *  id: 895813340,
  node_id: 'R_kgDONWUG3A',
  name: 'visi',
  full_name: 'sfwnisme/visi',
  private: false,
  owner: {
    login: 'sfwnisme',
    id: 92028514,
    node_id: 'U_kgDOBXw-Yg',
    avatar_url: 'https://avatars.githubusercontent.com/u/92028514?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/sfwnisme',
    html_url: 'https://github.com/sfwnisme',
    followers_url: 'https://api.github.com/users/sfwnisme/followers',
    following_url: 'https://api.github.com/users/sfwnisme/following{/other_user}',
    gists_url: 'https://api.github.com/users/sfwnisme/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/sfwnisme/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/sfwnisme/subscriptions',
    organizations_url: 'https://api.github.com/users/sfwnisme/orgs',
    repos_url: 'https://api.github.com/users/sfwnisme/repos',
    events_url: 'https://api.github.com/users/sfwnisme/events{/privacy}',
    received_events_url: 'https://api.github.com/users/sfwnisme/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false
  },
  html_url: 'https://github.com/sfwnisme/visi',
  description: "React package inspired by SolidJS's powerful and efficient conditional rendering components.",
  fork: false,
  url: 'https://api.github.com/repos/sfwnisme/visi',
  forks_url: 'https://api.github.com/repos/sfwnisme/visi/forks',
  keys_url: 'https://api.github.com/repos/sfwnisme/visi/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/sfwnisme/visi/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/sfwnisme/visi/teams',
  hooks_url: 'https://api.github.com/repos/sfwnisme/visi/hooks',
  issue_events_url: 'https://api.github.com/repos/sfwnisme/visi/issues/events{/number}',
  events_url: 'https://api.github.com/repos/sfwnisme/visi/events',
  assignees_url: 'https://api.github.com/repos/sfwnisme/visi/assignees{/user}',
  branches_url: 'https://api.github.com/repos/sfwnisme/visi/branches{/branch}',
  tags_url: 'https://api.github.com/repos/sfwnisme/visi/tags',
  blobs_url: 'https://api.github.com/repos/sfwnisme/visi/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/sfwnisme/visi/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/sfwnisme/visi/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/sfwnisme/visi/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/sfwnisme/visi/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/sfwnisme/visi/languages',
  stargazers_url: 'https://api.github.com/repos/sfwnisme/visi/stargazers',
  contributors_url: 'https://api.github.com/repos/sfwnisme/visi/contributors',
  subscribers_url: 'https://api.github.com/repos/sfwnisme/visi/subscribers',
  subscription_url: 'https://api.github.com/repos/sfwnisme/visi/subscription',
  commits_url: 'https://api.github.com/repos/sfwnisme/visi/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/sfwnisme/visi/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/sfwnisme/visi/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/sfwnisme/visi/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/sfwnisme/visi/contents/{+path}',
  compare_url: 'https://api.github.com/repos/sfwnisme/visi/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/sfwnisme/visi/merges',
  archive_url: 'https://api.github.com/repos/sfwnisme/visi/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/sfwnisme/visi/downloads',
  issues_url: 'https://api.github.com/repos/sfwnisme/visi/issues{/number}',
  pulls_url: 'https://api.github.com/repos/sfwnisme/visi/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/sfwnisme/visi/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/sfwnisme/visi/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/sfwnisme/visi/labels{/name}',
  releases_url: 'https://api.github.com/repos/sfwnisme/visi/releases{/id}',
  deployments_url: 'https://api.github.com/repos/sfwnisme/visi/deployments',
  created_at: '2024-11-29T00:51:05Z',
  updated_at: '2025-01-03T14:40:23Z',
  pushed_at: '2024-12-03T01:44:09Z',
  git_url: 'git://github.com/sfwnisme/visi.git',
  ssh_url: 'git@github.com:sfwnisme/visi.git',
  clone_url: 'https://github.com/sfwnisme/visi.git',
  svn_url: 'https://github.com/sfwnisme/visi',
  homepage: 'https://www.npmjs.com/package/@sfwnisme/visi',
  size: 19,
  stargazers_count: 14,
  watchers_count: 14,
  language: 'TypeScript',
  has_issues: true,
  homepage: 'https://www.npmjs.com/package/@sfwnisme/visi',
  size: 19,
  stargazers_count: 14,
  watchers_count: 14,
  language: 'TypeScript',
  has_issues: true,
  size: 19,
  stargazers_count: 14,
  watchers_count: 14,
  language: 'TypeScript',
  has_issues: true,
  stargazers_count: 14,
  watchers_count: 14,
  language: 'TypeScript',
  has_issues: true,
  watchers_count: 14,
  language: 'TypeScript',
  has_issues: true,
  language: 'TypeScript',
  has_issues: true,
  has_projects: true,
  has_issues: true,
  has_projects: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  has_discussions: false,
  forks_count: 1,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: {
    key: 'mit',
    name: 'MIT License',
    spdx_id: 'MIT',
    url: 'https://api.github.com/licenses/mit',
    node_id: 'MDc6TGljZW5zZTEz'
  },
  allow_forking: true,
  is_template: false,
  web_commit_signoff_required: false,
  topics: [ 'react', 'solidjs-inspiration', 'typescript' ],
  visibility: 'public',
  forks: 1,
  open_issues: 0,
  watchers: 14,
  default_branch: 'master',
  temp_clone_token: null,
  network_count: 1,
  subscribers_count: 1
}
 */
