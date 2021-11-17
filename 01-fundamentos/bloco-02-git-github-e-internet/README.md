# BLOCO 02 - Git & GitHub :hourglass_flowing_sand:
Arquivos criados para teste, e aprendizado de como o git & github funciona.

### Git

> É o mecânismo de controle de versões.(forma de versionar arquivos, criar versões).

### GitHub

>Forma de deixar visível e distribuir para outras pessoas seu repositório. não há necessidade de usa-lo essa ferramenta em especifico, porém como é uma ferramenta já usada por diversas pessoas, conta com diversas ferramenta para auxiliar no Git.

#### Comandos usados:

1. instalação do git no terminal linux: `sudo apt-get install git-all`
2. configurar identidade com nome e endereço de e-mail:
```
git config --global user.name "Seu nome"
git config --global user.e-mail seuemail@exemplo.br
```
3. Comando para definir o edito do `.gitconfig`, como o *VS Code* que é o editor que será usado ao longo do curso: `git config --global core.editor "code --wait"`
4. Comando para verificar a vers&atilde;o: `git --version`
5. Comanda mostra uma listagem das configurações no .gitconfig: `git config --list`
6. Comando para criar um chave SSH (para autentica&ccedil;&atilde;o no terminal, sem a necessidade de digitar usu&aacute;rio e senha a cada comando): `ssh-keygen -t rsa -b 4096 -C "seuemail@exemplo.br"`(usar o mesmo e-mail do github) durante a instala&ccedil;&atilde;o é apresentado a localiza&ccedil;&atilde;o onde será salvo a chave, &eacute; poss&itilde;vel modificar essa localiza&ccedil;&atilde;o.
7. Comando para adicionar o SSH(certificado/autentica&ccedil;&atilde;o) ao shh-agent(porteiro), primeiro inicie o ssh-agent com o comando `eval "$(ssh-agent -s)"` seguindo do comando para adicionar a chave `ssh-add ~/.ssh/id_rsa`(*ceritifique-se de que esse é o caminho que foi salvo sua chave*).
8. Para o funcionamento do SSH tamb&eacute;m &eacute; necess&aacute;rio
