
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'samsung1'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时
let total = 99;//TB
let timestamp = 4102329600000;//2099-12-31

let cacheTTL = 24 ;//小时，缓存时长

//节点链接 + 订阅链接
let MainData = `
vless://bc2cd8f5-4c17-4d33-bdf6-4e4dc56983f2@104.17.180.102:443?encryption=none&security=tls&sni=net.10125800.xyz&allowInsecure=1&type=ws&host=net.10125800.xyz&path=%2Fbc2cd8f5#cf%20vless-clone0801-clone-clone
vless://265511cc-073e-45fc-b93a-9faed4217e3c@104.18.189.234:80?encryption=none&security=none&type=ws&host=camerart.sqqdeidt.workers.dev&path=%2F%3Fed%3D2048#camerart.sqqdeidt.workers-1113
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@104.18.189.234:2052?encryption=none&security=none&sni=samsung.sqqdeidt.workers.dev&fp=randomized&type=ws&host=samsung.sqqdeidt.workers.dev&path=%2F%3Fed%3D2048#samsung.sqqdeidt.workers-chatpgt%204%E4%B8%876%20%20%E7%BE%8E%E5%9B%BD%2C%20%E5%8A%A0%E5%88%A9%E7%A6%8F%E5%B0%BC%E4%BA%9A%E5%B7%9E
vless://bc2cd8f5-4c17-4d33-bdf6-4e4dc56983f2@104.18.42.46:443?encryption=none&security=tls&sni=net.10125800.xyz&allowInsecure=1&type=ws&host=net.10125800.xyz&path=%2Fbc2cd8f5#cf%20vless-clone0801-clone
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjEyMy1cdTY3MkFcdTc3RTVfMDgwMjA0MjcxIiwNCiAgImFkZCI6ICIxMDQuMjYuMC42NiIsDQogICJwb3J0IjogIjIwNTIiLA0KICAiaWQiOiAiZDZiNmQ5ODItZDUyZi00NjVhLWI5ODgtODU2NzBiMjNmNjRhIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJjZG4zLmZyZWVncmFkZWx5Lnh5eiIsDQogICJwYXRoIjogImdpdGh1Yi5jb20vQWx2aW45OTk5IiwNCiAgInRscyI6ICIiLA0KICAic25pIjogImNkbjMuZnJlZWdyYWRlbHkueHl6IiwNCiAgImFscG4iOiAiaDMsaDIsaHR0cC8xLjEiLA0KICAiZnAiOiAiZWRnZSINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjEzOS1cdTY3MkFcdTc3RTVfMDgwMjA0MjY4IiwNCiAgImFkZCI6ICIxMDQuMjYuNS4xMTIiLA0KICAicG9ydCI6ICIyMDg2IiwNCiAgImlkIjogImU5ZTNjYzEzLWRiNDgtNGNjMS04YzI0LTc2MjY0MzlhNTMzOSIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiaXAxLjE3ODkwMzQueHl6IiwNCiAgInBhdGgiOiAiZ2l0aHViLmNvbS9BbHZpbjk5OTkiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiaXAxLjE3ODkwMzQueHl6IiwNCiAgImFscG4iOiAiaDIsaHR0cC8xLjEiLA0KICAiZnAiOiAiYW5kcm9pZCINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjEyOS1cdTY3MkFcdTc3RTVfMDgwMjA0MDI3IiwNCiAgImFkZCI6ICIxMDQuMjYuNy4xMzIiLA0KICAicG9ydCI6ICIyMDg2IiwNCiAgImlkIjogImU5ZTNjYzEzLWRiNDgtNGNjMS04YzI0LTc2MjY0MzlhNTMzOSIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJhdXRvIiwNCiAgImhvc3QiOiAiaXAyLjE0NTcyMzAueHl6IiwNCiAgInBhdGgiOiAiZ2l0aHViLmNvbS9BbHZpbjk5OTkiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiaXAyLjE0NTcyMzAueHl6IiwNCiAgImFscG4iOiAiaDMsaDIsaHR0cC8xLjEiLA0KICAiZnAiOiAiYW5kcm9pZCINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDEiLA0KICAiYWRkIjogIjEwNy4xNzIuOTQuMTQiLA0KICAicG9ydCI6ICIzNjA4NyIsDQogICJpZCI6ICI5Y2JmMTczMi0zNzUwLTRmZGItYTU4Mi1jMTM5OGM3MTFlNDEiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIi85Y2JmMTczMiIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vless://3e654d3e-5e82-41d5-c372-1b8d2efca9e7@107.172.94.14:80?encryption=none&security=none&type=ws&path=%2F#0801-2
vless://58406e25-0f89-4f3b-8f89-93537641f126@140.238.8.194:15800?encryption=none&security=tls&sni=15212712-20f5-40a5-b9aa-8363e0130171.ee137666-1e0a-46db-bbd6-cc18f9841234.accesscam.org&alpn=http%2F1.1&fp=random&allowInsecure=1&type=ws&host=15212712-20f5-40a5-b9aa-8363e0130171.ee137666-1e0a-46db-bbd6-cc18f9841234.accesscam.org&path=%2F42ab2ad7.v2raypro1-bvc.pages.dev%2F%3Fproxyip%3Doracle.gitgoogle.com#KR%F0%9F%90%B2%E2%84%A2%EF%B8%8F%E3%80%90%E8%AF%B7%E5%8B%BF%E6%B5%8B%E9%80%9F%E3%80%91%20%E5%B7%B2%E5%90%AF%E7%94%A8%E4%B8%B4%E6%97%B6%E5%9F%9F%E5%90%8D%E4%B8%AD%E8%BD%AC%E6%9C%8D%E5%8A%A1%EF%BC%8C%E8%AF%B7%E5%B0%BD%E5%BF%AB%E7%BB%91%E5%AE%9A%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%EF%BC%81
vless://58406e25-0f89-4f3b-8f89-93537641f126@146.56.171.182:11659?encryption=none&security=tls&sni=e8b99cbe-9ebd-4a20-a497-38f4b29f2c98.83b11782-ecae-411f-90c3-2a01bb33260a.gleeze.com&alpn=http%2F1.1&fp=random&allowInsecure=1&type=ws&host=e8b99cbe-9ebd-4a20-a497-38f4b29f2c98.83b11782-ecae-411f-90c3-2a01bb33260a.gleeze.com&path=%2F42ab2ad7.v2raypro1-bvc.pages.dev%2F%3Fproxyip%3Doracle.gitgoogle.com#KR%F0%9F%90%B2%E2%84%A2%EF%B8%8F%E3%80%90%E8%AF%B7%E5%8B%BF%E6%B5%8B%E9%80%9F%E3%80%91%20%E5%B7%B2%E5%90%AF%E7%94%A8%E4%B8%B4%E6%97%B6%E5%9F%9F%E5%90%8D%E4%B8%AD%E8%BD%AC%E6%9C%8D%E5%8A%A1%EF%BC%8C%E8%AF%B7%E5%B0%BD%E5%BF%AB%E7%BB%91%E5%AE%9A%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%EF%BC%81
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjE5MC1cdUQ4M0NcdURERkFcdUQ4M0NcdURERjggXHU3RjhFXHU1NkZEIENsb3VkRmxhcmVcdTgyODJcdTcwQjkiLA0KICAiYWRkIjogIjE3Mi42NC4yMzMuNDMiLA0KICAicG9ydCI6ICIyMDg2IiwNCiAgImlkIjogImU5ZTNjYzEzLWRiNDgtNGNjMS04YzI0LTc2MjY0MzlhNTMzOSIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiaXAyLjE0NTcyMzAueHl6IiwNCiAgInBhdGgiOiAiZ2l0aHViLmNvbS9BbHZpbjk5OTkiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiaXAyLjE0NTcyMzAueHl6IiwNCiAgImFscG4iOiAiaDMsaDIsaHR0cC8xLjEiLA0KICAiZnAiOiAiZWRnZSINCn0=
vless://bc2cd8f5-4c17-4d33-bdf6-4e4dc56983f2@172.67.164.216:443?encryption=none&security=tls&sni=net.10125800.xyz&allowInsecure=1&type=ws&host=net.10125800.xyz&path=%2Fbc2cd8f5#cf%20vless-clone0801
vless://bc2cd8f5-4c17-4d33-bdf6-4e4dc56983f2@172.67.8.241:443?encryption=none&security=tls&sni=net.10125800.xyz&allowInsecure=1&type=ws&host=net.10125800.xyz&path=%2Fbc2cd8f5#cf%20vless0801
vless://58406e25-0f89-4f3b-8f89-93537641f126@43.156.6.97:10392?encryption=none&security=tls&sni=ceb98438-36f6-4f6c-9596-8d0409bbe285.b1e18cfc-f959-4f08-94da-4878c3cd4a5f.mywire.org&alpn=http%2F1.1&fp=random&allowInsecure=1&type=ws&host=ceb98438-36f6-4f6c-9596-8d0409bbe285.b1e18cfc-f959-4f08-94da-4878c3cd4a5f.mywire.org&path=%2F42ab2ad7.v2raypro1-bvc.pages.dev%2F%3Fproxyip%3Doracle.gitgoogle.com#SG%F0%9F%90%B2%E2%84%A2%EF%B8%8F%E3%80%90%E8%AF%B7%E5%8B%BF%E6%B5%8B%E9%80%9F%E3%80%91%20%E5%B7%B2%E5%90%AF%E7%94%A8%E4%B8%B4%E6%97%B6%E5%9F%9F%E5%90%8D%E4%B8%AD%E8%BD%AC%E6%9C%8D%E5%8A%A1%EF%BC%8C%E8%AF%B7%E5%B0%BD%E5%BF%AB%E7%BB%91%E5%AE%9A%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%EF%BC%81
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI0Ny4yNDIuMjM0LjEyNyIsDQogICJwb3J0IjogIjgwIiwNCiAgImlkIjogIjgyMDVjZDQ3LWMxYmMtNGI5ZC05MzQxLTA3ODk2OGVjZGJkOCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAidnYubXktdGVzbGEuYXNpYSIsDQogICJwYXRoIjogIi8iLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI0Ny4yNDIuNTkuMjE2IiwNCiAgInBvcnQiOiAiODAiLA0KICAiaWQiOiAiODIwNWNkNDctYzFiYy00YjlkLTkzNDEtMDc4OTY4ZWNkYmQ4IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ2di5teS10ZXNsYS5hc2lhIiwNCiAgInBhdGgiOiAiLyIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI0Ny4yNDIuNy4xNjIiLA0KICAicG9ydCI6ICI4MCIsDQogICJpZCI6ICI4MjA1Y2Q0Ny1jMWJjLTRiOWQtOTM0MS0wNzg5NjhlY2RiZDgiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInZ2Lm15LXRlc2xhLmFzaWEiLA0KICAicGF0aCI6ICIvIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI0Ny4yNDMuMTczLjE4NyIsDQogICJwb3J0IjogIjgwIiwNCiAgImlkIjogIjgyMDVjZDQ3LWMxYmMtNGI5ZC05MzQxLTA3ODk2OGVjZGJkOCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAidnYubXktdGVzbGEuYXNpYSIsDQogICJwYXRoIjogIi8iLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI0Ny4yNDMuOTAuMTgwIiwNCiAgInBvcnQiOiAiODAiLA0KICAiaWQiOiAiODIwNWNkNDctYzFiYy00YjlkLTkzNDEtMDc4OTY4ZWNkYmQ4IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ2di5teS10ZXNsYS5hc2lhIiwNCiAgInBhdGgiOiAiLyIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI0Ny4yNDUuMTI2LjE1MSIsDQogICJwb3J0IjogIjgwIiwNCiAgImlkIjogIjgyMDVjZDQ3LWMxYmMtNGI5ZC05MzQxLTA3ODk2OGVjZGJkOCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAidnYubXktdGVzbGEuYXNpYSIsDQogICJwYXRoIjogIi8iLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDEiLA0KICAiYWRkIjogIjU0LjE2OS45NC45IiwNCiAgInBvcnQiOiAiNTI5ODAiLA0KICAiaWQiOiAiOTQ5NjNhODctNWM2ZC00NzU0LWI0NmYtOGFlNmNjMGQ4OTVmIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIvIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vless://58406e25-0f89-4f3b-8f89-93537641f126@75.2.32.4:443?encryption=none&security=tls&sni=68123106-3e43-4958-b75a-b06e81eabf79.50d88e28-a870-497d-bf87-c20fb6802871.camdvr.org&alpn=http%2F1.1&fp=random&allowInsecure=1&type=ws&host=68123106-3e43-4958-b75a-b06e81eabf79.50d88e28-a870-497d-bf87-c20fb6802871.camdvr.org&path=%2F42ab2ad7.v2raypro1-bvc.pages.dev%2F%3Fproxyip%3Doracle.gitgoogle.com#US%F0%9F%90%B2%E2%84%A2%EF%B8%8F%E3%80%90%E8%AF%B7%E5%8B%BF%E6%B5%8B%E9%80%9F%E3%80%91%20%E5%B7%B2%E5%90%AF%E7%94%A8%E4%B8%B4%E6%97%B6%E5%9F%9F%E5%90%8D%E4%B8%AD%E8%BD%AC%E6%9C%8D%E5%8A%A1%EF%BC%8C%E8%AF%B7%E5%B0%BD%E5%BF%AB%E7%BB%91%E5%AE%9A%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%EF%BC%81
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI4LjIxMC42NS4xIiwNCiAgInBvcnQiOiAiODAiLA0KICAiaWQiOiAiODIwNWNkNDctYzFiYy00YjlkLTkzNDEtMDc4OTY4ZWNkYmQ4IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ2di5teS10ZXNsYS5hc2lhIiwNCiAgInBhdGgiOiAiLyIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI4LjIxNy4xNDkuMjgiLA0KICAicG9ydCI6ICI4MCIsDQogICJpZCI6ICI4MjA1Y2Q0Ny1jMWJjLTRiOWQtOTM0MS0wNzg5NjhlY2RiZDgiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInZ2Lm15LXRlc2xhLmFzaWEiLA0KICAicGF0aCI6ICIvIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI4LjIxNy4yNTAuMjIyIiwNCiAgInBvcnQiOiAiODAiLA0KICAiaWQiOiAiODIwNWNkNDctYzFiYy00YjlkLTkzNDEtMDc4OTY4ZWNkYmQ4IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ2di5teS10ZXNsYS5hc2lhIiwNCiAgInBhdGgiOiAiLyIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI4LjIxNy45MS4xMjEiLA0KICAicG9ydCI6ICI4MCIsDQogICJpZCI6ICI4MjA1Y2Q0Ny1jMWJjLTRiOWQtOTM0MS0wNzg5NjhlY2RiZDgiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInZ2Lm15LXRlc2xhLmFzaWEiLA0KICAicGF0aCI6ICIvIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI4LjIxOC4xMjIuNTUiLA0KICAicG9ydCI6ICI4MCIsDQogICJpZCI6ICI4MjA1Y2Q0Ny1jMWJjLTRiOWQtOTM0MS0wNzg5NjhlY2RiZDgiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInZ2Lm15LXRlc2xhLmFzaWEiLA0KICAicGF0aCI6ICIvIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI4LjIxOC4xNDMuMTAiLA0KICAicG9ydCI6ICI4MCIsDQogICJpZCI6ICI4MjA1Y2Q0Ny1jMWJjLTRiOWQtOTM0MS0wNzg5NjhlY2RiZDgiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInZ2Lm15LXRlc2xhLmFzaWEiLA0KICAicGF0aCI6ICIvIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI4LjIxOC4xNzQuMTE4IiwNCiAgInBvcnQiOiAiODAiLA0KICAiaWQiOiAiODIwNWNkNDctYzFiYy00YjlkLTkzNDEtMDc4OTY4ZWNkYmQ4IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ2di5teS10ZXNsYS5hc2lhIiwNCiAgInBhdGgiOiAiLyIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI4LjIxOC4xODEuMTg5IiwNCiAgInBvcnQiOiAiODAiLA0KICAiaWQiOiAiODIwNWNkNDctYzFiYy00YjlkLTkzNDEtMDc4OTY4ZWNkYmQ4IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ2di5teS10ZXNsYS5hc2lhIiwNCiAgInBhdGgiOiAiLyIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI4LjIxOC4xODguMTI5IiwNCiAgInBvcnQiOiAiODAiLA0KICAiaWQiOiAiODIwNWNkNDctYzFiYy00YjlkLTkzNDEtMDc4OTY4ZWNkYmQ4IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ2di5teS10ZXNsYS5hc2lhIiwNCiAgInBhdGgiOiAiLyIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI4LjIxOC4yMDEuNzMiLA0KICAicG9ydCI6ICI4MCIsDQogICJpZCI6ICI4MjA1Y2Q0Ny1jMWJjLTRiOWQtOTM0MS0wNzg5NjhlY2RiZDgiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInZ2Lm15LXRlc2xhLmFzaWEiLA0KICAicGF0aCI6ICIvIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI4LjIxOC4zLjE5OCIsDQogICJwb3J0IjogIjgwIiwNCiAgImlkIjogIjgyMDVjZDQ3LWMxYmMtNGI5ZC05MzQxLTA3ODk2OGVjZGJkOCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAidnYubXktdGVzbGEuYXNpYSIsDQogICJwYXRoIjogIi8iLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI4LjIxOC41Mi4xMTUiLA0KICAicG9ydCI6ICI4MCIsDQogICJpZCI6ICI4MjA1Y2Q0Ny1jMWJjLTRiOWQtOTM0MS0wNzg5NjhlY2RiZDgiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInZ2Lm15LXRlc2xhLmFzaWEiLA0KICAicGF0aCI6ICIvIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI4LjIxOC42NS4yMzciLA0KICAicG9ydCI6ICI4MCIsDQogICJpZCI6ICI4MjA1Y2Q0Ny1jMWJjLTRiOWQtOTM0MS0wNzg5NjhlY2RiZDgiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInZ2Lm15LXRlc2xhLmFzaWEiLA0KICAicGF0aCI6ICIvIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI4LjIxOS4xNDcuNTgiLA0KICAicG9ydCI6ICI4MCIsDQogICJpZCI6ICI4MjA1Y2Q0Ny1jMWJjLTRiOWQtOTM0MS0wNzg5NjhlY2RiZDgiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInZ2Lm15LXRlc2xhLmFzaWEiLA0KICAicGF0aCI6ICIvIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI4LjIxOS4xODkuMTQzIiwNCiAgInBvcnQiOiAiODAiLA0KICAiaWQiOiAiODIwNWNkNDctYzFiYy00YjlkLTkzNDEtMDc4OTY4ZWNkYmQ4IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ2di5teS10ZXNsYS5hc2lhIiwNCiAgInBhdGgiOiAiLyIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI4LjIxOS4yMDEuMjQ1IiwNCiAgInBvcnQiOiAiODAiLA0KICAiaWQiOiAiODIwNWNkNDctYzFiYy00YjlkLTkzNDEtMDc4OTY4ZWNkYmQ4IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ2di5teS10ZXNsYS5hc2lhIiwNCiAgInBhdGgiOiAiLyIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI4LjIxOS40MC4zNyIsDQogICJwb3J0IjogIjgwIiwNCiAgImlkIjogIjgyMDVjZDQ3LWMxYmMtNGI5ZC05MzQxLTA3ODk2OGVjZGJkOCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAidnYubXktdGVzbGEuYXNpYSIsDQogICJwYXRoIjogIi8iLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI4LjIxOS44My43MSIsDQogICJwb3J0IjogIjgwIiwNCiAgImlkIjogIjgyMDVjZDQ3LWMxYmMtNGI5ZC05MzQxLTA3ODk2OGVjZGJkOCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAidnYubXktdGVzbGEuYXNpYSIsDQogICJwYXRoIjogIi8iLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI4LjIyMi4xNjAuMTc2IiwNCiAgInBvcnQiOiAiODAiLA0KICAiaWQiOiAiODIwNWNkNDctYzFiYy00YjlkLTkzNDEtMDc4OTY4ZWNkYmQ4IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ2di5teS10ZXNsYS5hc2lhIiwNCiAgInBhdGgiOiAiLyIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjA4MDIyLWNsb25lIiwNCiAgImFkZCI6ICI4LjIyMi4xNjkuMjIyIiwNCiAgInBvcnQiOiAiODAiLA0KICAiaWQiOiAiODIwNWNkNDctYzFiYy00YjlkLTkzNDEtMDc4OTY4ZWNkYmQ4IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ2di5teS10ZXNsYS5hc2lhIiwNCiAgInBhdGgiOiAiLyIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vless://58406e25-0f89-4f3b-8f89-93537641f126@99.83.209.185:443?encryption=none&security=tls&sni=e130917c-1b58-4136-b2d9-76dc920e0add.add97ee8-0f14-48a3-b2cd-979c56742e64.loseyourip.com&alpn=http%2F1.1&fp=random&allowInsecure=1&type=ws&host=e130917c-1b58-4136-b2d9-76dc920e0add.add97ee8-0f14-48a3-b2cd-979c56742e64.loseyourip.com&path=%2F42ab2ad7.v2raypro1-bvc.pages.dev%2F%3Fproxyip%3Doracle.gitgoogle.com#US%F0%9F%90%B2%E2%84%A2%EF%B8%8F%E3%80%90%E8%AF%B7%E5%8B%BF%E6%B5%8B%E9%80%9F%E3%80%91%20%E5%B7%B2%E5%90%AF%E7%94%A8%E4%B8%B4%E6%97%B6%E5%9F%9F%E5%90%8D%E4%B8%AD%E8%BD%AC%E6%9C%8D%E5%8A%A1%EF%BC%8C%E8%AF%B7%E5%B0%BD%E5%BF%AB%E7%BB%91%E5%AE%9A%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%EF%BC%81
vless://58406e25-0f89-4f3b-8f89-93537641f126@aliyun.2096.us.kg:2096?encryption=none&security=tls&sni=547c921f-c9b1-4d57-bb25-ff5c79749783.a09c5a67-316e-45c6-a051-e6066737fd47.theworkpc.com&alpn=http%2F1.1&fp=random&allowInsecure=1&type=ws&host=547c921f-c9b1-4d57-bb25-ff5c79749783.a09c5a67-316e-45c6-a051-e6066737fd47.theworkpc.com&path=%2F42ab2ad7.v2raypro1-bvc.pages.dev%2F%3Fproxyip%3Doracle.gitgoogle.com#%E8%81%94%E9%80%9A%F0%9F%8C%90%E9%80%9A%E7%9F%A5%F0%9F%8C%90%E9%A2%91%E9%81%93%E2%84%A2%EF%B8%8F%E2%84%A2%EF%B8%8F%E2%84%A2%EF%B8%8F%EF%BC%9At.me%2Fcncomorg%F0%9F%90%B2%E2%84%A2%EF%B8%8F%E3%80%90%E8%AF%B7%E5%8B%BF%E6%B5%8B%E9%80%9F%E3%80%91%20%E5%B7%B2%E5%90%AF%E7%94%A8%E4%B8%B4%E6%97%B6%E5%9F%9F%E5%90%8D%E4%B8%AD%E8%BD%AC%E6%9C%8D%E5%8A%A1%EF%BC%8C%E8%AF%B7%E5%B0%BD%E5%BF%AB%E7%BB%91%E5%AE%9A%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%EF%BC%81
vless://58406e25-0f89-4f3b-8f89-93537641f126@aliyun.2096.us.kg:2096?encryption=none&security=tls&sni=ceb98438-36f6-4f6c-9596-8d0409bbe285.b1e18cfc-f959-4f08-94da-4878c3cd4a5f.mywire.org&alpn=http%2F1.1&fp=random&allowInsecure=1&type=ws&host=ceb98438-36f6-4f6c-9596-8d0409bbe285.b1e18cfc-f959-4f08-94da-4878c3cd4a5f.mywire.org&path=%2F42ab2ad7.v2raypro1-bvc.pages.dev%2F%3Fproxyip%3Doracle.gitgoogle.com#%E5%AE%98%E6%96%B9%F0%9F%8C%90%E4%BC%98%E9%80%89%F0%9F%8C%90%E9%A2%91%E9%81%93%E2%84%A2%EF%B8%8F%E2%84%A2%EF%B8%8F%E2%84%A2%EF%B8%8F%EF%BC%9At.me%2Fcncomorg%F0%9F%90%B2%E2%84%A2%EF%B8%8F%E3%80%90%E8%AF%B7%E5%8B%BF%E6%B5%8B%E9%80%9F%E3%80%91%20%E5%B7%B2%E5%90%AF%E7%94%A8%E4%B8%B4%E6%97%B6%E5%9F%9F%E5%90%8D%E4%B8%AD%E8%BD%AC%E6%9C%8D%E5%8A%A1%EF%BC%8C%E8%AF%B7%E5%B0%BD%E5%BF%AB%E7%BB%91%E5%AE%9A%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%EF%BC%81
vless://98c19d44-cfcb-4bf9-a5d0-f9a6e597cafa@bestcf.onecf.eu.org:2052?encryption=none&security=none&fp=randomized&type=ws&host=m.my-tesla.asia&path=%2F%3Fed%3D2048#515.sqqdeidt.workers.dev-clone
vless://98c19d44-cfcb-4bf9-a5d0-f9a6e597cafa@bestproxy.onecf.eu.org:2052?encryption=none&security=none&fp=randomized&type=ws&host=m.my-tesla.asia&path=%2F%3Fed%3D2048#515.sqqdeidt.workers.dev
vless://98c19d44-cfcb-4bf9-a5d0-f9a6e597cafa@cf.090227.xyz:443?encryption=none&security=tls&fp=randomized&allowInsecure=1&type=ws&host=m.my-tesla.asia&path=%2F%3Fed%3D2048#515.sqqdeidt.workers.dev-clone-clone-clone
vless://3ca22e08-79c0-4fff-9660-574e40e76103@net.my-tesla.asia:443?encryption=none&security=tls&sni=net.my-tesla.asia&allowInsecure=1&type=ws&path=%2Ffgsg66f#cf%20vless0801
vless://3ca22e08-79c0-4fff-9660-574e40e76103@net.my-tesla.asia:443?encryption=none&security=tls&sni=net.my-tesla.asia&allowInsecure=1&type=ws&path=%2Ffgsg66f#cf%20vless

`

