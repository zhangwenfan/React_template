/**
 * Created by Administrator on 2017/6/22.
 */
export function addMember(name) {
  return {
    type: "ADD_GF",
    id: Date.now(),
    name: name
  }
}

export function deleteMember(id) {
  return {
    type: "DELETE_GF",
    id: id
  }
}