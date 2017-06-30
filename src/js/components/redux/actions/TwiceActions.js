/**
 * Created by Administrator on 2017/6/30.
 */
export function addMember(name) {
  return {
    type: "ADD_TWICE",
    id: Date.now(),
    name: name
  }
}

export function deleteMember(id) {
  return {
    type: "DELETE_TWICE",
    id: id
  }
}
