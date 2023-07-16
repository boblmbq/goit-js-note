import { deleteTask } from "./localeStorageApi";

export function onDeleteCard(e) {
  if (e.target.nodeName === "BUTTON") {
    const id = e.target.dataset.id
    deleteTask(id);
    e.target.closest('.task-list-item').remove();
    
 }
}