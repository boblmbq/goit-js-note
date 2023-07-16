export function createTask(e) {
    const notes = {};
  new FormData(e.currentTarget).forEach((value, name) => (notes[name] = value));
    return notes;
}