import Vuex from 'vuex'
import axios from 'axios'

const CreateStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            },
            addPost(state, post) {
                state.loadedPosts.push(post)
            },
            editPost(state, editPost) {
                const postIndex = state.loadedPosts.findIndex(post => post.id === editPost.id)
                state.loadedPosts[postIndex] = editPost
            }
        },
        actions: {

            nuxtServerInit(vuexContext, context) {
                return axios.get('https://blog-nuxt-bf85c-default-rtdb.firebaseio.com/posts.json').then(res => {
                    const posts = []
                    for (const key in res.data) {
                        posts.push({ ...res.data[key], id: key })
                    }
                    vuexContext.commit('setPosts', posts)
                }).catch(e => console.error(e))




                // return new Promise((resolve) => {
                //     setTimeout(() => {
                //         vuexContext.commit('setPosts', [
                //             {
                //                 id: "1",
                //                 title: "First post",
                //                 previewText: "First post detail",
                //                 thumbnail:
                //                     "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
                //             },
                //             {
                //                 id: "2",
                //                 title: "second post",
                //                 previewText: "second post detail",
                //                 thumbnail:
                //                     "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
                //             },
                //         ],
                //         );
                //         resolve()
                //     }, 1500);
                // })
                //     .then((data) => {
                //         context.store.commit("setPosts", data.loadedPosts);
                //     })
                //     .catch((e) => {
                //         console.error("console error");
                //     });

            },

            setPosts(context, posts) {


                context.commit('setPosts', posts)
            },
            addPost(context, postData) {
                axios
                    .post(
                        "https://blog-nuxt-bf85c-default-rtdb.firebaseio.com/posts.json",
                        postData
                    )
                    .then((result) => {
                        console.log(result, 'adding post')
                        context.commit('addPost', { ...result.data, id: result.data.name })
                        this.$router.push('/')
                    })
                    .catch((error) => console.log(error));
            },
            editPost(context,editedPost) {
                console.log(editedPost,'editrtd acton')
                axios
                    .put(
                        "https://blog-nuxt-bf85c-default-rtdb.firebaseio.com/posts/" +
                        editedPost.id +
                        ".json",
                        editedPost
                    )
                    .then((data) => {
                        context.commit('editPost',editedPost)
                        this.$router.push('/')
                        console.log(data);
                    })
                    .catch((e) => console.log(e));
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