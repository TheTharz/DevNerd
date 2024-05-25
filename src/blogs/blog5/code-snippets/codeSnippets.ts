export const codeSnippetServer = `sudo apt install openssh-server`;
export const codeSnippetStatus = `sudo systemctl status ssh`;
export const codeSnippetActive = `sudo systemctl enable ssh --now`;
export const codeSnippetFirewall = `sudo ufw status`;
export const codeSnippetOpen = `sudo lsof -i -P -n | grep LISTEN`;
export const codeSnippetAllow = `sudo ufw allow ssh`;
export const codeSnippetVerbose = `sudo ufw status verbose`;
export const codeSnippetTest = `ssh -p 2222 username_of_guest_machine@localhost`;
