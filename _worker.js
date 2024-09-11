
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
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlVTXHUwMDNFXHU1MkEwXHU2MkZGXHU1OTI3IFx1NTkxQVx1NEYyNlx1NTkxQSIsDQogICJhZGQiOiAiNjkuODQuMTgyLjE2NSIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICIwNTY0MWNmNS01OGQyLTRiYTQtYTlmMS1iM2NkYTBiMWZiMWQiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogImU4Yjk5Y2JlLTllYmQtNGEyMC1hNDk3LTM4ZjRiMjlmMmM5OC44M2IxMTc4Mi1lY2FlLTQxMWYtOTBjMy0yYTAxYmIzMzI2MGEuZ2xlZXplLmNvbSIsDQogICJwYXRoIjogIi9vYmRpaS5jZmQ6NDQzL2xpbmt3cyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICJlOGI5OWNiZS05ZWJkLTRhMjAtYTQ5Ny0zOGY0YjI5ZjJjOTguODNiMTE3ODItZWNhZS00MTFmLTkwYzMtMmEwMWJiMzMyNjBhLmdsZWV6ZS5jb20iLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vless://3ca22e08-79c0-4fff-9660-574e40e76103@99.83.209.185:443?encryption=none&security=tls&sni=net.my-tesla.asia&allowInsecure=1&type=ws&host=net.my-tesla.asia&path=%2Ffgsg66f#Goumai-107.172.94.14-45k
vless://58406e25-0f89-4f3b-8f89-93537641f126@dns.5712360.xyz:2096?encryption=none&security=tls&sni=547c921f-c9b1-4d57-bb25-ff5c79749783.a09c5a67-316e-45c6-a051-e6066737fd47.theworkpc.com&allowInsecure=1&type=ws&host=547c921f-c9b1-4d57-bb25-ff5c79749783.a09c5a67-316e-45c6-a051-e6066737fd47.theworkpc.com&path=%2F42ab2ad7.v2raypro1-bvc.pages.dev%2F%3Fproxyip%3Doracle.gitgoogle.com#%E8%81%94%E9%80%9A%F0%9F%8C%90%E9%80%9A%E7%9F%A5%F0%9F%8C%90%E9%A2%91%E9%81%93%E2%84%A2%EF%B8%8F%E2%84%A2%EF%B8%8F%E2%84%A2%EF%B8%8F%EF%BC%9A15k
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlVTXHUwMDNFXHU1MkEwXHU2MkZGXHU1OTI3IFx1NTkxQVx1NEYyNlx1NTkxQSIsDQogICJhZGQiOiAiMTk4LjYyLjYyLjEwIiwNCiAgInBvcnQiOiAiNDQzIiwNCiAgImlkIjogIjA1NjQxY2Y1LTU4ZDItNGJhNC1hOWYxLWIzY2RhMGIxZmIxZCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiZThiOTljYmUtOWViZC00YTIwLWE0OTctMzhmNGIyOWYyYzk4LjgzYjExNzgyLWVjYWUtNDExZi05MGMzLTJhMDFiYjMzMjYwYS5nbGVlemUuY29tIiwNCiAgInBhdGgiOiAiL29iZGlpLmNmZDo0NDMvbGlua3dzIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogImU4Yjk5Y2JlLTllYmQtNGEyMC1hNDk3LTM4ZjRiMjlmMmM5OC44M2IxMTc4Mi1lY2FlLTQxMWYtOTBjMy0yYTAxYmIzMzI2MGEuZ2xlZXplLmNvbSIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vless://58406e25-0f89-4f3b-8f89-93537641f126@99.83.209.185:443?encryption=none&security=tls&sni=e130917c-1b58-4136-b2d9-76dc920e0add.add97ee8-0f14-48a3-b2cd-979c56742e64.loseyourip.com&allowInsecure=1&type=ws&host=e130917c-1b58-4136-b2d9-76dc920e0add.add97ee8-0f14-48a3-b2cd-979c56742e64.loseyourip.com&path=%2F42ab2ad7.v2raypro1-bvc.pages.dev%2F%3Fproxyip%3Doracle.gitgoogle.com#US%F0%9F%90%B2%E2%84%A2%EF%B8%8F%E3%80%90%E8%AF%B7%E5%8B%BF%E6%B5%8B%E9%80%9F%E3%80%91%2B58k
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjE5MC1cdUQ4M0NcdURERkFcdUQ4M0NcdURERjggICAtMTdrIiwNCiAgImFkZCI6ICJmYmkuZ292IiwNCiAgInBvcnQiOiAiMjA4NiIsDQogICJpZCI6ICJlOWUzY2MxMy1kYjQ4LTRjYzEtOGMyNC03NjI2NDM5YTUzMzkiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogImlwMi4xNDU3MjMwLnh5eiIsDQogICJwYXRoIjogImdpdGh1Yi5jb20vQWx2aW45OTk5IiwNCiAgInRscyI6ICIiLA0KICAic25pIjogImlwMi4xNDU3MjMwLnh5eiIsDQogICJhbHBuIjogImgzLGgyLGh0dHAvMS4xIiwNCiAgImZwIjogImVkZ2UiDQp9
vless://3ca22e08-79c0-4fff-9660-574e40e76103@proxy.1661.us:443?encryption=none&security=tls&sni=net.my-tesla.asia&allowInsecure=1&type=ws&host=net.my-tesla.asia&path=%2Ffgsg66f#%F0%9F%87%BA%F0%9F%87%B8_US_4
vless://0050c022-8dae-42b6-9435-895654a42f97@[2606:4700:3036:e8:9c1c:9e62:45c6:188]:443?encryption=none&security=tls&sni=TG.CMLiussss.ooguy.com&alpn=h3&fp=random&allowInsecure=1&type=ws&host=TG.CMLiussss.ooguy.com&path=%2F%3Fproxyip%3Dproxyip.oracle.fxxk.dedyn.io#CMCC-IPV6
vless://bc2cd8f5-4c17-4d33-bdf6-4e4dc56983f2@99.83.209.185:443?encryption=none&security=tls&sni=net.10125800.xyz&allowInsecure=1&type=ws&host=net.10125800.xyz&path=%2Fbc2cd8f5#Amazon-54.169.94.9-35k
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlVTXHUwMDNFXHU1MkEwXHU2MkZGXHU1OTI3IFx1NTkxQVx1NEYyNlx1NTkxQSIsDQogICJhZGQiOiAiNjkuODQuMTgyLjQxIiwNCiAgInBvcnQiOiAiNDQzIiwNCiAgImlkIjogIjA1NjQxY2Y1LTU4ZDItNGJhNC1hOWYxLWIzY2RhMGIxZmIxZCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiZThiOTljYmUtOWViZC00YTIwLWE0OTctMzhmNGIyOWYyYzk4LjgzYjExNzgyLWVjYWUtNDExZi05MGMzLTJhMDFiYjMzMjYwYS5nbGVlemUuY29tIiwNCiAgInBhdGgiOiAiL29iZGlpLmNmZDo0NDMvbGlua3dzIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogImU4Yjk5Y2JlLTllYmQtNGEyMC1hNDk3LTM4ZjRiMjlmMmM5OC44M2IxMTc4Mi1lY2FlLTQxMWYtOTBjMy0yYTAxYmIzMzI2MGEuZ2xlZXplLmNvbSIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkhLXHUwMDNFXHU1MkEwXHU2MkZGXHU1OTI3IFx1NTkxQVx1NEYyNlx1NTkxQSIsDQogICJhZGQiOiAiNDIuOTguMTY3LjIyOSIsDQogICJwb3J0IjogIjEyMzQ1IiwNCiAgImlkIjogIjA1NjQxY2Y1LTU4ZDItNGJhNC1hOWYxLWIzY2RhMGIxZmIxZCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiZThiOTljYmUtOWViZC00YTIwLWE0OTctMzhmNGIyOWYyYzk4LjgzYjExNzgyLWVjYWUtNDExZi05MGMzLTJhMDFiYjMzMjYwYS5nbGVlemUuY29tIiwNCiAgInBhdGgiOiAiL29iZGlpLmNmZDo0NDMvbGlua3dzIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogImU4Yjk5Y2JlLTllYmQtNGEyMC1hNDk3LTM4ZjRiMjlmMmM5OC44M2IxMTc4Mi1lY2FlLTQxMWYtOTBjMy0yYTAxYmIzMzI2MGEuZ2xlZXplLmNvbSIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vless://3ca22e08-79c0-4fff-9660-574e40e76103@proxy.1661.us:443?encryption=none&security=tls&sni=net.my-tesla.asia&allowInsecure=1&type=ws&host=net.my-tesla.asia&path=%2Ffgsg66f#Goumai-107.172.94.14-45k
vless://3ca22e08-79c0-4fff-9660-574e40e76103@141.144.197.111:443?encryption=none&security=tls&sni=net.my-tesla.asia&allowInsecure=1&type=ws&host=net.my-tesla.asia&path=%2Ffgsg66f#%F0%9F%87%AC%F0%9F%87%A7_GB_8
vless://3ca22e08-79c0-4fff-9660-574e40e76103@proxy.1661.us:443?encryption=none&security=tls&sni=net.my-tesla.asia&allowInsecure=1&type=ws&host=net.my-tesla.asia&path=%2Ffgsg66f#%F0%9F%87%BA%F0%9F%87%B8_US_7-clone
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlVTXHUwMDNFXHU1MkEwXHU2MkZGXHU1OTI3IFx1NTkxQVx1NEYyNlx1NTkxQSIsDQogICJhZGQiOiAiNjkuODQuMTgyLjEzMSIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICIwNTY0MWNmNS01OGQyLTRiYTQtYTlmMS1iM2NkYTBiMWZiMWQiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogImU4Yjk5Y2JlLTllYmQtNGEyMC1hNDk3LTM4ZjRiMjlmMmM5OC44M2IxMTc4Mi1lY2FlLTQxMWYtOTBjMy0yYTAxYmIzMzI2MGEuZ2xlZXplLmNvbSIsDQogICJwYXRoIjogIi9vYmRpaS5jZmQ6NDQzL2xpbmt3cyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICJlOGI5OWNiZS05ZWJkLTRhMjAtYTQ5Ny0zOGY0YjI5ZjJjOTguODNiMTE3ODItZWNhZS00MTFmLTkwYzMtMmEwMWJiMzMyNjBhLmdsZWV6ZS5jb20iLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vless://0050c022-8dae-42b6-9435-895654a42f97@173.249.202.215:8086?encryption=none&security=tls&sni=TG.CMLiussss.ooguy.com&alpn=h3&fp=random&allowInsecure=1&type=ws&host=TG.CMLiussss.ooguy.com&path=%2F%3Fproxyip%3Dproxyip.us.fxxk.dedyn.io#US
vless://3ca22e08-79c0-4fff-9660-574e40e76103@net.my-tesla.asia:443?encryption=none&security=tls&sni=net.my-tesla.asia&allowInsecure=1&type=ws&path=%2Ffgsg66f#Goumai-107.172.94.14-45k
vless://3e654d3e-5e82-41d5-c372-1b8d2efca9e7@107.172.94.14:80?encryption=none&security=none&type=ws&path=%2F#Goumai-107.172.94.14-68k
vless://58406e25-0f89-4f3b-8f89-93537641f126@75.2.32.4:443?encryption=none&security=tls&sni=68123106-3e43-4958-b75a-b06e81eabf79.50d88e28-a870-497d-bf87-c20fb6802871.camdvr.org&allowInsecure=1&type=ws&host=68123106-3e43-4958-b75a-b06e81eabf79.50d88e28-a870-497d-bf87-c20fb6802871.camdvr.org&path=%2F42ab2ad7.v2raypro1-bvc.pages.dev%2F%3Fproxyip%3Doracle.gitgoogle.com#US%F0%9F%90%B2%E2%84%A2%EF%B8%8F%E3%80%90%E8%AF%B7%E5%8B%BF%E6%B5%8B%E9%80%9F%E3%80%9148k
trojan://auto@[2606:4700:3036:497f:483e:cd9f:88bf:6b52]:443?security=tls&sni=tg.cmliussss.us.kg&alpn=h3&fp=randomized&allowInsecure=1&type=ws&host=tg.cmliussss.us.kg&path=%2F%3Fed%3D2560#CT
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlVTXHUwMDNFXHU1MkEwXHU2MkZGXHU1OTI3IFx1NTkxQVx1NEYyNlx1NTkxQSIsDQogICJhZGQiOiAiNDMuMTUzLjEwMy4yMDMiLA0KICAicG9ydCI6ICIzODQ1NCIsDQogICJpZCI6ICIwNTY0MWNmNS01OGQyLTRiYTQtYTlmMS1iM2NkYTBiMWZiMWQiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogImU4Yjk5Y2JlLTllYmQtNGEyMC1hNDk3LTM4ZjRiMjlmMmM5OC44M2IxMTc4Mi1lY2FlLTQxMWYtOTBjMy0yYTAxYmIzMzI2MGEuZ2xlZXplLmNvbSIsDQogICJwYXRoIjogIi9vYmRpaS5jZmQ6NDQzL2xpbmt3cyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICJlOGI5OWNiZS05ZWJkLTRhMjAtYTQ5Ny0zOGY0YjI5ZjJjOTguODNiMTE3ODItZWNhZS00MTFmLTkwYzMtMmEwMWJiMzMyNjBhLmdsZWV6ZS5jb20iLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
trojan://auto@42.98.167.229:12345?security=tls&sni=tg.cmliussss.us.kg&alpn=h3&fp=randomized&allowInsecure=1&type=ws&host=tg.cmliussss.us.kg&path=%2F%3Fed%3D2560#HK
vless://0050c022-8dae-42b6-9435-895654a42f97@[2606:4700:3036:49ae:f961:a41f:186a:378c]:443?encryption=none&security=tls&sni=TG.CMLiussss.ooguy.com&alpn=h3&fp=random&allowInsecure=1&type=ws&host=TG.CMLiussss.ooguy.com&path=%2F%3Fproxyip%3Dproxyip.oracle.fxxk.dedyn.io#CMCC-IPV6
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlVTXHUwMDNFXHU1MkEwXHU2MkZGXHU1OTI3IFx1NTkxQVx1NEYyNlx1NTkxQSIsDQogICJhZGQiOiAiMTk4LjYyLjYyLjE4NiIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICIwNTY0MWNmNS01OGQyLTRiYTQtYTlmMS1iM2NkYTBiMWZiMWQiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogImU4Yjk5Y2JlLTllYmQtNGEyMC1hNDk3LTM4ZjRiMjlmMmM5OC44M2IxMTc4Mi1lY2FlLTQxMWYtOTBjMy0yYTAxYmIzMzI2MGEuZ2xlZXplLmNvbSIsDQogICJwYXRoIjogIi9vYmRpaS5jZmQ6NDQzL2xpbmt3cyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICJlOGI5OWNiZS05ZWJkLTRhMjAtYTQ5Ny0zOGY0YjI5ZjJjOTguODNiMTE3ODItZWNhZS00MTFmLTkwYzMtMmEwMWJiMzMyNjBhLmdsZWV6ZS5jb20iLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vless://0050c022-8dae-42b6-9435-895654a42f97@14.39.254.65:50000?encryption=none&security=tls&sni=TG.CMLiussss.ooguy.com&alpn=h3&fp=random&allowInsecure=1&type=ws&host=TG.CMLiussss.ooguy.com&path=%2F%3Fproxyip%3Dproxyip.kr.fxxk.dedyn.io#KR
vless://afd04975-eb14-4a19-9f79-7775219c9e6e@cfip.xxxxxxxx.tk:443?encryption=none&security=tls&sni=cf807.5712360.xyz&fp=randomized&allowInsecure=1&type=ws&host=cf807.5712360.xyz&path=%2F%3Fed%3D2048#cf807.5712360.xyz-clone-clone
vless://afd04975-eb14-4a19-9f79-7775219c9e6e@proxy.1661.us:443?encryption=none&security=tls&sni=cf807.5712360.xyz&fp=randomized&allowInsecure=1&type=ws&host=cf807.5712360.xyz&path=%2F%3Fed%3D2048#cf807.5712360.xyz-clone
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJFTEFZLTEwNC4yMC4yNS4xNDYtMDQyNSIsDQogICJhZGQiOiAiMTA0LjIwLjI1LjE0NiIsDQogICJwb3J0IjogIjIwODYiLA0KICAiaWQiOiAiZTllM2NjMTMtZGI0OC00Y2MxLThjMjQtNzYyNjQzOWE1MzM5IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogImF1dG8iLA0KICAiaG9zdCI6ICJpcDIuMTQ1NzIzMC54eXoiLA0KICAicGF0aCI6ICJnaXRodWIuY29tL0FsdmluOTk5OSIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInVzMDEiLA0KICAiYWRkIjogInh1aS4xMDEyNTgwMC54eXoiLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiNzFiMzJjZjUtMDcwZS00ZmYzLWQ0NjktMzc1NDI2NmYxMzVjIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ4dWkuMTAxMjU4MDAueHl6IiwNCiAgInBhdGgiOiAiLzcxYjMyY2Y1IiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInVzMDMiLA0KICAiYWRkIjogInh1aS4xMDEyNTgwMC54eXoiLA0KICAicG9ydCI6ICI4NDQzIiwNCiAgImlkIjogIjc1MjMyNjQ0LTBlZWEtNDI1OS1hYTdlLWU3OWQ0ZDZhMTcyYiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAieHVpLjEwMTI1ODAwLnh5eiIsDQogICJwYXRoIjogIi83NTIzMjY0NCIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInVzMDMtY2xvbmUiLA0KICAiYWRkIjogImNmLjA5MDIyNy54eXoiLA0KICAicG9ydCI6ICI4NDQzIiwNCiAgImlkIjogIjc1MjMyNjQ0LTBlZWEtNDI1OS1hYTdlLWU3OWQ0ZDZhMTcyYiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAieHVpLjEwMTI1ODAwLnh5eiIsDQogICJwYXRoIjogIi83NTIzMjY0NCIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInVzMDMtY2xvbmUtY2xvbmUiLA0KICAiYWRkIjogImNtY2MuMDkwMjI3Lnh5eiIsDQogICJwb3J0IjogIjg0NDMiLA0KICAiaWQiOiAiNzUyMzI2NDQtMGVlYS00MjU5LWFhN2UtZTc5ZDRkNmExNzJiIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ4dWkuMTAxMjU4MDAueHl6IiwNCiAgInBhdGgiOiAiLzc1MjMyNjQ0IiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInVzMDEtY2xvbmUiLA0KICAiYWRkIjogImNmLjA5MDIyNy54eXoiLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiNzFiMzJjZjUtMDcwZS00ZmYzLWQ0NjktMzc1NDI2NmYxMzVjIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ4dWkuMTAxMjU4MDAueHl6IiwNCiAgInBhdGgiOiAiLzcxYjMyY2Y1IiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9

https://3k.fxxk.dedyn.io/auto
https://3k.fxxk.dedyn.io/sub
https://vless.fxxk.dedyn.io/auto
https://vmess.fxxk.dedyn.io/auto
https://moistr.freenods.sbs/mianfei
https://sub.kaiche.tk/?token=auto
http://allsub.king361.cf
https://yusub.yutian81.top
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
