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

# Entendendo o JWT

O resultado final do JWT é dado através da assinatura criptográfica de dois blocos de JSON codificados em [base64](https://pt.wikipedia.org/wiki/Base64) 

Eles são o header e payload. A signature é a junção dos hashes gerados a partir do header e do payload.

# Header

Contém duas propriedades: o tipo do token, que é o JWT e o tipo do algoritmo de shas, como HMAC-SHA256 ou RSA:
```
{
  "alg": "HS256",
  "typ": "JWT"
}
```

# Payload

Contém os dados. Esses dados são declarações sobre uma entidade (geralmente, o usuário):
```
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

# Signature

Para gerar a assinatura, é usado o header e o payload codificados em base64, usando o algoritmo definido no header:
```
import { hmac } from 'bibliotecaDeHmac';

function base64 (string) {
  return Buffer.from(string).toString('base64');
}

const header = JSON.stringify({
  alg: 'HS256',
  type: 'JWT'});

const payload = JSON.stringify({
  sub: '1234567890',
  name: 'John Doe',
  admin: true});

const secret = 'MinhaSenhaMuitoComplexa123';

const assinatura = hmac(`${base64(header)}.${base64(payload)}`, secret);

const token = `${base64(header)}.${base64(payload)}.${base64(assinatura)}`;
```

[Praticando JWT](https://github.com/davidrogger/nodejs-jwt-base-project)

