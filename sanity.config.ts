'use client'

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works

export default defineConfig({
  name: 'default',
  title: 'Webnexter Portfolio',
  basePath: '/studio',
  projectId: 'paoqp1wp',
  dataset: 'production',
  schema,
  plugins: [
    structureTool({
      structure
    }),
    visionTool({defaultApiVersion: '2025-04-05'}),
  ],
  cors: {
    origin: [
      'http://localhost:3000', 
      'https://webnexter-new-build-ocjc.vercel.app',
      'https://*.vercel.app'
    ],
    credentials: true
  },
  useCdn: false,
  apiVersion: '2025-04-05',
  // Token-based authentication
  auth: {
    redirectOnSingle: true,
    loginMethod: 'dual',
    providers: [
      {
        name: 'token',
        title: 'Token',
        url: 'https://api.sanity.io/v1/auth/login/token'
      }
    ]
  }
})
