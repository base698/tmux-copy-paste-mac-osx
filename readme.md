# tmux copy and paste on OSX

Instead of using reattach-user-space I built a simple way to do it with an netcat on loop running in the background that's launched on bootup, or you can just run it before running tmux.  Server runs on port 5482 and port 5483.  

## Do these once
Put ```copyon.sh``` in ```~/bin```

Add the following to ```~/.tmux.conf```

```sh
unbind p
bind -t vi-copy 'v' begin-selection
bind -t vi-copy 'y' copy-pipe 'nc localhost 5682'
bind p run-shell 'nc localhost 5683; nc localhost 5683 | tmux load-buffer -' \; paste-buffer;
```

##Now run:
```sh
copyon.sh
tmux 
```

You now have interop with copy and paste between tmux and OSX.
