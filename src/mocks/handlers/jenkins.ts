import { rest } from 'msw';

export const jenkinsHandlers = [
  rest.get('/jenkins/api/json', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        _class: 'hudson.model.Hudson',
        jobs: [
          {
            _class: 'com.cloudbees.hudson.plugins.folder.Folder',
            name: 'atv',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/',
          },
          {
            _class: 'com.cloudbees.hudson.plugins.folder.Folder',
            name: 'sxp',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/sxp/',
          },
        ],
      }),
    );
  }),
  rest.get('/jenkins/job/atv/api/json', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        _class: 'com.cloudbees.hudson.plugins.folder.Folder',
        jobs: [
          {
            _class: 'com.cloudbees.hudson.plugins.folder.Folder',
            name: 'build',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/',
          },
          {
            _class: 'com.cloudbees.hudson.plugins.folder.Folder',
            name: 'deploy',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/deploy/',
          },
          {
            _class: 'com.cloudbees.hudson.plugins.folder.Folder',
            name: 'run',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/run/',
          },
        ],
      }),
    );
  }),
  rest.get('/jenkins/job/atv/job/build/api/json', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        _class: 'com.cloudbees.hudson.plugins.folder.Folder',
        jobs: [
          {
            _class: 'com.cloudbees.hudson.plugins.folder.Folder',
            name: 'atv-management',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/atv-management/',
          },
          {
            _class: 'hudson.model.FreeStyleProject',
            name: 'authentication-api',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/authentication-api/',
          },
          {
            _class: 'hudson.model.FreeStyleProject',
            name: 'cdm-flumesink',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/cdm-flumesink/',
          },
          {
            _class: 'hudson.model.FreeStyleProject',
            name: 'cdm-timerange',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/cdm-timerange/',
          },
          {
            _class: 'hudson.model.FreeStyleProject',
            name: 'client-monitoring',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/client-monitoring/',
          },
          {
            _class: 'hudson.model.FreeStyleProject',
            name: 'hbbtv-client',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/hbbtv-client/',
          },
          {
            _class: 'hudson.model.FreeStyleProject',
            name: 'hbbtv-client-config',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/hbbtv-client-config/',
          },
          {
            _class: 'hudson.model.FreeStyleProject',
            name: 'hbbtv-client-suitest',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/hbbtv-client-suitest/',
          },
          {
            _class: 'hudson.model.FreeStyleProject',
            name: 'hybrid-tv-viewer',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/hybrid-tv-viewer/',
          },
          {
            _class: 'com.cloudbees.hudson.plugins.folder.Folder',
            name: 'prefect',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/prefect/',
          },
          {
            _class: 'hudson.model.FreeStyleProject',
            name: 'processing-api',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/processing-api/',
          },
          {
            _class: 'hudson.model.FreeStyleProject',
            name: 'realtimestats-flumesink',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/realtimestats-flumesink/',
          },
          {
            _class: 'hudson.model.FreeStyleProject',
            name: 'reporting-api',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/reporting-api/',
          },
          {
            _class: 'hudson.model.FreeStyleProject',
            name: 'sam',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/sam/',
          },
          {
            _class: 'hudson.model.FreeStyleProject',
            name: 'scheduler-api',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/scheduler-api/',
          },
          {
            _class: 'com.cloudbees.hudson.plugins.folder.Folder',
            name: 'screenshot-builder',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/screenshot-builder/',
          },
          {
            _class: 'com.cloudbees.hudson.plugins.folder.Folder',
            name: 'segment-builder',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/segment-builder/',
          },
          {
            _class: 'hudson.model.FreeStyleProject',
            name: 'segment-builder-api',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/segment-builder-api/',
          },
          {
            _class: 'hudson.model.FreeStyleProject',
            name: 'segment-builder-api-processing-worker',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/segment-builder-api-processing-worker/',
          },
          {
            _class: 'hudson.model.FreeStyleProject',
            name: 'segment-builder-extractor-service',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/segment-builder-extractor-service/',
          },
          {
            _class: 'hudson.model.FreeStyleProject',
            name: 'segment-builder-ui',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/segment-builder-ui/',
          },
          {
            _class: 'hudson.model.FreeStyleProject',
            name: 'superset',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/superset/',
          },
          {
            _class: 'hudson.model.FreeStyleProject',
            name: 'tam',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/tam/',
          },
          {
            _class: 'com.cloudbees.hudson.plugins.folder.Folder',
            name: 'target-audience-mapper',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/target-audience-mapper/',
          },
          {
            _class: 'hudson.model.FreeStyleProject',
            name: 'tsg',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/tsg/',
          },
          {
            _class: 'hudson.model.FreeStyleProject',
            name: 'viewer-segment-exporter',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/atv/job/build/job/viewer-segment-exporter/',
          },
        ],
      }),
    );
  }),
  rest.get('/jenkins/job/sxp/api/json', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        _class: 'com.cloudbees.hudson.plugins.folder.Folder',
        jobs: [
          {
            _class: 'com.cloudbees.hudson.plugins.folder.Folder',
            name: 'build',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/sxp/job/build/',
          },
          {
            _class: 'com.cloudbees.hudson.plugins.folder.Folder',
            name: 'deploy',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/sxp/job/deploy/',
          },
          {
            _class: 'com.cloudbees.hudson.plugins.folder.Folder',
            name: 'run',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/sxp/job/run/',
          },
        ],
      }),
    );
  }),
  rest.get('/jenkins/job/sxp/*', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        _class: 'com.cloudbees.hudson.plugins.folder.Folder',
        jobs: [
          {
            _class: 'com.cloudbees.hudson.plugins.folder.Folder',
            name: 'build',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/sxp/job/build/',
          },
          {
            _class: 'com.cloudbees.hudson.plugins.folder.Folder',
            name: 'deploy',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/sxp/job/deploy/',
          },
          {
            _class: 'com.cloudbees.hudson.plugins.folder.Folder',
            name: 'run',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/sxp/job/run/',
          },
          {
            _class: 'hudson.model.FreeStyleProject',
            name: 'free',
            url: 'https://jenkins.k8s.sysops-smartclip.net/job/sxp/job/run/',
          },
        ],
      }),
    );
  }),
];
