import type { StructureResolver } from "sanity/structure";

const documentGroups = [
  ["newsArticle", "News articles"],
  ["event", "Events"],
  ["project", "Projects"],
  ["publication", "Publications"],
  ["video", "Videos"],
  ["galleryImage", "Gallery images"],
  ["partner", "Partners"],
  ["teamMember", "Team members"],
  ["staticPage", "Static pages"]
];

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title("We Archive Content")
    .items(
      documentGroups.map(([type, title]) =>
        S.listItem()
          .title(title)
          .schemaType(type)
          .child(S.documentTypeList(type).title(title))
      )
    );
