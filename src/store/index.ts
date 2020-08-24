import Vue from "vue"
import Vuex from "vuex"
import ActionHelper from "./ActionHelper"
import ItemData from "../model/ItemData";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        aHelper: new ActionHelper(),
        isShow: false,
        transMemo:new ItemData(),
        cateId:-1,
    },
    mutations: {
        toggleShow(state,playload) { 
        state.isShow = playload
        state.transMemo=new ItemData()
        },
        TransMemo(state,playload) { 
          state.transMemo=playload
        },
        doFilterCateId(state,playload) { 
          state.cateId=playload
        }
    }
})