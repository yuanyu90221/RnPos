const request = require('request')
const addUser = async (nickname, profile_url, user_id) => {
  const formData = {
    nickname,
    profile_url,
    user_id
  }
  let data = await request.post(
    {
      headers: {
        'Api-Token': '4a7a19cdff2fe2959e940e98f131e4eee73870b7',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: 'https://api.sendbird.com/v3/users',
      form: JSON.stringify(formData),
      method: 'POST'
    },
    (error, response, body) => {
      if (error) {
        return error
      }
      console.log('ok')
      return body
    }
  )
}

module.exports = { addUser }
