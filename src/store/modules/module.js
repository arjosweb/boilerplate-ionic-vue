// import { api } from "../../services"

const module = {
    state: {
        page_title: "Blank page",
        title: "Ready to create an app using Ionic and Vue.JS?",
        text_1: "Start with Ionic",
        text_2: "UI Components",
        link: "https://ionicframework.com/docs/components",
        data: []
    },
    getters: {},
    mutations: {
        SET_DATA(state, context){
            state.data = context;
        },
    },
    actions: {
        setData(context, payload){
            context.commit("SET_DATA", payload)
        },
    }
}

export default module;
