export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dc0e5f9f51693ca61fd8ff4',
                  title: 'Sanity Studio',
                  name: 'neta-sapper-sanity-studio',
                  apiId: '2cb514b9-4deb-404a-aaf7-a4b716c4b669'
                },
                {
                  buildHookId: '5dc0e5f92affb96e3a7c32fa',
                  title: 'Blog Website',
                  name: 'neta-sapper-sanity',
                  apiId: '35435f90-7ea7-4e31-88f7-426dc62a57b3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/franknoirot/neta-sapper-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://neta-sapper-sanity.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
