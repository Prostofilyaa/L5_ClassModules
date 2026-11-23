import { GroupChat } from "./GroupChat.js";
const chats = [
  new GroupChat("Одногруппники", 25, false, false),
  new GroupChat("Проект по JS", 4, true, true),
];
chats[0].show();
chats[1].show();