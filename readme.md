# tmux copy and paste on OSX

Instead of using reattach-user-space I built a simple way to do it with an http server running in the background that's launched on bootup.  Server runs on port 5482.  

## Do these once
Put pbcopy.js in ```~/bin```

Add ```alias copyon="nohup node ~/bin/pbcopy  2>&1 > /tmp/copy &"``` to .bash_profile

Add the following to ~/.tmux.conf
```sh
bind p run-shell 'curl localhost:5482 | tmux load-buffer -' \; paste-buffer
bind -t vi-copy 'v' begin-selection 
bind -t vi-copy 'y' copy-pipe 'tmux save-buffer - | curl -d @- localhost:5482 > /dev/null'
```

##Now run:
```sh
copyon
tmux 
```

You now have interop with copy and paste between tmux and OSX.
