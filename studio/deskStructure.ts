import type { StructureResolver } from "sanity/structure";

const documentGroups = [
  ["journalArticle", "Journal articles"],
  ["resource", "Library resources"],
  ["service", "Reading services"],
  ["staticPage", "Static pages"]
];

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title("Astra Arcana Content")
    .items(
      documentGroups.map(([type, title]) =>
        S.listItem()
          .title(title)
          .schemaType(type)
          .child(S.documentTypeList(type).title(title))
      )
    );
