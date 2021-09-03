const params = {
  businessId: 'BUSINESS-3',
  pageName: '',
  pageParams: '',
  eventId: '',
  eventParams: ''
}

const send = {
  bind(el, binding) {
    const fun = () => {
      const newParams = { ...params, ...JSON.parse(el.dataset.params) }
      console.log('v-send', newParams)
      window.jmsdk && window.jmsdk.call('sendClickData', newParams)
    }
    el.addEventListener(binding.value === 'search' ? 'search' : 'click', fun)
  }
}

export default send