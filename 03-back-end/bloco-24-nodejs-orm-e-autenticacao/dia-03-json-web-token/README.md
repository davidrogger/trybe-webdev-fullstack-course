anotações pessoais do dia...

# JWT

Json Web Token, técnologia inteligente de obter a identidade de um usuário com segurança.

1. - Não utiliza banco de dados: Usar o JWT implica menos consultas ao banco de dados, o que gera tempo de respota menor. E redução de custo em casos de serviços pagos que cobram por consulta.
2. - Mais simples de usar (se você for cuidadoso) em casos de projetos sem uma arquitetura para administrar as sessões dos clientes e os princípios básicos de segurança não forem claros, o desenvolviemtno usando JWT será bem rápido, considerando o uso de algumas biblitecas existentes.
3. - Utilizado em vários serviços: Você pode ter um servidor de autenticação que lida com o login/cadastro para gerar o token para pessoa usuário. A partir daí, você pode transitar seu token entre várias aplicações, sendo necessário logar apenas uma vez e logo depois estar logado em todas as outras aplicações do seu sistema.

# Autenticação e Autorização

Autenticação é usada para atestar que alguém é quem diz ser, verificando sua identidade, comumente feita por meio de informações confidenciais como email e senha.
Autorização verifica as permissões de uma pessoa para acessar ou executar determinadas operações.

# HMAC

É um algoritmo para gerar um MAC (código de autenticação de mensagem) criptografado através de algum algoritmo de hash (algoritmos que codigicam mensagens), como md5, sh1 ou sha256, a partir de uma chave secreta (senha) e de uma mensagem qualquer.

Fóruma do HMAC é a seguinte:
```
HMAC(K, m) = hash(K1 + hash(K2 + m))
```

- K é a chave secreta;
- m é a mensagem;
- hash é a função de hash escolhida (md5, sha1 etc);
- K1 e K2 são chaves secretas derivadas da chave original K;
- + é a operação de concatenação de strings.

