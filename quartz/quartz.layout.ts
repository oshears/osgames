import { boolean } from "yargs"
import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    // Component.Comments({
    //   provider: 'giscus',
    //   options: {
    //     repo: 'oshears/osgames',
    //     repoId:'R_kgDOM8ZZwg',
    //     category: 'Announcements',
    //     categoryId: 'DIC_kwDOM8ZZws4CjHzk',
    //     reactionsEnabled: true
    //   }
    // })
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    // Component.DesktopOnly(Component.Explorer()),
    // Component.TableOfContents(),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Devlogs",
        limit: 10,
        showTags: false,
        filter: (f) =>
          f.slug!.startsWith("devlogs/") && f.slug! !== "devlogs/index" && !f.frontmatter?.noindex,
        linkToMore: "devlogs/" as SimpleSlug,
      }),
    ),
  ],
  right: [
    // Component.Graph(),
    // Component.DesktopOnly(Component.TableOfContents()),
    Component.TableOfContents(),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    // Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Devlogs",
        limit: 10,
        showTags: false,
        filter: (f) =>
          f.slug!.startsWith("devlogs/") && f.slug! !== "devlogs/index" && !f.frontmatter?.noindex,
        linkToMore: "devlogs/" as SimpleSlug,
      }),
    ),
  ],
  right: [],
}
