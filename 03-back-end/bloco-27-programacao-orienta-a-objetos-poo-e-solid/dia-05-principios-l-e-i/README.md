anotações do dia...

# Livosk Substituition Principle

- A ideia principal é que você deve manter a assinatura dos métodos das subclasse idênticas a da superclasse.

- Os métodos implementados nas subclasse sdevem possuir a mesma assinatura e a mesma semântica, ou seja, devem fazer a mesma coisa. É importante ressaltar isso, porque você pode manter a assinatura, mas utilizar os dados para fazer algo complemente diferente, o que semanticamente quebra o princípio.

- As validações dos dados necessários para o correto funcionamento do método criado na subclasse não devem ser mais estritas.
