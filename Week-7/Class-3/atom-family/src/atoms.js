import { atomFamily, selectorFamily } from "recoil";
// import { TODOS } from "./todos";
import axios from 'axios';

// atom family
// export const todosAtomFamily = atomFamily({
//     key: "todosAtomFamily",
//     default: id => {
//         // map, filter
//         return TODOS.find(x => x.id === id)
//     }
// });

// selector family
export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: selectorFamily({
        key: "todoSelectorFamily",
        get: (id) => async ({get}) => {
            const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
            return res.data.todo;
        },
    })
});