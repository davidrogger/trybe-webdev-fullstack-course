# Exercício 6: Você está trabalhando em um sistema de
# orçamentos que faz cálculos de impostos e precisa ser
# refatorado para adicionar novos, que no caso são o
# PIS (0,65%) e o COFINS (3%). Mas durante a refatoração,
# você se depara com uma má prática de código. Encontre essa má
# prática e a solucione em conjunto com a refatoração.

from abc import ABC, abstractmethod


class ImpostoStrategy(ABC):
    @abstractmethod
    def calcular(self, valor):
        raise NotImplementedError


class IssImposto(ImpostoStrategy):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.1


class IcmsImposto(ImpostoStrategy):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.06


class PisImposto(ImpostoStrategy):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.0065


class ConfinsImposto(ImpostoStrategy):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.03


class Orcamento:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self, imposto: ImpostoStrategy):
        return imposto.calcular(self.valor)


orcamento = Orcamento(1000)
print(f"ISS: {orcamento.calcular_imposto(IssImposto)}")
print(f"ICMS: {orcamento.calcular_imposto(IcmsImposto)}")
print(f"PIS: {orcamento.calcular_imposto(PisImposto)}")
print(f"CONFINS: {orcamento.calcular_imposto(ConfinsImposto)}")
