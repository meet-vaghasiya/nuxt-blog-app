import Vuex from "vuex";
import axios from "axios";
import Cookie from "js-cookie";

const CreateStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null,
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editPost) {
        const postIndex = state.loadedPosts.findIndex(
          (post) => post.id === editPost.id
        );
        state.loadedPosts[postIndex] = editPost;
      },
      setToken(state, payload) {
        state.token = payload;
      },
      clearToken(state) {
        state.token = null;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get("https://blog-nuxt-bf85c-default-rtdb.firebaseio.com/posts.json")
          .then((res) => {
            const posts = [];
            for (const key in res.data) {
              posts.push({ ...res.data[key], id: key });
            }
            vuexContext.commit("setPosts", posts);
          })
          .catch((e) => console.error(e));

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
      authenticateUser(context, payload) {
        let authUrl =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword";
        if (!payload.isLogin) {
          authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp";
        }

        return axios
          .post(`${authUrl}?key=${process.env.fbApiKey}`, {
            ...payload.form,
            returnSecureToken: true,
          })
          .then((res) => {
            context.commit("setToken", res.data.idToken);

            Cookie.set("jwt", res.data.idToken);
            Cookie.set(
              "tokenExpiration",
              new Date().getTime() + +res.data.expiresIn * 1000
            );

            localStorage.setItem("token", res.data.idToken);
            localStorage.setItem(
              "tokenExpiration",
              new Date().getTime() + +res.data.expiresIn * 1000
            );
            context.dispatch("setLogoutTimer", res.data.expiresIn * 1000);
          })
          .catch((e) => console.error);
      },
      setLogoutTimer(context, duration) {
        console.log("set time out call");
        setTimeout(() => {
          context.commit("clearToken");
        }, duration);
      },
      initAuth(context, req) {
          let token,expireDate
        if (req) {
          if (!req.headers.cookie) {
            return;
          } else {
            const jwtCookie = req.headers.cookie
              .split(";")
              .find((c) => c.trim().startsWith("jwt="));
            if (!jwtCookie) {
                alert('expire frmo server')
              return;
            }
           token = jwtCookie.split("=")[1];
            expireDate = req.headers.cookie
              .split(";")
              .find((c) => c.trim().startsWith("tokenExpiration=")).split('=')[1];
          }
        } else {
           token = localStorage.getItem("token");
           expireDate = localStorage.getItem("tokenExpiration");
          if (new Date().getTime() > expireDate || !token) {
            return;
          }
        }

        context.dispatch("setLogoutTimer", +expireDate - new Date());
        context.commit("setToken", token);
      },

      setPosts(context, posts) {
        context.commit("setPosts", posts);
      },
      addPost(context, postData) {
        axios
          .post(
            "https://blog-nuxt-bf85c-default-rtdb.firebaseio.com/posts.json?auth=" +
              context.state.token,
            postData
          )
          .then((result) => {
            context.commit("addPost", { ...result.data, id: result.data.name });
            this.$router.push("/");
          })
          .catch((error) => console.log(error));
      },
      editPost(context, editedPost) {
        axios
          .put(
            "https://blog-nuxt-bf85c-default-rtdb.firebaseio.com/posts/" +
              editedPost.id +
              ".json?auth=" +
              context.state.token,
            editedPost
          )
          .then((data) => {
            context.commit("editPost", editedPost);
            this.$router.push("/");
          })
          .catch((e) => console.log(e));
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      isAuthenticated(state) {
        return state.token;
      },
    },
  });
};

export default CreateStore;
