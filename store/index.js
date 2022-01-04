import Vuex from 'vuex'

const CreateStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {

            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [
                            {
                                id: "1",
                                title: "First post",
                                previewText: "First post detail",
                                thumbnail:
                                    "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
                            },
                            {
                                id: "2",
                                title: "second post",
                                previewText: "second post detail",
                                thumbnail:
                                    "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
                            },
                        ],
                        );
                        resolve()
                    }, 1500);
                })
                    .then((data) => {
                        context.store.commit("setPosts", data.loadedPosts);
                    })
                    .catch((e) => {
                        console.error("console error");
                    });

            },

            setPosts(context, posts) {
                context.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default CreateStore