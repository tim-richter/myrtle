import axios from 'axios';
import { z } from 'zod';
import { UserState } from '../../../stores/user';

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

  const response = await axios.get(
    constructRequestString(user.jenkins.base_url, '/'),
    {
      auth: {
        username: user.jenkins.username,
        password: user.jenkins.password,
      },
      withCredentials: false,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: '*/*',
      },
    },
  );

  return todoSchema.parse(response.data);
};
