import { getClient, ResponseType } from '@tauri-apps/api/http';
import { z } from 'zod';
import { UserState } from '@stores/user';

const constructRequestString = (baseUrl: string, resource: string) => {
  return `${baseUrl}${resource}api/json?pretty=true&tree=jobs[name,url]`;
};

const todoSchema = z.object({
  _class: z.enum([
    'com.cloudbees.hudson.plugins.folder.Folder',
    'hudson.model.FreeStyleProject',
    'hudson.model.Hudson',
  ]),
  jobs: z.array(
    z.object({
      _class: z.enum([
        'com.cloudbees.hudson.plugins.folder.Folder',
        'hudson.model.FreeStyleProject',
      ]),
      name: z.string(),
      url: z.string(),
    }),
  ),
});

export const useJenkinsRequest = (user: UserState) => async () => {
  if (
    !user.jenkins.base_url ||
    !user.jenkins.password ||
    !user.jenkins.username
  )
    return null;

  const client = await getClient();

  const response = await client.get(
    constructRequestString(user.jenkins.base_url, '/'),
    {
      timeout: 30,
      responseType: ResponseType.JSON,
      headers: {
        Authorization: `Basic ${btoa(
          `${user.jenkins.username}:${user.jenkins.password}`,
        )}`,
      },
    },
  );

  return todoSchema.parse(response.data);
};
