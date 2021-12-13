function send_input() {
    axios.post('/accounts/create/', {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
      })
      .then(function (response) {
        // POST 요청이 성공했을 경우 어떤 javascript 가 구동되어야 하는지
        console.log(response);

        document.getElementById('alert_box').innerHTML
            = "<div class='btn btn-primary rounded-pill px-5'>가입이 성공했습니다</div>"

      })
      // 실패 했을 경우
      .catch(function (error) {
        console.log(error);

        document.getElementById('alert_box').innerHTML
            = "<div class='btn btn-danger rounded-pill px-5'>가입이 실패했습니다</div>"
      });
}
