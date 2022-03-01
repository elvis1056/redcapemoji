# zsh: command not found 解決辦法

## 解決辦法與過程

看你是使用哪一種的終端機

> 依據終端機的不同，來找到啟動終端機前的設定檔

以下目錄，mac 為範例 ( 使用者的家目錄當中的隱藏檔案 )

在 ~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc

檢查是否有設定好要執行的指令？

```sh

export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

```

#

假使檔案中已經有了就不需要另外儲存後重啟執行

可能會是其他問題

如果沒有的話那就添加上面的指令吧

存檔後重行執行這隻檔案，我把它全部列出來友善複製

( 根據你開的終端機不同要執行不同的 )

```javascript

source ~/.bash_profile

source ~/.zshrc

source ~/.profile

source ~/.bashrc

```

#

應該這樣就不會再爆錯了

#

---

#

參考文章

[https://blog.csdn.net/Android_MSK/article/details/115693175](https://blog.csdn.net/Android_MSK/article/details/115693175)
