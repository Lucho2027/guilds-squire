export default oauthBattledotnetEventHandler({
  async onSuccess(event, { user }) {
    await setUserSession(event, { user })
    return sendRedirect(event, '/')
  },
  onError(event, error) {
    console.error('Battle.net OAuth error:', error)
    return sendRedirect(event, '/')
  }
})
