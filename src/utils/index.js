const sendClickData = (pageName, eventId, eventParams) => {
  const params = {
    businessId: 'BUSINESS-3',
    pageName,
    pageParams: '',
    eventId,
    eventParams
  }
  console.log('sendClickData',params)
  window.jmsdk && window.jmsdk.call('sendClickData', params)
}
export { sendClickData };