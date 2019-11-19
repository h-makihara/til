# ユーザが所属しているグループを調べたい
ADでログインしているユーザで実行  
```
net user $username /domain
```

# グループを指定して所属しているユーザを調べたい
ADでログインしているユーザで実行  
```
net group $groupname /domain
```
