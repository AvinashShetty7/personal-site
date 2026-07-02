import React from "react";
import {
  GitHubStats,
} from "./components/NoteComponents";

export interface Note {
  id: string;
  title: string;
  date?: string;
  preview: string;
  content: React.ReactNode;
  image?: string;
}

export interface NotesData {
  [section: string]: Note[];
}

export const notesData: NotesData = {
  Dev: [
    {
      id: "dev-2",
      title: "GitHub Development Profile",
      preview:
        "Comprehensive GitHub statistics showcasing coding activity, language usage, and open source contributions.",
      content: <GitHubStats />,
    },
  ],
};
