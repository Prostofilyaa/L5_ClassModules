export class Chat {
  _title; 
  _membersCount;
  _isPrivate;
  constructor(title, membersCount, isPrivate) {
    this.title = title;
    this.membersCount = membersCount;
    this.isPrivate = isPrivate;
  }
  get title() {
    return this._title;
  }
  set title(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("title должен быть непустой строкой");
    }
    this._title = value;
  }
  get membersCount() {
    return this._membersCount;
  }
  set membersCount(value) {
    if (!Number.isInteger(value) || value < 0) {
      throw new Error("membersCount должен быть целым числом >= 0");
    }
    this._membersCount = value;
  }
  get isPrivate() {
    return this._isPrivate;
  }
  set isPrivate(value) {
    if (typeof value !== "boolean") {
      throw new Error("isPrivate должен быть boolean");
    }
    this._isPrivate = value;
  }
  show() {
    console.log("=== Чат ===");
    console.log(`Название: ${this._title}`);
    console.log(`Участников: ${this._membersCount}`);
    console.log(`Закрытый: ${this._isPrivate}`);
  }
  delete() {
    for (const key of Object.keys(this)) {
      delete this[key];
    }
    Object.setPrototypeOf(this, null);
  }
  copy() {
    return this;
  }
  #makePrivate() {
    this._isPrivate = true;
  }
  lock() {
    this.#makePrivate();
  }
  static clone(chat) {
    return new Chat(chat.title, chat.membersCount, chat.isPrivate);
  }
}