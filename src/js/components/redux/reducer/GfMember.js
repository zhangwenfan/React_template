/**
 * Created by Administrator on 2017/6/22.
 */
const defaultGfState = {
  members: [{
    id: 1,
    name: "Yerin",
  },
    {
      id: 2,
      name: "Nayeon",
    }
  ]
};

export default (state = defaultGfState, action) => {
  state = Object.assign({}, state);
  if (action.type === "ADD_GF") {
    state.members.push({id: action.id, name: action.name})
  } else if (action.type === "DELETE_GF") {
    const members = state.members;
    for (let i=0; i<members.length; i++) {
      if (members[i].id === action.id) {
        members.splice(i, 1);
      }
    }
  }
  return state;
}