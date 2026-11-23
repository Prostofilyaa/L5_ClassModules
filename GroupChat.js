import { Chat } from "./Chat.js";
export class GroupChat extends Chat {
  _isMuted;
  constructor(title, membersCount, isPrivate, isMuted) {
    super(title, membersCount, isPrivate);
    this.isMuted = isMuted;
  }
  get isMuted() {
    return this._isMuted;
  }
  set isMuted(value) {
    if (typeof value !== "boolean") {
      throw new Error("isMuted должен быть boolean");
    }
    this._isMuted = value;
  }
  show() {
    super.show();
    console.log(`Уведомления отключены: ${this._isMuted}`);
  }
  delete() {
    delete this._isMuted;
    super.delete();
  }
  static clone(chat) {
    return new GroupChat(chat.title, chat.membersCount, chat.isPrivate, chat.isMuted);
  }
}