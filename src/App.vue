<template>
  <div id="app">
    <button 
        v-send
        @click="fun"
        :data-params="
        JSON.stringify({
          pageName:'maliceList_warning_no',
          eventId:'malice_warning_no_click_orderCancel'
        })
        "
    >点击按钮</button>
  </div>
</template>

<script>
import { sendClickData } from './utils/index'
export default {
  name: 'App',
  created(){
    sendClickData('malice_enter_search','search')
  },
  methods:{
    fun(){
      console.log('点击按钮')
    }
  }
}
</script>