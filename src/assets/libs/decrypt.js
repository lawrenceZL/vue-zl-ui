(function (window) {
  function b64DecodeUnicode (str) {
    return decodeURIComponent(atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
  }
  var decrypt = {
    json: function (str) {
      var newParam1 = str.slice(6)
      var newParam2 = newParam1.slice(0, -4)
      return atob(newParam2)
    },
    json2: function (str) {
      var newParam1 = str.slice(5)
      var newParam2 = newParam1.slice(0, -3)
      return b64DecodeUnicode(newParam2)
    }
  }
  window.decrypt = decrypt
})(window)
