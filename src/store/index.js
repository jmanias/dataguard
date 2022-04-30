import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        snackbar: { active: false, color: "", message: "" },
        tab1: '',
        tab2: '',
        tab3: '',
        tabData: '',
        plugins: '',
        isPluginsEnabled: true
    },
    getters: {
        getTab1(state) {
            return state.tab1 || ''
        },
        getTab2(state) {
            return state.tab2 || ''
        },
        getTab3(state) {
            return state.tab3 || ''
        },
        getTabByName: (state) => (name) => {
            if (name === 'tab1') {
                return state.tab1 || ''
            } else return name === 'tab2' ? state.tab2 || '' : state.tab3 || '';
        },
        getPlugins(state) {
            return state.plugins
        },
        getIsPluginsEnabled(state) {
            return state.isPluginsEnabled
        },
        getTabData(state) {
            return state.tabData
        }
    },
    mutations: {
        setSnackbar(state, snackbar) {
            state.snackbar = snackbar;
        },
        toggleIsPluginsEnabled(state) {
            state.isPluginsEnabled = !state.isPluginsEnabled
        },
        setPlugins(state, data) {
            state.plugins = data.plugins
            state.tab1 = data.tabdata.tab1
            state.tab2 = data.tabdata.tab2
            state.tab3 = data.tabdata.tab3
        },
        setTabData(state) {
            state.tabData = {tab1: state.tab1, tab2: state.tab2, tab3: state.tab3}
        },
        toggleTabPluginStatusByName(state, payload) {
            const tab = payload.tab
            // if not in inactive, then add
            if (state[tab].inactive.includes(payload.name)) {
                state[tab].inactive = state[tab].inactive.filter(e => e !== payload.name)
            }
            // if in inactive, then remove
            else {
                state[tab].inactive.push(payload.name)
            }
        }
    },
    actions: {
        setSnackbar({ commit }, message) {
            commit("setSnackbar", {
                active: true,
                color: "grey",
                message: message
            });
        },
        toggleIsPluginsEnabled(context) {
            context.commit('toggleIsPluginsEnabled')
        },
        toggleTabPluginStatusByName(context, payload) {
            context.commit('toggleTabPluginStatusByName', payload)
        },
        setTabData(context) {
            context.commit('setTabData')
        },
        async loadPlugins({commit, dispatch}) {
            try {
                const response = await axios.get(`http://localhost:3000/data`)
                const data = response.data
                commit('setPlugins', data)
                return data
            } catch (e) {
                const errMessage = 'Error retrieving plugins!'
                console.log(e)
                dispatch('setSnackbar', errMessage)
            }
        },
        async updatePlugins({dispatch, getters}) {
            try {
               const response =  await axios.post("http://localhost:3000/data", {
                    tabs: ["tab1", "tab2", "tab3"],
                    tabdata: getters.getTabData,
                    plugins: getters.getPlugins
                });
                    return response.data
            } catch (e) {
                const errMessage = 'Error updating plugins!'
                console.log(e)
                dispatch('setSnackbar', errMessage)
            }
        }
    },
    modules: {}
})
