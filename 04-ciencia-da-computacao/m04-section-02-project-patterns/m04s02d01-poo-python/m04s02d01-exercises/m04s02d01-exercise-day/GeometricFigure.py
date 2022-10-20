from abc import ABC, abstractmethod


class GeometricFigure(ABC):
    @abstractmethod
    def area():
        raise NotImplementedError

    @abstractmethod
    def perimeter():
        raise NotImplementedError
