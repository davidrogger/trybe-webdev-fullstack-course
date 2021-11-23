anotações pessoais.
# BLOCO 02 - Git & GitHub :hourglass_flowing_sand:
Arquivos criados para teste, e aprendizado de como o git & github funciona.

### Git

> É o mecânismo de controle de versões.(forma de versionar arquivos, criar versões).

### GitHub

>Forma de deixar visível e distribuir para outras pessoas seu repositório. não há necessidade de usa-lo essa ferramenta em especifico, porém como é uma ferramenta já usada por diversas pessoas, conta com diversas ferramenta para auxiliar no Git.

#### Comandos usados no bloco 2.1:

1. instalação do git no terminal linux: `sudo apt-get install git-all`
2. configurar identidade com nome e endereço de e-mail:
```
git config --global user.name "Seu nome"
git config --global user.e-mail seuemail@exemplo.br
```
3. Comando para definir o editor do `.gitconfig`, como o *VS Code* que é o editor que será usado ao longo do curso: `git config --global core.editor "code --wait"`
4. Comando para verificar a vers&atilde;o: `git --version`
5. Comanda mostra uma listagem das configurações no .gitconfig: `git config --list`
6. Comando para criar um chave SSH (para autentica&ccedil;&atilde;o no terminal, sem a necessidade de digitar usu&aacute;rio e senha a cada comando): `ssh-keygen -t rsa -b 4096 -C "seuemail@exemplo.br"`(usar o mesmo e-mail do github) durante a instala&ccedil;&atilde;o é apresentado a localiza&ccedil;&atilde;o onde será salvo a chave, &eacute; poss&itilde;vel modificar essa localiza&ccedil;&atilde;o.
7. Comando para adicionar o SSH(certificado/autentica&ccedil;&atilde;o) ao shh-agent(porteiro), primeiro inicie o ssh-agent com o comando `eval "$(ssh-agent -s)"` seguindo do comando para adicionar a chave `ssh-add ~/.ssh/id_rsa`(*ceritifique-se de que esse é o caminho que foi salvo sua chave*).
8. Para o funcionamento do SSH tamb&eacute;m &eacute; necess&aacute;rio adicionar a chave SSH em no seu perfil do git hub, você deve copiar o conteúdo de sua chave publica dentro do arquivo `id_rsa.pub`, acessar settings, e procurar por SSH and GPG Keys, e adiconar em New SSH Key, a chave dando um nome de referencia pessoal.
9. Há a possibilidade de copiar o texto de um determinado arquivo, via terminal usando o xclip, comandos usados `sudo apt-get install xclip` e para copiar `xclip -sel clip < caminho do arquivo`

#### Comandos ao iniciar um repositório

Sempre que for criado um repositório o proprio github, vai aprensetar como iniciar a comunicação local com a remota

##### Para repositório novos, sem informação:

1. `git init` Comando para indicar que aquela pasta será a posta sincronizada
2. `git add README.md` Antes de fazer esse comando você deve criar o arquivo README.md, para adiciona-lo.
3. `git commit -m "First commit"` Seu primeiro envio de dados para estabelecer uma conexão
4. `git branch -M main` comando para alterar o nome da sua branch principal para main existe um comando para padronizar `git config --global init.defaultBranch main` esse comando faz com que toda branch ja seja criada ao inves de master se o no nome main(ou qualquer outro nome que você deseje).
5. `git remote add origin git@github.com:USERNAME/NOME_REPO.git` Aqui direcionamentos onde fica o repositório remoto, gerado no canto superior direito dentro da plaforma do github, normalmente no comando USERNAME, terá o nome do dono do repositório, e após a barra o nome do repositório.
6. `git push -u origin main` A primeira vez, que realizar o envio dos dados é necessário defirnir o upstream da comunicação usando o `-u` somente na primeira vez, depois pode ser usando apenas o comando `git push`
7. `git remote -v` Comando para verificar a comunicação remota.
8. Esse link possui diversos outros comandos úteis, https://gist.github.com/leocomelli/2545add34e4fec21ec16

##### Repositório existentes

`git clone urlDoSeuRepositório` 
Para estabelecer uma conexao e copiar o conteudo de um repositório ja existente é usado esse comando.

##### Alterando nome da branch principal

Quando realizado a alteração do branch principal pelo navegador, para sincronia no git local, usando branch main como exemplo

```
git branch -m master main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a
```
