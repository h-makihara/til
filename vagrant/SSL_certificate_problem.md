# vagrant で Error: SSL certificate problem が出た時の対処法
ここの[リンク](http://blog.alfebelow.com/entry/2016/06/03/vagrant_で_Error%3A_SSL_certificate_problem_が出た時の対処法)で書かれてた
```
config.vm.box_download_insecure = true
```
これを Vagrantfile に追記する
