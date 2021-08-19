export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "611e354dcdecdb0d6a9ac1fa",
                  title: "Sanity Studio",
                  name: "getcallgirl-studio",
                  apiId: "d6f79fc4-6be6-4e31-8890-a049ce7d2630",
                },
                {
                  buildHookId: "611e354d0eba9f122f2fb8e1",
                  title: "Blog Website",
                  name: "getcallgirl",
                  apiId: "ba48c42d-10e9-4470-996a-e443bce3d2f0",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/CASHWINDRAW/getcallgirl",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://getcallgirl.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
