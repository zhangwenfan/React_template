/**
 * Created by Administrator on 2017/6/22.
 */
const defaultGfState = {
  members: [{
    id: 1,
    name: "Sana"
  }]
};

export default (state = defaultGfState, action) => {
  state = Object.assign({}, state);
  if (action.type === "ADD_TWICE") {
    state.members.push({id: action.id, name: action.name})
  } else if (action.type === "DELETE_TWICE") {
    const member = state.members;
    for (let i=0; i<member.length; i++) {
      if (member[i].id === action.id) {
        member.splice(i, 1);
      }
    }
  }
  return state;
}