let urls = [];
let subconverter = "subapi-loadbalancing.pages.dev"; //在线订阅转换后端，目前使用CM的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件
let subProtocol = 'https';

export default {
	async fetch (request,env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		TG =  env.TG || TG; 
		subconverter = env.SUBAPI || subconverter;
		if( subconverter.includes("http://") ){
			subconverter = subconverter.split("//")[1];
			subProtocol = 'http';
		} else {
			subconverter = subconverter.split("//")[1] || subconverter;
		}
		subconfig = env.SUBCONFIG || subconfig;
		FileName = env.SUBNAME || FileName;
		MainData = env.LINK || MainData;
		if(env.LINKSUB) urls = await ADD(env.LINKSUB);

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0); 
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		//console.log(`${fakeUserID}\n${fakeHostName}`); // 打印fakeID

		let UD = Math.floor(((timestamp - Date.now())/timestamp * total * 1099511627776 )/2);
		total = total * 1099511627776 ;
		let expire= Math.floor(timestamp / 1000) ;
		SUBUpdateTime = env.SUBUPTIME || SUBUpdateTime;

		let 重新汇总所有链接 = await ADD(MainData + '\n' + urls.join('\n'));
		let 自建节点 ="";
		let 订阅链接 ="";
		for (let x of 重新汇总所有链接) {
			if (x.toLowerCase().startsWith('http')) {
				订阅链接 += x + '\n';
			} else {
				自建节点 += x + '\n';
			}
		}
		MainData = 自建节点;
		urls = await ADD(订阅链接);

		if ( !(token == mytoken || token == fakeToken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			const envKey = env.URL302 ? 'URL302' : (env.URL ? 'URL' : null);
			if (envKey) {
				const URLs = await ADD(env[envKey]);
				const URL = URLs[Math.floor(Math.random() * URLs.length)];
				return envKey === 'URL302' ? Response.redirect(URL, 302) : fetch(new Request(URL, request));
			}
			return new Response(await nginx(), { 
				status: 200 ,
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else {
			await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			let 订阅格式 = 'base64';
			if (userAgent.includes('null') || userAgent.includes('subconverter') || userAgent.includes('nekobox') || userAgent.includes(('CF-Workers-SUB').toLowerCase())){
				订阅格式 = 'base64';
			} else if (userAgent.includes('clash') || ( url.searchParams.has('clash') && !userAgent.includes('subconverter'))){
				订阅格式 = 'clash';
			} else if (userAgent.includes('sing-box') || userAgent.includes('singbox') || ( (url.searchParams.has('sb') || url.searchParams.has('singbox')) && !userAgent.includes('subconverter'))){
				订阅格式 = 'singbox';
			} else if (userAgent.includes('surge') || ( url.searchParams.has('surge') && !userAgent.includes('subconverter'))){
				订阅格式 = 'surge';
			}

			let subconverterUrl ;
			let 订阅转换URL = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
			//console.log(订阅转换URL);
			let req_data = MainData;

			// 初始化缓存
			const cache = caches.default;

			let 追加UA = 'v2rayn';
			if (url.searchParams.has('clash')){
				追加UA = 'clash';
			} else if(url.searchParams.has('singbox')){
				追加UA = 'singbox';
			} else if(url.searchParams.has('surge')){
				追加UA = 'surge';
			}
			
			try {
				const responses = await Promise.all(urls.map(async url => {
					const cacheKey = new Request(url);
					
					try {
						// 设置2秒超时
						const controller = new AbortController();
						const timeoutId = setTimeout(() => controller.abort(), 2000);
	
						const response = await fetch(url, {
							method: 'get',
							headers: {
								'Accept': 'text/html,application/xhtml+xml,application/xml;',
								'User-Agent': `${追加UA} cmliu/CF-Workers-SUB ${userAgentHeader}`
							},
							signal: controller.signal
						});
	
						clearTimeout(timeoutId);
	
						if (response.ok) {
							const content = await response.text();
							
							// 请求成功，写入缓存，设置24小时的缓存时间
							const cacheResponse = new Response(content, {
								headers: {
									...response.headers,
									'Cache-Control': `public, max-age=${cacheTTL * 60 * 60}`
								}
							});
							await cache.put(cacheKey, cacheResponse);
							console.log(`更新缓存 ${url}:\n${content.slice(0, 10)}...`);
							if (content.includes('dns') && content.includes('proxies') && content.includes('proxy-groups')) {
								// Clash 配置
								订阅转换URL += "|" + url;
								return ""; // 返回空字符串，因为这种情况下我们不需要内容
							} else if (content.includes('dns') && content.includes('outbounds') && content.includes('inbounds')){
								// Singbox 配置
								订阅转换URL += "|" + url;
								return ""; // 返回空字符串，因为这种情况下我们不需要内容
							} else {
								return content;
							}
						} else {
							throw new Error('请求失败');
						}
					} catch (error) {
						// 请求失败或超时，尝试从缓存读取
						const cachedResponse = await cache.match(cacheKey);
						if (cachedResponse) {
							const cachedContent = await cachedResponse.text();
							console.log(`使用缓存内容 ${url}:\n${cachedContent.slice(0, 10)}...`);
							return cachedResponse.text();
						} else {
							console.log(`无缓存可用 ${url}`);
							return ""; // 缓存中也没有，返回空字符串
						}
					}
				}));	
			
				for (const response of responses) {
					if (response) {
						req_data += base64Decode(response) + '\n';
					}
				}
			
			} catch (error) {
				console.error('处理 URL 时发生错误：', error);
			}

			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			const text = String.fromCharCode.apply(null, encodedData);
			
			//去重
			const uniqueLines = new Set(text.split('\n'));
			const result = [...uniqueLines].join('\n');
			//console.log(result);
			
			const base64Data = btoa(result);

			if (订阅格式 == 'base64' || token == fakeToken){
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			} else if (订阅格式 == 'clash'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=clash&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'singbox'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=singbox&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'surge'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=surge&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			}
			//console.log(订阅转换URL);
			try {
				const subconverterResponse = await fetch(subconverterUrl);
				
				if (!subconverterResponse.ok) {
					return new Response(base64Data ,{
						headers: { 
							"content-type": "text/plain; charset=utf-8",
							"Profile-Update-Interval": `${SUBUpdateTime}`,
							"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
						}
					});
					//throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
				}
				let subconverterContent = await subconverterResponse.text();
				if (订阅格式 == 'clash') subconverterContent =await clashFix(subconverterContent);
				return new Response(subconverterContent, {
					headers: { 
						"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,

					},
				});
			} catch (error) {
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			}
		}
	}
};

async function ADD(envadd) {
	var addtext = envadd.replace(/[	"'|\r\n]+/g, ',').replace(/,+/g, ',');  // 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text ;
}

async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function MD5MD5(text) {
	const encoder = new TextEncoder();
  
	const firstPass = await crypto.subtle.digest('MD5', encoder.encode(text));
	const firstPassArray = Array.from(new Uint8Array(firstPass));
	const firstHex = firstPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	const secondPass = await crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27)));
	const secondPassArray = Array.from(new Uint8Array(secondPass));
	const secondHex = secondPassArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
	return secondHex.toLowerCase();
}

function clashFix(content) {
	if(content.includes('wireguard') && !content.includes('remote-dns-resolve')){
		let lines;
		if (content.includes('\r\n')){
			lines = content.split('\r\n');
		} else {
			lines = content.split('\n');
		}
	
		let result = "";
		for (let line of lines) {
			if (line.includes('type: wireguard')) {
				const 备改内容 = `, mtu: 1280, udp: true`;
				const 正确内容 = `, mtu: 1280, remote-dns-resolve: true, udp: true`;
				result += line.replace(new RegExp(备改内容, 'g'), 正确内容) + '\n';
			} else {
				result += line + '\n';
			}
		}

		content = result;
	}
	return content;
}
