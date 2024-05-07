export type Library = {
  name: string;
} & Partial<{
  // Properties from npm
  repoName: string;
  repoOwner: string;
  numberOfVersions: number;
  weeklyDownloads: number;
  lastVersion: string;
  usedVersion: string;
  lastVersionDate: Date;
  lifeSpan: number;
  releaseFrequency: number;
  // Properties from github
  repoOpenIssues: number;
  repoStars: number;
  repoForks: number;
  repoObservers: number;
  repoOwnerType: string;
  repoHealth: number;
}>;
