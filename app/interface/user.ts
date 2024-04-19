interface PrimaryLanguage {
  __typename: string;
  name: string;
  color: string;
}

interface StargazerConnection {
  __typename: string;
  totalCount: number;
}

interface Repository {
  __typename: string;
  name: string;
  description: string | null;
  forkCount: number;
  stargazers: StargazerConnection;
  url: string;
  id: string;
  diskUsage: number;
  primaryLanguage: PrimaryLanguage | null;
}

interface PinnableItemConnection {
  __typename: string;
  nodes: Repository[];
}

interface User {
  __typename: string;
  pinnedItems: PinnableItemConnection;
}

export interface RootGithubObject {
  user: User;
}

